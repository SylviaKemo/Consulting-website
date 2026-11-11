import { AGENCY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/content/site";
import { Logo } from "../Logo";
import { reveal } from "../reveal";
import { Container } from "../ui";

const columns = [
  {
    title: "Services",
    links: [
      { href: "#pricing", label: "Production audit" },
      { href: "#pricing", label: "Rescue sprint" },
      { href: "#pricing", label: "Ongoing care" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#how", label: "How it works" },
      { href: "#faq", label: "FAQ" },
      { href: "#top", label: "Privacy policy" },
    ],
  },
];

const HEADING = "mt-0 mb-[18px] text-[16px] font-extrabold";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="flex flex-wrap gap-10 py-16">
          <div {...reveal(0)} className="min-w-0 flex-[1.4_1_260px]">
            <p className="m-0">
              <Logo variant="light" size="lg" />
              <span className="sr-only">{AGENCY_NAME}</span>
            </p>
            <p className="mt-[14px] mb-0 max-w-[320px] text-[15px] leading-[1.6] text-mist">
              A small senior engineering team that rescues and hardens apps built with AI tools.
            </p>
          </div>
          {columns.map((col, i) => (
            <div key={col.title} {...reveal(100 + i * 100)} className="min-w-0 flex-[1_1_180px]">
              <p className={HEADING}>{col.title}</p>
              <div className="flex flex-col gap-3 text-[15px]">
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-mist no-underline">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div {...reveal(300)} className="min-w-0 flex-[1.2_1_240px]">
            <p className={HEADING}>Contact</p>
            <div className="flex flex-col gap-3 text-[15px] text-mist">
              <span>Nairobi, Kenya · Remote worldwide</span>
              <span>{CONTACT_EMAIL}</span>
              <span>{CONTACT_PHONE}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-rule pt-6 pb-8 text-[14px] text-mist">
          <span>© 2026 {AGENCY_NAME}. All rights reserved.</span>
          <span>NDA signed before we see any code · Billing in KES or USD</span>
        </div>
      </Container>
    </footer>
  );
}
