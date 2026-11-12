"use client";

import { useEffect, useState } from "react";
import { AGENCY_NAME, BOOKING_HREF } from "@/content/site";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#fix", label: "What we fix" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const EASE = "ease-[cubic-bezier(0.2,0.7,0.2,1)]";

/** Centred pill nav on desktop; logo + menu button with a drop-down panel below `lg`. */
export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and if the screen grows to desktop width while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onWide = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="relative z-20 flex justify-center">
      {/* Desktop */}
      <nav
        aria-label="Main"
        className="hidden flex-wrap items-center justify-center gap-x-7 gap-y-1 rounded-[16px] border border-ink/10 bg-white py-2 pr-2 pl-6 text-[13px] font-medium lg:flex"
      >
        {LINKS.slice(0, 2).map((l) => (
          <NavLink key={l.href} {...l} />
        ))}
        <Wordmark className="px-3" />
        {LINKS.slice(2).map((l) => (
          <NavLink key={l.href} {...l} />
        ))}
        <a
          href={BOOKING_HREF}
          className="btn-fill inline-flex min-h-10 items-center rounded-[11px] bg-lavender px-5 font-semibold text-ink no-underline [--fill:var(--color-lavender-deep)]"
        >
          Book an audit
        </a>
      </nav>

      {/* Mobile */}
      <div className="relative w-full lg:hidden">
        <div className="flex items-center justify-between rounded-[16px] border border-ink/10 bg-white py-2 pr-2 pl-5">
          <Wordmark />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative size-10 cursor-pointer rounded-[11px] border-0 bg-lavender text-ink transition-colors duration-200 hover:bg-lavender-deep"
          >
            <Bar className={open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"} />
            <Bar className={open ? "scale-x-0 opacity-0" : ""} />
            <Bar className={open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"} />
          </button>
        </div>

        <div
          id="mobile-menu"
          inert={!open}
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-[18px] border border-ink/10 bg-white p-3 shadow-[0_18px_40px_rgba(21,33,42,0.14)] transition-[opacity,translate,scale,visibility] duration-300 ${EASE} motion-reduce:transition-none ${
            open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.97] opacity-0"
          }`}
        >
          <nav aria-label="Mobile">
            <ul className="m-0 flex list-none flex-col p-0">
              {LINKS.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={`transition-[opacity,translate] duration-300 ${EASE} motion-reduce:transition-none ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
                  }`}
                >
                  <a
                    href={l.href}
                    onClick={close}
                    className="block rounded-[10px] px-2 py-2.5 text-[14px] font-medium text-ink no-underline transition-colors hover:bg-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_HREF}
              onClick={close}
              style={{ transitionDelay: open ? `${80 + LINKS.length * 45}ms` : "0ms" }}
              className={`btn-fill mt-2 flex min-h-10 items-center justify-center rounded-[10px] bg-lavender text-[14px] font-semibold text-ink no-underline [--fill:var(--color-lavender-deep)] transition-[opacity,translate] duration-300 ${EASE} motion-reduce:transition-none ${
                open ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
              }`}
            >
              Book an audit
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label={`${AGENCY_NAME} — home`} className={`inline-flex no-underline ${className}`}>
      <Logo />
    </a>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-ink no-underline underline-offset-4 hover:underline">
      {label}
    </a>
  );
}

/** One line of the menu icon; the three lines fold into an X when open. */
function Bar({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-1/2 left-1/2 -mt-px -ml-[9px] h-0.5 w-[18px] rounded-full bg-current transition-[translate,rotate,scale,opacity] duration-300 ${EASE} motion-reduce:transition-none ${className}`}
    />
  );
}
