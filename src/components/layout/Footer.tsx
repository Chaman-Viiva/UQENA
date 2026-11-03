import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/config";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-[var(--border)] bg-navy-elevated">
      <div className="container-uq section-pad !pb-10 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo showTagline />
            <p className="mt-5 text-sm leading-relaxed text-gray">
              UQENA helps ambitious businesses design, build, and scale intelligent
              digital products — with engineering precision and long-term partnership.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {(
                [
                  { href: siteConfig.social.linkedin, label: "LinkedIn" },
                  { href: siteConfig.social.twitter, label: "X" },
                  { href: siteConfig.social.github, label: "GitHub" },
                ] as const
              ).map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="focus-ring inline-flex rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-gray transition hover:border-blue hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={footerNavigation.company} />
          <FooterColumn title="Services" links={footerNavigation.services} />
          <FooterColumn title="Industries" links={footerNavigation.industries} />
        </div>

        <div className="mt-14 grid gap-6 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2 text-sm text-gray">
            <p>
              Contact:{" "}
              <a className="text-blue hover:underline" href={siteConfig.contact.mailto}>
                {siteConfig.contact.email}
              </a>
            </p>
            <p>{siteConfig.contact.locationLabel}</p>
            <p className="text-xs opacity-80">{siteConfig.contact.locationNote}</p>
            <p className="text-xs opacity-80">
              Phone: {siteConfig.contact.phone}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray">
            {footerNavigation.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-gray/80">
          © {year} {siteConfig.legalName}. All rights reserved. Engineering What&apos;s Next.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
