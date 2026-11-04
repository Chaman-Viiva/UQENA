import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { siteConfig } from "@/lib/config";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-white">
      <div className="container-uq py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.35fr_repeat(3,1fr)]">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Logo variant="dark" showTagline href="/" />
            <p className="mt-5 text-sm leading-relaxed text-gray">
              Software engineering and digital product partnership for teams that need
              clarity, craft, and systems built to last.
            </p>
            <SocialLinks className="mt-6" tone="dark" />
            <div className="mt-6 space-y-2 text-sm text-gray">
              <p>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={siteConfig.contact.mailto}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                  href={siteConfig.contact.phoneHref}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          <FooterColumn title="Company" links={footerNavigation.company} />
          <FooterColumn title="Services" links={footerNavigation.services} />
          <FooterColumn title="Industries" links={footerNavigation.industries} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray/80">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray">
            {footerNavigation.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
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
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
