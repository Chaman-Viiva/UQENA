import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
};

const lastUpdated = "November 4, 2026";

export default function CookiePolicyPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="Legal"
        title="Cookie Policy"
        description={`How ${siteConfig.name} uses cookies and similar technologies on this website.`}
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <div className="prose-uq">
            <p className="text-sm text-slate">Last updated: {lastUpdated}</p>

            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. Similar
              technologies include local storage, session storage, and pixels. They can help sites
              function, remember preferences, or measure usage.
            </p>

            <h2>2. How {siteConfig.name} uses cookies</h2>
            <p>
              This marketing website is primarily informational. A review of the application code
              confirms that {siteConfig.name} does <strong>not</strong> implement first-party
              analytics cookies, advertising cookies, or a marketing tag manager on this Site.
            </p>
            <p>
              The Site also does not currently provide a cookie preference center because
              non-essential cookies are not set by the application itself. If that changes, this
              policy and any required consent mechanism will be updated before non-essential
              cookies are introduced.
            </p>

            <h3>2.1 Strictly necessary / operational</h3>
            <p>
              Our hosting and content delivery provider (Vercel) may set or rely on strictly
              necessary cookies or similar technologies for security, load balancing, abuse
              prevention, or to deliver the Site reliably. These technologies are controlled by
              the hosting platform and are typically required for the Site to function as
              intended.
            </p>

            <h3>2.2 Analytics and performance</h3>
            <p>
              We do not use analytics or performance cookies through this Site&apos;s application
              code at this time.
            </p>

            <h3>2.3 Marketing and advertising</h3>
            <p>
              We do not use marketing or advertising cookies through this Site&apos;s application
              code at this time.
            </p>

            <h3>2.4 Local storage</h3>
            <p>
              Ordinary browser features used by the Site (for example, session state managed by
              your browser while navigating) are not used to track you across sites for
              advertising. We do not store marketing profiles in local storage via this Site.
            </p>

            <h2>3. Your choices</h2>
            <p>
              You can control cookies through your browser settings, including blocking or
              deleting cookies. Blocking cookies required by hosting or security layers may affect
              Site functionality.
            </p>
            <p>
              Because this Site does not set non-essential cookies in its own code, a separate
              on-site consent banner is not currently required for analytics or marketing cookies
              that we control. If we introduce such technologies later, we will update this policy
              and implement an appropriate consent experience where legally required.
            </p>

            <h2>4. Third parties</h2>
            <p>
              Links to third-party services (for example LinkedIn, Facebook, Instagram, X, or
              WhatsApp) may cause those services to set their own cookies when you visit their
              domains. Their policies apply there — not on {siteConfig.url}.
            </p>

            <h2>5. Updates</h2>
            <p>
              We may update this Cookie Policy when our tools or legal requirements change. Check
              the date above for the latest version.
            </p>

            <h2>6. Contact</h2>
            <p>
              Questions: <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a>. See
              also our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
