"use client";

import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";

const stats = [
  {
    value: 1000000,
    suffix: "+",
    label: "Patients Served",
    sublabel: "Free consultation & medicine",
    useGrouping: true,
    badgeColor: "bg-[#FFECE8] text-[#EF3B19]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    value: 16,
    suffix: "",
    label: "Annual Medical Conferences",
    sublabel: "Educational & professional development",
    useGrouping: false,
    badgeColor: "bg-[#DCE6FB] text-[#0649B8]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Service",
    sublabel: "Continuous frontline care",
    useGrouping: false,
    badgeColor: "bg-[#FFECE8] text-[#EF3B19]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7M4 21V4a1 1 0 011-1h14a1 1 0 011 1v17" />
      </svg>
    ),
  },
  {
    value: 12,
    suffix: "+",
    label: "Response to National Disasters",
    sublabel: "Rapid emergency response",
    useGrouping: false,
    badgeColor: "bg-[#DCE6FB] text-[#0649B8]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Serving Gaza",
    sublabel: "Water, food & medicine",
    useGrouping: false,
    badgeColor: "bg-[#FFECE8] text-[#EF3B19]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Flagship Projects",
    sublabel: "Regular standing programmes",
    useGrouping: false,
    badgeColor: "bg-[#DCE6FB] text-[#0649B8]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export function ImpactBand() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#0649B8] via-[#075BD6] to-[#0649B8] py-9 sm:py-11 text-white shadow-xl border-y border-[#075BD6]/50">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(114,201,77,0.3) 0%, transparent 45%)",
        }}
      />

      <div className="relative shell-wide">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Left Title Lockup (UNDA Style "Our Impact") */}
          <div className="flex items-center gap-4 lg:col-span-4 border-b border-white/20 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0649B8] shadow-md">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-[1.45rem] sm:text-[1.6rem] font-black tracking-tight text-white leading-none">
                Our Impact
              </h2>
              <p className="mt-1 text-xs sm:text-[0.82rem] leading-snug text-blue-100">
                Real change. Measurable impact. Two decades of verified front-line care.
              </p>
            </div>
          </div>

          {/* Right Metrics (UNDA Circular Stat Badges in Green & Blue) */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-5 lg:col-span-8">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 60}
                className="h-full"
                as="div"
              >
                <div className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  {/* UNDA style circular icon badge */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${stat.badgeColor}`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value & Label */}
                  <div className="min-w-0 flex-1">
                    <span className="block font-display text-[1.3rem] leading-none font-black tracking-tight text-white sm:text-[1.85rem]">
                      <CountUp to={stat.value} suffix={stat.suffix} useGrouping={stat.useGrouping} />
                    </span>
                    <dt className="mt-1 font-display text-[0.78rem] font-bold text-white leading-tight sm:text-[0.88rem]">
                      {stat.label}
                    </dt>
                    <dd className="hidden text-[0.72rem] text-blue-200/90 sm:block">
                      {stat.sublabel}
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
