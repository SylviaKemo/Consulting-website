"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register once; every animated component imports gsap from here.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/** Shared easing so every animation on the site feels like one system. */
export const EASE_OUT = "expo.out";
export const EASE_SOFT = "power3.out";

/** Media query used with gsap.matchMedia(): animations only run when motion is allowed. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Tells the early script in layout.tsx that GSAP is running, so it keeps elements pre-hidden. */
export function markAnimationsReady() {
  (window as Window & { __gsapReady?: boolean }).__gsapReady = true;
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
