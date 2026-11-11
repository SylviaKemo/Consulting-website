import { faqs } from "@/content/site";
import { SECTION_PY, Serif } from "../ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h" className="bg-ink text-white">
      <div className={`mx-auto max-w-[1000px] px-6 ${SECTION_PY}`}>
        <p className="m-0 text-center text-[13px] font-semibold uppercase tracking-[0.6px]">FAQs</p>
        <h2
          id="faq-h"
          className="mx-auto mt-[14px] mb-[52px] max-w-[760px] text-center text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-1.2px]"
        >
          What founders need to know about <Serif>rescuing an AI-built app</Serif>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[14px]">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-2xl bg-faq pr-4 pl-[18px]">
              <summary className="flex min-h-[88px] items-center justify-between gap-4 py-3 text-[16px] leading-[1.35] font-semibold">
                {q}
                <span
                  aria-hidden="true"
                  className="faq-plus inline-flex size-8 flex-none items-center justify-center rounded-[8px] bg-yellow text-ink"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="m-0 pr-11 pb-[18px] text-[15px] leading-[1.6] text-mist">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
