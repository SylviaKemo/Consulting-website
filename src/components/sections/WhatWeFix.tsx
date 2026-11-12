import { fixAreas } from "@/content/site";
import { reveal } from "../reveal";
import { SECTION_PY, Serif } from "../ui";

type Area = (typeof fixAreas)[number];

type Tone = {
  card: string; // background + text colour
  icon: string; // icon tile
  body: string; // description colour
};

// Card surfaces (gradients + hover) are defined in globals.css (.card-sun etc.).
const TONES = {
  sun: { card: "card-sun text-ink", icon: "bg-ink text-yellow", body: "text-copy" },
  sunlight: { card: "card-sunlight text-ink", icon: "bg-ink text-yellow", body: "text-copy" },
  white: { card: "bg-white text-ink border border-ink/10", icon: "bg-yellow text-ink", body: "text-slate" },
  charcoal: { card: "card-charcoal text-white", icon: "bg-yellow text-ink", body: "text-mist" },
  night: { card: "card-night text-white", icon: "bg-yellow text-ink", body: "text-mist" },
  bright: { card: "card-bright text-ink", icon: "bg-ink text-yellow", body: "text-copy" },
} satisfies Record<string, Tone>;

/**
 * Bento layout, one entry per area in site.ts order, mirroring the reference:
 * a big 2×2 gradient tile top-left, two tiles stacked on the right, three along the bottom.
 * Tablet: two columns (big tile full width). Phone: one column.
 */
const LAYOUT: { tone: Tone; span: string; big?: boolean }[] = [
  { tone: TONES.sun, span: "sm:col-span-2 lg:row-span-2", big: true }, // Security
  { tone: TONES.sunlight, span: "" }, // Data
  { tone: TONES.white, span: "" }, // Payments
  { tone: TONES.charcoal, span: "" }, // Reliability
  { tone: TONES.night, span: "" }, // Deployment
  { tone: TONES.bright, span: "sm:col-span-2 lg:col-span-1" }, // Code health
];

/** Bento grid of the six areas we harden. */
export function WhatWeFix() {
  return (
    <section id="fix" aria-labelledby="fix-h" className={`bg-white ${SECTION_PY}`}>
      <div className="mx-auto mb-[52px] flex max-w-[1200px] flex-wrap items-end justify-between gap-6 px-6">
        <h2
          id="fix-h"
          {...reveal("heading")}
          className="m-0 text-[clamp(36px,4.6vw,58px)] leading-[1.04] font-extrabold tracking-[-1.5px]"
        >
          Everything between “it runs”
          <br />
          and <Serif>“it’s ready”</Serif>
        </h2>
        <p {...reveal()} className="m-0 max-w-[340px] text-[13px] leading-[1.6] text-slate">
          Six areas we harden on every rescue.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1200px] auto-rows-[minmax(250px,auto)] grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {fixAreas.map((area, i) => (
          <FixCard key={area.title} area={area} {...LAYOUT[i % LAYOUT.length]} />
        ))}
      </div>
    </section>
  );
}

function FixCard({ area, tone, span, big = false }: { area: Area; tone: Tone; span: string; big?: boolean }) {
  return (
    <article
      {...reveal()}
      className={`relative isolate flex min-w-0 flex-col justify-between gap-10 overflow-hidden rounded-[24px] ${
        big ? "p-8 sm:p-10" : "p-7"
      } ${tone.card} ${span}`}
    >
      <span
        aria-hidden="true"
        className={`inline-flex flex-none items-center justify-center self-start rounded-[12px] ${
          big ? "size-14" : "size-11"
        } ${tone.icon}`}
      >
        <svg
          width={big ? 26 : 20}
          height={big ? 26 : 20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={area.icon} />
        </svg>
      </span>

      {/* mt-auto pins the text to the bottom of the card, whatever the card's height. */}
      <div className="mt-auto">
        <h3
          className={`m-0 font-extrabold ${
            big ? "text-[clamp(30px,3.4vw,44px)] leading-[1.05] tracking-[-1px]" : "text-[20px] tracking-[-0.3px]"
          }`}
        >
          {area.title}
        </h3>
        <p className={`mt-2.5 mb-0 leading-[1.6] ${big ? "max-w-[420px] text-[15px]" : "text-[13px]"} ${tone.body}`}>
          {area.body}
        </p>
      </div>
    </article>
  );
}
