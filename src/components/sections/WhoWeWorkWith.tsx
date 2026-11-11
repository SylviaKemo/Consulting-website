import { audiences } from "@/content/site";
import { Container, SECTION_PY, SectionIntro, Serif } from "../ui";

export function WhoWeWorkWith() {
  return (
    <section aria-labelledby="for-h" className="bg-white">
      <Container className={SECTION_PY}>
        <SectionIntro
          eyebrow="Who we work with"
          titleId="for-h"
          title={
            <>
              Built for teams who <Serif>shipped fast</Serif>
            </>
          }
          aside="You keep what you built. We fix what will break in front of real users."
        />
        <div className="flex flex-wrap gap-5">
          {audiences.map((a, i) => (
            <article
              key={a.title}
              className={`min-w-0 flex-[1_1_300px] rounded-[20px] p-8 ${a.highlight ? "bg-lavender text-purple" : "bg-soft"}`}
            >
              <p className={`m-0 text-[13px] font-bold ${a.highlight ? "" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-9 mb-0 text-[24px] font-extrabold tracking-[-0.5px]">{a.title}</h3>
              <p className={`mt-[10px] mb-0 text-[16px] leading-[1.6] ${a.highlight ? "" : "text-slate"}`}>{a.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
