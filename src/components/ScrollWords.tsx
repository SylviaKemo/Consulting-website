import { Fragment } from "react";

export type WordPart = { text: string; serif?: boolean } | { br: true };

/**
 * Heading text whose words light up one after another as the heading scrolls
 * through the screen. Put `scroll-words` on the heading element itself.
 * The text stays real text; browsers without scroll timelines show it at full strength.
 */
export function ScrollWords({ parts }: { parts: WordPart[] }) {
  const total = parts.reduce((n, p) => n + ("text" in p ? p.text.split(" ").length : 0), 0);
  let index = 0;

  // Words light up between 8% and ~50% of the heading's trip across the screen.
  const range = (i: number) => {
    const start = 8 + (i / total) * 34;
    return `cover ${start.toFixed(1)}% cover ${(start + 12).toFixed(1)}%`;
  };

  const words = (text: string) =>
    text.split(" ").map((w, j) => {
      const i = index++;
      return (
        <Fragment key={j}>
          {j > 0 ? " " : null}
          <span className="sw" style={{ animationRange: range(i) }}>
            {w}
          </span>
        </Fragment>
      );
    });

  return (
    <>
      {parts.map((p, k) => {
        if ("br" in p) return <br key={k} />;
        return (
          <Fragment key={k}>
            {k > 0 && !("br" in parts[k - 1]) ? " " : null}
            {p.serif ? <span className="serif-it text-[1.1em]">{words(p.text)}</span> : words(p.text)}
          </Fragment>
        );
      })}
    </>
  );
}
