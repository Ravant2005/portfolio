"use client";

import * as React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/origami/section-header";
import { OrigamiReveal } from "@/components/origami/origami-reveal";
import { FoldCorner, CreaseLine, InkSplat } from "@/components/origami/decor";
import { TiltCard } from "@/components/origami/tilt-card";
import { gallery } from "@/lib/portfolio-data";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-paper py-24 paper-grain paper-fibers md:py-32">
      <InkSplat className="-right-40 top-24 h-[440px] w-[440px]" opacity={0.05} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="08"
          eyebrow="Folds in motion — moments from the field"
          title="Gallery"
          subtitle="Speaking, teaching, winning. The paper rarely sits still."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <OrigamiReveal
              key={g.src}
              variant={i === 1 ? "unfold-up" : i === 0 ? "unfold-left" : "unfold-right"}
              delay={i * 110}
              className={i === 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard max={11} className="rounded-2xl">
              <figure className="group relative overflow-hidden rounded-2xl border border-border bg-paper-light shadow-fold transition-all duration-500 hover:shadow-fold-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
                  <FoldCorner size={26} position="top-right" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cinnabar/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-paper-light">
                    {g.tag}
                  </span>
                  <p className="mt-2 font-display text-sm font-semibold text-paper-light">
                    {g.caption}
                  </p>
                </figcaption>
              </figure>
              </TiltCard>
            </OrigamiReveal>
          ))}
        </div>

        <CreaseLine orientation="horizontal" className="relative mt-12 h-px" />
      </div>
    </section>
  );
}
