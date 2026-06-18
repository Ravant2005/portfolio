"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Marquee — infinite horizontal scroll. Pauses on hover.
 * Pass an array of items; they render twice for seamless looping.
 */
export function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("marquee-wrap relative w-full overflow-hidden", className)}>
      <div className={cn("marquee", reverse && "marquee-reverse")}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "mx-3 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-paper-light/70 px-5 py-2 font-mono text-sm font-medium text-ink-wash backdrop-blur-sm",
              itemClassName
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cinnabar" />
            {item}
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
