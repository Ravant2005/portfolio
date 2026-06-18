"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** magnetic pull strength in px */
  strength?: number;
  variant?: "primary" | "ghost";
}

/**
 * MagneticButton — a CTA that subtly attracts toward the cursor
 * when the cursor is nearby, then snaps back. Delightful micro-interaction.
 */
export function MagneticButton({
  href,
  children,
  className,
  strength = 18,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      // only attract when cursor within ~120px
      if (dist < 120) {
        const pull = (1 - dist / 120) * strength;
        el.style.transform = `translate(${(dx / dist) * pull}px, ${(dy / dist) * pull}px)`;
      } else {
        el.style.transform = "translate(0,0)";
      }
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "magnetic inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-fold transition-all duration-300",
        variant === "primary"
          ? "bg-ink text-paper-light hover:bg-cinnabar hover:shadow-fold-lg"
          : "border border-ink/25 bg-paper-light/50 text-ink backdrop-blur-sm hover:border-ink hover:bg-paper-light",
        className
      )}
    >
      {children}
    </Link>
  );
}
