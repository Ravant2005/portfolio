"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "@/components/origami/counter";
import { MagneticButton } from "@/components/origami/magnetic-button";
import { profile, stats } from "@/lib/portfolio-data";

function parseStat(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: value, indian: false };
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3];
  const numeric = parseInt(numStr, 10);
  const indian = prefix.includes("₹");
  return { numeric, prefix, suffix, indian };
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-x-hidden bg-background paper-grain paper-fibers"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -left-60 top-0 h-[700px] w-[700px] rounded-full bg-cinnabar/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-gold/8 blur-[140px]" />

      {/* Main container — vertically centered */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-24 pb-12 sm:px-10 lg:grid-cols-2 lg:gap-12">

        {/* ── LEFT: Text column ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">

          {/* ── Mobile-only Portrait — appears FIRST before name on mobile ── */}
          <motion.div
            {...fadeIn(0.05)}
            className="block lg:hidden mb-4 relative w-full max-w-[180px] sm:max-w-[210px] mx-auto"
          >
            {/* Ambient back-glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(ellipse at 50% 35%, rgba(184,57,42,0.25) 0%, transparent 60%)",
                filter: "blur(36px)",
              }}
            />
            {/* Soft glow beneath feet */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[32px] w-[140px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(184,57,42,0.18) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />
            <Image
              src="/images/ravant-portrait.png"
              alt="S. Ravant Vignesh — AI/ML Engineer"
              width={340}
              height={440}
              priority
              quality={100}
              className="relative z-10 h-auto w-full object-contain"
              style={{
                filter: "contrast(1.06) brightness(1.03) saturate(1.08) drop-shadow(0 12px 28px rgba(28,24,19,0.2))",
              }}
            />
          </motion.div>

          {/* Name — tight below portrait on mobile */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-display font-bold leading-[1.0] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            style={{
              background: "linear-gradient(140deg, var(--cinnabar) 0%, var(--gold) 40%, var(--cinnabar) 70%, var(--cinnabar-deep) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            S. Ravant<br className="hidden sm:block" /> Vignesh
          </motion.h1>

          {/* Role tagline — right below name, closer on mobile */}
          <motion.p {...fadeUp(0.25)} className="mt-2 lg:mt-5 text-lg sm:text-xl md:text-2xl font-semibold text-ink max-w-xl">
            AI/ML Engineer crafting{" "}
            <span className="text-cinnabar">
              generative AI
            </span>{" "}
            &amp; multi-agent systems.
          </motion.p>

          {/* Availability badge — below tagline */}
          <motion.div {...fadeUp(0.35)} className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-light/80 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cinnabar animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cinnabar" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-wash">
                Open to AI/ML &amp; GenAI roles
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              <MapPin className="h-3.5 w-3.5 text-cinnabar" />
              {profile.location}
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p {...fadeUp(0.45)} className="mt-3 max-w-lg text-sm text-ink-soft md:text-base leading-relaxed">
            {profile.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <MagneticButton href="#projects" variant="primary">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#ventures" variant="ghost">
              <Sparkles className="h-4 w-4 text-gold" />
              See Ventures
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.65)} className="mt-10 w-full max-w-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border/40 shadow-fold">
              {stats.map((s, i) => {
                const parsed = parseStat(s.value);
                return (
                  <div key={s.label} className="spotlight-card relative bg-paper-light/80 p-5 backdrop-blur-sm transition-colors hover:bg-paper-light">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {parsed.numeric > 0 ? (
                        <Counter target={parsed.numeric} prefix={parsed.prefix} suffix={parsed.suffix} indian={parsed.indian} />
                      ) : (
                        s.value
                      )}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-ink-wash">{s.label}</p>
                    {s.sub && <p className="text-[10px] text-ink-soft/80 mt-0.5">{s.sub}</p>}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Desktop Portrait column ── */}
        <div className="hidden lg:flex relative items-end justify-center lg:order-2 lg:h-full">
          <motion.div {...fadeIn(0.15)} className="relative w-full flex justify-center">
            {/* Soft glow beneath feet */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60px] w-[280px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(184,57,42,0.2) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            {/* Ambient back-glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                background: "radial-gradient(ellipse at 50% 35%, rgba(184,57,42,0.25) 0%, transparent 60%)",
                filter: "blur(60px)",
              }}
            />
            {/* Portrait — free-standing, no circle */}
            <Image
              src="/images/ravant-portrait.png"
              alt="S. Ravant Vignesh — AI/ML Engineer"
              width={520}
              height={680}
              priority
              quality={100}
              className="relative z-10 h-auto w-[280px] sm:w-[340px] lg:w-[400px] xl:w-[460px] object-contain"
              style={{
                filter: "contrast(1.06) brightness(1.03) saturate(1.08) drop-shadow(0 20px 40px rgba(28,24,19,0.25))",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 text-cinnabar animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
