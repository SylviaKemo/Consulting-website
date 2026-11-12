"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { EASE_OUT, EASE_SOFT, gsap, markAnimationsReady, MOTION_OK, ScrollTrigger, SplitText, useGSAP } from "./gsap";

/**
 * The white content layer that slides over the hero, plus GSAP scroll animations for
 * everything inside it. Elements opt in with reveal() / data-anim:
 *   up      — fades and rises; neighbours entering together are staggered (ScrollTrigger.batch)
 *   heading — lines rise from behind a mask (SplitText), then the plain text is restored
 *   img     — the photo fades in while sharpening from a blur
 * Each animates once, the first time it enters the screen. Skipped for reduced motion.
 * Runs after this whole tree has hydrated, so it never touches elements React hasn't taken over.
 */
export function SectionAnimations({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      markAnimationsReady();
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const setup = () => {
          // Fade-up items, batched so rows of cards ripple in.
          gsap.set("[data-anim='up']", { autoAlpha: 0, y: 44 });
          ScrollTrigger.batch("[data-anim='up']", {
            start: "top 88%",
            once: true,
            onEnter: (els) =>
              gsap.to(els, { autoAlpha: 1, y: 0, duration: 1.1, ease: EASE_SOFT, stagger: 0.08, overwrite: true }),
          });

          // Headings: each line slides up out of a mask.
          gsap.utils.toArray<HTMLElement>("[data-anim='heading']").forEach((el) => {
            const split = SplitText.create(el, { type: "lines", mask: "lines" });
            gsap.set(el, { autoAlpha: 1 });
            gsap.from(split.lines, {
              yPercent: 115,
              duration: 1.2,
              ease: EASE_OUT,
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
              onComplete: () => split.revert(),
            });
          });

          // Photos: fade in while sharpening from a blur.
          gsap.utils.toArray<HTMLElement>("[data-anim='img']").forEach((fig) => {
            gsap.fromTo(
              fig,
              { autoAlpha: 0, filter: "blur(20px)" },
              {
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 1.4,
                ease: EASE_SOFT,
                clearProps: "filter", // drop the filter afterwards so the photo stays crisp and cheap to draw
                scrollTrigger: { trigger: fig, start: "top 85%", once: true },
              },
            );
          });

          ScrollTrigger.refresh();
        };
        // Wait for fonts so heading line breaks match the real font.
        document.fonts.ready.then(contextSafe!(setup));
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
