"use client";

import * as React from "react";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface CounterProps {
  target: number;
  /** prefix like "₹" */
  prefix?: string;
  /** suffix like "+" */
  suffix?: string;
  /** indian-style grouping (1,00,000) */
  indian?: boolean;
  duration?: number;
  className?: string;
}

/**
 * Counter — animated count-up number that triggers when scrolled into view.
 */
export function Counter({
  target,
  prefix = "",
  suffix = "",
  indian = false,
  duration = 1800,
  className,
}: CounterProps) {
  const format = (n: number) => {
    const rounded = Math.round(n);
    let str: string;
    if (indian) {
      // Indian numbering: 1,00,000
      const s = rounded.toString();
      if (s.length <= 3) str = s;
      else {
        const last3 = s.slice(-3);
        const rest = s.slice(0, -3);
        str = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
      }
    } else {
      str = rounded.toLocaleString("en-US");
    }
    return `${prefix}${str}${suffix}`;
  };

  const { ref, display } = useCounter(target, duration, format);
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
