import { BOOKING_HREF } from "@/content/site";
import { reveal } from "../reveal";
import { Container, DarkButton, SECTION_PY, Serif } from "../ui";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-h" className="bg-yellow">
      <Container className={`${SECTION_PY} text-center`}>
        <h2
          id="cta-h"
          {...reveal(0, "heading")}
          className="mx-auto my-0 max-w-[860px] text-[clamp(38px,5vw,64px)] leading-[1.04] font-extrabold tracking-[-2px]"
        >
          Find out what’s hiding in <Serif>your app</Serif>
        </h2>
        <p {...reveal(150)} className="mx-auto mt-[22px] mb-0 max-w-[560px] text-[18px] leading-[1.55] font-medium">
          Book a 20-minute call. Tell us what you built and we’ll tell you honestly whether an audit is worth it.
        </p>
        {/* Wrapped so the reveal doesn't clash with the button's hover transition. */}
        <div {...reveal(280)} className="mt-8">
          <DarkButton href={BOOKING_HREF}>Book a free intro call</DarkButton>
        </div>
      </Container>
    </section>
  );
}
