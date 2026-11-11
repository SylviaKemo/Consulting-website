"use client";

import { useEffect, useRef } from "react";
import { announcements } from "@/content/site";
import { BlurLetters, BlurWords } from "../BlurText";
import { DarkButton } from "../ui";
import { Navbar } from "../Navbar";
import { PhotoWheel } from "../PhotoWheel";

const HEADLINE = "Your AI built the app. We make it ready for real users.";
const SUBHEAD =
  "You shipped fast with Lovable, Bolt, Cursor or Replit. Now there are users, payments and data on the line. We find what will break and fix it before your customers do.";

/**
 * Yellow hero, at least one screen tall; the photo wheel fills whatever space the copy leaves.
 * It is sticky, and its `top` is pulled up on short screens so the bottom of the hero
 * stays in view while the rest of the page slides over it.
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

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-h"
      className="sticky top-0 z-0 flex min-h-svh flex-col overflow-hidden bg-yellow"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-2 pt-2 sm:px-6 sm:pt-4">
        {/* Shrinks to the navbar's width on desktop so the announcement bar matches it. */}
        <div className="mx-auto lg:w-fit">
          <Navbar />
          <AnnouncementBar />
        </div>

        {/* Text column: narrower than the navbar (~660px) and centred. */}
        <div className="mx-auto max-w-[560px] px-4 pt-8 text-center sm:px-0 sm:pt-11">
          <h1
            id="hero-h"
            aria-label={HEADLINE}
            className="m-0 text-[clamp(30px,3.4vw,34px)] leading-[1.1] font-bold tracking-[-0.8px]"
          >
            <BlurLetters
              parts={[
                { text: "Your AI built the app. We make it ready for" },
                { text: "real users.", serif: true },
              ]}
              start={0.1}
              step={0.03}
            />
          </h1>
          <p
            aria-label={SUBHEAD}
            className="mx-auto mt-3 mb-0 max-w-[440px] text-[12px] leading-[1.5]"
          >
            <BlurWords text={SUBHEAD} start={1.45} step={0.022} />
          </p>
          <DarkButton
            id="book"
            href="#pricing"
            className="mt-5"
          >
            Book a production audit
          </DarkButton>
        </div>
      </div>

      <PhotoWheel />
    </section>
  );
}

/** Scrolling lavender strip. The list is rendered twice so the loop is seamless. */
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
