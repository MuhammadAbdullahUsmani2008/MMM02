import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Arrow, SectionHead } from "@/components/ui";
import { MembershipForm, CATEGORIES } from "@/components/membership/MembershipForm";

export const metadata: Metadata = {
  title: "Membership | Muslim Medical Mission (MMM) Pakistan",
  description:
    "Muslim Medical Mission (MMM) Pakistan brings together doctors, dentists, physiotherapists, nurses, pharmacists, allied health professionals, students, and volunteers who share one purpose: serving humanity.",
};

const aims = [
  {
    n: "01",
    text: "To become dynamic Muslim health care professionals.",
  },
  {
    n: "02",
    text: "To develop pioneers of social change by acquiring knowledge and wisdom.",
  },
  {
    n: "03",
    text: "To develop individuals practicing da'wah with acumen and communication that is convincing and effective both professionally and culturally.",
  },
  {
    n: "04",
    text: "To provide services to humanity without any discrimination of gender or genetics, race or religion, geography or generation, and time or era.",
  },
  {
    n: "05",
    text: "To develop human resource for peace and disaster management.",
  },
  {
    n: "06",
    text: "To constantly remind and educate the Muslim health care professionals of the Islamic value, morality, etiquettes and ethics in everyday health care and clinical set ups.",
  },
];

