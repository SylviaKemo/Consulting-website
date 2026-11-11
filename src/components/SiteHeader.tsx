"use client";

import { useEffect, useRef, useState } from "react";
import { announcements } from "@/content/site";
import { Navbar } from "./Navbar";

const EASE = "ease-[cubic-bezier(0.2,0.7,0.2,1)]";

/**
 * Fixed site header: navbar + announcement bar, plus a reading-progress line.
 * - Hides when scrolling down, comes back when scrolling up.
 * - Once scrolled, the announcement bar folds away and the navbar gets a soft shadow.
 * - Publishes its full height as --header-h so the hero can leave room for it.
 * Render outside the hero (the hero is its own layer under the page content).
 */
export function SiteHeader() {
  const navRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 160);
      last = y;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  // Full (unfolded) height, measured even while the ticker is folded away.
  useEffect(() => {
    const outer = outerRef.current;
    const nav = navRef.current;
    const ticker = tickerRef.current;
    if (!outer || !nav || !ticker) return;
    const measure = () => {
      const top = parseFloat(getComputedStyle(outer).paddingTop);
      const h = Math.ceil(top + nav.offsetHeight + ticker.scrollHeight);
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    observer.observe(ticker);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div aria-hidden="true" className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink" />
      <div
        ref={outerRef}
        data-scrolled={scrolled}
        className={`site-header pointer-events-none fixed inset-x-0 top-0 z-50 px-2 pt-2 transition-[translate] duration-500 sm:px-6 sm:pt-4 ${EASE} motion-reduce:transition-none ${
          hidden ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <div className="load-down pointer-events-auto mx-auto max-w-[1200px] lg:w-fit">
          <div ref={navRef}>
            <Navbar />
          </div>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ${EASE} motion-reduce:transition-none ${
              scrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
            }`}
            inert={scrolled}
          >
            <div ref={tickerRef} className="min-h-0 overflow-hidden">
              <AnnouncementBar />
            </div>
          </div>
        </div>
      </div>
    </>
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
