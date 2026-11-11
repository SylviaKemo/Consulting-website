import { fixAreas } from "@/content/site";
import { reveal } from "../reveal";
import { ScrollWords } from "../ScrollWords";
import { SECTION_PY } from "../ui";

type Area = (typeof fixAreas)[number];

/** Static grid of the six areas we harden. */
export function WhatWeFix() {
  return (
    <section id="fix" aria-labelledby="fix-h" className={`bg-white ${SECTION_PY}`}>
      <div className="mx-auto mb-[52px] flex max-w-[1200px] flex-wrap items-end justify-between gap-6 px-6">
        <h2
          id="fix-h"
          className="scroll-words m-0 text-[clamp(36px,4.6vw,58px)] leading-[1.04] font-extrabold tracking-[-1.5px]"
        >
          <ScrollWords
            parts={[{ text: "Everything between “it runs”" }, { br: true }, { text: "and" }, { text: "“it’s ready”", serif: true }]}
          />
        </h2>
        <p {...reveal(150)} className="m-0 max-w-[340px] text-[13px] leading-[1.6] text-slate">
          Six areas we harden on every rescue.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5 px-6">
        {fixAreas.map((area, i) => (
          <FixCard key={area.title} area={area} index={i} />
        ))}
      </div>
    </section>
  );
}

function FixCard({ area, index }: { area: Area; index: number }) {
  return (
    <article
      {...reveal((index % 6) * 80)}
      className="flex min-h-[260px] min-w-0 flex-col rounded-[22px] bg-soft p-7"
    >
      <div className="flex items-center gap-[14px]">
        <span
          aria-hidden="true"
          className="inline-flex size-12 flex-none items-center justify-center rounded-[12px] bg-ink text-yellow"
        >
          <svg
            width="22"
            height="22"
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
        <div>
          <h3 className="m-0 text-[19px] font-extrabold">{area.title}</h3>
          <p className="mt-[2px] mb-0 text-[13px] text-muted">{String(index + 1).padStart(2, "0")} · What we fix</p>
        </div>
      </div>
      <p className="mt-[22px] mb-0 text-[13px] leading-[1.6] text-copy">{area.body}</p>
      <p className="mt-auto mb-0 pt-7 text-[13px] font-extrabold tracking-[0.8px] uppercase">{area.tags}</p>
    </article>
  );
}
