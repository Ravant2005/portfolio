"use client";

import * as React from "react";
import Image from "next/image";
import { Quote, ChevronDown, MapPin, Award } from "lucide-react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { TiltCard } from "@/components/origami/tilt-card";
import { CreaseLine, InkSeal } from "@/components/origami/decor";
import { cn } from "@/lib/utils";
import { recommenders } from "@/lib/recommendations-data";

const accentClasses: Record<string, { ring: string; chip: string; dot: string; quote: string; seal: string }> = {
  cinnabar: {
    ring: "border-cinnabar/30",
    chip: "bg-cinnabar/10 text-cinnabar border-cinnabar/20",
    dot: "bg-cinnabar",
    quote: "text-cinnabar",
    seal: "bg-cinnabar",
  },
  gold: {
    ring: "border-gold/30",
    chip: "bg-gold/10 text-gold border-gold/25",
    dot: "bg-gold",
    quote: "text-gold",
    seal: "bg-gold",
  },
  moss: {
    ring: "border-moss/30",
    chip: "bg-moss/10 text-moss border-moss/25",
    dot: "bg-moss",
    quote: "text-moss",
    seal: "bg-moss",
  },
  clay: {
    ring: "border-clay/30",
    chip: "bg-clay/10 text-clay border-clay/25",
    dot: "bg-clay",
    quote: "text-clay",
    seal: "bg-clay",
  },
  ink: {
    ring: "border-ink/20",
    chip: "bg-paper-deep text-ink-wash border-border",
    dot: "bg-ink",
    quote: "text-ink",
    seal: "bg-ink",
  },
};

function RecommendationCard({
  person,
  index,
}: {
  person: (typeof recommenders)[number];
  index: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const a = accentClasses[person.accent] ?? accentClasses.ink;

  return (
    <OrigamiReveal
      variant={index % 2 === 0 ? "unfold-left" : "unfold-right"}
      delay={(index % 2) * 100}
      className="h-full"
    >
      <TiltCard max={7} className="h-full rounded-2xl">
        <article
          className={cn(
            "group shimmer-3d relative flex h-full flex-col overflow-hidden rounded-2xl border bg-paper-light/85 p-5 shadow-fold backdrop-blur-sm transition-all duration-400 hover:bg-paper-light hover:shadow-fold-lg sm:p-6",
            a.ring
          )}
        >

          {/* Header: avatar + name + title */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-border shadow-fold sm:h-20 sm:w-20">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <span
                className={cn(
                  "absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-paper-light shadow-fold",
                  a.seal
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">
                {person.name}
              </h3>
              <p className="mt-0.5 text-xs leading-snug text-ink-soft sm:text-sm">
                {person.title}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] text-ink-soft">
                <MapPin className="h-3 w-3" />
                {person.location}
              </p>
            </div>
          </div>

          <CreaseLine orientation="horizontal" className="relative my-4 h-px" />

          {/* Description */}
          <p className="text-sm leading-relaxed text-ink-wash">{person.description}</p>

          {/* Achievements */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {person.achievements.slice(0, 4).map((ach) => (
              <span
                key={ach}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium",
                  a.chip
                )}
              >
                <Award className="h-2.5 w-2.5" />
                {ach}
              </span>
            ))}
          </div>

          {/* Relationship + date */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
              {person.relationship}
            </span>
            <span className="font-mono text-[10px] text-ink-soft">{person.date}</span>
          </div>

          <CreaseLine orientation="horizontal" className="relative my-4 h-px" />

          {/* Short recommendation with quote */}
          <div className="relative flex-1">
            <Quote className={cn("absolute -left-1 -top-1 h-7 w-7 opacity-15", a.quote)} />
            <p className="pl-6 text-sm leading-relaxed text-ink-wash">
              {person.shortRecommendation}
            </p>
          </div>

          {/* Expand full recommendation */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group/exp mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-border bg-paper-deep/30 px-4 py-1.5 text-xs font-semibold text-ink-wash transition-all duration-300 hover:border-ink hover:bg-paper-light"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read full recommendation"}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>

          {/* Full recommendation — expandable */}
          {expanded && (
            <div className="mt-4 rounded-xl border border-border bg-paper-deep/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cinnabar">
                Full recommendation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-wash">
                {person.fullRecommendation}
              </p>
            </div>
          )}

          {/* Big watermark number */}
          <span className="pointer-events-none absolute -bottom-4 right-4 font-display text-[72px] font-bold leading-none text-ink/[0.035]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </article>
      </TiltCard>
    </OrigamiReveal>
  );
}

export function Recommendations() {
  return (
    <section
      id="recommendations"
      className="relative bg-gradient-to-b from-paper-deep/25 to-paper py-24 md:py-32"
    >

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="07"
          eyebrow="Words from those I've folded alongside"
          title="Recommendations"
          subtitle="Leaders, founders, and judges who've seen the work firsthand — and put it in writing."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {recommenders.map((person, i) => (
            <RecommendationCard key={person.name} person={person} index={i} />
          ))}
        </div>

        {/* Summary banner */}
        <OrigamiReveal variant="unfold-up" gentle delay={120} className="mt-8">
          <div className="relative flex flex-wrap items-center justify-center gap-6 overflow-hidden rounded-2xl border border-border bg-paper-light/70 p-6 shadow-fold sm:p-7">
            <InkSeal label="04" size={48} />
            <p className="font-display text-base font-medium text-ink sm:text-lg">
              4 written recommendations from{" "}
              <span className="text-cinnabar">CEOs, founders, and summit judges</span>
            </p>
            <div className="flex -space-x-3">
              {recommenders.map((p) => (
                <div
                  key={p.name}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-paper shadow-fold"
                  title={p.name}
                >
                  <Image src={p.image} alt={p.name} fill sizes="40px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </OrigamiReveal>
      </div>
    </section>
  );
}
