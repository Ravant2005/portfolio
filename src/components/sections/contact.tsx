"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal, InkReveal } from "@/components/origami/origami-reveal";
import { FoldCorner, CreaseLine, InkSplat, PaperCrane, InkSeal } from "@/components/origami/decor";
import { profile } from "@/lib/portfolio-data";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "cinnabar" as const,
  },
  {
    label: "LinkedIn",
    value: "in/s-ravant-vignesh",
    href: profile.linkedin,
    icon: Linkedin,
    accent: "ink" as const,
  },
  {
    label: "GitHub",
    value: "github.com/Ravant2005",
    href: profile.github,
    icon: Github,
    accent: "moss" as const,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
    accent: "gold" as const,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 text-paper-light paper-fibers md:py-32"
    >
      {/* ambient ink + cranes on dark */}
      <InkSplat className="-left-32 top-10 h-[480px] w-[480px]" color="var(--cinnabar)" opacity={0.18} />
      <InkSplat className="-right-32 bottom-0 h-[560px] w-[560px]" color="var(--paper-light)" opacity={0.05} />
      <PaperCrane className="absolute left-[8%] top-[18%] hidden text-cinnabar/40 md:block" size={56} />
      <PaperCrane className="absolute right-[10%] bottom-[16%] hidden text-gold/40 lg:block" size={44} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <OrigamiReveal variant="unfold-up" gentle>
            <div className="flex items-center gap-3">
              <InkSeal label="09" size={52} />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-paper-deep/70">
                Let&apos;s fold something together
              </span>
            </div>
          </OrigamiReveal>
          <OrigamiReveal variant="unfold-up" gentle delay={120}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper-light sm:text-5xl md:text-6xl">
              <InkReveal>Get in touch.</InkReveal>
            </h2>
          </OrigamiReveal>
          <OrigamiReveal variant="unfold-up" gentle delay={220}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-deep/80 md:text-lg">
              I&apos;m actively seeking{" "}
              <span className="font-semibold text-paper-light">
                AI/ML Engineer, Generative AI, or AI Product Development
              </span>{" "}
              roles. Whether it&apos;s a role, a collaboration, or a fold worth making — the
              paper&apos;s ready.
            </p>
          </OrigamiReveal>
          <CreaseLine orientation="horizontal" className="relative mt-8 h-px opacity-30" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* CTA card */}
          <div className="lg:col-span-5">
            <OrigamiReveal variant="unfold-left">
              <div className="relative overflow-hidden rounded-3xl border border-paper-light/15 bg-paper-light/[0.06] p-7 backdrop-blur-sm sm:p-8">
                <FoldCorner size={32} position="top-right" />
                <Sparkles className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-display text-2xl font-bold text-paper-light">
                  Open to opportunities
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-deep/80">
                  Based in {profile.location}. Available for remote, hybrid, and on-site roles
                  across India and beyond.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-paper-deep/80">
                  <MapPin className="h-4 w-4 text-cinnabar" />
                  {profile.location}
                </div>
                <Link
                  href={`mailto:${profile.email}`}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cinnabar px-6 py-3.5 text-sm font-semibold text-paper-light shadow-fold transition-all duration-300 hover:bg-paper-light hover:text-ink sm:w-auto"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </OrigamiReveal>
          </div>

          {/* Contact channels */}
          <div className="lg:col-span-7">
            <OrigamiReveal variant="unfold-right" delay={120}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactItems.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-paper-light/15 bg-paper-light/[0.05] p-5 backdrop-blur-sm transition-all duration-300 hover:border-cinnabar/50 hover:bg-paper-light/[0.1]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper-light/10 text-paper-light transition-colors group-hover:bg-cinnabar">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-deep/60">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-paper-light">
                        {c.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-paper-deep/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cinnabar" />
                  </Link>
                ))}
              </div>
            </OrigamiReveal>

            {/* ventures quick links */}
            <OrigamiReveal variant="unfold-up" gentle delay={220} className="mt-4">
              <div className="rounded-2xl border border-paper-light/15 bg-paper-light/[0.05] p-5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-deep/60">
                  My ventures
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link
                    href="https://baarak.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-cinnabar/40 bg-cinnabar/10 px-4 py-2 text-sm font-semibold text-paper-light transition-all duration-300 hover:bg-cinnabar"
                  >
                    Baarak
                    <span className="font-mono text-[10px] text-paper-deep/60">baarak.in</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="inline-flex items-center gap-2 rounded-full border border-paper-light/20 px-4 py-2 text-sm font-semibold text-paper-light">
                    Yovaan AI
                    <span className="font-mono text-[10px] text-paper-deep/60">pre-MVP</span>
                  </span>
                </div>
              </div>
            </OrigamiReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
