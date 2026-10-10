"use client";

import { useEffect, useState } from "react";
import { Arrow } from "../ui";

const curatorScriptId = "curator-feed-f9841e7b-8940-4fd0-a510-caece623c48d";
const curatorScriptUrl =
  "https://cdn.curator.io/published/f9841e7b-8940-4fd0-a510-caece623c48d.js";
let curatorScriptCleanupTimer: ReturnType<typeof setTimeout> | undefined;

const socialChannels = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@mmmpakofficial",
    href: "https://youtube.com/@mmmpakofficial",
    followers: "15.8K Subscribers",
    color: "#FF0000",
    cta: "Subscribe on YouTube",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Muslim Medical Mission",
    href: "https://facebook.com/MMMPakOfficial",
    followers: "42K Followers",
    color: "#1877F2",
    cta: "Follow on Facebook",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@MMMPakOfficial",
    href: "https://instagram.com/MMMPakOfficial",
    followers: "28.4K Followers",
    color: "#E1306C",
    cta: "Follow on Instagram",
  },
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@MMMPakOfficial",
    href: "https://x.com/MMMPakOfficial",
    followers: "19.2K Followers",
    color: "#000000",
    cta: "Follow on X",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Channel",
    handle: "Muslim Medical Mission",
    href: "https://whatsapp.com/channel/0029VaS4IQS47XeGvrv19o2F",
    followers: "Join Channel",
    color: "#25D366",
    cta: "Join on WhatsApp",
  },
] as const;

function SocialChannelIcon({
  id,
}: {
  id: (typeof socialChannels)[number]["id"];
}) {
  const paths = {
    youtube:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    facebook:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44 0-.795-.644-1.44-1.439-1.44z",
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    whatsapp:
      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
  } as const;
  const className = id === "x" ? "h-4 w-4" : "h-5 w-5";

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={paths[id]} />
    </svg>
  );
}

export function SocialFeed() {
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (curatorScriptCleanupTimer) {
      clearTimeout(curatorScriptCleanupTimer);
      curatorScriptCleanupTimer = undefined;
    }

    const existingScript = document.getElementById(curatorScriptId) as HTMLScriptElement | null;
    if (existingScript?.dataset.loaded === "true") existingScript.remove();

    const pendingScript = document.getElementById(curatorScriptId) as HTMLScriptElement | null;
    const script = pendingScript ?? document.createElement("script");
    if (!pendingScript) {
      script.id = curatorScriptId;
      script.src = curatorScriptUrl;
      script.async = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }

    let active = true;
    const markLoaded = () => {
      script.dataset.loaded = "true";
    };
    const markFailed = () => {
      if (active) setLoadFailed(true);
    };
    script.addEventListener("load", markLoaded);
    script.addEventListener("error", markFailed);

    return () => {
      active = false;
      script?.removeEventListener("load", markLoaded);
      script?.removeEventListener("error", markFailed);
      curatorScriptCleanupTimer = setTimeout(() => {
        script?.remove();
        curatorScriptCleanupTimer = undefined;
      }, 0);
    };
  }, []);

  return (
    <section
      id="social-feed"
      className="relative overflow-hidden border-b border-[#DCE2EA] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="shell-wide">
        <div className="border-b border-[#DCE2EA] pb-8">
          <h2 className="font-display text-[clamp(2.05rem,3.4vw,2.85rem)] font-black leading-[1.1] tracking-tight text-[#0A1020]">
            Follow Muslim Medical Mission in the Field
          </h2>
          <p className="mt-2.5 max-w-2xl text-[1.04rem] leading-relaxed text-[#4B5563] sm:text-[1.12rem]">
            Follow Muslim Medical Mission&apos;s latest updates and stories from
            the field.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {socialChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${channel.cta}: ${channel.name}`}
              className="group flex flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-[#F5F7FA] p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075BD6]/50 hover:bg-white hover:shadow-md sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-xs"
                  style={{ backgroundColor: channel.color }}
                >
                  <SocialChannelIcon id={channel.id} />
                </div>
                <span className="text-[0.72rem] font-bold text-[#6B7280]">
                  {channel.followers}
                </span>
              </div>

              <div className="mt-3.5">
                <h3 className="font-display text-[0.98rem] font-bold text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                  {channel.name}
                </h3>
                <p className="truncate text-xs text-[#6B7280]">{channel.handle}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#DCE2EA] pt-3 text-xs font-bold text-[#075BD6] group-hover:text-[#0649B8]">
                <span>{channel.cta}</span>
                <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 w-full min-w-0 max-w-full">
          <div
            id="curator-feed-default-feed-layout"
            className="mmm-curator-feed w-full min-w-0 max-w-full"
          >
            <a
              href="https://x.com/MMMPakOfficial"
              target="_blank"
              rel="noreferrer"
              className="crt-logo crt-tag"
            >
              MMM Social Feed
            </a>
          </div>

          {loadFailed && (
            <p role="status" className="mt-4 text-sm text-[#4B5563]">
              The social feed is temporarily unavailable. You can still follow
              updates on{" "}
              <a
                href="https://facebook.com/MMMPakOfficial"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#075BD6] underline"
              >
                MMM&apos;s Facebook page
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
