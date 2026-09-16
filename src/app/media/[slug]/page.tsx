import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { reports, reportBySlug } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Arrow, PageHeader } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const report = reportBySlug(slug);
  if (!report) return { title: "Report not found" };

  return {
    title: report.title,
    description: report.excerpt,
    openGraph: {
      title: report.title,
      description: report.excerpt,
      ...(report.image ? { images: [report.image] } : {}),
    },
  };
}

export default async function ReportPage({ params }: Params) {
  const { slug } = await params;
  const report = reportBySlug(slug);
  if (!report) notFound();

  const related = reports.filter((r) => r.slug !== report.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
          { label: report.title, href: `/media/${report.slug}` },
        ]}
        title={report.title}
        lead={report.excerpt}
        image={report.image}
      />

      {/* Meta strip */}
      <section className="relative z-10 -mt-14">
        <div className="shell-wide">
          <dl className="grid overflow-hidden rounded-2xl bg-white shadow-[0_28px_60px_-28px_rgba(10,23,48,0.45)] sm:grid-cols-3 sm:divide-x sm:divide-line">
            {[
              { k: "Report type", v: report.kind },
              { k: "Location", v: report.place },
              { k: "Year", v: report.date },
            ].map((x, i) => (
              <Reveal key={x.k} delay={i * 80} as="div" className="p-7">
                <dt className="text-[0.88rem] text-slate-muted">{x.k}</dt>
                <dd className="mt-2.5 font-display text-[1.15rem] font-extrabold text-navy-800">
                  {x.v}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28">
        <div className="shell-wide grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rich mt-8 text-[1.06rem]">
              {report.body.map((para, i) => (
                <Reveal key={i} delay={i * 60} as="p" className="mb-5">
                  {para}
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap gap-2 sm:gap-4">
                <Link
                  href="/donate"
                  className="group inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 xs:gap-2 rounded-full bg-[#046BD2] px-2.5 py-2.5 xs:px-3 xs:py-3 sm:px-7 sm:py-3.5 font-display text-[0.72rem] xs:text-[0.76rem] sm:text-[0.95rem] font-bold text-white min-h-[38px] shadow-sm transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#e53935]"
                >
                  <span className="whitespace-nowrap">Support this work</span>
                  <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/media"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 xs:gap-2 rounded-full border-2 border-slate-300 px-2.5 py-2.5 xs:px-3 xs:py-3 sm:px-7 sm:py-3.5 font-display text-[0.72rem] xs:text-[0.76rem] sm:text-[0.95rem] font-bold text-[#003475] min-h-[38px] transition-all duration-250 hover:border-[#e53935] hover:bg-[#e53935] hover:text-white"
                >
                  <span className="whitespace-nowrap">All field reports</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Image rail */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal from="right">
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft">
                <img
                  src={report.image}
                  alt={report.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <p className="font-display text-[0.95rem] font-bold text-[#003475]">
                    {report.kind}
                  </p>
                  <p className="mt-1.5 text-[0.9rem] text-[#4B5563]">{report.place}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="shell-wide">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <h2 className="font-display text-[1.5rem] font-extrabold text-[#003475]">
                More field reports
              </h2>
              <span className="h-px flex-1 bg-slate-200" aria-hidden />
              <Link
                href="/media"
                className="group inline-flex items-center gap-1.5 xs:gap-2 font-display text-[0.85rem] xs:text-[0.9rem] font-bold text-[#046BD2] shrink-0 min-h-[36px]"
              >
                <span className="link-underline">See all</span>
                <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 70} amount={0.08}>
                <Link
                  href={`/media/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-[#DCE2EA] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-[#075BD6]/50"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[1.15rem] leading-tight font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                      {r.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[#4B5563]">
                      {r.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.85rem] font-bold text-[#075BD6] group-hover:text-[#0649B8]">
                      <span>Read the report</span>
                      <Arrow className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
