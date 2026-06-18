"use client";

import { useEffect, useRef, useState } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
  /** 0–100 cursor x within element (for glare) */
  mx: number;
  my: number;
}

/**
 * useTilt — 3D mouse-parallax tilt hook.
 * Attach the returned ref + handlers to an element to make it tilt
 * toward the cursor in 3D space (rotateX/rotateY).
 */
export function useTilt(max = 12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    mx: 50,
    my: 50,
  });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const rotateY = (px - 0.5) * 2 * max; // -max..max
      const rotateX = -(py - 0.5) * 2 * max;
      setTilt({
        rotateX,
        rotateY,
        mx: px * 100,
        my: py * 100,
      });
    };

    const onEnter = () => setActive(true);
    const onLeave = () => {
      setActive(false);
      setTilt({ rotateX: 0, rotateY: 0, mx: 50, my: 50 });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return { ref, tilt, active };
}
