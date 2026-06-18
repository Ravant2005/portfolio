"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { InkReveal, OrigamiReveal } from "@/components/origami/origami-reveal";
import { PaperCrane, InkSplat, CreaseLine, InkSeal, FoldCorner } from "@/components/origami/decor";
import { profile, stats } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-paper paper-grain paper-fibers"
    >
      {/* Ambient ink-wash blobs */}
      <InkSplat className="-left-40 top-10 h-[520px] w-[520px]" opacity={0.1} />
      <InkSplat className="-right-32 bottom-0 h-[640px] w-[640px]" color="var(--cinnabar)" opacity={0.06} />
      <InkSplat className="left-1/3 top-1/2 h-[380px] w-[380px]" color="var(--moss)" opacity={0.05} />

      {/* Floating paper cranes */}
      <PaperCrane
        className="absolute left-[6%] top-[22%] hidden text-ink/40 md:block"
        size={64}
      />
      <PaperCrane
        className="absolute right-[8%] top-[30%] hidden text-cinnabar/50 md:block"
        size={48}
      />
      <PaperCrane
        className="absolute left-[14%] bottom-[14%] hidden text-moss/50 lg:block"
        size={40}
      />
      <PaperCrane
        className="absolute right-[18%] bottom-[22%] hidden text-gold/60 lg:block"
        size={56}
      />

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
                Open to AI/ML & GenAI roles
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
              <InkReveal as="span" className="block text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[128px]">
                S. Ravant
              </InkReveal>
            </span>
            <span className="block overflow-hidden">
              <InkReveal as="span" delay={180} className="block text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[128px] gold-leaf">
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

        {/* Role + tagline */}
        <OrigamiReveal variant="unfold-up" gentle delay={360} className="mt-8 max-w-3xl">
          <p className="font-display text-2xl font-medium text-ink sm:text-3xl md:text-4xl">
            AI/ML Engineer crafting{" "}
            <span className="relative whitespace-nowrap text-cinnabar">
              generative AI
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
                />
              </svg>
            </span>{" "}
            &amp; multi-agent systems.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {profile.bio}
          </p>
        </OrigamiReveal>

        {/* CTA row */}
        <OrigamiReveal variant="unfold-up" gentle delay={520} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper-light shadow-fold transition-all duration-300 hover:bg-cinnabar hover:shadow-fold-lg"
            >
              Unfold the work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#ventures"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/25 bg-paper-light/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-ink hover:bg-paper-light"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              See the ventures
            </Link>
          </div>
        </OrigamiReveal>

        {/* Stats row — unfolding paper strip */}
        <OrigamiReveal variant="unfold-up" delay={700} className="mt-16 md:mt-20">
          <div className="relative grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40 shadow-fold md:grid-cols-4">
            <FoldCorner size={28} position="top-right" />
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative bg-paper-light/80 p-5 backdrop-blur-sm transition-colors hover:bg-paper-light sm:p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-wash sm:text-sm">{s.label}</p>
                <p className="text-[11px] text-ink-soft">{s.sub}</p>
              </div>
            ))}
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
