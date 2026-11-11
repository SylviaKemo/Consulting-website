import Image from "next/image";
import type { CSSProperties } from "react";
import { wheelPhotos } from "@/content/site";
import { loadDelay } from "./reveal";

// 18 cards, 20° apart on a 905px circle: ~38px between 276px cards.
// Card size and circle radius (--wheel-r) live in globals.css.
const CARD_COUNT = 18;

/** Photo cards on a large circle that turns slowly. Fills the rest of the hero. Decorative only. */
export function PhotoWheel() {
  return (
    // load-rise: the whole wheel lifts in from below shortly after the page loads.
    <div aria-hidden="true" className="wheel-stage load-rise" style={loadDelay(0.5)}>
      <div className="wheel-scale">
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
