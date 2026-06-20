"use client";

import * as React from "react";
import { ArrowUpRight, Award, Check, Star } from "lucide-react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { CreaseLine, InkSeal } from "@/components/origami/decor";
import { TiltCard } from "@/components/origami/tilt-card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-paper py-24 md:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Things I've folded and shipped"
          title="Projects"
          subtitle="From India's first AI + Blockchain certificate system to a distributed multi-agent research platform — each project is a fold that holds its shape under pressure."
        />

        {/* Featured project — CertiChain */}
        <OrigamiReveal variant="unfold-up" className="mb-8">
          <article className="group relative overflow-hidden rounded-3xl border border-cinnabar/30 bg-gradient-to-br from-paper-light via-paper-light to-paper-deep/50 shadow-fold-lg">

            {/* Award ribbon */}
            <div className="absolute right-6 top-6 z-10 flex items-center gap-2 rounded-full bg-cinnabar px-4 py-1.5 text-paper-light shadow-fold">
              <Award className="h-3.5 w-3.5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">Featured · 1st Prize</span>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              {/* Left: identity */}
              <div className="relative lg:col-span-5 lg:border-r lg:border-border">
                <div className="relative h-full p-7 sm:p-9">
                  <CreaseLine orientation="vertical" className="right-0 top-0 hidden opacity-40 lg:block" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-paper-light shadow-fold">
                      <featured.icon className="h-6 w-6" />
                    </span>
                    <InkSeal label="01" size={44} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cinnabar">{featured.tagline}</p>

                  <div className="mt-6 rounded-xl border border-cinnabar/20 bg-cinnabar/[0.06] p-4">
                    <p className="flex items-center gap-2 font-display text-base font-semibold text-cinnabar">
                      <Star className="h-4 w-4 fill-cinnabar" />
                      {featured.award}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-paper-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-wash"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: detail */}
              <div className="lg:col-span-7">
                <div className="p-7 sm:p-9">
                  <p className="text-base leading-relaxed text-ink-wash sm:text-lg">
                    {featured.description}
                  </p>
                  <CreaseLine orientation="horizontal" className="relative my-6 h-px" />
                  <ul className="space-y-3">
                    {featured.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-wash sm:text-base">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cinnabar/15 text-cinnabar">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="leading-relaxed text-ink-wash">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </OrigamiReveal>

        {/* Other projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <OrigamiReveal
              key={p.name}
              variant={i === 0 ? "unfold-left" : "unfold-right"}
              delay={i * 120}
              className="h-full"
            >
              <TiltCard max={9} className="h-full rounded-2xl">
              <article className="group shimmer-3d relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-paper-light/80 p-6 shadow-fold backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:bg-paper-light hover:shadow-fold-lg sm:p-7">

                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper-light shadow-fold">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                    Project · {String(i + 2).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-cinnabar">{p.tagline}</p>

                <p className="mt-4 text-sm leading-relaxed text-ink-wash">{p.description}</p>

                <CreaseLine orientation="horizontal" className="relative my-5 h-px" />

                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-wash">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-paper-deep/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-wash"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              </TiltCard>
            </OrigamiReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
