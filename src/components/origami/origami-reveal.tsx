"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type FoldVariant =
  | "unfold-up"
  | "unfold-left"
  | "unfold-right"
  | "unfold-center"
  | "flip-card"
  | "rise-fold";

type Delay = number;

interface OrigamiRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: FoldVariant;
  delay?: Delay;
  as?: keyof React.JSX.IntrinsicElements;
  perspective?: number;
  gentle?: boolean;
  children: React.ReactNode;
}

/**
 * OrigamiReveal — wraps content in a paper panel that physically
 * folds/unfolds via 3D CSS transforms when it scrolls into view.
 */
export function OrigamiReveal({
  variant = "unfold-up",
  delay = 0,
  as: Tag = "div",
  perspective = 1200,
  gentle = false,
  className,
  style,
  children,
  ...props
}: OrigamiRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = Tag as React.ElementType;

  const initialTransform = (() => {
    if (gentle) return "translateY(28px) scale(0.98)";
    switch (variant) {
      case "unfold-up":
        return "rotateX(-78deg) translateY(40px)";
      case "unfold-left":
        return "rotateY(82deg) translateX(-30px)";
      case "unfold-right":
        return "rotateY(-82deg) translateX(30px)";
      case "unfold-center":
        return "scaleY(0.02) rotateX(-4deg)";
      case "flip-card":
        return "rotateY(92deg)";
      case "rise-fold":
        return "rotateX(-28deg) translateY(60px) scale(0.96)";
      default:
        return "none";
    }
  })();

  const finalTransform =
    "rotateX(0deg) rotateY(0deg) translateY(0) translateX(0) scale(1)";

  return (
    <Comp
      ref={ref}
      className={cn(
        "relative transition-[transform,opacity,filter] will-change-transform",
        gentle ? "duration-700" : "duration-[1100ms]",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        inView ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
      {...props}
    >
      <div
        className="preserve-3d"
        style={{
          transform: inView ? finalTransform : initialTransform,
          transformOrigin:
            variant === "unfold-up"
              ? "bottom center"
              : variant === "unfold-left"
                ? "left center"
                : variant === "unfold-right"
                  ? "right center"
                  : variant === "unfold-center"
                    ? "center center"
                    : variant === "flip-card"
                      ? "center center"
                      : "center bottom",
          transitionDuration: gentle ? "700ms" : "1100ms",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          transitionDelay: `${delay}ms`,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </Comp>
  );
}

/**
 * FoldSplit — a panel that unfolds from a top crease.
 */
export function FoldSplit({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ perspective: "1400px" }}
    >
      <div
        className="preserve-3d"
        style={{
          transform: inView ? "rotateX(0deg)" : "rotateX(70deg)",
          transformOrigin: "top center",
          transition: "transform 1200ms cubic-bezier(0.22,1,0.36,1)",
          transitionDelay: `${delay}ms`,
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * InkReveal — for headings/text: letters unfold from compressed,
 * blurred, wide-tracked state into place.
 */
export function InkReveal({
  children,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  return (
    <Tag
      ref={ref}
      className={cn("inline-block transition-all will-change-transform", className)}
      style={{
        opacity: inView ? 1 : 0,
        filter: inView ? "blur(0px)" : "blur(10px)",
        letterSpacing: inView ? "-0.01em" : "0.5em",
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "all 1000ms cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
