"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { CreaseLine } from "@/components/origami/decor";
import { TiltCard } from "@/components/origami/tilt-card";
import { cn } from "@/lib/utils";
import { ventures } from "@/lib/portfolio-data";

const accentMap: Record<string, { ring: string; chip: string; dot: string; glow: string }> = {
  ink: {
    ring: "border-ink/20",
    chip: "bg-paper-deep text-ink-wash",
    dot: "bg-ink",
    glow: "shadow-[0_30px_60px_-30px_rgba(28,24,19,0.4)]",
  },
  cinnabar: {
    ring: "border-cinnabar/30",
    chip: "bg-cinnabar/10 text-cinnabar",
    dot: "bg-cinnabar",
    glow: "shadow-[0_30px_60px_-30px_rgba(184,57,42,0.45)]",
  },
};

export function Ventures() {
  return (
    <section
      id="ventures"
      className="relative bg-gradient-to-b from-paper via-paper-deep/30 to-paper py-24 md:py-32"
    >

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="Companies I'm folding into existence"
          title="Ventures"
          subtitle="Two AI companies — one preserving memory, one building futures. Both shaped around the same belief: technology should unfold with the person, not at them."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ventures.map((v, i) => {
            const a = accentMap[v.accent] ?? accentMap.ink;
            return (
              <OrigamiReveal
                key={v.name}
                variant={i === 0 ? "unfold-left" : "unfold-right"}
                delay={i * 120}
                className="h-full"
              >
                <TiltCard max={8} className="h-full rounded-3xl">
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-paper-light/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 sm:p-8",
                    a.ring,
                    a.glow
                  )}
                >
                  <CreaseLine orientation="horizontal" className="top-[88px] opacity-40" />

                  {/* Header: logo + meta */}
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-ink shadow-fold">
                      <Image
                        src={v.logo}
                        alt={`${v.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <v.icon className="h-4 w-4 text-cinnabar" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                          {v.role}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                        {v.name}
                      </h3>
                      <p className="font-mono text-[11px] text-ink-soft">{v.period}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-relaxed text-ink-wash sm:text-base">
                    {v.description}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-5 space-y-2.5">
                    {v.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink-wash">
                        <span
                          className={cn(
                            "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            a.chip
                          )}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {v.tags.map((t) => (
                      <span
                        key={t}
                        className={cn(
                          "rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                          a.chip
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Website link for Baarak */}
                  {v.website && (
                    <div className="mt-auto pt-6">
                      <Link
                        href={`https://${v.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper-light transition-all duration-300 hover:bg-cinnabar"
                      >
                        Visit {v.website}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  )}

                  {/* big watermark number */}
                  <span className="pointer-events-none absolute -bottom-6 -right-2 font-display text-[120px] font-bold leading-none text-ink/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
                </TiltCard>
              </OrigamiReveal>
            );
          })}
        </div>

        {/* Baarak tagline banner */}
        <OrigamiReveal variant="unfold-up" gentle delay={200} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-cinnabar/25 bg-ink p-6 text-center sm:p-8">
            <CreaseLine orientation="horizontal" className="top-1/2 opacity-20" />
            <p className="font-display text-xl font-medium text-paper-light sm:text-2xl md:text-3xl">
              &ldquo;We don&apos;t just prepare you for the future.{" "}
              <span className="gold-leaf">We build it with you.</span>&rdquo;
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-paper-deep/70">
              — Baarak · baarak.in
            </p>
          </div>
        </OrigamiReveal>
      </div>
    </section>
  );
}
