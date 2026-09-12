"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";
import { LiquidTransition } from "./LiquidTransition";

const DURATION = 5000; // Exact 5 seconds automatic slide interval

type Slide = {
  id: string;
  pillar: string;
  badge: string;
  image: string;
  alt: string;
  headline: string;
  highlight: string;
  subtext: string;
  subtextMobile?: string;
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
    subtextMobile: "From earthquakes to floods, MMM's pre-trained teams deploy within hours, not days.",
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
    subtextMobile: "Hands-on training certifying everyday volunteers as frontline lifesavers.",
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

export function Hero() {
  const [active, setActive] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [waveKey, setWaveKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setActive((i) => (i + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Robust 5-second automatic sliding that resets whenever slide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [active]);

  // Animate the liquid transition progress whenever the active slide changes
  useEffect(() => {
    setTransitionProgress(0);
    setWaveKey((k) => k + 1);

    const start = performance.now();
    const TRANSITION_MS = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / TRANSITION_MS, 1);
      // easeInOutCubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setTransitionProgress(eased);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] h-[100svh] flex-col overflow-hidden bg-[#0A1020]"
      aria-label="Muslim Medical Mission"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full Viewport Modern Zoom-Blur Dissolve Carousel */}
      <div className="absolute inset-0 h-full w-full">
        {slides.map((s, i) => {
          const on = i === active;
          return (
            <div
              key={s.id}
              className={`hero-slide absolute inset-0 h-full w-full ${
                on ? "hero-slide-active" : "hero-slide-inactive"
              }`}
              aria-hidden={!on}
            >
              {/* Background Image — Ken Burns zoom on the active slide */}
              <img
                src={s.image}
                alt={s.alt}
                className={`h-full w-full object-cover ${on ? "hero-kenburns" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Slide Text Content */}
              <div className="absolute inset-0 flex items-center pt-24 pb-20 sm:pt-36 sm:pb-28">
                <div className="shell-wide">
                  {/* Subtle Translucent Navy Hero Text Panel */}
                  <div className="w-full max-w-[580px] rounded-[14px] border border-white/25 bg-[rgba(5,18,35,0.55)] p-4.5 xs:p-5.5 sm:p-7 md:py-[28px] md:px-[32px] backdrop-blur-md">
                    {/* Pillar Category Badge */}
                    <div
                      key={`badge-${active}`}
                      className="hero-reveal mb-3.5 flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/20 bg-[#0A1020]/80 px-3 py-1 backdrop-blur-md"
                      style={{ animationDelay: "0ms" }}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF3B19] animate-pulse" />
                      <span className="font-display text-[0.74rem] sm:text-[0.78rem] font-black uppercase tracking-wider text-white">
                        {s.badge}
                      </span>
                      <span className="text-white/40 text-xs">•</span>
                      <span className="font-display text-[0.72rem] sm:text-[0.75rem] font-medium text-slate-300">
                        {s.pillar.split("•")[0].trim()}
                        <span className="hidden sm:inline">
                          {" • "}
                          {s.pillar.split("•").slice(1).join("•").trim()}
                        </span>
                      </span>
                    </div>

                    {/* Headline with Brand Red Highlight (Noto Serif font) */}
                    <h1
                      key={`headline-${active}`}
                      className={`hero-reveal mt-4 sm:mt-5 font-display font-black leading-[1.08] text-white ${
                        s.id === "conference"
                          ? "text-[clamp(1.7rem,3.2vw,2.8rem)]"
                          : "text-[clamp(2.15rem,4vw,3.5rem)]"
                      }`}
                      style={{ animationDelay: "120ms" }}
                    >
                      {s.headline}{" "}
                      <span className="text-[#EF3B19]">
                        {s.highlight}
                      </span>
                    </h1>

                    {/* Subtext (Noto Sans font) */}
                    <p
                      key={`subtext-${active}`}
                      className="hero-reveal mt-3.5 sm:mt-4 text-[1.02rem] sm:text-[1.12rem] leading-relaxed text-slate-100"
                      style={{ animationDelay: "240ms" }}
                    >
                      {s.subtextMobile ? (
                        <>
                          <span className="sm:hidden">{s.subtextMobile}</span>
                          <span className="hidden sm:inline">{s.subtext}</span>
                        </>
                      ) : (
                        s.subtext
                      )}
                    </p>

                    {/* Dual Call To Actions (Responsive: stacked/wrapped on mobile, side-by-side on desktop) */}
                    <div
                      key={`ctas-${active}`}
                      className="hero-reveal mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full"
                      style={{ animationDelay: "360ms" }}
                    >
                      <Link
                        href={s.primaryCta.href}
                      className="group inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#075BD6] min-h-[44px] px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3.5 font-display text-[0.82rem] xs:text-[0.88rem] sm:text-[0.94rem] font-bold text-white transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] active:scale-98 text-center"
                    >
                      <span className="whitespace-normal">{s.primaryCta.label}</span>
                      <Arrow className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="group inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/50 bg-black/35 min-h-[44px] px-3.5 py-2.5 xs:px-4.5 xs:py-3 sm:px-5.5 sm:py-3.5 font-display text-[0.82rem] xs:text-[0.88rem] sm:text-[0.94rem] font-bold text-white backdrop-blur-md transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] hover:text-white active:scale-98 text-center"
                    >
                      <span className="whitespace-normal">{s.secondaryCta.label}</span>
                      <Arrow className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>

      {/* WebGL Liquid Distortion Transition overlay */}
      <LiquidTransition
        currentImage={slides[active].image}
        nextImage={slides[(active + 1) % slides.length].image}
        progress={transitionProgress}
        waveKey={waveKey}
        className="z-[5]"
      />

      {/* Edge Navigation Arrows for desktop */}
      <div className="pointer-events-none absolute inset-y-0 inset-x-4 sm:inset-x-8 z-20 hidden md:flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0A1020]/60 text-white backdrop-blur-md transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] active:scale-95 cursor-pointer shadow-lg"
        >
          <svg className="h-5 w-5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0A1020]/60 text-white backdrop-blur-md transition-all duration-250 hover:bg-[#e53935] hover:border-[#e53935] active:scale-95 cursor-pointer shadow-lg"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Capsule Bar with 5-second Animated Progress Bar */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-3 sm:px-4 sm:bottom-8">
        <div className="flex w-full max-w-2xl items-center justify-between gap-3 rounded-full border border-white/20 bg-[#0A1020]/85 px-4 py-2.5 backdrop-blur-md shadow-2xl sm:px-6 sm:py-3">
          {/* Operation & Location Link */}
          <Link
            href={slides[active].href}
            className="group flex min-w-0 items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:text-[#EF3B19]"
          >
            <span className="truncate font-display font-bold text-white">
              {slides[active].operation}
            </span>
            <span className="text-white/40">•</span>
            <span className="hidden truncate font-normal text-slate-300 sm:inline">{slides[active].place}</span>
            <Arrow className="h-3.5 w-3.5 shrink-0 text-[#EF3B19] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Sliding Indicator Dots with 5-second countdown progress bar */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-bold text-white/50 mr-1 hidden sm:inline">
              0{active + 1} / 0{slides.length}
            </span>

            {slides.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.operation}`}
                  className={`relative cursor-pointer rounded-full overflow-hidden transition-all duration-300 ${
                    on
                      ? "h-2.5 w-8 sm:w-14 bg-white/25 shadow-[0_0_10px_rgba(239,59,25,0.4)]"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/90"
                  }`}
                >
                  {on && (
                    <span
                      key={`progress-${active}`}
                      className="absolute inset-0 rounded-full bg-[#EF3B19] animate-hero-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
