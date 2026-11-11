import Image from "next/image";
import type { ReactNode } from "react";
import type { ListItem } from "@/content/site";
import { reveal } from "./reveal";
import { Eyebrow } from "./ui";

type Photo = { src: string; alt: string; position: string };

/**
 * Text + photo section: eyebrow, heading, paragraph and an icon list on one side,
 * a captioned photo on the other. Used by "Who we work with" and "The problem".
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
  className = "",
  figureClassName,
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
  /** Section padding. */
  className?: string;
  /** Flex sizing + aspect ratio of the photo. */
  figureClassName: string;
}) {
  return (
    <section aria-labelledby={titleId} className="bg-white">
      <div
        className={`mx-auto flex max-w-[1200px] flex-wrap items-center gap-[clamp(40px,6vw,88px)] px-6 ${
          reverse ? "flex-row-reverse" : "flex-row"
        } ${className}`}
      >
        <div className="min-w-0 flex-[1_1_440px]">
          <Eyebrow {...reveal(0)}>{eyebrow}</Eyebrow>
          <h2
            id={titleId}
            {...reveal(80, "heading")}
            className="mt-[14px] mb-0 text-[clamp(34px,4.2vw,52px)] leading-[1.04] font-extrabold tracking-[-1.5px]"
          >
            {title}
          </h2>
          <p {...reveal(160)} className="mt-5 mb-0 max-w-[500px] text-[13px] leading-[1.65] text-slate">
            {body}
          </p>
          <ul className="mt-8 mb-0 max-w-[520px] list-none border-b border-ink/12 p-0">
            {items.map((item, i) => (
              <li
                key={item.name}
                {...reveal(i * 80)}
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
        </div>

        <figure
          {...reveal(0, "img")}
          className={`relative m-0 min-w-0 overflow-hidden rounded-3xl bg-soft ${figureClassName}`}
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
