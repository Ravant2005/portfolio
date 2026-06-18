"use client";

import * as React from "react";

/**
 * CursorInk — a custom ink-dot cursor with a trailing ring.
 * Desktop only (disabled on touch / coarse pointers). The ring grows
 * and turns cinnabar when hovering interactive elements.
 *
 * Mount once at the page root.
 */
export function CursorInk() {
  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const ringRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Bail on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const loop = () => {
      // ring eases toward the dot for a trailing feel
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 19}px, ${ringY - 19}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Grow ring on interactive hover
    const grow = () => document.body.classList.add("cursor-ink-grow");
    const shrink = () => document.body.classList.remove("cursor-ink-grow");
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, .tilt-card, .magnetic")) {
        grow();
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, .tilt-card, .magnetic")) {
        shrink();
      }
    };

    // Hide on window blur / when leaving viewport
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const onLeaveWin = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeaveWin);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeaveWin);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-ink-grow");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ink-ring" aria-hidden />
      <div ref={dotRef} className="cursor-ink-dot" aria-hidden />
    </>
  );
}
