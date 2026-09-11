import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Arrow                                                               */
/* ------------------------------------------------------------------ */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-4 w-4 shrink-0 ${className}`} fill="none">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "donate" | "primary" | "ghost" | "outline" | "quiet";
  className?: string;
  external?: boolean;
};

const variants = {
  donate:
    "bg-red-brand text-white hover:bg-[#e53935] shadow-[0_10px_24px_-8px_rgba(224,31,38,0.4)] hover:shadow-[0_10px_24px_-8px_rgba(229,57,53,0.4)]",
  primary:
    "bg-[#046BD2] text-white hover:bg-[#e53935] hover:border-[#e53935] shadow-[0_10px_24px_-8px_rgba(4,107,210,0.4)] hover:shadow-[0_10px_24px_-8px_rgba(229,57,53,0.4)]",
  ghost: "border-2 border-[#003475] text-[#003475] hover:bg-[#e53935] hover:border-[#e53935] hover:text-white",
  outline: "border-2 border-slate-300 text-[#334155] hover:border-[#e53935] hover:bg-[#e53935] hover:text-white",
  quiet: "bg-slate-100 text-[#334155] hover:bg-[#e53935] hover:text-white shadow-soft",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 xs:gap-2.5 rounded-full px-4.5 py-2.5 xs:px-5.5 xs:py-3 sm:px-7 sm:py-3.5 min-h-[44px] max-w-full font-display text-[0.84rem] xs:text-[0.88rem] sm:text-[0.95rem] font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:scale-98 ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span className="whitespace-normal">{children}</span>
      <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/*                                                                     */
/* Deliberately built without a pill or kicker label above the title.   */
/* The hairline rule and the two column split carry the hierarchy.      */
/* ------------------------------------------------------------------ */

type SectionHeadProps = {
  title: ReactNode;
  lead?: ReactNode;
  link?: { href: string; label: string };
  tone?: "dark" | "light";
  align?: "split" | "stacked";
  className?: string;
};

export function SectionHead({
  title,
  lead,
  link,
  tone = "dark",
  align = "split",
  className = "",
}: SectionHeadProps) {
  const isDark = tone === "dark";

  if (align === "stacked") {
    return (
      <Reveal className={`max-w-3xl ${className}`}>
        <h2
          className={`font-display text-[clamp(1.95rem,3.4vw,2.75rem)] leading-[1.1] font-black ${isDark ? "text-[#0A1020]" : "text-white"}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`mt-4 text-[1.04rem] leading-relaxed sm:text-[1.12rem] ${
              isDark ? "text-[#4B5563]" : "text-slate-100"
            }`}
          >
            {lead}
          </p>
        ) : null}
        {link ? (
          <Link
            href={link.href}
            className={`group mt-5 inline-flex items-center gap-1.5 xs:gap-2 font-display text-[0.88rem] xs:text-[0.96rem] font-bold shrink-0 min-h-[38px] ${
              isDark ? "text-[#075BD6]" : "text-[#EF3B19]"
            }`}
          >
            <span className="link-underline">{link.label}</span>
            <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ) : null}
      </Reveal>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-12 md:gap-8 md:items-end">
        <Reveal className="md:col-span-6 lg:col-span-7">
          <h2
            className={`font-display text-[clamp(1.95rem,3.4vw,2.75rem)] leading-[1.1] font-black ${
              isDark ? "text-[#0A1020]" : "text-white"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {(lead || link) && (
          <Reveal delay={90} className="md:col-span-6 lg:col-span-5">
            {lead ? (
              <p
                className={`text-[1.04rem] leading-relaxed sm:text-[1.12rem] ${
                  isDark ? "text-[#4B5563]" : "text-slate-100"
                }`}
              >
                {lead}
              </p>
            ) : null}
            {link ? (
              <Link
                href={link.href}
                className={`group mt-4 inline-flex items-center gap-1.5 xs:gap-2 font-display text-[0.88rem] xs:text-[0.96rem] font-bold shrink-0 min-h-[38px] ${
                  isDark ? "text-[#075BD6]" : "text-[#EF3B19]"
                }`}
              >
                <span className="link-underline">{link.label}</span>
                <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : null}
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page header, used on every inner page (Luminous Light Design)       */
/* ------------------------------------------------------------------ */

export function PageHeader({
  title,
  lead,
  image,
  crumb,
}: {
  title: string;
  lead: string;
  /** Empty when no honest photograph exists for this page. */
  image?: string;
  crumb: { label: string; href: string }[];
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 -z-10">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-20"
          />
        ) : (
          <div
            className="h-full w-full opacity-60"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(60% 70% at 85% 20%, rgba(4,107,210,0.12), transparent 70%), radial-gradient(40% 50% at 10% 80%, rgba(243,230,230,0.8), transparent 60%)",
            }}
          />
        )}
      </div>

      <div className="shell">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.88rem] font-semibold text-[#6B7280]">
            {crumb.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300">/</span>}
                <Link href={c.href} className="transition-colors hover:text-[#075BD6]">
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.15rem,3.8vw,3.15rem)] leading-[1.08] font-black text-[#0A1020] tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[#4B5563] sm:text-[1.14rem]">{lead}</p>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Accent helpers                                                      */
/* ------------------------------------------------------------------ */

export const accentBar = {
  blue: "bg-[#046BD2]",
  magenta: "bg-red-brand",
  navy: "bg-[#003475]",
  cyan: "bg-[#008DC9]",
} as const;

export const accentText = {
  blue: "text-[#046BD2]",
  magenta: "text-red-brand",
  navy: "text-[#003475]",
  cyan: "text-[#008DC9]",
} as const;

export const accentTint = {
  blue: "bg-blue-50 text-[#046BD2]",
  magenta: "bg-red-50 text-red-brand",
  navy: "bg-slate-100 text-[#003475]",
  cyan: "bg-[#e0f4fc] text-[#008DC9]",
} as const;
