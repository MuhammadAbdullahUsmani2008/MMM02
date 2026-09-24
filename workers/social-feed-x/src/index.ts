interface Env {
  X_BEARER_TOKEN: string;
  X_USERNAME?: string;
}

type XUserResponse = {
  data?: { id: string; name: string; username: string; profile_image_url?: string };
};

type XPost = {
  id: string;
  text: string;
  created_at: string;
  public_metrics?: {
    like_count?: number;
    retweet_count?: number;
    reply_count?: number;
    impression_count?: number;
  };
};

type XPostsResponse = {
  data?: XPost[];
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
  return `${Math.floor(hours / 24)}d ago`;
}

async function xGet<T>(url: string, token: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    throw new Error(`X API returned ${response.status}`);
  }
  return (await response.json()) as T;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
    if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "/feed") {
      return json({ error: "Not found" }, 404);
    }
    if (!env.X_BEARER_TOKEN) return json({ error: "X API is not configured" }, 503);

    try {
      const username = env.X_USERNAME || "MMMPakOfficial";
      const user = await xGet<XUserResponse>(
        `https://api.x.com/2/users/by/username/${encodeURIComponent(username)}?user.fields=profile_image_url`,
        env.X_BEARER_TOKEN,
      );
      if (!user.data) return json({ error: "X account not found" }, 404);

      const posts = await xGet<XPostsResponse>(
        `https://api.x.com/2/users/${user.data.id}/tweets?max_results=10&exclude=replies,retweets&tweet.fields=created_at,public_metrics`,
        env.X_BEARER_TOKEN,
      );

      return json({
        posts: (posts.data ?? []).map((post) => ({
          id: `x-${post.id}`,
          platform: "x",
          author: {
            name: user.data!.name,
            handle: `@${user.data!.username}`,
            avatar: user.data!.profile_image_url || "/media/brand/circle-logo.png",
            verified: true,
          },
          date: post.created_at,
          relativeTime: relativeTime(post.created_at),
          content: post.text,
          metrics: {
            likes: post.public_metrics?.like_count,
            retweets: post.public_metrics?.retweet_count,
            comments: post.public_metrics?.reply_count,
            views: post.public_metrics?.impression_count?.toLocaleString(),
          },
          url: `https://x.com/${user.data!.username}/status/${post.id}`,
          tags: tags(post.text),
        })),
      });
    } catch (error) {
      console.error(error);
      return json({ error: "Unable to load the X feed" }, 502);
    }
  },
};