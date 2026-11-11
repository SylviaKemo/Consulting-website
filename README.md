# Bright landing page

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 rebuild of the `index.html` design handoff.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Where things live

- `src/content/site.ts` — all copy, prices, FAQ and the `[placeholders]` (agency name, email, phone, booking link).
- `src/app/globals.css` — brand colour tokens (`bg-yellow`, `text-ink`, …) and the animation CSS (ticker, carousel, photo wheel, blur-in, button fill).
- `src/components/sections/` — one component per page section, in page order.
- `src/components/ui.tsx` — shared bits (`DarkButton`, `SectionIntro`, `Serif`, …).
- `public/assets/` — photos.

## Before launch

- Replace the placeholders in `src/content/site.ts`.
- Point `BOOKING_HREF` at the real booking flow (Cal.com / Calendly).
- Prices are suggested starting points.
