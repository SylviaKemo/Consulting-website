"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "./animation/gsap";

/**
 * Inertia ("smooth") scrolling for mouse wheels and trackpads, kept in sync with
 * GSAP ScrollTrigger: GSAP's ticker drives Lenis, and every Lenis scroll updates
 * ScrollTrigger. Touch screens keep native scrolling; skipped for reduced motion.
 * anchors: true makes in-page links (#pricing, #faq…) glide to their section.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ anchors: true, lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000); // GSAP time is in seconds
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
