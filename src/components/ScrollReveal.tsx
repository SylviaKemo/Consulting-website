"use client";

import { useEffect } from "react";

/**
 * Watches every [data-reveal] element and marks it visible once it enters the screen.
 * Render once, in the page after the sections (not in the root layout): the layout
 * hydrates first, and adding classes to not-yet-hydrated elements causes a hydration error.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      // Trigger a little before the element is fully on screen.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
