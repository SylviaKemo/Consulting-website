"use client";

import { useEffect, useRef } from "react";
import { announcements } from "@/content/site";
import { EASE_OUT, gsap, markAnimationsReady, MOTION_OK, SplitText, useGSAP } from "../animation/gsap";
import { DarkButton } from "../ui";
import { Navbar } from "../Navbar";
import { PhotoWheel } from "../PhotoWheel";

const SUBHEAD =
  "You shipped fast with Lovable, Bolt, Cursor or Replit. Now there are users, payments and data on the line. We find what will break and fix it before your customers do.";

/**
 * Yellow hero, at least one screen tall; the photo wheel fills whatever space the copy leaves.
 * It is sticky, and its `top` is pulled up on short screens so the bottom of the hero
 * stays in view while the rest of the page slides over it.
 *
 * Motion (GSAP): an intro timeline on load, plus the endless wheel spin and ticker scroll.
 * Elements marked data-hero start hidden (globals.css) until the intro reveals them.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const place = () => {
      hero.style.top = `${Math.min(0, window.innerHeight - hero.offsetHeight)}px`;
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(hero);
    window.addEventListener("resize", place);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
    };
  }, []);

  useGSAP(
    (_context, contextSafe) => {
      markAnimationsReady();
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        // Endless loops.
        gsap.to(".wheel", { rotation: -360, duration: 140, ease: "none", repeat: -1 });
        gsap.to(".ticker", { xPercent: -50, duration: 18, ease: "none", repeat: -1 });

        // Intro: split after fonts load so line/letter breaks match the real font.
        const intro = () => {
          const title = SplitText.create("[data-hero='title']", { type: "words,chars", mask: "words" });
          const sub = SplitText.create("[data-hero='sub']", { type: "lines", mask: "lines" });
          gsap.set("[data-hero='title'], [data-hero='sub']", { autoAlpha: 1 });

          gsap
            .timeline({
              defaults: { ease: EASE_OUT },
              // Put the plain text back once it has played (clean DOM for screen readers and resizes).
              onComplete: () => {
                title.revert();
                sub.revert();
              },
            })
            .from("[data-hero='nav']", { y: -28, autoAlpha: 0, duration: 1 })
            .from(title.chars, { yPercent: 115, duration: 1.1, stagger: 0.016 }, 0.15)
            .from("[data-hero='wheel']", { y: 200, autoAlpha: 0, duration: 1.8 }, 0.35)
            .from(sub.lines, { yPercent: 115, duration: 1, stagger: 0.08 }, 0.7)
            .from("[data-hero='cta']", { y: 26, autoAlpha: 0, duration: 0.9 }, 1.0);
        };
        document.fonts.ready.then(contextSafe!(intro));
      });
    },
    { scope: ref },
  );

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-h"
      className="sticky top-0 z-0 flex min-h-svh flex-col overflow-hidden bg-yellow"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-2 pt-2 sm:px-6 sm:pt-4">
        {/* Shrinks to the navbar's width on desktop so the announcement bar matches it. */}
        {/* relative z-20: keeps the mobile menu above the headline. */}
        <div data-hero="nav" className="relative z-20 mx-auto lg:w-fit">
          <Navbar />
          <AnnouncementBar />
        </div>

        {/* Text column: narrower than the navbar (~660px) and centred. */}
        <div className="mx-auto max-w-[560px] px-4 pt-8 text-center sm:px-0 sm:pt-11">
          <h1
            id="hero-h"
            data-hero="title"
            className="m-0 text-[clamp(30px,3.4vw,34px)] leading-[1.1] font-bold tracking-[-0.8px]"
          >
            Your AI built the app. We make it ready for{" "}
            <span className="serif-it text-[1.12em]">real users.</span>
          </h1>
          <p data-hero="sub" className="mx-auto mt-3 mb-0 max-w-[440px] text-[12px] leading-[1.5]">
            {SUBHEAD}
          </p>
          {/* Wrapped so the intro animation doesn't clash with the button's hover fill. */}
          <div data-hero="cta" className="mt-5">
            <DarkButton id="book" href="#pricing">
              Book a production audit
            </DarkButton>
          </div>
        </div>
      </div>

      <PhotoWheel />
    </section>
  );
}

/** Scrolling lavender strip. The list is rendered twice so the GSAP loop is seamless. */
function AnnouncementBar() {
  const items = (hidden: boolean) =>
    announcements.flatMap((text) => [
      <span key={`${text}-t`} aria-hidden={hidden || undefined} className="px-[22px]">
        {text}
      </span>,
      <span key={`${text}-s`} aria-hidden="true">
        ✦
      </span>,
    ]);

  return (
    <div
      aria-label="Announcements"
      // w-0 + min-w-full: fill the wrapper without the long ticker text widening it.
      className="mt-3 w-0 min-w-full overflow-hidden rounded-[4px] bg-lavender"
    >
      <div className="ticker py-[6px] text-[11px] font-light tracking-[0.4px] whitespace-nowrap text-purple uppercase">
        {items(false)}
        {items(true)}
      </div>
    </div>
  );
}
