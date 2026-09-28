/**
 * Facebook feed worker for Muslim Medical Mission.
 *
 * Reads the latest posts from a Facebook profile or page via the Graph API and
 * returns them already projected into the exact shape the site's social-feed
 * cards render (see `SocialCard` in src/data/socialFeeds.ts).
 *
 * Secrets (set with `wrangler secret put`):
 *   FB_ACCESS_TOKEN — a User Access Token (with `user_posts`) for profile mode,
 *                     or a Page Access Token (with `pages_read_engagement`) for
 *                     page mode.
 *
 * Vars (in wrangler.jsonc):
 *   FB_FEED_MODE — "profile" (reads /me/posts) or "page" (reads /{id}/feed).
 *   FB_PAGE_ID   — the page id or username, only used in "page" mode.
 */

interface Env {
  FB_FEED_MODE: string;
  FB_PAGE_ID: string;
  FB_ACCESS_TOKEN: string;
}

type FbPost = {
  id: string;
  message?: string;
  story?: string;
  created_time?: string;
  full_picture?: string;
  permalink_url?: string;
};

type FbFeedResponse = {
  data?: FbPost[];
};

type FbMeResponse = {
  id?: string;
  name?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, max-age=300",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function tags(text: string) {
  return text.match(/#[\p{L}\d_]+/gu) ?? [];
}

function relativeTime(date: string) {
  const elapsed = Math.max(0, Date.now() - new Date(date).getTime());
  const minutes = Math.floor(elapsed / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
    if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "/feed") {
      return json({ error: "Not found" }, 404);
    }
    if (!env.FB_ACCESS_TOKEN) return json({ error: "Facebook API is not configured" }, 503);

    try {
      const mode = env.FB_FEED_MODE || "profile";
      const fields = "message,story,created_time,full_picture,permalink_url";

      // Resolve the author name (and id) for the profile/account being read.
      let authorName = "Muslim Medical Mission";
      let authorHandle = "@MMMPakOfficial";
      let authorUrl = "https://facebook.com/MMMPakOfficial";

      const meResponse = await fetch(
        `https://graph.facebook.com/v21.0/me?fields=id,name&access_token=${encodeURIComponent(env.FB_ACCESS_TOKEN)}`,
      );
      const meText = await meResponse.text();
      console.log("FB /me raw", meResponse.status, meText);
      if (meResponse.ok) {
        const me = JSON.parse(meText) as FbMeResponse;
        if (me.name) authorName = me.name;
        if (me.id) {
          authorHandle = `@${me.id}`;
          authorUrl = `https://facebook.com/${me.id}`;
        }
      }

      // Log the token's granted permissions for diagnosis.
      const permResponse = await fetch(
        `https://graph.facebook.com/v21.0/me/permissions?access_token=${encodeURIComponent(env.FB_ACCESS_TOKEN)}`,
      );
      const permText = await permResponse.text();
      console.log("FB /me/permissions raw", permResponse.status, permText);

      const apiUrl =
        mode === "page"
          ? `https://graph.facebook.com/v21.0/${encodeURIComponent(env.FB_PAGE_ID || "MMMPakOfficial")}/feed` +
            `?fields=${encodeURIComponent(fields)}&limit=10&access_token=${encodeURIComponent(env.FB_ACCESS_TOKEN)}`
          : `https://graph.facebook.com/v21.0/me/posts` +
            `?fields=${encodeURIComponent(fields)}&limit=10&access_token=${encodeURIComponent(env.FB_ACCESS_TOKEN)}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        const body = await response.text();
        console.error("FB API error", response.status, body);
        return json({ error: `Facebook API returned ${response.status}`, detail: body }, 502);
      }

      const feed = (await response.json()) as FbFeedResponse;
      console.log("FB feed raw", JSON.stringify(feed));

      const posts = (feed.data ?? [])
        .filter((post) => post.message || post.story)
        .map((post) => ({
          id: `fb-${post.id}`,
          platform: "facebook",
          author: {
            name: authorName,
            handle: authorHandle,
            avatar: "/media/brand/circle-logo.png",
            verified: true,
          },
          content: post.message ?? post.story ?? "",
          relativeTime: relativeTime(post.created_time ?? new Date().toISOString()),
          url: post.permalink_url ?? authorUrl,
          tags: tags(post.message ?? post.story ?? ""),
          media: post.full_picture
            ? { url: post.full_picture, thumbnail: post.full_picture }
            : undefined,
        }));

      return json({ posts });
    } catch (error) {
      console.error(error);
      return json({ error: "Unable to load the Facebook feed" }, 502);
    }
  },
};
