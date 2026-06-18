"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface StaggerTextProps {
  text: string;
  className?: string;
  /** delay between words in ms */
  stagger?: number;
  /** initial delay */
  delay?: number;
  as?: React.ElementType;
}

/**
 * StaggerText — reveals text word-by-word with a 3D rise + blur clear.
 * Premium feel for headings and key paragraphs.
 */
export function StaggerText({
  text,
  className,
  stagger = 45,
  delay = 0,
  as: Tag = "span",
}: StaggerTextProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3, once: true });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) rotateX(0)" : "translateY(14px) rotateX(-40deg)",
            filter: inView ? "blur(0)" : "blur(4px)",
            transition:
              "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), filter 700ms ease",
            transitionDelay: `${delay + i * stagger}ms`,
            transformOrigin: "bottom center",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
