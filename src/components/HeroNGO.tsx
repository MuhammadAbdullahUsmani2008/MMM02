"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, Stethoscope, Siren, GraduationCap, Droplets, HandHeart } from "lucide-react";

type Mission = {
  id: string;
  badge: string;
  pillar: string;
  headline: string;
  highlight: string;
  subtext: string;
  mediaUrl: string;
  accentColor: string;
  icon: React.ComponentType<{ className?: string }>;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  operation: string;
  place: string;
  href: string;
};

const missions: Mission[] = [
  {
    id: "humanitarian",
    badge: "Mercy in Motion",
    pillar: "Pillar A • Free Healthcare & Outpatient Care",
    headline: "Mercy in Motion:",
    highlight: "Free healthcare for those in need.",
    subtext:
      "Free Medical Camps, Welfare Clinics and Surgical Care delivered to the doorstep of those who need it most - without discrimination of Race, Religion or Region.",
    mediaUrl: "/media/field/free-medical-camp-medicines.jpg",
    accentColor: "text-emerald-400",
    icon: Stethoscope,
    primaryCta: { label: "Explore Relief Work", href: "/what-we-do" },
    secondaryCta: { label: "Donate to Camps", href: "/donate" },
    operation: "Free Medical Camps",
    place: "South Punjab, Sindh & Rural Districts",
    href: "/what-we-do",
  },
  {
    id: "disaster",
    badge: "First to Reach",
    pillar: "Pillar B • Disasters & Emergency Relief",
    headline: "When Calamity Strikes,",
    highlight: "we are already moving.",
    subtext:
      "From the 2005 Kashmir earthquake to the floods and droughts of today, MMM's emergency teams are pre-trained to deploy within hours, not days.",
    mediaUrl: "/media/field/hero-disaster-response.jpg",
    accentColor: "text-teal-300",
    icon: Siren,
    primaryCta: { label: "Emergency Response", href: "/disaster-response" },
    secondaryCta: { label: "Support Rapid Response", href: "/donate" },
    operation: "Rapid Emergency Response",
    place: "Kashmir to Indus Basin",
    href: "/disaster-response",
  },
  {
    id: "rescue",
    badge: "Life Support Training",
    pillar: "Pillar B • Emergency Training",
    headline: "Equipping First Responders",
    highlight: "in collaboration with Rescue 1122.",
    subtext:
      "Hands-on Basic Life Support, Trauma Response, Haemorrhage Control and Disaster Triage Certifying Everyday Volunteers as Frontline Community Lifesavers.",
    mediaUrl: "/media/field/bls-rescue-1122.jpg",
    accentColor: "text-amber-300",
    icon: HandHeart,
    primaryCta: { label: "Explore Responder Courses", href: "/what-we-do/training" },
    secondaryCta: { label: "Volunteer with Us", href: "/get-involved" },
    operation: "BLS & Responders Training",
    place: "In collaboration with Rescue 1122",
    href: "/what-we-do/training",
  },
  {
    id: "conference",
    badge: "MMM Academy",
    pillar: "Pillar C • Educational & Professional Development",
    headline: "Building Tomorrow's Healers",
    highlight: "with clinical excellence & ethics.",
    subtext:
      "Conferences, CME Seminars, Hands-on Emergency Training with Punjab Emergency Service (Rescue 1122), and Scholarships Cultivating Compassionate Healthcare Leaders.",
    mediaUrl: "/media/field/national-conference-stage.jpg",
    accentColor: "text-cyan-300",
    icon: GraduationCap,
    primaryCta: { label: "Discover MMM Academy", href: "/what-we-do/training" },
    secondaryCta: { label: "Join as Member", href: "/get-involved" },
    operation: "National Medical Conferences",
    place: "Lahore & Academic Centers",
    href: "/what-we-do/training",
  },
  {
    id: "gaza",
    badge: "Gaza Relief",
    pillar: "Flagship Relief Mission",
    headline: "Gaza Relief Mission:",
    highlight: "Clean water & daily lifeline aid.",
    subtext:
      "Operating community Water Tankers, Emergency Nutrition Packages, Hot Meals and Tented Field Clinics to sustain displaced families in Gaza.",
    mediaUrl: "/media/gaza-water/gaza-water-01.jpg",
    accentColor: "text-emerald-300",
    icon: Droplets,
    primaryCta: { label: "Support Gaza Relief", href: "/donate" },
    secondaryCta: { label: "Gaza Operations", href: "/what-we-do/gaza-field-clinics" },
    operation: "Water for Life & Clinics",
    place: "Displaced Camps in Gaza",
    href: "/what-we-do/gaza-field-clinics",
  },
];

export function HeroNGO() {
  const [activeId, setActiveId] = useState(missions[0].id);
  const active = missions.find((m) => m.id === activeId) ?? missions[0];

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 text-white"
      aria-label="Muslim Medical Mission — Choose a Mission"
    >
      {/* Ambient spiritual glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22),transparent_65%)] blur-2xl" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-36 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left column — typography & actions */}
          <div className="lg:col-span-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Active field operations across Pakistan & Gaza
            </motion.div>

            {/* Dynamic headline — fixed height so layout stays static */}
            <div className="mt-6 min-h-[12rem] sm:min-h-[13rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-tight"
                >
                  {active.headline}{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                    {active.highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Dynamic subtext — fixed height so layout stays static */}
            <div className="mt-5 min-h-[7rem] sm:min-h-[6.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${active.id}-sub`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
                >
                  {active.subtext}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Pillar + operation line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
              <span className={`font-semibold ${active.accentColor}`}>{active.badge}</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-400">{active.pillar}</span>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href={active.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-display text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-400/40 active:scale-95"
              >
                <Heart className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                {active.primaryCta.label}
              </Link>
              <Link
                href={active.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-display text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10 active:scale-95"
              >
                {active.secondaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right column — dynamic canvas frame */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={active.mediaUrl}
                      alt={active.headline}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                {/* Active mission label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <span className={`h-2 w-2 rounded-full ${active.accentColor} bg-current animate-pulse`} />
                  {active.operation} • {active.place}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission switcher tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {missions.map((m) => {
            const isActive = m.id === activeId;
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                aria-pressed={isActive}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {m.badge}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-950 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950" />
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
