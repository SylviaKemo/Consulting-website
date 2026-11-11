import { proofFacts } from "@/content/site";
import { reveal } from "../reveal";
import { Container, SECTION_PY, Serif } from "../ui";

export function ProofBand() {
  return (
    <section aria-labelledby="proof-h" className="bg-lavender text-purple">
      <Container className={`${SECTION_PY} flex flex-wrap items-center gap-14`}>
        <div className="min-w-0 flex-[1_1_440px]">
          <h2
            id="proof-h"
            {...reveal(0, "heading")}
            className="m-0 text-[clamp(34px,4.2vw,52px)] leading-[1.06] font-extrabold tracking-[-1.5px]"
          >
            Know the cost <Serif>before you commit</Serif>
          </h2>
          <p {...reveal(150)} className="mt-[22px] mb-0 max-w-[460px] text-[17px] leading-[1.6]">
            Every engagement starts with an audit, so you know exactly what’s wrong and what it will cost before
            committing to anything bigger.
          </p>
        </div>
        <div className="grid min-w-0 flex-[1_1_440px] grid-cols-2 gap-x-8 gap-y-9">
          {proofFacts.map((f, i) => (
            <div key={f.label} {...reveal(100 + i * 100)}>
              <p className="serif-it m-0 text-[clamp(48px,5vw,68px)] leading-none">{f.value}</p>
              <p className="mt-[10px] mb-0 text-[15px]">{f.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
