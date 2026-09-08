"use client";

import { useEffect, useState } from "react";
import { org } from "@/data/site";

/**
 * Floating WhatsApp chat button.
 * Stays fixed in the bottom-right corner while the user scrolls.
 * Includes a small "Chat with us" tooltip that appears after a short delay.
 */
export function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false);

  // Show the tooltip briefly after mount, then hide it.
  useEffect(() => {
    const show = setTimeout(() => setShowTip(true), 1500);
    const hide = setTimeout(() => setShowTip(false), 8000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <a
      href={org.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      {/* Tooltip */}
      <span
        className={`pointer-events-none hidden rounded-full bg-[#0A1020] px-3.5 py-2 text-xs font-bold text-white shadow-lg transition-all duration-300 sm:block ${
          showTip ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
        }`}
      >
        Chat with us
      </span>

      {/* WhatsApp bubble */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
        {/* Pulsing ring */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.55-1.72a12.74 12.74 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.68-12.8-12.68zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.04-3.79-.25-.4a10.56 10.56 0 0 1-1.62-5.66c0-5.86 4.77-10.63 10.64-10.63a10.57 10.57 0 0 1 10.63 10.64c0 5.86-4.77 10.53-10.76 10.53zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </span>
    </a>
  );
}
