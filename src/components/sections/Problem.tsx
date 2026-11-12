import { problems } from "@/content/site";
import { FeatureSplit, SplitSerif } from "../FeatureSplit";

/** Same layout as "Who we work with", mirrored: photo on the left on desktop. */
export function Problem() {
  return (
    <FeatureSplit
      titleId="problem-h"
      eyebrow="The problem"
      title={
        <>
          It works on demo day.
          <br />
          <SplitSerif>Will it work on day 100?</SplitSerif>
        </>
      }
      body="AI tools are brilliant at getting you to a working prototype. They are less good at the parts users never see until something goes wrong."
      items={problems}
      icon="alert"
      photo={{
        src: "/assets/demo-day.jpg",
        alt: "Two people at a wooden table talking through a project, one gesturing as he explains",
        position: "center 40%",
      }}
      caption={["Demo day", "is not day 100."]}
      reverse
      photoAfterIntroOnMobile
      // Tighter top padding: it follows another white section.
      className="pt-[clamp(40px,5vw,72px)] pb-[clamp(104px,12vw,176px)]"
      photoShare={1.2}
      aspectClassName="aspect-square"
    />
  );
}
