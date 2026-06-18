"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./use-in-view";

/**
 * useCounter — animates a number from 0 to `target` once the element
 * scrolls into view. Returns { ref, display }.
 *
 * `format` lets you customise the rendered string (e.g. "₹1,00,000").
 */
export function useCounter(target: number, duration = 1800, format?: (n: number) => string) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4, once: true });
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo for a satisfying settle
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const display = format ? format(value) : Math.round(value).toString();
  return { ref, display };
}
