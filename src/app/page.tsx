import { SectionAnimations } from "@/components/animation/SectionAnimations";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { ProofBand } from "@/components/sections/ProofBand";
import { WhatWeFix } from "@/components/sections/WhatWeFix";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    // overflow-x: clip (not hidden) so the sticky hero keeps working.
    <div className="w-full overflow-x-clip bg-white text-ink">
      <Hero />

      {/* Everything after the hero rises over it on scroll. SectionAnimations runs the GSAP
          scroll animations for everything inside it. */}
      <SectionAnimations className="relative z-[1] overflow-clip bg-white shadow-[0_-18px_40px_rgba(21,33,42,0.10)]">
        <main>
          <WhoWeWorkWith />
          <Problem />
          <ProofBand />
          <WhatWeFix />
          <HowItWorks />
          <Pricing />
          <WhyUs />
          <Faq />
          <ClosingCta />
        </main>
        <Footer />
      </SectionAnimations>
    </div>
  );
}
