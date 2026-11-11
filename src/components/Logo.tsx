// Second Draft logo, traced from the brand artwork (public/brand/*.png) so it stays sharp at any size.

const COLORS = {
  // Indigo bars + lavender fold, as on the yellow artwork.
  color: { bars: "#2d2370", fold: "#c9b3e3", text: "#2d2370" },
  // White version for dark backgrounds.
  light: { bars: "#ffffff", fold: "#d9d9d9", text: "#ffffff" },
} as const;

type Variant = keyof typeof COLORS;

/** The three slanted bars on their own. */
export function LogoMark({ variant = "color", className = "" }: { variant?: Variant; className?: string }) {
  const c = COLORS[variant];
  return (
    <svg viewBox="175 125 150 154" className={className} aria-hidden="true" focusable="false">
      <path fill={c.bars} d="M213 125h37l-38 112h-37z" />
      <path fill={c.bars} d="M250 146h37l-38 112h-37z" />
      {/* Third bar: the lower-left corner is "folded" in the lighter colour. */}
      <path fill={c.bars} d="M288 167h37l-38 112-18.5-57z" />
      <path fill={c.fold} d="M268.5 222 287 279h-37z" />
    </svg>
  );
}

/** Mark + "SECOND / DRAFT" side by side, for the navbar and footer. */
export function Logo({
  variant = "color",
  size = "md",
  className = "",
}: {
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  const c = COLORS[variant];
  const lg = size === "lg";
  return (
    <span className={`inline-flex items-center ${lg ? "gap-3" : "gap-2"} ${className}`}>
      <LogoMark variant={variant} className={lg ? "h-10 w-auto" : "h-7 w-auto"} />
      <span className="flex flex-col items-center leading-none" style={{ color: c.text }}>
        <span className={`font-extrabold tracking-[-0.3px] ${lg ? "text-[22px]" : "text-[16px]"}`}>SECOND</span>
        <span className={`font-medium tracking-[0.42em] ${lg ? "mt-1 pl-[0.42em] text-[10px]" : "mt-[3px] pl-[0.42em] text-[7.5px]"}`}>
          DRAFT
        </span>
      </span>
    </span>
  );
}
