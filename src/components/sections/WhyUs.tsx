import { countries, reasons } from "@/content/site";
import { reveal } from "../reveal";
import { Container, Eyebrow, SECTION_PY, Serif } from "../ui";

export function WhyUs() {
  return (
    <section aria-labelledby="why-h" className="bg-white">
      <Container className={`${SECTION_PY} flex flex-wrap gap-16`}>
        <div className="min-w-0 flex-[1_1_380px]">
          <Eyebrow {...reveal(0)}>Why us</Eyebrow>
          <h2
            id="why-h"
            {...reveal(90, "heading")}
            className="mt-[14px] mb-0 text-[clamp(34px,4.2vw,50px)] leading-[1.06] font-extrabold tracking-[-1.5px]"
          >
            <Serif>Senior engineers</Serif> who’ve run production systems
          </h2>
          <div {...reveal(220)} className="mt-7 flex flex-wrap gap-2">
            {countries.map((c) => (
              <span key={c} className="rounded-full bg-soft px-4 py-2 text-[15px] font-bold">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="grid min-w-0 flex-[1_1_480px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          {reasons.map((r, i) => (
            <div key={r.title} {...reveal(i * 100)} className="rounded-[20px] bg-soft p-[26px]">
              <h3 className="m-0 text-[19px] font-extrabold">{r.title}</h3>
              <p className="mt-[10px] mb-0 text-[15px] leading-[1.6] text-slate">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
