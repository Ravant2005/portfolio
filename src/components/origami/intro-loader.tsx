"use client";

import * as React from "react";

/**
 * IntroLoader — a paper-fold page intro that shows a self-drawing
 * origami crane + the maker's monogram, then folds away (rotateX) to
 * reveal the site. Plays once on first mount.
 */
export function IntroLoader() {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    // Respect reduced motion — skip entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // Only play on first load of this tab (not on route changes)
    const dismissed = sessionStorage.getItem("intro-played");
    if (dismissed) {
      setDone(true);
      return;
    }
    sessionStorage.setItem("intro-played", "1");

    const timer = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className="intro-fold" aria-hidden>
      <div className="flex flex-col items-center gap-6" style={{ perspective: "1000px" }}>
        {/* Self-drawing crane */}
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
          <g
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              d="M100 96 L36 60 L56 92 L80 100 Z"
              fill="var(--ink)"
              fillOpacity="0.1"
              style={{
                strokeDasharray: 240,
                strokeDashoffset: 240,
                animation: "intro-crane-draw 1s ease 0.1s forwards",
              }}
            />
            <path
              d="M100 96 L164 60 L144 92 L120 100 Z"
              fill="var(--cinnabar)"
              fillOpacity="0.16"
              style={{
                strokeDasharray: 240,
                strokeDashoffset: 240,
                animation: "intro-crane-draw 1s ease 0.3s forwards",
              }}
            />
            <path
              d="M80 100 L120 100 L112 124 L88 124 Z"
              fill="var(--ink)"
              fillOpacity="0.26"
              style={{
                strokeDasharray: 120,
                strokeDashoffset: 120,
                animation: "intro-crane-draw 0.8s ease 0.5s forwards",
              }}
            />
            <path
              d="M100 96 L116 44 L124 48 L112 100"
              fill="var(--cinnabar)"
              fillOpacity="0.2"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 200,
                animation: "intro-crane-draw 0.9s ease 0.7s forwards",
              }}
            />
            <path
              d="M116 44 L128 36 L124 48 Z"
              fill="var(--cinnabar)"
              fillOpacity="0.4"
              style={{
                strokeDasharray: 60,
                strokeDashoffset: 60,
                animation: "intro-crane-draw 0.6s ease 1s forwards",
              }}
            />
            <path
              d="M100 96 L88 140 L96 144 L104 104"
              fill="var(--ink)"
              fillOpacity="0.22"
              style={{
                strokeDasharray: 180,
                strokeDashoffset: 180,
                animation: "intro-crane-draw 0.9s ease 0.9s forwards",
              }}
            />
          </g>
        </svg>

        {/* Monogram + unfolding text */}
        <div className="flex flex-col items-center gap-3">
          <span
            className="seal-stamp flex h-14 w-14 items-center justify-center rounded-lg font-display text-xl font-bold"
            style={{ animation: "seal-press 600ms cubic-bezier(0.34,1.56,0.64,1) 1.1s both" }}
          >
            RV
          </span>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft"
            style={{
              opacity: 0,
              animation: "word-rise 600ms ease 1.3s forwards",
            }}
          >
            Unfolding…
          </p>
        </div>
      </div>
    </div>
  );
}
