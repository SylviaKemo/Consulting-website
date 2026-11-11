"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

/**
 * Inertia ("smooth") scrolling for mouse wheels and trackpads.
 * Touch screens keep their native scrolling (Lenis leaves touch alone by default),
 * and it is skipped entirely when the visitor asks for reduced motion.
 * anchors: true makes in-page links (#pricing, #faq…) glide to their section.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.09 });
    return () => lenis.destroy();
  }, []);

  return null;
}
