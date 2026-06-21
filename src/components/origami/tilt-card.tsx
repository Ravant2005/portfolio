"use client";

import * as React from "react";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** max tilt degrees */
  max?: number;
  /** enable glare highlight */
  glare?: boolean;
  /** enable cursor spotlight */
  spotlight?: boolean;
  /** scale up slightly on hover */
  scaleOnHover?: boolean;
  children: React.ReactNode;
}

/**
 * TiltCard — a 3D mouse-parallax card. Tilts toward the cursor with
 * a glare sweep + spotlight glow. The signature 3D effect of the
 * enhanced Origami Unfold theme.
 */
export function TiltCard({
  max = 12,
  glare = true,
  spotlight = true,
  scaleOnHover = true,
  className,
  children,
  ...props
}: TiltCardProps) {
  const { ref, tilt, active } = useTilt(max);

  return (
    <div
      ref={ref}
      className={cn(
        "tilt-card relative transition-all duration-300 ease-out will-change-transform",
        scaleOnHover && "hover:scale-[1.03] hover:shadow-fold-lg",
        spotlight && "spotlight-card",
        className
      )}
      style={{
        ["--mx" as string]: `${tilt.mx}%`,
        ["--my" as string]: `${tilt.my}%`,
      }}
      {...props}
    >
      <div>
        {children}
      </div>
      {glare && <span className="tilt-glare" aria-hidden />}
    </div>
  );
}
