import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
};

const lastUpdated = "November 3, 2026";

export default function CookiePolicyPage() {
  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Legal"
        title="Cookie Policy"
        description="Draft explanation of cookies and similar technologies. Update the cookie inventory after analytics and marketing tools are finalized."
      />

      <section className="section-pad">
        <div className="container-uq">
          <div
            className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-4"
            role="note"
          >
            <p className="text-sm leading-relaxed text-white">
              <span className="font-semibold text-amber-200">Review required.</span> List actual
              cookies and consent mechanisms implemented in production. If no non-essential cookies
              are used, state that clearly after verification.
            </p>
          </div>

          <div className="prose-uq max-w-3xl">
            <p className="text-sm text-gray">Last updated: {lastUpdated}</p>

            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. Similar
              technologies include local storage, session storage, and pixels. They help sites
              function, remember preferences, or understand usage.
            </p>

            <h2>2. How {siteConfig.name} uses cookies</h2>
            <p>
              We aim to minimize tracking on this marketing site. At the time of this draft, the
              site is primarily informational.{" "}
              <strong>
                [Confirm whether essential hosting cookies, analytics (e.g., privacy-focused or
                mainstream), embedded media, or consent banners are in use — document each.]
              </strong>
            </p>

            <h3>2.1 Strictly necessary</h3>
            <p>
              These cookies are required for basic operation and security (for example, load
              balancing or abuse protection at the hosting layer). They do not require consent in
              many jurisdictions, but you should still document them.{" "}
              <strong>[Inventory necessary cookies and providers.]</strong>
            </p>

            <h3>2.2 Analytics and performance</h3>
            <p>
              If enabled, analytics cookies help us understand aggregate traffic and improve
              content.{" "}
              <strong>
                [If not used, replace this section with: &quot;We do not use analytics cookies on
                this site.&quot; after verification.]
              </strong>
            </p>

            <h3>2.3 Marketing</h3>
            <p>
              <strong>
                [If not used, state: &quot;We do not use marketing or advertising cookies on this
                site.&quot;]
              </strong>
            </p>

            <h2>3. Your choices</h2>
            <p>
              You can control cookies through browser settings — including blocking or deleting
              cookies. Blocking strictly necessary cookies may affect site functionality.
            </p>
            <p>
              Where required by law, we will provide a consent mechanism before non-essential
              cookies are set.{" "}
              <strong>[Describe consent tool and preference center if implemented.]</strong>
            </p>

            <h2>4. Third parties</h2>
            <p>
              Third-party services linked from our site (such as social networks) may set their own
              cookies when you visit them. Their policies apply on their domains.
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
