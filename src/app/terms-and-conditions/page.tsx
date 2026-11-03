import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms governing use of the ${siteConfig.name} website.`,
};

const lastUpdated = "November 3, 2026";

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="Legal"
        title="Terms and Conditions"
        description="Draft website terms. Must be reviewed by qualified legal counsel before production use."
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <div
            className="mb-10 border border-amber-200 bg-amber-50/90 px-5 py-4 md:px-6 md:py-5"
            role="note"
          >
            <p className="text-sm leading-relaxed text-slate">
              <span className="font-semibold text-ink">Legal review required.</span> This document
              is a starting point only. Client services are governed by separate written agreements,
              not these website terms alone.
            </p>
          </div>

          <div className="prose-uq">
            <p className="text-sm text-slate">Last updated: {lastUpdated}</p>

            <h2>1. Agreement</h2>
            <p>
              By accessing {siteConfig.url}, you agree to these Terms and Conditions
              (&quot;Terms&quot;). If you do not agree, do not use the site.
            </p>

            <h2>2. About {siteConfig.name}</h2>
            <p>
              The site is operated by {siteConfig.legalName}.{" "}
              <strong>[Insert full legal name, jurisdiction of incorporation, and registered address.]</strong>
            </p>

            <h2>3. Website content</h2>
            <p>
              Content on this site — including service descriptions, portfolio demonstrations, and
              articles — is provided for general information. Conceptual projects in our work
              section are demonstrations, not representations of client outcomes. Nothing on this
              site constitutes a binding offer or guarantee of results.
            </p>

            <h2>4. Professional services</h2>
            <p>
              Engineering, design, or consulting engagements require a separate statement of work,
              master services agreement, or other signed contract.{" "}
              <strong>[Reference standard contract templates and governing law with counsel.]</strong>
            </p>

            <h2>5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the site unlawfully or in a way that could harm {siteConfig.name} or others.</li>
              <li>Attempt unauthorized access to systems or data.</li>
              <li>Scrape or automate access in a manner that impairs site operation.</li>
              <li>Misrepresent your affiliation with {siteConfig.name}.</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              Site content, branding, and materials are owned by {siteConfig.name} or its licensors
              and protected by applicable intellectual property laws. You may not copy or reuse
              materials except as permitted by law or with our prior written consent.
            </p>

            <h2>7. Third-party links</h2>
            <p>
              Links to third-party sites are provided for convenience. We are not responsible for
              their content or practices.
            </p>

            <h2>8. Disclaimer</h2>
            <p>
              The site is provided &quot;as is&quot; and &quot;as available&quot; without warranties
              of any kind, to the fullest extent permitted by law.{" "}
              <strong>[Tailor disclaimers to applicable jurisdiction.]</strong>
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {siteConfig.name} will not be liable for
              indirect, incidental, special, consequential, or punitive damages arising from use of
              the site.{" "}
              <strong>[Set liability caps and carve-outs per counsel guidance.]</strong>
            </p>

            <h2>10. Indemnity</h2>
            <p>
              You agree to indemnify {siteConfig.name} against claims arising from your misuse of
              the site, to the extent permitted by law.{" "}
              <strong>[Review indemnity scope with counsel.]</strong>
            </p>

            <h2>11. Governing law</h2>
            <p>
              <strong>
                [Specify governing law and courts — e.g., laws of [jurisdiction] without regard to
                conflict rules.]
              </strong>
            </p>

            <h2>12. Changes</h2>
            <p>
              We may update these Terms. Continued use after changes constitutes acceptance of the
              revised Terms where permitted by law.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a>
            </p>

            <p>
              See our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
