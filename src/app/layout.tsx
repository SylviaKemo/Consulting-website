import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { AGENCY_NAME } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
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
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
