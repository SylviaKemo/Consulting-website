import { audiences, whoPhoto } from "@/content/site";
import { FeatureSplit, SplitSerif } from "../FeatureSplit";

export function WhoWeWorkWith() {
  return (
    <FeatureSplit
      titleId="for-h"
      eyebrow="Who we work with"
      title={
        <>
          Built for teams
          <br />
          <SplitSerif>who shipped fast.</SplitSerif>
        </>
      }
      body="You keep what you built. We fix what will break in front of real users — so your app can launch, charge and scale without the 2am surprises."
      items={audiences}
      icon="tick"
      photo={whoPhoto}
      caption={["Your team", "ready for real users."]}
      className="py-[clamp(104px,12vw,176px)]"
      aspectClassName="aspect-[4/4.2]"
    />
  );
}
