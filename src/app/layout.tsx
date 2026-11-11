import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AGENCY_NAME } from "@/content/site";
import "./globals.css";

// Manrope for all text; Instrument Serif italic for the accent words in headings.
const sans = Manrope({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const accent = Instrument_Serif({
  variable: "--font-accent-face",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: `${AGENCY_NAME} — Your AI built the app. We make it ready for real users.`,
  description:
    "We find what will break in apps built with Lovable, Bolt, Cursor, Replit and v0, and fix it before your customers do.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the script below adds a class to <html> before React loads.
    <html lang="en" className={`${sans.variable} ${accent.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint, so scroll-reveal content is hidden without a flash.
            Without JavaScript the class is never added and everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('reveal-ready')" }} />
      </head>
      {/* suppressHydrationWarning: browser extensions (Grammarly, ColorZilla, etc.) often add
          attributes to <body> before React loads. This ignores those on <body> only. */}
      <body suppressHydrationWarning>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
