import Link from "next/link";
import { org, programs } from "@/data/site";
import { Arrow } from "./ui";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
};

const columns = [
  {
    heading: "About",
    links: [
      { label: "Who we are", href: "/about" },
      { label: "Mission and vision", href: "/about#mission" },
      { label: "Where we work", href: "/about#reach" },
      { label: "Field reports", href: "/media" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Programmes",
    links: programs.slice(0, 5).map((p) => ({
      label: p.title,
      href: `/what-we-do/${p.slug}`,
    })),
  },
  {
    heading: "Take part",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/get-involved" },
      { label: "Partner with us", href: "/get-involved#partners" },
      { label: "Disaster response", href: "/disaster-response" },
      { label: "How funds are spent", href: "/donate#allocation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-300 bg-[#E8EFF6] pt-12 pb-8 text-[#334155]">
      <div className="shell-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-2.5 sm:gap-3">
              <img src="/media/brand/circle-logo.png" alt={org.name} className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-[1.08rem] sm:text-[1.15rem] font-black text-[#003475] group-hover:text-[#046BD2] transition-colors leading-none">
                  Muslim Medical Mission
                </span>
                <span className="mt-1 font-display text-[0.65rem] sm:text-[0.7rem] font-bold text-[#E01F26] leading-none">
                  Wisdom, Action, Service for Allah for Right
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-[0.91rem] leading-relaxed text-[#334155]">
              A volunteer network of Muslim doctors, paramedics and students running free healthcare
              and relief operations across Pakistan and into Gaza.
            </p>

            <address className="mt-5 space-y-0.5 text-[0.88rem] not-italic text-[#7A7A7A]">
              <p className="font-bold text-[#003475]">{org.legalName}</p>
              <p>{org.address.line1}</p>
              <p>{org.address.line2}</p>
              <p>{org.address.country}</p>
            </address>

            <div className="mt-4 space-y-1 text-[0.91rem]">
              <a
                href={org.phoneHref}
                className="block font-display font-bold text-[#003475] transition-colors hover:text-[#046BD2]"
              >
                {org.phone}
              </a>
              <a
                href={`mailto:${org.email}`}
                className="block text-[#7A7A7A] transition-colors hover:text-[#046BD2]"
              >
                {org.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-[0.96rem] font-extrabold text-[#003475]">
                  {col.heading}
                </h3>
                <span className="mt-2 block h-0.5 w-6 bg-[#046BD2]" aria-hidden />
                <ul className="mt-3.5 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.88rem] font-medium text-[#334155] transition-colors hover:text-[#046BD2]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Donate panel */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-soft">
              <h3 className="font-display text-[1.05rem] font-extrabold text-[#003475]">
                Direct Bank Transfer
              </h3>
              <p className="mt-1.5 text-[0.84rem] leading-relaxed text-[#7A7A7A]">
                Bank transfer reaches the field with the least deducted along the way.
              </p>

              <dl className="mt-4 space-y-2 text-[0.86rem]">
                <div>
                  <dt className="text-[#7A7A7A]">Account title</dt>
                  <dd className="font-semibold text-[#003475]">{org.bank.title}</dd>
                </div>
                <div>
                  <dt className="text-[#7A7A7A]">Bank</dt>
                  <dd className="font-semibold text-[#003475]">{org.bank.bank}</dd>
                </div>
                <div>
                  <dt className="text-[#7A7A7A]">IBAN</dt>
                  <dd className="font-mono text-[0.82rem] font-semibold break-all text-[#046BD2]">
                    {org.bank.iban}
                  </dd>
                </div>
              </dl>

              <Link
                href="/donate"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#046BD2] px-6 py-3 font-display text-[0.9rem] font-bold text-white shadow-sm transition-all duration-250 hover:bg-[#e53935] hover:shadow-md"
              >
                All the ways to give
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/80 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.83rem] text-[#7A7A7A]">
            &copy; {new Date().getFullYear()} {org.legalName}. Registered in Lahore, Pakistan.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="flex items-center gap-2">
              {org.social.map((s) => {
                const Icon = socialIcons[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow Muslim Medical Mission on ${s.name}`}
                    title={s.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#334155] shadow-xs ring-1 ring-slate-300/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e53935] hover:text-white hover:ring-[#e53935] hover:shadow-sm"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : <span>{s.name}</span>}
                    <span className="sr-only">{s.name}</span>
                  </a>
                );
              })}
            </div>
            <span className="hidden h-3.5 w-px bg-slate-300 md:block" aria-hidden />
            <p className="text-[0.83rem] text-[#7A7A7A]">{org.motto}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
