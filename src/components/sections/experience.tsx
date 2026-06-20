"use client";

import * as React from "react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { CreaseLine } from "@/components/origami/decor";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative bg-paper-deep/20 py-24 md:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Where I've been folding"
          title="Experience"
          subtitle="Three roles across AI founding, aerospace education, and global full-stack delivery — each one a different fold of the same craft."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cinnabar/40 via-ink/20 to-transparent sm:left-6"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <OrigamiReveal
                key={exp.company}
                variant="unfold-left"
                delay={i * 120}
                className="relative pl-14 sm:pl-20"
              >
                {/* timeline node */}
                <div className="absolute left-[7px] top-6 sm:left-[17px]">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-cinnabar/40"
                      style={{ animation: "ink-pulse 2.4s ease-in-out infinite" }}
                    />
                    <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-paper bg-ink text-paper-light">
                      <exp.icon className="h-2.5 w-2.5" />
                    </span>
                  </span>
                </div>

                <article className="group relative overflow-hidden rounded-2xl border border-border bg-paper-light/80 p-5 shadow-fold backdrop-blur-sm transition-all duration-400 hover:-translate-y-0.5 hover:bg-paper-light hover:shadow-fold-lg sm:p-7">

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cinnabar">
                        {exp.company}
                        <span className="font-normal text-ink-soft"> · {exp.place}</span>
                      </p>
                    </div>
                    <span className="rounded-full border border-border bg-paper-deep/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-wash">
                      {exp.period}
                    </span>
                  </div>

                  <CreaseLine orientation="horizontal" className="relative my-4 h-px" />

                  <p className="text-sm leading-relaxed text-ink-wash sm:text-base">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm text-ink-wash"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="pointer-events-none absolute -bottom-4 right-4 font-display text-[80px] font-bold leading-none text-ink/[0.035]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
              </OrigamiReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
