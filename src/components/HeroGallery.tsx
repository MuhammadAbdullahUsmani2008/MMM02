"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./ui";

type Slide = {
  id: string;
  pillar: string;
  badge: string;
  image: string;
  alt: string;
  headline: string;
  highlight: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  operation: string;
  place: string;
  href: string;
};

const slides: Slide[] = [
  {
    id: "humanitarian",
    pillar: "Pillar A • Free Healthcare & Outpatient Care",
    badge: "Mercy in Motion",
    image: "/media/field/free-medical-camp-medicines.jpg",
    alt: "Muslim Medical Mission doctors providing free consultations and medicine at a rural outpatient medical camp with official banner",
    headline: "Mercy in Motion:",
    highlight: "Free healthcare for those in need.",
    subtext: "Free Medical Camps, Welfare Clinics and Surgical Care delivered to the doorstep of those who need it most - without discrimination of Race, Religion or Region.",
    primaryCta: { label: "Explore Relief Work", href: "/what-we-do" },
    secondaryCta: { label: "Donate to Camps", href: "/donate" },
    operation: "Free Medical Camps",
    place: "South Punjab, Sindh & Rural Districts",
    href: "/what-we-do",
  },
  {
    id: "disaster",
    pillar: "Pillar B • Disasters & Emergency Relief",
    badge: "First to Reach",
    image: "/media/field/hero-disaster-response.jpg",
    alt: "Muslim Medical Mission emergency rapid response team navigating flood waters with banner on rescue boat",
    headline: "When Calamity Strikes,",
    highlight: "we are already moving.",
    subtext: "From the 2005 Kashmir earthquake to the floods and droughts of today, MMM's emergency teams are pre-trained to deploy within hours, not days.",
    primaryCta: { label: "Emergency Response", href: "/disaster-response" },
    secondaryCta: { label: "Support Rapid Response", href: "/donate" },
    operation: "Rapid Emergency Response",
    place: "Kashmir to Indus Basin",
    href: "/disaster-response",
  },
  {
    id: "rescue",
    pillar: "Pillar B • Emergency Training",
    badge: "Life Support Training",
    image: "/media/field/bls-rescue-1122.jpg",
    alt: "Basic Life Support and First Responder Training in collaboration with Punjab Emergency Service Rescue 1122 and Muslim Medical Mission banner",
    headline: "Equipping First Responders",
    highlight: "in collaboration with Rescue 1122.",
    subtext: "Hands-on Basic Life Support, Trauma Response, Haemorrhage Control and Disaster Triage Certifying Everyday Volunteers as Frontline Community Lifesavers.",
    primaryCta: { label: "Explore Responder Courses", href: "/what-we-do/training" },
    secondaryCta: { label: "Volunteer with Us", href: "/get-involved" },
    operation: "BLS & Responders Training",
    place: "In collaboration with Rescue 1122",
    href: "/what-we-do/training",
  },
  {
    id: "conference",
    pillar: "Pillar C • Educational & Professional Development",
    badge: "MMM Academy",
    image: "/media/field/national-conference-stage.jpg",
    alt: "Audience and delegates gathered at the Muslim Medical Mission National Medical Conference with grand official stage banner",
    headline: "Building Tomorrow's Healers",
    highlight: "with clinical excellence & ethics.",
    subtext: "Conferences, CME Seminars, Hands-on Emergency Training with Punjab Emergency Service (Rescue 1122), and Scholarships Cultivating Compassionate Healthcare Leaders.",
    primaryCta: { label: "Discover MMM Academy", href: "/what-we-do/training" },
    secondaryCta: { label: "Join as Member", href: "/get-involved" },
    operation: "National Medical Conferences",
    place: "Lahore & Academic Centers",
    href: "/what-we-do/training",
  },
  {
    id: "gaza",
    pillar: "Flagship Relief Mission",
    badge: "Gaza Relief",
    image: "/media/gaza-water/gaza-water-01.jpg",
    alt: "Muslim Medical Mission clean drinking water distribution tanker in Gaza",
    headline: "Gaza Relief Mission:",
    highlight: "Clean water & daily lifeline aid.",
    subtext: "Operating community Water Tankers, Emergency Nutrition Packages, Hot Meals and Tented Field Clinics to sustain displaced families in Gaza.",
    primaryCta: { label: "Support Gaza Relief", href: "/donate" },
    secondaryCta: { label: "Gaza Operations", href: "/what-we-do/gaza-field-clinics" },
    operation: "Water for Life & Clinics",
    place: "Displaced Camps in Gaza",
    href: "/what-we-do/gaza-field-clinics",
  },
];

