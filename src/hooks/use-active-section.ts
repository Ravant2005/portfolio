"use client";

import { useEffect, useState } from "react";

/**
 * useActiveSection — tracks which section id is currently in view
 * and returns it so the nav can highlight the matching link.
 */
export function useActiveSection(sectionIds: string[], offset = 0.4) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when a section occupies ~40% of viewport
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round(
          (1 - offset - 0.1) * 100
        )}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return active;
}
