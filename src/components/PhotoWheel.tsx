import Image from "next/image";
import type { CSSProperties } from "react";
import { wheelPhotos } from "@/content/site";
import { ReviewBadge } from "./ReviewBadge";

// 18 cards, 20° apart on a 905px circle: ~38px between 276px cards.
// Card size and circle radius (--wheel-r) live in globals.css.
const CARD_COUNT = 18;

/**
 * Photo cards on a large circle that turns slowly, with the review badge centred under
 * the top of the arc. Fills the rest of the hero. The photos are decorative.
 */
export function PhotoWheel() {
  return (
    // data-hero="wheel": lifted in by the hero intro; .wheel is spun by GSAP (Hero.tsx).
    <div className="wheel-stage" data-hero="wheel">
      <ReviewBadge className="wheel-badge" />
      <div aria-hidden="true" className="wheel-scale">
        <div className="wheel">
          {Array.from({ length: CARD_COUNT }, (_, i) => {
            const photo = wheelPhotos[i % wheelPhotos.length];
            const angle = (360 / CARD_COUNT) * i;
            return (
              <div key={i} className="wheel-card" style={{ "--angle": `${angle}deg` } as CSSProperties}>
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="276px"
                  loading="eager"
                  className="object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
