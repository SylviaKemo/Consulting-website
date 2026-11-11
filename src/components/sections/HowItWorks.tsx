import Image from "next/image";
import type { ReactNode } from "react";
import { BOOKING_HREF } from "@/content/site";
import { reveal } from "../reveal";
import { Container, DarkButton, SECTION_PB, SECTION_PT_TIGHT, SectionIntro, Serif } from "../ui";

const STEP_H3 = "mt-2 mb-0 text-[clamp(30px,3.2vw,40px)] leading-[1.08] font-extrabold tracking-[-1px]";
const STEP_LABEL = "m-0 text-[13px] font-bold uppercase tracking-[0.6px]";
const STEP_BUTTON = "mt-[26px]";

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-h" className="bg-white">
      <Container className={`${SECTION_PT_TIGHT} ${SECTION_PB}`}>
        <SectionIntro
          eyebrow="How it works"
          titleId="how-h"
          className="mb-10"
          title={
            <>
              Three steps from <Serif>prototype</Serif> to product
            </>
          }
        />

        {/* Steps 1 and 2: staggered photo cards */}
        <ol className="m-0 flex list-none flex-wrap items-start gap-10 p-0">
          <Step
            className="mt-16"
            photo="/assets/audit.jpg"
            position="object-[center_45%]"
            alt="A designer at a laptop working through a product screen"
            label="Step 01 · 3–5 days"
            title={
              <>
                <Serif>Audit</Serif> your app before it breaks
              </>
            }
            body="We review your code, database and setup, and give you a plain-English report: what’s risky, what’s fine, and what to fix first."
            cta={{ href: BOOKING_HREF, label: "Book a production audit" }}
          />
          <Step
            delay={160}
            photo="/assets/rescue-sprint.jpg"
            position="object-[center_35%]"
            alt="Three engineers around a table reviewing work on laptops and a tablet"
            label="Step 02 · 2–4 weeks"
            title={
              <>
                <Serif>Rescue</Serif> sprint at a fixed price
              </>
            }
            body="We fix the critical issues at a fixed price agreed upfront. You keep shipping features while we harden the foundations."
            cta={{ href: "#pricing", label: "See sprint pricing" }}
          />
        </ol>

        {/* Step 3: yellow panel */}
        <div
          {...reveal(0, "scale")}
          className="mt-[88px] flex flex-wrap items-center gap-12 rounded-[28px] bg-yellow p-6"
        >
          <figure className="relative m-0 aspect-square max-w-[460px] min-w-0 flex-[1_1_340px] overflow-hidden rounded-[20px] bg-ink">
            <Image
              src="/assets/ongoing-care.jpg"
              alt="A developer in headphones working through code on a large monitor"
              fill
              sizes="(max-width: 760px) 100vw, 460px"
              className="object-cover object-[center_40%]"
            />
          </figure>
          <div className="min-w-0 flex-[1_1_360px] px-4 py-2">
            <p className={STEP_LABEL}>Step 03 · Optional, monthly</p>
            <h3 {...reveal(200, "heading")} className={STEP_H3}>
              <Serif>Ongoing</Serif> care, so you’re never stuck
            </h3>
            <p className="mt-4 mb-0 max-w-[460px] text-[16px] leading-[1.6]">
              We monitor, maintain and make small changes every month, so you are never stuck when something breaks.
            </p>
            <DarkButton href="#pricing" className={STEP_BUTTON}>
              Ask about care
            </DarkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Step({
  className = "",
  delay = 0,
  photo,
  position,
  alt,
  label,
  title,
  body,
  cta,
}: {
  className?: string;
  delay?: number;
  photo: string;
  position: string;
  alt: string;
  label: string;
  title: ReactNode;
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <li {...reveal(delay)} className={`min-w-0 flex-[1_1_420px] ${className}`}>
      <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-3xl bg-soft">
        <Image src={photo} alt={alt} fill sizes="(max-width: 900px) 100vw, 580px" className={`object-cover ${position}`} />
      </figure>
      <p className={`${STEP_LABEL} mt-7 text-muted`}>{label}</p>
      <h3 {...reveal(delay + 150, "heading")} className={STEP_H3}>
        {title}
      </h3>
      <p className="mt-4 mb-0 max-w-[520px] text-[16px] leading-[1.6] text-copy">{body}</p>
      <DarkButton href={cta.href} className={STEP_BUTTON}>
        {cta.label}
      </DarkButton>
    </li>
  );
}
