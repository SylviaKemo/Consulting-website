import { reviews } from "@/content/site";

/**
 * Review badge: platform logo, star rating and review count, linking to the profile.
 * Values come from `reviews` in site.ts.
 */
export function ReviewBadge({ className = "" }: { className?: string }) {
  if (!reviews.show) return null;
  const external = reviews.url.startsWith("http");

  return (
    <a
      href={reviews.url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`Rated ${reviews.rating} out of 5 from ${reviews.count} reviews on ${reviews.platform}`}
      className={`inline-flex items-center gap-2.5 text-ink no-underline ${className}`}
    >
      <ClutchMark />
      <span className="flex flex-col leading-none">
        <span className="flex gap-[3px]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} filled={i < Math.round(reviews.rating)} />
          ))}
        </span>
        <span className="mt-1.5 text-[15px] font-medium tracking-[0.2px] uppercase">{reviews.count} reviews</span>
      </span>
    </a>
  );
}

/** Clutch-style mark: a thick dark "C" with a red dot in the middle. */
function ClutchMark() {
  // Ring of radius 14: dash 68 + gap 20 ≈ circumference (88); offset centres the gap on the right.
  return (
    <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="68 20" strokeDashoffset="-10" />
      <circle cx="20" cy="20" r="5" fill="#ef3e2e" />
    </svg>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
