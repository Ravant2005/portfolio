"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

/**
 * Crane3D — an origami crane drawn as faceted SVG that draws itself
 * (stroke-dashoffset animation) when scrolled into view, then gently
 * floats + rotates in 3D. Premium hero/showcase accent.
 */
export function Crane3D({
  className,
  size = 160,
  color = "var(--ink)",
  accent = "var(--cinnabar)",
}: {
  className?: string;
  size?: number;
  color?: string;
  accent?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: true });

  return (
    <div
      ref={ref}
      className={cn("animate-float-3d", className)}
      style={{ width: size, height: size, perspective: "800px" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        style={{ transformStyle: "preserve-3d" }}
        aria-hidden
      >
        <g
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        >
          {/* Left wing */}
          <path
            d="M100 96 L36 60 L56 92 L80 100 Z"
            fill={color}
            fillOpacity="0.1"
            style={{
              strokeDasharray: 240,
              strokeDashoffset: inView ? 0 : 240,
              transition: "stroke-dashoffset 1.4s ease",
              transitionDelay: "0.1s",
            }}
          />
          {/* Right wing */}
          <path
            d="M100 96 L164 60 L144 92 L120 100 Z"
            fill={accent}
            fillOpacity="0.16"
            style={{
              strokeDasharray: 240,
              strokeDashoffset: inView ? 0 : 240,
              transition: "stroke-dashoffset 1.4s ease",
              transitionDelay: "0.3s",
            }}
          />
          {/* Body */}
          <path
            d="M80 100 L120 100 L112 124 L88 124 Z"
            fill={color}
            fillOpacity="0.26"
            style={{
              strokeDasharray: 120,
              strokeDashoffset: inView ? 0 : 120,
              transition: "stroke-dashoffset 1.2s ease",
              transitionDelay: "0.5s",
            }}
          />
          {/* Neck + head */}
          <path
            d="M100 96 L116 44 L124 48 L112 100"
            fill={accent}
            fillOpacity="0.2"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: inView ? 0 : 200,
              transition: "stroke-dashoffset 1.3s ease",
              transitionDelay: "0.7s",
            }}
          />
          <path
            d="M116 44 L128 36 L124 48 Z"
            fill={accent}
            fillOpacity="0.4"
            style={{
              strokeDasharray: 60,
              strokeDashoffset: inView ? 0 : 60,
              transition: "stroke-dashoffset 0.9s ease",
              transitionDelay: "1.1s",
            }}
          />
          {/* Tail */}
          <path
            d="M100 96 L88 140 L96 144 L104 104"
            fill={color}
            fillOpacity="0.22"
            style={{
              strokeDasharray: 180,
              strokeDashoffset: inView ? 0 : 180,
              transition: "stroke-dashoffset 1.2s ease",
              transitionDelay: "0.9s",
            }}
          />
          {/* Crease lines */}
          <path
            d="M100 96 L80 100 M100 96 L120 100 M100 96 L100 124"
            strokeOpacity="0.5"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: inView ? 0 : 100,
              transition: "stroke-dashoffset 1s ease",
              transitionDelay: "1.3s",
            }}
          />
        </g>
      </svg>
    </div>
  );
}
