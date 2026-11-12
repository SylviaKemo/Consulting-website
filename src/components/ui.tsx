import type { HTMLAttributes, ReactNode } from "react";
import { reveal } from "./reveal";

/** Italic serif accent phrase used once in most headings. */
export function Serif({ children }: { children: ReactNode }) {
  // Instrument Serif is drawn small, so it is scaled up to sit level with Manrope.
  return <span className="serif-it text-[1.1em]">{children}</span>;
}

/** Small uppercase label above a heading. */
export function Eyebrow({ children, className = "", ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`m-0 text-[13px] font-semibold uppercase tracking-[0.6px] ${className}`} {...rest}>
      {children}
    </p>
  );
}

/** Dark button-styled link with the left-to-right hover fill. Pass sizing via className. */
export function DarkButton({
  href,
  children,
  className = "",
  id,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <a
      id={id}
      href={href}
      className={`btn-fill inline-flex min-h-12 items-center justify-center rounded-2xl bg-ink px-8 text-[14px] font-medium text-white no-underline ${className}`}
    >
      {children}
    </a>
  );
}

/** Eyebrow + H2 on the left, optional supporting paragraph on the right. */
export function SectionIntro({
  eyebrow,
  title,
  titleId,
  aside,
  className = "mb-14",
}: {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-8 ${className}`}>
      <div className="min-w-0 flex-[1_1_480px]">
        <Eyebrow {...reveal()}>{eyebrow}</Eyebrow>
        <h2
          id={titleId}
          {...reveal("heading")}
          className="mt-[14px] mb-0 text-[clamp(34px,4.4vw,54px)] leading-[1.06] font-extrabold tracking-[-1.5px]"
        >
          {title}
        </h2>
      </div>
      {aside ? (
        <p {...reveal()} className="m-0 max-w-[440px] flex-[1_1_380px] text-[13px] leading-[1.6]">
          {aside}
        </p>
      ) : null}
    </div>
  );
}

/** Max-width content column with the standard 24px gutters. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

/** Standard vertical section padding. */
export const SECTION_PY = "py-[clamp(104px,12vw,176px)]";
export const SECTION_PB = "pb-[clamp(104px,12vw,176px)]";
export const SECTION_PT_TIGHT = "pt-[clamp(40px,5vw,72px)]";

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 7h19M14 1l6 6-6 6" />
    </svg>
  );
}

export function CheckBullet() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-[22px] flex-none items-center justify-center rounded-full bg-ink text-yellow"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
      </svg>
    </span>
  );
}
