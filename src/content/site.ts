// All page copy lives here. Replace the [bracketed] placeholders before launch.

export const AGENCY_NAME = "[Agency name]";
export const CONTACT_EMAIL = "[hello@youragency.com]";
export const CONTACT_PHONE = "[+254 7XX XXX XXX]";

/** Where every "Book …" button points. Swap for a Cal.com / Calendly link when ready. */
export const BOOKING_HREF = "#book";

export const announcements = [
  "Launch offer: audit at 50% off for the first 3 clients",
  "NDA signed before we see any code",
  "Billing in KES or USD",
];

export type Photo = { src: string; position: string };

/** Order of photos around the hero wheel (repeats to fill 16 slots). */
export const wheelPhotos: Photo[] = [
  { src: "/assets/ongoing-care.jpg", position: "center 40%" },
  { src: "/assets/team-coding.jpg", position: "center 60%" },
  { src: "/assets/audit.jpg", position: "center 45%" },
  { src: "/assets/design-review.jpg", position: "center 55%" },
  { src: "/assets/demo-day.jpg", position: "center 35%" },
  { src: "/assets/developer-desk.jpg", position: "center 40%" },
  { src: "/assets/rescue-sprint.jpg", position: "center 35%" },
];

export const audiences = [
  {
    title: "Non-technical founders",
    body: "With a working AI-built MVP and their first users or paying customers.",
    highlight: false,
  },
  {
    title: "Startups with traction",
    body: "Whose prototype got traction faster than their code can handle.",
    highlight: true,
  },
  {
    title: "Agencies and freelancers",
    body: "Who shipped a vibe-coded build for a client and need it hardened.",
    highlight: false,
  },
];

export const problems = [
  "API keys and secrets sitting in the frontend",
  "Database rules that let any user read everyone’s data",
  "Logins and payments that break on edge cases",
  "No tests, so every change risks breaking something else",
  "No monitoring, so you hear about outages from angry customers",
  "Hosting costs that spike the moment you get traction",
];

export const proofFacts = [
  { value: "3–5 days", label: "To your written audit report" },
  { value: "2–4 wks", label: "For a fixed-price rescue sprint" },
  { value: "Fixed", label: "Price agreed upfront, every time" },
  { value: "4", label: "Countries we’ve shipped for" },
];

export const fixAreas = [
  {
    title: "Security",
    body: "Secrets, auth, access rules and input validation.",
    tags: "Secrets · Auth · Access rules",
    icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4",
  },
  {
    title: "Data",
    body: "Database structure, backups and data protection compliance.",
    tags: "Structure · Backups · Compliance",
    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    title: "Payments",
    body: "M-Pesa, Stripe and card flows that handle failures properly.",
    tags: "M-Pesa · Stripe · Cards",
    icon: "M3 6h18v12H3z M3 10h18 M7 15h4",
  },
  {
    title: "Reliability",
    body: "Tests on the critical paths, error handling, monitoring and alerts.",
    tags: "Tests · Monitoring · Alerts",
    icon: "M3 12h4l2-6 4 12 2-6h6",
  },
  {
    title: "Deployment",
    body: "Proper hosting, environments and a release process you can trust.",
    tags: "Hosting · Environments · Releases",
    icon: "M5 15c-1 1-2 4-2 6 2 0 5-1 6-2 M9 15l-3-3c2-6 7-9 15-9 0 8-3 13-9 15l-3-3z M15 9h.01",
  },
  {
    title: "Code health",
    body: "Clean-up so you or a future developer can keep building.",
    tags: "Clean-up · Maintainability",
    icon: "M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16",
  },
];

export type Currency = "KES" | "USD";
type Price = Record<Currency, string>;

export type Plan = {
  name: string;
  duration: string;
  bestFor: string;
  from: Price;
  upTo: Price;
  per?: string;
  cta: string;
  features: string[];
};

/** Suggested starting prices — still being tested. */
export const plans: Plan[] = [
  {
    name: "Production audit",
    duration: "3–5 days",
    bestFor: "Founders who want to know what’s risky before spending more on their app.",
    from: { KES: "45,000", USD: "350" },
    upTo: { KES: "65,000", USD: "500" },
    cta: "Book an audit",
    features: [
      "Code, database and infra review",
      "Written risk report in plain English",
      "Prioritised fix plan",
      "30-minute walkthrough call",
    ],
  },
  {
    name: "Rescue sprint",
    duration: "2–4 weeks",
    bestFor: "Apps with critical or high-risk issues found in the audit.",
    from: { KES: "200,000", USD: "1,500" },
    upTo: { KES: "500,000", USD: "4,000" },
    cta: "Start with an audit",
    features: [
      "Fixes for critical and high-risk issues",
      "Fixed scope and price agreed upfront",
      "You keep shipping features meanwhile",
      "Audit fee deducted from the sprint price",
    ],
  },
  {
    name: "Ongoing care",
    duration: "Monthly",
    bestFor: "Teams who want someone looking after the app after launch.",
    from: { KES: "25,000", USD: "200" },
    upTo: { KES: "60,000", USD: "500" },
    per: "/ month",
    cta: "Ask about care",
    features: [
      "Monitoring and alerts",
      "Updates and bug fixes",
      "A set number of small changes each month",
      "Never stuck when something breaks",
    ],
  },
];

export const countries = ["Kenya", "UK", "Sweden", "US"];

export const reasons = [
  {
    title: "We’ve shipped real products",
    body: "Production AI and full-stack work for teams in Kenya, the UK, Sweden and the US.",
  },
  {
    title: "We know what breaks",
    body: "On-call experience means we fix the things that cause 2am outages, not just the things that look untidy.",
  },
  {
    title: "We respect what you built",
    body: "No “rewrite it all” pitch. We keep what works and fix what doesn’t.",
  },
  {
    title: "Fixed prices, plain English",
    body: "You know the cost upfront, and every report is written for founders, not engineers.",
  },
];

export const faqs = [
  {
    q: "Do you rewrite my app from scratch?",
    a: "Almost never. Most AI-built apps have a solid core. We fix the risky parts and leave the rest.",
  },
  {
    q: "Which tools do you work with?",
    a: "Lovable, Bolt, Cursor, Replit, v0 and most apps built on React, Next.js, Node, Python, Supabase or Firebase.",
  },
  {
    q: "Can you add M-Pesa payments?",
    a: "Yes. We integrate M-Pesa, Stripe and card payments, with proper handling for failed and duplicate transactions.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, before we see any code.",
  },
  {
    q: "What if the audit finds nothing serious?",
    a: "Then you have written proof your app is ready, which is useful for investors and enterprise customers.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Yes. We work remotely with founders anywhere and bill in KES or USD.",
  },
];
