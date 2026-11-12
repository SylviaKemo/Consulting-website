/**
 * up: fades and rises in (staggered with neighbours that enter together).
 * heading: lines rise up from behind a mask.
 * img: the photo fades in while sharpening from a blur.
 */
export type RevealVariant = "up" | "heading" | "img";

/**
 * Marks an element to animate in when it scrolls into view (GSAP, see SectionAnimations).
 * Usage: <div {...reveal()}> or <h2 {...reveal("heading")}>.
 * Timing and stagger come from GSAP, so there is nothing else to configure per element.
 */
export function reveal(variant: RevealVariant = "up") {
  return { "data-anim": variant };
}
