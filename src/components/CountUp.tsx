"use client";

import { useEffect, useRef, useState } from "react";
import { onEnter, prefersReducedMotion } from "@/lib/inView";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  useGrouping?: boolean;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({
  to,
  suffix = "",
  duration = 1600,
  className = "",
  useGrouping = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    let frame = 0;
    let fired = false;

    const animate = () => {
      if (fired) return;
      fired = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeOut(progress) * to));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const stop = onEnter(el, 0.2, animate);

    // If the element is already in (or above) the viewport on mount, animate
    // immediately rather than waiting for a scroll event that may never come.
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 0) * 0.8) {
      animate();
    }

    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {useGrouping ? value.toLocaleString("en-GB") : value.toString()}
      {suffix}
    </span>
  );
}
