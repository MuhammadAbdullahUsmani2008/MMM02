import Link from "next/link";
import { givingTiers, org } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow, SectionHead } from "../ui";

const tierColors = [
  { border: "bg-[#075BD6]", text: "text-[#075BD6]" },
  { border: "bg-[#EF3B19]", text: "text-[#EF3B19]" },
  { border: "bg-[#EF3B19]", text: "text-[#EF3B19]" },
  { border: "bg-[#0649B8]", text: "text-[#0649B8]" },
];

export function Giving() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA] py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="shell-wide">
        <SectionHead
          title="What a donation actually buys"
          lead="No abstractions and no percentages you cannot check. These are the real unit costs our field teams work to, in the currency we buy in."
        />

        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {givingTiers.map((tier, i) => {
            const isFeatured = i === 2; // Family fed for a month
            const styling = tierColors[i % tierColors.length];

            return (
              <Reveal key={tier.amount} delay={i * 70} amount={0.08}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 sm:p-7 border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(6,73,184,0.15)] ${
                    isFeatured
                      ? "border-[#EF3B19]/40 ring-2 ring-[#EF3B19]/15 shadow-[0_6px_20px_rgba(239,59,25,0.08)] hover:border-[#EF3B19]"
                      : "border-[#DCE2EA] shadow-[0_4px_16px_rgba(10,16,32,0.04)] hover:border-[#075BD6]/50"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5 ${styling.border}`}
                    aria-hidden
                  />

                  {isFeatured && (
                    <span className="mb-3 self-start inline-flex items-center gap-1 rounded-full bg-[#EF3B19]/10 border border-[#EF3B19]/30 px-2.5 py-0.5 text-[0.72rem] font-black uppercase tracking-wider text-[#EF3B19]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EF3B19] animate-pulse" />
                      Critical Need
                    </span>
                  )}

                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-[0.84rem] font-bold text-[#6B7280]">
                      PKR
                    </span>
                    <span
                      className={`font-display text-[2.2rem] sm:text-[2.45rem] leading-none font-black transition-transform duration-300 origin-left group-hover:scale-105 ${styling.text}`}
                    >
                      {tier.amount}
                    </span>
                  </p>

                  <h3 className="mt-4 font-display text-[1.2rem] sm:text-[1.3rem] font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                    {tier.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.94rem] sm:text-[0.98rem] leading-relaxed text-[#4B5563]">
                    {tier.body}
                  </p>

                  <Link
                    href="/donate"
                    className="mt-6 flex min-h-[44px] items-center justify-between rounded-xl bg-[#F5F7FA] border border-[#DCE2EA] px-4 py-3 font-display text-[0.85rem] xs:text-[0.9rem] font-bold text-[#0A1020] transition-all duration-250 group-hover:bg-[#e53935] group-hover:border-[#e53935] group-hover:text-white whitespace-nowrap active:scale-98"
                  >
                    <span className="whitespace-nowrap">Donate PKR {tier.amount}</span>
                    <Arrow className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bank Direct Transfer Highlight */}
        <Reveal delay={140}>
          <div className="mt-10 rounded-2xl border border-[#DCE2EA] bg-[#F8FAFD] p-6 sm:p-9 shadow-xs">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-1.5 font-display text-[0.82rem] font-extrabold uppercase tracking-wider text-[#075BD6]">
                  Direct Bank Transfer
                </span>
                <h3 className="mt-2 font-display text-[1.4rem] sm:text-[1.65rem] font-black text-[#0A1020]">
                  100% of your gift reaches the patient.
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-[#4B5563]">
                  A direct transfer carries zero merchant processing cuts, ensuring every rupee delivers medicine, food, and water. Send the receipt via WhatsApp and our dispatch coordinator will link it directly to the active clinic it funds.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <a
                    href={org.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075BD6] min-h-[44px] px-4 py-2.5 sm:px-6 sm:py-2.5 font-display text-[0.84rem] sm:text-[0.88rem] font-bold text-white shadow-sm transition-all duration-250 hover:bg-[#e53935] hover:shadow-md whitespace-nowrap active:scale-98"
                  >
                    <span className="whitespace-nowrap">WhatsApp a transfer slip</span>
                    <Arrow className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE2EA] bg-white min-h-[44px] px-4 py-2.5 sm:px-5 sm:py-2.5 font-display text-[0.84rem] sm:text-[0.88rem] font-bold text-[#0A1020] transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] hover:text-white whitespace-nowrap active:scale-98"
                  >
                    <span className="whitespace-nowrap">All donation methods</span>
                  </Link>
                </div>
              </div>
            </div>

            <dl className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Account Title", v: org.bank.title },
                { k: "Bank", v: org.bank.bank },
                { k: "Account Number", v: org.bank.account, mono: true },
                { k: "IBAN", v: org.bank.iban, mono: true },
              ].map((row) => (
                <div key={row.k} className="rounded-xl border border-[#DCE2EA] bg-white/95 p-3.5 shadow-xs transition-colors hover:border-[#075BD6]/40">
                  <dt className="text-[0.76rem] font-bold text-[#6B7280] uppercase tracking-wider">{row.k}</dt>
                  <dd
                    className={`mt-1 text-[0.92rem] font-bold break-all text-[#0A1020] ${
                      row.mono ? "font-mono text-[0.88rem] text-[#075BD6]" : ""
                    }`}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
