import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { ListItem } from "@/content/site";
import { reveal } from "./reveal";
import { Eyebrow } from "./ui";

type Photo = { src: string; alt: string; position: string };

/**
 * Text + photo section: eyebrow, heading, paragraph and an icon list on one side,
 * a captioned photo on the other. Used by "Who we work with" and "The problem".
 * Laid out with a grid (see .feature-split in globals.css) so the photo's position
 * in the stacked phone layout can differ per section.
 */
export function FeatureSplit({
  titleId,
  eyebrow,
  title,
  body,
  items,
  icon,
  photo,
  caption,
  reverse = false,
  photoAfterIntroOnMobile = false,
  className = "",
  photoShare = 1,
  aspectClassName,
}: {
  titleId: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  items: ListItem[];
  icon: "tick" | "alert";
  photo: Photo;
  caption: [string, string];
  /** Photo on the left on desktop. */
  reverse?: boolean;
  /** Phones: show the photo between the intro text and the list (default: after the list). */
  photoAfterIntroOnMobile?: boolean;
  /** Section padding. */
  className?: string;
  /** Desktop width of the photo column relative to the text column (1 = equal). */
  photoShare?: number;
  /** Aspect ratio of the photo, e.g. "aspect-square". */
  aspectClassName: string;
}) {
  return (
    <section aria-labelledby={titleId} className="bg-white">
      <div
        className={`feature-split mx-auto max-w-[1200px] px-6 ${reverse ? "is-reverse" : ""} ${
          photoAfterIntroOnMobile ? "is-photo-mid" : ""
        } ${className}`}
        style={{ "--photo-share": `${photoShare}fr` } as CSSProperties}
      >
        <div className="[grid-area:intro] min-w-0 self-end">
          <Eyebrow {...reveal()}>{eyebrow}</Eyebrow>
          <h2
            id={titleId}
            {...reveal("heading")}
            className="mt-[14px] mb-0 text-[clamp(34px,4.2vw,52px)] leading-[1.04] font-extrabold tracking-[-1.5px]"
          >
            {title}
          </h2>
          <p {...reveal()} className="mt-5 mb-0 max-w-[500px] text-[13px] leading-[1.65] text-slate">
            {body}
          </p>
        </div>

        <ul className="[grid-area:list] m-0 max-w-[520px] min-w-0 list-none self-start border-b border-ink/12 p-0">
            {items.map((item) => (
              <li
                key={item.name}
                {...reveal()}
                className="flex items-start gap-4 border-t border-ink/12 py-4 text-[13px] leading-[1.55]"
              >
                <ListIcon kind={icon} />
                <span>
                  <strong className="font-bold text-ink">{item.name}</strong>{" "}
                  <span className="text-slate">— {item.desc}</span>
                </span>
              </li>
            ))}
        </ul>

        <figure
          {...reveal("img")}
          className={`[grid-area:figure] relative m-0 min-w-0 self-center overflow-hidden rounded-3xl bg-soft ${aspectClassName}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 900px) 100vw, 600px"
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-b from-transparent to-[rgba(21,33,42,0.75)]"
          />
          <figcaption className="absolute bottom-[22px] left-6 text-white">
            <span className="block text-[18px] font-extrabold">{caption[0]}</span>
            <span className="block text-[14px] text-[#e8ecef]">{caption[1]}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/** 26px ink circle with a yellow tick or "!". */
function ListIcon({ kind }: { kind: "tick" | "alert" }) {
  return (
    <span
      aria-hidden="true"
      className="mt-px inline-flex size-[26px] flex-none items-center justify-center rounded-full bg-ink text-yellow"
    >
      {kind === "tick" ? (
        <svg
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
        </svg>
      ) : (
        <span className="text-[14px] leading-none font-extrabold">!</span>
      )}
    </span>
  );
}

/** Heading accent for this layout: Instrument Serif at 1.12em. */
export function SplitSerif({ children }: { children: ReactNode }) {
  return <span className="serif-it text-[1.12em]">{children}</span>;
}
