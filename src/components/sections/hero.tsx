"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { InkReveal, OrigamiReveal } from "@/components/origami/origami-reveal";
import {
  PaperCrane,
  InkSplat,
  CreaseLine,
  InkSeal,
  FoldCorner,
} from "@/components/origami/decor";
import { Crane3D } from "@/components/origami/crane-3d";
import { Counter } from "@/components/origami/counter";
import { MagneticButton } from "@/components/origami/magnetic-button";
import { StaggerText } from "@/components/origami/stagger-text";
import { profile, stats } from "@/lib/portfolio-data";

/** Parse a stat value into a numeric target + display parts for the Counter. */
function parseStat(value: string) {
  // e.g. "₹1,00,000", "50+", "2,000+", "90+"
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: value, indian: false };
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3];
  const numeric = parseInt(numStr, 10);
  const indian = prefix.includes("₹");
  return { numeric, prefix, suffix, indian };
}

export function Hero() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });

  // Mouse-driven 3D parallax for the hero (background blobs + crane drift)
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: px, y: py });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-paper paper-grain paper-fibers"
    >
      {/* Ambient ink-wash blobs with parallax depth */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px]"
        style={{
          transform: `translate(${parallax.x * 30}px, ${parallax.y * 30}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <InkSplat className="h-full w-full" opacity={0.1} />
      </div>
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[640px] w-[640px]"
        style={{
          transform: `translate(${parallax.x * -45}px, ${parallax.y * -45}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <InkSplat className="h-full w-full" color="var(--cinnabar)" opacity={0.06} />
      </div>
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-[380px] w-[380px]"
        style={{
          transform: `translate(${parallax.x * 20}px, ${parallax.y * 20}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <InkSplat className="h-full w-full" color="var(--moss)" opacity={0.05} />
      </div>

      {/* Floating paper cranes with parallax */}
      <div
        className="pointer-events-none absolute left-[6%] top-[22%] hidden md:block"
        style={{
          transform: `translate(${parallax.x * 50}px, ${parallax.y * 50}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <PaperCrane className="text-ink/40" size={64} />
      </div>
      <div
        className="pointer-events-none absolute right-[8%] top-[30%] hidden md:block"
        style={{
          transform: `translate(${parallax.x * -60}px, ${parallax.y * -60}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <PaperCrane className="text-cinnabar/50" size={48} />
      </div>
      <div
        className="pointer-events-none absolute right-[18%] bottom-[22%] hidden lg:block"
        style={{
          transform: `translate(${parallax.x * -35}px, ${parallax.y * -35}px)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <PaperCrane className="text-gold/60" size={56} />
      </div>

      {/* Self-drawing 3D crane — hero centerpiece accent */}
      <div className="pointer-events-none absolute right-[6%] top-[14%] hidden xl:block">
        <Crane3D size={180} />
      </div>

      {/* Decorative crease grid */}
      <CreaseLine orientation="horizontal" className="top-1/3 opacity-50" />
      <CreaseLine orientation="vertical" className="left-1/2 opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8 md:pt-32">
        {/* Eyebrow row */}
        <OrigamiReveal variant="unfold-up" gentle className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-light/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-cinnabar"
                  style={{ animation: "ink-pulse 2.4s ease-in-out infinite" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cinnabar" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-wash">
                Open to AI/ML &amp; GenAI roles
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>
        </OrigamiReveal>

        {/* Name — the centerpiece, unfolding */}
        <div className="relative">
          <h1 className="font-display font-semibold leading-[0.92] tracking-[-0.02em] text-ink">
            <span className="block overflow-hidden">
              <InkReveal
                as="span"
                className="block text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[128px]"
              >
                S. Ravant
              </InkReveal>
            </span>
            <span className="block overflow-hidden">
              <InkReveal
                as="span"
                delay={180}
                className="block text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[128px] gold-leaf"
              >
                Vignesh
              </InkReveal>
            </span>
          </h1>

          {/* Seal stamp tucked into the name */}
          <OrigamiReveal
            variant="unfold-up"
            delay={500}
            className="absolute -right-2 top-0 sm:right-2 md:right-8"
          >
            <InkSeal label="AI" size={64} />
          </OrigamiReveal>
        </div>

        {/* Role + tagline with staggered word reveal */}
        <OrigamiReveal variant="unfold-up" gentle delay={360} className="mt-8 max-w-3xl">
          <p className="font-display text-2xl font-medium text-ink sm:text-3xl md:text-4xl">
            <StaggerText
              text="AI/ML Engineer crafting"
              delay={600}
              className="text-ink"
            />{" "}
            <span className="relative whitespace-nowrap text-cinnabar">
              <StaggerText text="generative AI" delay={900} className="text-cinnabar" />
              <svg
                className="absolute -bottom-1.5 left-0 h-2 w-full text-cinnabar/40"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 5 Q 50 1, 100 4 T 198 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: 220,
                    animation: "draw-path 1.4s ease 1.4s forwards",
                  }}
                />
              </svg>
            </span>{" "}
            <StaggerText text="& multi-agent systems." delay={1100} className="text-ink" />
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            <StaggerText
              text={profile.bio}
              delay={1300}
              stagger={12}
              className="text-ink-soft"
            />
          </p>
        </OrigamiReveal>

        {/* CTA row — magnetic buttons */}
        <OrigamiReveal variant="unfold-up" gentle delay={520} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects" variant="primary">
              Unfold the work
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#ventures" variant="ghost">
              <Sparkles className="h-4 w-4 text-gold" />
              See the ventures
            </MagneticButton>
          </div>
        </OrigamiReveal>

        {/* Stats row — with animated counters */}
        <OrigamiReveal variant="unfold-up" delay={700} className="mt-16 md:mt-20">
          <div className="group relative grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40 shadow-fold md:grid-cols-4">
            <FoldCorner size={28} position="top-right" />
            {stats.map((s, i) => {
              const parsed = parseStat(s.value);
              return (
                <div
                  key={s.label}
                  className="spotlight-card relative bg-paper-light/80 p-5 backdrop-blur-sm transition-colors hover:bg-paper-light sm:p-6"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {parsed.numeric > 0 ? (
                      <Counter
                        target={parsed.numeric}
                        prefix={parsed.prefix}
                        suffix={parsed.suffix}
                        indian={parsed.indian}
                      />
                    ) : (
                      s.value
                    )}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink-wash sm:text-sm">{s.label}</p>
                  <p className="text-[11px] text-ink-soft">{s.sub}</p>
                </div>
              );
            })}
          </div>
        </OrigamiReveal>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            Scroll to unfold
          </span>
          <ArrowDown
            className="h-4 w-4 text-ink-soft"
            style={{ animation: "crane-float 2.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
