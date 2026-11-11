import { fixAreas } from "@/content/site";
import { reveal } from "../reveal";
import { SECTION_PY, Serif } from "../ui";

type Area = (typeof fixAreas)[number];

/** Auto-scrolling carousel. Cards are rendered twice so the loop is seamless; pauses on hover/focus. */
export function WhatWeFix() {
  return (
    <section id="fix" aria-labelledby="fix-h" className={`overflow-hidden bg-white ${SECTION_PY}`}>
      <div className="mx-auto mb-[52px] flex max-w-[1200px] flex-wrap items-end justify-between gap-6 px-6">
        <h2 id="fix-h" {...reveal(0, "heading")} className="m-0 text-[clamp(36px,4.6vw,58px)] leading-[1.04] font-extrabold tracking-[-1.5px]">
          Everything between “it runs”
          <br />
          and <Serif>“it’s ready”</Serif>
        </h2>
        <p {...reveal(150)} className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-slate">
          Six areas we harden on every rescue. Hover to pause.
        </p>
      </div>
      <div {...reveal(200)} className="marquee-wrap" role="region" aria-label="What we fix" tabIndex={0}>
        <div className="marquee">
          {fixAreas.map((area, i) => (
            <FixCard key={area.title} area={area} index={i} />
          ))}
          {fixAreas.map((area, i) => (
            <FixCard key={`${area.title}-copy`} area={area} index={i} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}

function FixCard({ area, index, hidden = false }: { area: Area; index: number; hidden?: boolean }) {
  return (
    <article
      aria-hidden={hidden}
      className="mr-[18px] flex min-h-[260px] w-[420px] flex-none flex-col rounded-[22px] bg-soft p-7"
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
      <p className="mt-[22px] mb-0 text-[16px] leading-[1.6] text-copy">{area.body}</p>
      <p className="mt-auto mb-0 pt-7 text-[13px] font-extrabold tracking-[0.8px] uppercase">{area.tags}</p>
    </article>
  );
}
