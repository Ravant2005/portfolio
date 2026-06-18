"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { InkReveal, OrigamiReveal } from "./origami-reveal";
import { InkSeal, CreaseLine } from "./decor";

interface SectionHeaderProps {
  index: string; // e.g. "01"
  title: string;
  /** small line above the title */
  eyebrow?: string;
  /** optional supporting line below */
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  index,
  title,
  eyebrow,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "relative mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <OrigamiReveal variant="unfold-up" gentle>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <InkSeal label={index} size={52} />
          {eyebrow && (
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-soft">
              {eyebrow}
            </span>
          )}
        </div>
      </OrigamiReveal>

      <OrigamiReveal variant="unfold-up" gentle delay={120}>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          <InkReveal>{title}</InkReveal>
        </h2>
      </OrigamiReveal>

      {subtitle && (
        <OrigamiReveal variant="unfold-up" gentle delay={220}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </OrigamiReveal>
      )}

      <CreaseLine
        orientation="horizontal"
        className="mt-8 h-px"
        glow
      />
    </div>
  );
}
