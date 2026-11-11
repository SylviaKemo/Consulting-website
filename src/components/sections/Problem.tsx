"use client";

import Image from "next/image";
import { useState } from "react";
import { problems } from "@/content/site";
import { ArrowIcon, Container, SECTION_PB, SECTION_PT_TIGHT, SectionIntro, Serif } from "../ui";

export function Problem() {
  // Row 02 starts selected, as in the design.
  const [selected, setSelected] = useState(1);

  return (
    <section aria-labelledby="problem-h" className="bg-white">
      <Container className={`${SECTION_PT_TIGHT} ${SECTION_PB}`}>
        <SectionIntro
          eyebrow="The problem"
          titleId="problem-h"
          title={
            <>
              It works on demo day. Will it work on <Serif>day 100?</Serif>
            </>
          }
          aside="AI tools are brilliant at getting you to a working prototype. They are less good at the parts users never see until something goes wrong."
        />
        <div className="flex flex-wrap items-start gap-12">
          <figure className="relative m-0 aspect-[4/5] max-w-[460px] min-w-0 flex-[1_1_360px] overflow-hidden rounded-3xl bg-soft">
            <Image
              src="/assets/demo-day.jpg"
              alt="Two people at a wooden table talking through a project, one gesturing as he explains"
              fill
              sizes="(max-width: 760px) 100vw, 460px"
              className="object-cover object-[center_40%]"
            />
          </figure>
          <ul className="m-0 flex min-w-0 flex-[1.3_1_480px] list-none flex-col gap-[10px] p-0">
            {problems.map((text, i) => {
              const on = i === selected;
              return (
                <li key={text}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSelected(i)}
                    onMouseEnter={() => setSelected(i)}
                    className={`flex min-h-16 w-full cursor-pointer items-center justify-between gap-5 rounded-2xl border-0 py-[14px] pr-4 pl-[22px] text-left text-[clamp(16px,1.5vw,18px)] leading-[1.35] font-bold text-ink transition-[background] duration-200 ease-[ease] ${on ? "bg-yellow" : "bg-soft"}`}
                  >
                    <span className="flex min-w-0 items-center gap-[18px]">
                      <span className="flex-none text-[13px] font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="min-w-0">{text}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex size-[34px] flex-none items-center justify-center rounded-[10px] ${on ? "bg-ink text-yellow" : "bg-white text-ink"}`}
                    >
                      <ArrowIcon />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
