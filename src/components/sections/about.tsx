"use client";

import * as React from "react";
import Image from "next/image";
import { GraduationCap, Languages, Mail, MapPin, Trophy, Users } from "lucide-react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { FoldCorner, CreaseLine, InkSplat } from "@/components/origami/decor";
import { profile, education } from "@/lib/portfolio-data";

const quickFacts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech AI & DS · 8.2 CGPA" },
  { icon: MapPin, label: "Based in", value: "Chennai, India" },
  { icon: Users, label: "Mentored", value: "50+ students in AI" },
  { icon: Trophy, label: "Hackathon", value: "₹1,00,000 · 1st place" },
  { icon: Languages, label: "Languages", value: "Tamil · English" },
  { icon: Mail, label: "Email", value: "team.yovaanai@gmail.com" },
];

export function About() {
  return (
    <section id="about" className="relative bg-paper paper-fibers py-24 md:py-32">
      <InkSplat className="-right-40 top-20 h-[460px] w-[460px]" opacity={0.06} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="The maker behind the folds"
          title="About"
          subtitle="An engineer who treats AI the way an origami master treats paper — patient, deliberate, and obsessed with the final fold."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Portrait — fold-out panel */}
          <div className="lg:col-span-5">
            <OrigamiReveal variant="unfold-left" className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-paper-light shadow-fold-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/futurepreneur-event.jpg"
                    alt={profile.name + " speaking at Futurepreneur 2025"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  {/* paper-tone overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(241,231,207,0.18), transparent 50%)",
                    }}
                  />
                </div>
                <FoldCorner size={36} position="top-right" />
                <FoldCorner size={28} position="bottom-left" />

                {/* caption seal */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="rounded-lg bg-paper-light/90 px-4 py-2.5 backdrop-blur-sm">
                    <p className="font-display text-sm font-semibold text-ink">
                      {profile.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                      Futurepreneur 2025 · Speaker
                    </p>
                  </div>
                  <span className="seal-stamp flex h-11 w-11 items-center justify-center rounded-md font-display text-sm font-bold">
                    RV
                  </span>
                </div>
              </div>
            </OrigamiReveal>
          </div>

          {/* Bio + quick facts */}
          <div className="lg:col-span-7">
            <OrigamiReveal variant="unfold-right" gentle delay={120}>
              <div className="space-y-5">
                <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
                  I build{" "}
                  <span className="text-cinnabar">production-grade AI</span> — multi-agent
                  systems, LLM pipelines, and full-stack products that ship.
                </p>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  {profile.bio}
                </p>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  I&apos;m currently the founder of{" "}
                  <span className="font-semibold text-ink">Yovaan AI</span> (privacy-first
                  memory preservation) and{" "}
                  <span className="font-semibold text-ink">Baarak</span> (AI skill-training
                  for college students). I taught 50+ students AI &amp; aerospace at an IIT
                  Madras-incubated startup, and I lead tech outreach for{" "}
                  <span className="font-semibold text-ink">Futurepreneur</span> across the
                  Andaman &amp; Nicobar Islands.
                </p>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  {profile.seeking}.
                </p>
              </div>
            </OrigamiReveal>

            {/* Quick facts grid — folded paper chips */}
            <OrigamiReveal variant="unfold-up" gentle delay={260} className="mt-8">
              <CreaseLine orientation="horizontal" className="relative mb-6 h-px" />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {quickFacts.map((f, i) => (
                  <div
                    key={f.label}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-paper-light/70 p-3.5 transition-all duration-300 hover:border-cinnabar/40 hover:bg-paper-light hover:shadow-fold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-deep text-cinnabar transition-colors group-hover:bg-cinnabar group-hover:text-paper-light">
                      <f.icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                        {f.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-ink">{f.value}</p>
                    </div>
                    <span className="ml-auto font-mono text-[10px] text-ink-soft/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </OrigamiReveal>

            {/* Education strip */}
            <OrigamiReveal variant="unfold-up" gentle delay={400} className="mt-6">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-paper-light to-paper-deep/40 p-5 shadow-fold">
                <FoldCorner size={24} position="top-right" />
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-paper-light">
                    <education.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
                      Education
                    </p>
                    <p className="font-display text-base font-semibold text-ink">
                      {education.degree}
                    </p>
                    <p className="text-sm text-ink-wash">
                      {education.school} · CGPA {education.cgpa}
                    </p>
                    <p className="font-mono text-[11px] text-ink-soft">{education.period}</p>
                  </div>
                </div>
              </div>
            </OrigamiReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
