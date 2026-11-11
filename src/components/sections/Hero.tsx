"use client";

import { useEffect, useRef } from "react";
import { AGENCY_NAME, BOOKING_HREF, announcements } from "@/content/site";
import { BlurBlock, BlurLetters, BlurWords } from "../BlurText";
import { DarkButton } from "../ui";
import { PhotoWheel } from "../PhotoWheel";

const HEADLINE = "Your AI built the app. We make it ready for real users.";
const SUBHEAD =
  "You shipped fast with Lovable, Bolt, Cursor or Replit. Now there are users, payments and data on the line. We find what will break and fix it before your customers do.";

/**
 * Yellow hero. It is sticky, and its `top` is pulled up on short screens so the
 * bottom of the hero stays in view while the rest of the page slides over it.
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
    <section id="top" ref={ref} aria-labelledby="hero-h" className="sticky top-0 z-0 overflow-hidden bg-yellow">
      <div className="mx-auto max-w-[1200px] px-6 pt-4">
        <header className="flex justify-center">
          <nav
            aria-label="Main"
            className="flex flex-wrap items-center justify-center gap-x-[26px] gap-y-[6px] rounded-[18px] border border-ink/10 bg-white py-2 pr-2 pl-[22px] text-[15px] font-medium"
          >
            <NavLink href="#fix">What we fix</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <a href="#top" className="px-[10px] text-[22px] font-extrabold tracking-[-0.8px] text-ink no-underline">
              {AGENCY_NAME}
            </a>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <a
              href={BOOKING_HREF}
              className="btn-fill inline-flex min-h-[44px] items-center rounded-[12px] bg-lavender px-5 font-semibold text-ink no-underline [--fill:var(--color-lavender-deep)]"
            >
              Book an audit
            </a>
          </nav>
        </header>

        <AnnouncementBar />

        <div className="pt-16 text-center">
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.6px]">
            <BlurBlock text="For apps built with Lovable, Bolt, Cursor, Replit and v0" />
          </p>
          <h1
            id="hero-h"
            aria-label={HEADLINE}
            className="mx-auto mt-[18px] mb-0 max-w-[980px] text-[clamp(40px,6vw,76px)] leading-[1.04] font-extrabold tracking-[-2px]"
          >
            <BlurLetters
              parts={[{ text: "Your AI built the app. We make it ready for" }, { text: "real users.", serif: true }]}
              start={0.185}
              step={0.035}
            />
          </h1>
          <p aria-label={SUBHEAD} className="mx-auto mt-[22px] mb-0 max-w-[600px] text-[18px] leading-[1.55] font-medium">
            <BlurWords text={SUBHEAD} start={1.79} step={0.025} />
          </p>
          <DarkButton id="book" href="#pricing" className="mt-[30px] min-h-[52px] px-7 text-[15px]">
            Book a production audit
          </DarkButton>
          <p className="mt-[14px] mb-0 text-[14px] font-medium">
            <a href="#fix" className="text-ink underline underline-offset-4">
              See what we check
            </a>
          </p>
        </div>
      </div>

      <PhotoWheel />
    </section>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="text-ink no-underline underline-offset-4 hover:underline">
      {children}
    </a>
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
    <div aria-label="Announcements" className="mx-auto mt-3 max-w-[720px] overflow-hidden rounded-[4px] bg-lavender">
      <div className="ticker py-[6px] text-[13px] font-semibold tracking-[0.4px] whitespace-nowrap text-purple uppercase">
        {items(false)}
        {items(true)}
      </div>
    </div>
  );
}
