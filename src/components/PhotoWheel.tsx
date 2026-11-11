import Image from "next/image";
import { wheelPhotos } from "@/content/site";

const CARD_COUNT = 16;
const RADIUS = 875;

/** 16 photo cards on a large circle that turns once every 140s. Decorative only. */
export function PhotoWheel() {
  return (
    <div aria-hidden="true" className="wheel-stage">
      <div className="wheel-scale">
        <div className="wheel">
          {Array.from({ length: CARD_COUNT }, (_, i) => {
            const photo = wheelPhotos[i % wheelPhotos.length];
            const angle = (360 / CARD_COUNT) * i;
            return (
              <div key={i} className="wheel-card" style={{ transform: `rotate(${angle}deg) translateY(-${RADIUS}px)` }}>
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="280px"
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
