"use client";

import * as React from "react";
import { useScroll, useSpring } from "framer-motion";

// The snake path points: weaves left→right→left down the page (in % units)
// Each waypoint: [x%, y%]
const WAYPOINTS: [number, number][] = [
  [50, 0],    // top center
  [88, 8],    // top-right
  [88, 18],   // right side
  [12, 28],   // left side
  [12, 38],   // left side
  [88, 48],   // right side
  [88, 58],   // right side
  [12, 68],   // left side
  [12, 78],   // left side
  [88, 88],   // right side
  [50, 100],  // bottom center
];

/** Convert waypoints to an SVG path string (cubic bezier curves) */
function buildPath(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cx1 = prev[0];
    const cy1 = (prev[1] + curr[1]) / 2;
    const cx2 = curr[0];
    const cy2 = (prev[1] + curr[1]) / 2;
    d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr[0]} ${curr[1]}`;
  }
  return d;
}

const PATH_D = buildPath(WAYPOINTS);

/** Sample a point along the waypoints at progress t ∈ [0,1] */
function samplePoint(t: number): { x: number; y: number } {
  const segments = WAYPOINTS.length - 1;
  const scaled = t * segments;
  const idx = Math.min(Math.floor(scaled), segments - 1);
  const localT = scaled - idx;

  const p0 = WAYPOINTS[idx];
  const p1 = WAYPOINTS[idx + 1];

  // Smooth cubic interpolation
  const ease = localT * localT * (3 - 2 * localT);
  return {
    x: p0[0] + (p1[0] - p0[0]) * ease,
    y: p0[1] + (p1[1] - p0[1]) * ease,
  };
}

export function ScrollSpark() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const progressRef = React.useRef(0);
  const rafRef = React.useRef<number>(0);
  const trailRef = React.useRef<{ x: number; y: number; alpha: number }[]>([]);

  React.useEffect(() => {
    const unsub = smoothProgress.on("change", (v) => {
      progressRef.current = v;
    });
    return () => unsub();
  }, [smoothProgress]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const t = progressRef.current;

      // Clear with slight fade for trail effect
      ctx.clearRect(0, 0, W, H);

      // --- Draw the faint track ---
      ctx.save();
      ctx.strokeStyle = "rgba(255, 107, 0, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      WAYPOINTS.forEach(([px, py], i) => {
        const x = (px / 100) * W;
        const y = (py / 100) * H;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      if (t <= 0.01) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      // --- Draw the revealed glowing trail ---
      // Sample many points up to current t to build the trail
      const numSteps = 120;
      ctx.save();
      for (let i = 0; i < numSteps; i++) {
        const frac = (i / numSteps) * t;
        const next = ((i + 1) / numSteps) * t;
        if (next > t) break;
        const p0 = samplePoint(frac);
        const p1 = samplePoint(next);

        const alpha = 0.15 + (i / numSteps) * 0.4;
        const glowWidth = 1 + (i / numSteps) * 2;

        // Outer glow
        ctx.beginPath();
        ctx.moveTo((p0.x / 100) * W, (p0.y / 100) * H);
        ctx.lineTo((p1.x / 100) * W, (p1.y / 100) * H);
        ctx.strokeStyle = `rgba(255, 107, 0, ${alpha * 0.3})`;
        ctx.lineWidth = glowWidth + 6;
        ctx.lineCap = "round";
        ctx.stroke();

        // Inner bright line
        ctx.beginPath();
        ctx.moveTo((p0.x / 100) * W, (p0.y / 100) * H);
        ctx.lineTo((p1.x / 100) * W, (p1.y / 100) * H);
        ctx.strokeStyle = `rgba(255, 193, 7, ${alpha * 0.9})`;
        ctx.lineWidth = glowWidth * 0.7;
        ctx.stroke();
      }
      ctx.restore();

      // --- Draw the spark head (glowing orb at current position) ---
      const head = samplePoint(t);
      const hx = (head.x / 100) * W;
      const hy = (head.y / 100) * H;

      // Outer glow rings
      [40, 25, 14, 7].forEach((r, i) => {
        const alpha = [0.06, 0.12, 0.25, 0.6][i];
        const grad = ctx.createRadialGradient(hx, hy, 0, hx, hy, r);
        grad.addColorStop(0, `rgba(255, 200, 80, ${alpha})`);
        grad.addColorStop(1, "rgba(255, 107, 0, 0)");
        ctx.beginPath();
        ctx.arc(hx, hy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Bright core dot
      ctx.beginPath();
      ctx.arc(hx, hy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#FF6B00";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Spark particles
      const time = Date.now() / 1000;
      for (let s = 0; s < 5; s++) {
        const angle = time * 2.5 + (s * Math.PI * 2) / 5;
        const dist = 6 + Math.sin(time * 3 + s) * 4;
        const sx = hx + Math.cos(angle) * dist;
        const sy = hy + Math.sin(angle) * dist;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 193, 7, ${0.5 + Math.sin(time * 4 + s) * 0.4})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    />
  );
}
