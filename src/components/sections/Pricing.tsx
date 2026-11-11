"use client";

import { useState } from "react";
import { BOOKING_HREF, plans, type Currency, type Plan } from "@/content/site";
import { CheckBullet, Container, DarkButton, SECTION_PY, Serif } from "../ui";

const CURRENCIES: { code: Currency; label: string }[] = [
  { code: "KES", label: "Kenyan shilling (KES)" },
  { code: "USD", label: "US dollar (USD)" },
];

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("KES");

  return (
    <section id="pricing" aria-labelledby="price-h" className="bg-white">
      <Container className={SECTION_PY}>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <div className="min-w-0 flex-[1_1_460px]">
            <h2 id="price-h" className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.06] font-extrabold tracking-[-1.5px]">
              Pricing <Serif>plans</Serif>
            </h2>
            <p className="mt-3 mb-0 max-w-[520px] text-[16px] leading-[1.6] text-copy">
              Start small. If the audit leads to a rescue sprint, the audit fee comes off the sprint price.
            </p>
          </div>
          <div role="group" aria-label="Currency" className="inline-flex rounded-[14px] bg-soft p-[5px]">
            {CURRENCIES.map(({ code, label }) => {
              const on = code === currency;
              return (
                <button
                  key={code}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCurrency(code)}
                  className={`min-h-[44px] cursor-pointer rounded-[10px] border-0 px-[18px] text-[14px] font-semibold ${on ? "bg-ink text-white" : "bg-transparent text-ink"}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-stretch gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} currency={currency} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[18px] bg-lavender px-7 py-5 text-purple">
          <p className="m-0 text-[17px] font-medium">
            <span className="font-extrabold">Launch offer — first 3 clients:</span> audit at 50% off in exchange for
            permission to publish an anonymised case study.
          </p>
          <a
            href={BOOKING_HREF}
            className="btn-fill inline-flex min-h-[44px] items-center rounded-[12px] bg-purple px-5 text-[15px] font-bold text-white no-underline [--fill:var(--color-purple-deep)]"
          >
            Claim a spot
          </a>
        </div>
      </Container>
    </section>
  );
}

function PlanCard({ plan, currency }: { plan: Plan; currency: Currency }) {
  return (
    <article className="flex min-w-0 flex-[1_1_320px] flex-col rounded-[22px] bg-soft px-[26px] pt-7 pb-[30px]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.3px]">{plan.name}</h3>
        <span className="flex-none rounded-[8px] bg-yellow px-[10px] py-[3px] text-[13px] font-bold">{plan.duration}</span>
      </div>
      <p className="mt-2 mb-0 min-h-[66px] text-[14px] leading-[1.55] text-slate">
        <span className="font-bold text-ink">Best for:</span> {plan.bestFor}
      </p>
      <div aria-hidden="true" className="mt-[22px] mb-[26px] h-px bg-ink/22" />
      <p className="m-0 flex items-baseline gap-2 leading-none whitespace-nowrap">
        <span className="text-[18px] font-extrabold">{currency}</span>
        <span className="text-[clamp(38px,3.6vw,50px)] font-extrabold tracking-[-1.5px]">{plan.from[currency]}</span>
        <span className="text-[15px] font-semibold text-slate">{plan.per}</span>
      </p>
      <p className="mt-[10px] mb-0 text-[14px] text-slate">
        starting from · up to {currency} {plan.upTo[currency]}
      </p>
      <DarkButton href={BOOKING_HREF} className="mt-[26px]">
        {plan.cta}
      </DarkButton>
      <ul className="mt-[26px] mb-0 flex list-none flex-col gap-[14px] p-0">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] leading-[1.45]">
            <CheckBullet />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