export function HeroGallery() {
  const [activeId, setActiveId] = useState(slides[0].id);
  const active = slides.find((s) => s.id === activeId) ?? slides[0];
  const others = slides.filter((s) => s.id !== activeId);

  return (
    <section
      className="relative isolate grid h-[100svh] grid-rows-2 md:grid-rows-[3fr_1fr] overflow-hidden bg-white pt-[104px] sm:pt-[120px] md:pt-[124px]"
      aria-label="Muslim Medical Mission — Featured Missions"
    >
      {/* ============================================================ */}
      {/* TOP HALF — Large featured image + text content               */}
      {/* ============================================================ */}
      <div className="relative min-h-0 w-full overflow-hidden">
        {/* Featured image (absolute so it fills without forcing height) */}
        <img
          key={active.id}
          src={active.image}
          alt={active.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Text content */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="shell-wide pb-5 sm:pb-7">
            <div className="flex w-full max-w-[640px] h-[480px] flex-col justify-center rounded-[14px] border border-white/25 bg-[#0A1020]/80 p-4.5 xs:p-5.5 sm:p-7 md:py-[28px] md:px-[32px] shadow-[0_16px_40px_-12px_rgba(10,16,32,0.5)] backdrop-blur-md">
              {/* Pillar Category Badge */}
              <div className="mb-3 flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/20 bg-[#0A1020]/80 px-3 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF3B19] animate-pulse" />
                <span className="font-display text-[0.72rem] sm:text-[0.78rem] font-black uppercase tracking-wider text-white">
                  {active.badge}
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="font-display text-[0.7rem] sm:text-[0.75rem] font-medium text-slate-300">
                  {active.pillar}
                </span>
              </div>

              {/* Headline with Brand Red Highlight */}
              <h1 className="font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-black leading-[1.08] text-white">
                {active.headline}{" "}
                <span className="text-[#EF3B19]">{active.highlight}</span>
              </h1>

              {/* Subtext */}
              <p className="mt-3 hidden max-w-xl text-[0.98rem] sm:mt-3.5 sm:block sm:text-[1.05rem] leading-relaxed text-slate-100">
                {active.subtext}
              </p>

              {/* Dual CTAs */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <Link
                  href={active.primaryCta.href}
                  className="group inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#075BD6] min-h-[44px] px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3.5 font-display text-[0.82rem] xs:text-[0.88rem] sm:text-[0.94rem] font-bold text-white transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] active:scale-98 whitespace-nowrap text-center"
                >
                  <span className="whitespace-nowrap">{active.primaryCta.label}</span>
                  <Arrow className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
                </Link>
                <Link
                  href={active.secondaryCta.href}
                  className="group inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/50 bg-black/35 min-h-[44px] px-3.5 py-2.5 xs:px-4.5 xs:py-3 sm:px-5.5 sm:py-3.5 font-display text-[0.82rem] xs:text-[0.88rem] sm:text-[0.94rem] font-bold text-white backdrop-blur-md transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] hover:text-white active:scale-98 whitespace-nowrap text-center"
                >
                  <span className="whitespace-nowrap">{active.secondaryCta.label}</span>
                  <Arrow className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM HALF — Thumbnail gallery of the other missions        */}
      {/* ============================================================ */}
      <div className="relative min-h-0 bg-white">
        <div className="flex h-full flex-col justify-center shell-wide py-4 sm:py-6">
          {/* Section label */}
          <div className="mb-3 flex items-center justify-between">
            <p className="font-display text-[0.72rem] sm:text-[0.8rem] font-black uppercase tracking-wider text-slate-500">
              More Missions
            </p>
            <span className="text-xs font-bold text-slate-400">
              0{slides.findIndex((s) => s.id === active.id) + 1} / 0{slides.length}
            </span>
          </div>

          {/* Thumbnail grid */}
          <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {others.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                aria-label={`Show mission: ${s.operation}`}
                className="group relative h-full w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left transition-all duration-300 hover:border-[#EF3B19]/70 hover:shadow-[0_10px_30px_-10px_rgba(239,59,25,0.4)] active:scale-[0.98]"
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge dot */}
                <span className="absolute left-2.5 top-2.5 h-2 w-2 rounded-full bg-[#EF3B19] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                  <span className="block font-display text-[0.72rem] sm:text-[0.82rem] font-bold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {s.operation}
                  </span>
                  <span className="mt-0.5 block truncate text-[0.62rem] sm:text-[0.7rem] font-medium text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {s.place}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
