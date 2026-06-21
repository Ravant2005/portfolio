"use client";

import * as React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { CreaseLine, InkSeal } from "@/components/origami/decor";
import { cn } from "@/lib/utils";
import { achievements, volunteer } from "@/lib/portfolio-data";

const accentDot: Record<string, string> = {
  cinnabar: "bg-cinnabar",
  gold: "bg-gold",
  moss: "bg-moss",
  ink: "bg-ink",
};

export function Achievements() {
  const featured = achievements[0]; // AGAM
  const others = achievements.slice(1);

  return (
    <section
      id="achievements"
      className="relative bg-paper-deep/25 py-24 md:py-32"
    >

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="06"
          eyebrow="Folds that won"
          title="Achievements"
          subtitle="Recognition that proves the folds hold — internationally and beyond."
        />

        {/* Featured achievement with photo */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <OrigamiReveal variant="unfold-left">
              <figure className="group relative overflow-hidden rounded-3xl border border-cinnabar/30 bg-paper-light shadow-fold-lg">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                  <Image
                    src={featured.image!}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />

                  {/* Floating prize badge */}
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-cinnabar px-4 py-2 text-paper-light shadow-fold-lg">
                    <span className="font-display text-base font-bold">₹1,00,000</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-80">
                      Prize
                    </span>
                  </div>

                  {/* caption */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-deep/80">
                      AGAM 9.0 · Best Agile Mind
                    </p>
                    <p className="font-display text-lg font-bold text-paper-light sm:text-xl">
                      International Hackathon Winner — 1st Prize
                    </p>
                  </figcaption>
                </div>
              </figure>
            </OrigamiReveal>
          </div>

          <div className="lg:col-span-5">
            <OrigamiReveal variant="unfold-right" delay={120}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-paper-light/80 p-6 shadow-fold backdrop-blur-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <InkSeal label="01" size={48} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cinnabar">
                      Featured Award
                    </p>
                    <p className="font-display text-base font-bold text-ink">
                      AGAM 9.0 — 1st Prize
                    </p>
                  </div>
                </div>
                <CreaseLine orientation="horizontal" className="relative my-5 h-px" />
                <p className="text-sm leading-relaxed text-ink-wash sm:text-base">
                  {featured.detail}
                </p>
                <div className="mt-5 rounded-xl border border-cinnabar/20 bg-cinnabar/[0.06] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cinnabar">
                    The winning project
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-ink">
                    CertiChain
                  </p>
                  <p className="text-xs text-ink-soft">
                    India&apos;s first AI + Blockchain certificate authenticity system
                  </p>
                </div>
              </div>
            </OrigamiReveal>
          </div>
        </div>

        {/* Other awards */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((a, i) => (
            <OrigamiReveal
              key={a.title}
              variant={i === 0 ? "unfold-left" : "unfold-right"}
              delay={i * 120}
              className="h-full"
            >
              <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-border bg-paper-light/80 p-5 shadow-fold backdrop-blur-sm transition-all duration-400 hover:bg-paper-light hover:shadow-fold-lg sm:p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-paper-light shadow-fold transition-transform duration-300 group-hover:scale-105">
                  <a.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    Award · {String(i + 2).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-base font-bold leading-tight text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-wash">{a.detail}</p>
                </div>
                <span className={cn("h-2 w-2 shrink-0 rounded-full", accentDot[a.accent])} />
              </div>
            </OrigamiReveal>
          ))}
        </div>

        {/* Volunteer spotlight — Futurepreneur */}
        <OrigamiReveal variant="unfold-up" gentle delay={160} className="mt-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-paper-light to-paper-deep/40 p-6 shadow-fold sm:p-8">
            <CreaseLine orientation="horizontal" className="top-[80px] opacity-40" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-fold">
                  <Image
                    src={volunteer.image}
                    alt={volunteer.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  <div className="absolute bottom-2 left-2 rounded-md bg-paper-light/90 px-2.5 py-1 backdrop-blur-sm">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                      {volunteer.period}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
                  Volunteer · Spotlight
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                  {volunteer.role} — {volunteer.org}
                </h3>
                <p className="font-mono text-[11px] text-ink-soft">
                  {volunteer.place} · {volunteer.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-wash sm:text-base">
                  {volunteer.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="rounded-lg border border-border bg-paper-light/70 px-4 py-2">
                    <p className="font-display text-xl font-bold text-cinnabar">1000+</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                      Students reached
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-paper-light/70 px-4 py-2">
                    <p className="font-display text-xl font-bold text-moss">10+</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                      Schools
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-paper-light/70 px-4 py-2">
                    <p className="font-display text-xl font-bold text-gold">4</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                      NGOs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OrigamiReveal>
      </div>
    </section>
  );
}
