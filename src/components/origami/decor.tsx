"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * PaperCrane — a hand-drawn SVG origami crane that gently floats.
 * Used as ambient decoration across the Origami Unfold theme.
 */
export function PaperCrane({
  className,
  color = "currentColor",
  size = 80,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn("animate-crane-float", className)}
      style={{ color }}
      aria-hidden="true"
    >
      {/* Crane body — geometric origami facets */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        {/* Left wing */}
        <path d="M50 48 L18 30 L28 46 L40 50 Z" fill="currentColor" fillOpacity="0.14" />
        {/* Right wing */}
        <path d="M50 48 L82 30 L72 46 L60 50 Z" fill="currentColor" fillOpacity="0.22" />
        {/* Body center */}
        <path d="M40 50 L60 50 L55 62 L45 62 Z" fill="currentColor" fillOpacity="0.32" />
        {/* Neck + head */}
        <path d="M50 48 L58 22 L62 24 L56 50" fill="currentColor" fillOpacity="0.2" />
        <path d="M58 22 L64 18 L62 24" fill="currentColor" fillOpacity="0.4" />
        {/* Tail */}
        <path d="M50 48 L44 70 L48 72 L52 52" fill="currentColor" fillOpacity="0.26" />
        {/* Crease lines */}
        <path d="M50 48 L40 50" strokeOpacity="0.5" />
        <path d="M50 48 L60 50" strokeOpacity="0.5" />
        <path d="M50 48 L50 62" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}

/**
 * InkSeal — a cinnabar seal stamp with rotating characters.
 * Appears with a "press" animation.
 */
export function InkSeal({
  label,
  className,
  size = 56,
}: {
  label?: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center seal-stamp font-display font-bold leading-none",
        className
      )}
      style={{
        width: size,
        height: size,
        borderRadius: "8px",
        fontSize: size * 0.42,
        animation: "seal-press 700ms cubic-bezier(0.34,1.56,0.64,1) both",
      }}
      aria-hidden={label ? undefined : true}
    >
      {label}
    </span>
  );
}

/**
 * CreaseLine — a subtle horizontal or vertical fold crease.
 */
export function CreaseLine({
  orientation = "horizontal",
  className,
  glow = false,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute",
        orientation === "horizontal" ? "crease-h h-px w-full left-0" : "crease-v w-px h-full top-0",
        glow && "animate-crease-glow",
        className
      )}
    />
  );
}

/**
 * InkSplat — an organic ink blob decoration.
 */
export function InkSplat({
  className,
  color = "var(--ink-wash)",
  opacity = 0.12,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute", className)}
      style={{ color, opacity }}
    >
      <path
        fill="currentColor"
        d="M100 12c22 4 38 18 52 14s26-22 34-8-2 36 4 48 18 24 8 40-32 24-44 38-22 30-40 30-32-22-44-34-26-22-32-38 4-34 8-48S78 8 100 12z"
      />
    </svg>
  );
}

/**
 * FoldCorner — a small triangle showing a folded paper corner.
 */
export function FoldCorner({
  className,
  size = 24,
  position = "top-right",
}: {
  className?: string;
  size?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  const transforms: Record<string, string> = {
    "top-right": "rotate(0deg)",
    "top-left": "rotate(90deg)",
    "bottom-left": "rotate(180deg)",
    "bottom-right": "rotate(270deg)",
  };
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute block", className)}
      style={{
        width: size,
        height: size,
        top: position.startsWith("top") ? 0 : "auto",
        bottom: position.startsWith("bottom") ? 0 : "auto",
        right: position.endsWith("right") ? 0 : "auto",
        left: position.endsWith("left") ? 0 : "auto",
        transform: transforms[position],
        transformOrigin: "top right",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M24 0 L0 0 L24 24 Z" fill="var(--paper-deep)" />
        <path d="M24 0 L0 0 L24 24 Z" fill="none" stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="0.75" />
        <path d="M0 0 L24 24" stroke="var(--ink)" strokeOpacity="0.12" strokeWidth="0.5" />
      </svg>
    </span>
  );
}
