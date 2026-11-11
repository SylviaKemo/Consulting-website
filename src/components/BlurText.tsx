import { Fragment } from "react";

const delay = (seconds: number) => ({ animationDelay: `${seconds.toFixed(3)}s` });

type Part = { text: string; serif?: boolean };

/**
 * Letter-by-letter blur-in. Each word is wrapped so it never breaks mid-word.
 * Render inside an element that carries the full sentence as its aria-label.
 */
export function BlurLetters({
  parts,
  start,
  step,
  serifSize = "1.12em",
}: {
  parts: Part[];
  start: number;
  step: number;
  serifSize?: string;
}) {
  // Assign each letter its delay up front so the counter runs across all parts.
  let n = 0;
  const words = parts.map((part) =>
    part.text.split(" ").map((word) => [...word].map((ch) => ({ ch, d: start + step * n++ }))),
  );

  return (
    <span aria-hidden="true">
      {parts.map((part, p) => {
        const content = words[p].map((letters, w) => (
          <Fragment key={w}>
            {w > 0 ? " " : null}
            <span className="bw">
              {letters.map(({ ch, d }, i) => (
                <span key={i} className="bc" style={delay(d)}>
                  {ch}
                </span>
              ))}
            </span>
          </Fragment>
        ));
        return (
          <Fragment key={p}>
            {p > 0 ? " " : null}
            {part.serif ? (
              <span className="serif-it" style={{ fontSize: serifSize }}>
                {content}
              </span>
            ) : (
              content
            )}
          </Fragment>
        );
      })}
    </span>
  );
}

/** Word-by-word blur-in for longer copy. */
export function BlurWords({ text, start, step }: { text: string; start: number; step: number }) {
  return (
    <span aria-hidden="true">
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span className="bc" style={delay(start + step * i)}>
            {word}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

/** A single block that blurs in as one unit. */
export function BlurBlock({ text, at = 0 }: { text: string; at?: number }) {
  return (
    <span className="bc" style={delay(at)}>
      {text}
    </span>
  );
}
