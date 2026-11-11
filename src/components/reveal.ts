import type { CSSProperties } from "react";

/** up: fade + rise. heading: rise + un-blur. img: photo unclips from the centre while zooming out. */
export type RevealVariant = "up" | "heading" | "img";

/**
 * Props that make an element animate in when it scrolls into view (see ScrollReveal).
 * Usage: <div {...reveal(120)}> or <h2 {...reveal(0, "heading")}>.
 * `delay` (ms) staggers items in a row.
 */
export function reveal(delay = 0, variant: RevealVariant = "up") {
  return {
    "data-reveal": variant,
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}

/** Inline style for the hero's on-load animations (.load-down / .load-up / .load-rise). */
export const loadDelay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;
