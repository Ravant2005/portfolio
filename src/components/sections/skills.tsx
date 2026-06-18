"use client";

import * as React from "react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { FoldCorner, CreaseLine, InkSplat } from "@/components/origami/decor";
import { TiltCard } from "@/components/origami/tilt-card";
import { Marquee } from "@/components/origami/marquee";
import { cn } from "@/lib/utils";
import { skillGroups } from "@/lib/portfolio-data";

const accentClasses: Record<
  string,
  { iconBg: string; iconText: string; chip: string; chipHover: string; bar: string }
> = {
  ink: {
    iconBg: "bg-ink",
    iconText: "text-paper-light",
    chip: "border-border bg-paper-deep/40 text-ink-wash",
    chipHover: "hover:border-ink hover:bg-ink hover:text-paper-light",
    bar: "bg-ink",
  },
  cinnabar: {
    iconBg: "bg-cinnabar",
    iconText: "text-paper-light",
    chip: "border-cinnabar/20 bg-cinnabar/[0.06] text-cinnabar",
    chipHover: "hover:border-cinnabar hover:bg-cinnabar hover:text-paper-light",
    bar: "bg-cinnabar",
  },
  moss: {
    iconBg: "bg-moss",
    iconText: "text-paper-light",
    chip: "border-moss/25 bg-moss/[0.08] text-moss",
    chipHover: "hover:border-moss hover:bg-moss hover:text-paper-light",
    bar: "bg-moss",
  },
  gold: {
    iconBg: "bg-gold",
    iconText: "text-paper-light",
    chip: "border-gold/30 bg-gold/[0.08] text-gold",
    chipHover: "hover:border-gold hover:bg-gold hover:text-paper-light",
    bar: "bg-gold",
  },
  clay: {
    iconBg: "bg-clay",
    iconText: "text-paper-light",
    chip: "border-clay/25 bg-clay/[0.08] text-clay",
    chipHover: "hover:border-clay hover:bg-clay hover:text-paper-light",
    bar: "bg-clay",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-b from-paper to-paper-deep/25 py-24 paper-fibers md:py-32">
      <InkSplat className="-right-44 top-20 h-[460px] w-[460px]" opacity={0.05} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="The folds in my toolkit"
          title="Skills"
          subtitle="A tactile stack — from LangChain and RAG to smart contracts and CI/CD. Each cluster opens like a different folded compartment."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const a = accentClasses[group.accent] ?? accentClasses.ink;
            return (
              <OrigamiReveal
                key={group.category}
                variant="unfold-up"
                delay={(i % 3) * 100}
                className="h-full"
              >
              <TiltCard max={9} className="h-full rounded-2xl">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-paper-light/80 p-5 shadow-fold backdrop-blur-sm transition-all duration-400 hover:bg-paper-light hover:shadow-fold-lg sm:p-6">
                  <FoldCorner size={24} position="top-right" />

                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-fold transition-transform duration-300 group-hover:scale-105",
                        a.iconBg,
                        a.iconText
                      )}
                    >
                      <group.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                        Cluster · {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-base font-bold leading-tight text-ink">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-ink-soft">
                      {group.skills.length}
                    </span>
                  </div>

                  <CreaseLine orientation="horizontal" className="relative my-4 h-px" />

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          "rounded-md border px-2.5 py-1 text-xs font-medium transition-all duration-200",
                          a.chip,
                          a.chipHover
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-2 left-5 right-5 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      a.bar
                    )}
                  />
                </div>
              </TiltCard>
              </OrigamiReveal>
            );
          })}
        </div>

        {/* Infinite skills marquee strip */}
        <OrigamiReveal variant="unfold-up" gentle delay={120} className="mt-10">
          <Marquee
            items={[
              "LangChain", "RAG", "Multi-Agent Systems", "FastAPI", "Next.js",
              "Hugging Face", "OpenAI API", "Polygon", "IPFS", "Supabase",
              "Generative AI", "Prompt Engineering", "Smart Contracts", "CI/CD",
            ]}
          />
        </OrigamiReveal>
      </div>
    </section>
  );
}