const whyJoinBenefits = [
  {
    n: "01",
    title: "Nationwide Professional Network",
    text: "Become part of a nationwide network of like-minded healthcare professionals and students.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Camps & Relief Missions",
    text: "Take part in free medical camps, relief missions, and community health education drives across Pakistan.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Conferences & Development",
    text: "Access conferences, workshops, and professional development activities organised by MMM.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Student Mentorship & Support",
    text: "Receive mentorship and career support as a student member.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Serving the Underserved",
    text: "Add your voice and skills to a movement dedicated to serving the underserved.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

const categoryDetails = [
  {
    title: "Medical and Dental Doctor",
    desc: "For MBBS/BDS-qualified physicians and dentists registered with the Pakistan Medical & Dental Council (PMDC), whether in practice or postgraduate training.",
    badge: "PMDC",
  },
  {
    title: "Doctor of Physical Therapy (DPT)",
    desc: "For physiotherapy graduates holding a recognised DPT degree and membership of the Pakistan Physical Therapy Association (PPTA).",
    badge: "PPTA",
  },
  {
    title: "Allied Health Professional",
    desc: "For other health professionals such as medical technologists, lab technicians, radiographers, nutritionists, midwives, lady health visitors, hospital administrators, and public-health professionals.",
    badge: "Allied Health",
  },
  {
    title: "Nursing Professional",
    desc: "For registered nurses licensed with the Pakistan Nursing Council (PNC).",
    badge: "PNC",
  },
  {
    title: "Pharmacist",
    desc: "For qualified pharmacists registered with the Pharmacy Council of Pakistan (PPC).",
    badge: "PPC",
  },
  {
    title: "International Member",
    desc: "For Pakistani doctors, dentists, physiotherapists, nurses, pharmacists, or allied health professionals currently living and working outside Pakistan, who hold registration/licensure with the health regulator of their country of practice.",
    badge: "Overseas",
  },
  {
    title: "Medical Student Member",
    desc: "For students currently enrolled in an MBBS or BDS programme.",
    badge: "MBBS / BDS",
  },
  {
    title: "Allied Health Student",
    desc: "For students currently enrolled in nursing, pharmacy, physiotherapy, or other allied-health programmes.",
    badge: "Student Wing",
  },
  {
    title: "Volunteer",
    desc: "For anyone, healthcare professional or not, who wants to support MMM Pakistan's mission with their time, skills, or presence at our camps and events.",
    badge: "General Support",
  },
];

const partners = [
  {
    title: "Hospitals and clinics",
    body: "Accept surgical referrals from Save Vision, or release clinical staff for scheduled deployment days.",
  },
  {
    title: "Pharmaceutical suppliers",
    body: "Donate stock at cost or near it. Medicine is the single largest recurring expense in every camp we run.",
  },
  {
    title: "Mosques and community groups",
    body: "Host a camp, identify the households that need rations, and give the team a place to work from.",
  },
  {
    title: "Companies and foundations",
    body: "Fund a full deployment or a season of one programme, and receive the delivery record for it.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* -------------------------------------------------------------- */}
      {/* Hero Section                                                   */}
      {/* -------------------------------------------------------------- */}
      <header className="relative isolate overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="/media/field/free-medical-camp-doctors.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-15"
          />
        </div>

        <div className="shell">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.88rem] font-semibold text-[#6B7280]">
              <li className="flex items-center gap-2">
                <Link href="/" className="transition-colors hover:text-[#075BD6]">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-300">/</span>
                <Link href="/get-involved" className="transition-colors hover:text-[#075BD6]">
                  Get Involved
                </Link>
              </li>
              <li className="flex items-center gap-2 text-[#075BD6]" aria-current="page">
                <span className="text-slate-300">/</span>
                <span>Membership</span>
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#075BD6]">
              Muslim Medical Mission Pakistan
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.3rem,4.2vw,3.5rem)] leading-[1.08] font-black text-[#0A1020] tracking-tight">
              Membership
            </h1>
            <p className="mt-5 text-[1.08rem] sm:text-[1.18rem] leading-relaxed text-[#4B5563]">
              Muslim Medical Mission (MMM) Pakistan brings together doctors, dentists, physiotherapists, nurses, pharmacists, allied health professionals, students, and volunteers who share one purpose: serving humanity through free medical camps, health education, disaster relief, and the training of the next generation of Pakistan&apos;s healthcare professionals - all guided by the values of compassion and service that Islam calls every healer to.
            </p>
            <p className="mt-4 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-[#4B5563]">
              Whether you are a practising professional, a student still training for the field, or simply someone who wants to give their time to a good cause, there is a place for you at MMM Pakistan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#application-form"
                className="group inline-flex items-center justify-center gap-2 xs:gap-2.5 rounded-full bg-[#046BD2] px-5 py-2.5 xs:px-6 xs:py-3 sm:px-7 sm:py-3.5 font-display text-[0.84rem] xs:text-[0.9rem] sm:text-[0.95rem] font-bold text-white min-h-[44px] max-w-full shadow-[0_10px_24px_-8px_rgba(4,107,210,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e53935] hover:shadow-[0_10px_24px_-8px_rgba(229,57,53,0.4)]"
              >
                <span>Join MMM Pakistan Today</span>
                <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/MMM_Pakistan_Membership_Application_Form.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 xs:gap-2.5 rounded-full border-2 border-slate-300 px-5 py-2.5 xs:px-6 xs:py-3 sm:px-7 sm:py-3.5 font-display text-[0.84rem] xs:text-[0.9rem] sm:text-[0.95rem] font-bold text-[#334155] min-h-[44px] max-w-full transition-all duration-300 hover:border-[#e53935] hover:bg-[#e53935] hover:text-white"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Membership Form</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------- */}
      {/* Join MMM Section (Aims / Objectives)                           */}
      {/* -------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 border-b border-[#DCE2EA] bg-white">
        <div className="shell-wide">
          <SectionHead
            title="Join MMM"
            lead="Guiding healthcare professionals with the values of compassion, wisdom, and service that Islam calls every healer to."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aims.map((aim, i) => (
              <Reveal key={aim.n} delay={i * 70}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-[#F8FAFD] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#075BD6]/40 hover:bg-white hover:shadow-soft">
                  <div>
                    <span className="font-display text-[2rem] font-black leading-none text-[#075BD6]/30 transition-colors group-hover:text-[#075BD6]">
                      {aim.n}
                    </span>
                    <p className="mt-4 font-display text-[1.05rem] font-bold leading-relaxed text-[#0A1020]">
                      {aim.text}
                    </p>
                  </div>
                  <div className="mt-6 h-1 w-8 rounded-full bg-[#DCE2EA] transition-all duration-300 group-hover:w-16 group-hover:bg-[#075BD6]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Why Join MMM Pakistan? (Benefits)                              */}
      {/* -------------------------------------------------------------- */}
      <section className="border-b border-[#DCE2EA] bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white py-20 lg:py-24">
        <div className="shell-wide">
          <SectionHead
            tone="dark"
            title="Why Join MMM Pakistan?"
            lead="Become part of an enduring mission where clinical expertise translates into direct humanitarian relief across the nation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyJoinBenefits.map((b, i) => (
              <Reveal key={b.n} delay={i * 80} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="h-full rounded-2xl border border-blue-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#075BD6]/50 hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#075BD6]">
                    {b.icon}
                  </div>
                  <h3 className="mt-5 font-display text-[1.22rem] font-black text-[#0A1020]">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-[#4B5563]">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Membership Categories                                          */}
      {/* -------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 border-b border-[#DCE2EA] bg-white">
        <div className="shell-wide">
          <SectionHead
            title="Membership Categories"
            lead="MMM Pakistan welcomes members across the full spectrum of the healthcare community:"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryDetails.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 60}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#075BD6]/40 hover:shadow-soft">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md border border-blue-100 bg-[#F0F7FF] px-2.5 py-0.5 text-xs font-bold text-[#075BD6]">
                        {cat.badge}
                      </span>
                      <span className="font-display text-xs font-extrabold text-slate-400">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.18rem] font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                      {cat.title}
                    </h3>
                    <p className="mt-2.5 text-[0.94rem] leading-relaxed text-[#4B5563]">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="#application-form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075BD6] transition-colors hover:text-[#0649B8]"
                    >
                      <span>Apply under this category</span>
                      <Arrow className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Eligibility Section                                            */}
      {/* -------------------------------------------------------------- */}
      <section className="py-16 lg:py-20 border-b border-[#DCE2EA] bg-gradient-to-br from-[#F8FAFD] via-white to-[#F0F7FF]">
        <div className="shell-wide">
          <Reveal>
            <div className="rounded-3xl border border-blue-200 bg-white p-7 sm:p-10 shadow-soft">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#075BD6] text-white shadow-md">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#075BD6]">
                    Registration &amp; Verification
                  </span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black text-[#0A1020]">
                    Eligibility
                  </h2>
                  <p className="mt-4 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-[#4B5563]">
                    Membership as a Medical and Dental Doctor, Doctor of Physical Therapy, Allied Health Professional, Nursing Professional, or Pharmacist requires current, valid registration with the relevant professional council or body - PMDC, PNC, PPC, or PPTA, as applicable to your profession. International Members must hold current registration/licensure with the health regulator of the country in which they practise, along with proof of Pakistani origin. Student members must be currently enrolled at a recognised institution. Volunteers may join regardless of professional background.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* How to Apply Section                                           */}
      {/* -------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 border-b border-[#DCE2EA] bg-white">
        <div className="shell-wide">
          <SectionHead
            title="How to Apply"
            lead="You can register in either of the following ways:"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Pathway 1: Online */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#075BD6] bg-[#F8FAFD] p-7 sm:p-9 shadow-soft">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#075BD6] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                      Recommended
                    </span>
                    <span className="font-display text-xs font-bold text-[#075BD6]">Method 01</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black text-[#0A1020]">
                    Online Application
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-[#4B5563]">
                    Fill and submit the online Membership Form available on our website.
                  </p>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    Instant digital recording, faster verification by our secretariat, and immediate submission receipt.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="#application-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075BD6] px-5 py-2.5 xs:px-6 xs:py-3 font-display text-[0.84rem] xs:text-sm font-bold text-white whitespace-nowrap min-h-[44px] max-w-full shadow-soft transition-all hover:bg-[#0649B8]"
                  >
                    <span>Go to Online Form Below</span>
                    <Arrow className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Pathway 2: Manual */}
            <Reveal delay={90}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-[#DCE2EA] bg-white p-7 sm:p-9 shadow-soft">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                      Manual Submission
                    </span>
                    <span className="font-display text-xs font-bold text-slate-400">Method 02</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black text-[#0A1020]">
                    Download &amp; Submit Offline
                  </h3>
                  <p className="mt-3 text-xs italic text-slate-500">- or, if you prefer to apply manually -</p>

                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563]">
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        2
                      </span>
                      <span>Download and complete the MMM Pakistan Membership Application Form.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        3
                      </span>
                      <span>
                        Attach the required documents - a copy of your CNIC, a recent photograph, and your degree/registration certificate or student ID card, as applicable to your category.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        4
                      </span>
                      <span>
                        Submit the completed form to your nearest MMM chapter, or email it to{" "}
                        <a href="mailto:muslimmedics@gmail.com" className="font-semibold text-[#075BD6] underline">
                          muslimmedics@gmail.com
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        5
                      </span>
                      <span>Our membership secretariat will review and verify your details and confirm your membership.</span>
                    </li>
                  </ol>
                </div>

                <div className="mt-8">
                  <a
                    href="/MMM_Pakistan_Membership_Application_Form.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-4.5 py-2.5 xs:px-6 xs:py-2.5 font-display text-[0.84rem] xs:text-sm font-bold text-[#334155] whitespace-nowrap min-h-[44px] max-w-full transition-all hover:border-[#075BD6] hover:text-[#075BD6]"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download Membership Form (PDF)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Online Application Form Section                                */}
      {/* -------------------------------------------------------------- */}
      <section id="application-form" className="py-20 lg:py-28 border-b border-[#DCE2EA] bg-[#F5F7FA]">
        <div className="shell">
          <div className="rounded-3xl border border-[#DCE2EA] bg-white p-4 xs:p-6 sm:p-10 lg:p-12 shadow-soft min-w-0 max-w-full overflow-hidden">
            <div className="border-b border-[#DCE2EA] pb-8 text-center sm:text-left">
              <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#075BD6]">
                Online Registration
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1020]">
                MUSLIM MEDICAL MISSION (MMM) PAKISTAN
              </h2>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#075BD6]">
                MEMBERSHIP APPLICATION FORM
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
                Johar Town, Lahore, Pakistan | MedicalMissionPak@gmail.com | +92 333 7404802
              </p>
            </div>

            <div className="mt-8">
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Get in Touch (Contact & Secretariat)                           */}
      {/* -------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 border-b border-[#DCE2EA] bg-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#075BD6]">
                Support &amp; Verification
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.4vw,2.75rem)] leading-[1.1] font-black text-[#0A1020]">
                Get in Touch
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[#4B5563]">
                Need help with your application or have questions regarding regulatory verification, institutional registration, or local chapter activities? Reach out directly to our membership secretariat.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-[#DCE2EA] bg-[#F8FAFD] p-6 text-sm sm:text-base">
                <div className="font-display font-black text-[#0A1020]">
                  Muslim Medical Mission (MMM) Pakistan
                </div>
                <div className="flex items-start gap-3 text-[#4B5563]">
                  <svg className="h-5 w-5 shrink-0 text-[#075BD6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>347-G III, Johar Town, Lahore-54000, Pakistan</span>
                </div>

                <div className="flex items-center gap-3 text-[#4B5563]">
                  <svg className="h-5 w-5 shrink-0 text-[#075BD6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="https://www.mmm.org.pk" target="_blank" rel="noreferrer" className="hover:text-[#075BD6]">
                    Website: www.mmm.org.pk
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[#4B5563]">
                  <svg className="h-5 w-5 shrink-0 text-[#075BD6]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <a href="https://facebook.com/muslimmedicalmission" target="_blank" rel="noreferrer" className="hover:text-[#075BD6]">
                    Facebook: muslimmedicalmission
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[#4B5563]">
                  <svg className="h-5 w-5 shrink-0 text-[#075BD6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:muslimmedics@gmail.com" className="hover:text-[#075BD6]">
                    Email: muslimmedics@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[#4B5563]">
                  <svg className="h-5 w-5 shrink-0 text-[#075BD6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+923337404802" className="hover:text-[#075BD6]">
                    Phone: +92 333 7404802
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <div className="rounded-3xl border border-blue-100 bg-[#F0F7FF] p-7 text-center">
                <span className="font-display text-lg font-black text-[#0A1020]">
                  Ready to serve with MMM Pakistan?
                </span>
                <p className="mt-2 text-sm text-[#4B5563]">
                  Fill the online application form above, or download the printable form for manual submission.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#application-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#046BD2] px-5 py-2.5 xs:px-6 xs:py-3 font-display text-[0.84rem] xs:text-sm font-bold text-white whitespace-nowrap min-h-[44px] max-w-full shadow-soft transition-all hover:bg-[#e53935]"
                  >
                    <span>Join MMM Pakistan Today</span>
                    <Arrow className="h-4 w-4 shrink-0" />
                  </a>
                  <a
                    href="/MMM_Pakistan_Membership_Application_Form.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-5 py-2.5 xs:px-6 xs:py-3 font-display text-[0.84rem] xs:text-sm font-bold text-[#334155] whitespace-nowrap min-h-[44px] max-w-full transition-all hover:border-[#075BD6] hover:text-[#075BD6]"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download Membership Form</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* Preserved Institutional Partners Section (#partners anchor)     */}
      {/* -------------------------------------------------------------- */}
      <section id="partners" className="py-20 lg:py-24 border-b border-[#DCE2EA] bg-[#F8FAFD]">
        <div className="shell-wide">
          <SectionHead
            title="Partner with us"
            lead="The organisations below shorten the distance between a donation and a treated patient more than any amount of marketing does."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partners.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 border border-[#DCE2EA] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="block h-1 w-10 bg-[#EF3B19]" aria-hidden />
                  <h3 className="mt-5 font-display text-[1.2rem] sm:text-[1.28rem] font-black text-[#0A1020]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-[#4B5563]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-4 py-2.5 xs:px-6 xs:py-3 font-display text-[0.75rem] xs:text-[0.82rem] sm:text-sm font-bold text-[#334155] whitespace-nowrap min-h-[44px] max-w-full transition-all hover:border-[#075BD6] hover:text-[#075BD6]"
            >
              <span>Start an Institutional Partnership Conversation</span>
              <Arrow className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
