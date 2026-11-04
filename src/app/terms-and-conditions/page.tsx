import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms governing use of the ${siteConfig.name} website.`,
};

const lastUpdated = "November 4, 2026";

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="Legal"
        title="Terms and Conditions"
        description={`Terms that apply when you browse or use the ${siteConfig.name} website.`}
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <div className="prose-uq">
            <p className="text-sm text-slate">Last updated: {lastUpdated}</p>

            <h2>1. Agreement</h2>
            <p>
              By accessing {siteConfig.url} (the &quot;Site&quot;), you agree to these Terms and
              Conditions (&quot;Terms&quot;). If you do not agree, do not use the Site.
            </p>

            <h2>2. About {siteConfig.name}</h2>
            <p>
              The Site is operated by {siteConfig.name}, a software engineering brand. Contact
              details published on the Site (email, phone, and WhatsApp) are the authoritative
              public contact channels. We do not currently publish a registered office address on
              this Site.
            </p>
            <p>
              These Terms govern website use only. Paid engineering, design, or consulting work
              requires a separate written agreement (such as a statement of work or services
              contract). Website content is not itself a binding offer of services.
            </p>

            <h2>3. Website content</h2>
            <p>
              Service descriptions, articles, and other materials on the Site are for general
              information. They may be updated without notice and are not warranties of fitness
              for a particular purpose.
            </p>

            <h2>4. Portfolio and conceptual demonstrations</h2>
            <p>
              Projects presented in the Work section — including{" "}
              <strong>CareFlow Health</strong>, <strong>Havenly Market</strong>,{" "}
              <strong>Ledgerly</strong>, and other listed concepts — are{" "}
              <strong>conceptual product demonstrations</strong> created by {siteConfig.name} to
              illustrate design and engineering approach. They are not verified client
              engagements, live production deployments for third parties, or claims of customer
              results, revenue impact, or testimonials.
            </p>

            <h2>5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Site unlawfully or in a way that could harm {siteConfig.name}, its
                visitors, or others.
              </li>
              <li>Attempt unauthorized access to systems, accounts, or data.</li>
              <li>
                Scrape, overload, or automate access in a manner that impairs Site operation.
              </li>
              <li>Misrepresent your affiliation with {siteConfig.name}.</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              Site content, branding (including the {siteConfig.name} name, mark, and lockups),
              copy, and demonstration materials are owned by {siteConfig.name} or its licensors
              and protected by applicable intellectual property laws. You may not copy, modify, or
              redistribute materials except as permitted by law or with prior written consent.
            </p>

            <h2>7. Third-party links</h2>
            <p>
              Links to third-party sites (including social networks and messaging apps) are
              provided for convenience. We are not responsible for their content, availability, or
              practices. Their terms and privacy policies apply on their domains.
            </p>

            <h2>8. Availability</h2>
            <p>
              We aim to keep the Site available but do not guarantee uninterrupted or error-free
              access. Maintenance, hosting incidents, or force majeure events may affect
              availability.
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              To the fullest extent permitted by applicable law, the Site is provided &quot;as
              is&quot; and &quot;as available&quot; without warranties of any kind, whether
              express or implied, including merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>

            <h2>10. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.name} will not be
              liable for indirect, incidental, special, consequential, or punitive damages, or for
              loss of profits, data, or goodwill, arising from your use of — or inability to use —
              the Site. Nothing in these Terms excludes liability that cannot be excluded under
              applicable law.
            </p>

            <h2>11. Legal framework note</h2>
            <p>
              These Terms are written in plain language to set clear expectations for use of a
              public marketing website. A specific governing law and exclusive forum have not been
              designated here pending confirmation with qualified legal counsel. If a dispute
              arises, the parties will seek to resolve it amicably before pursuing formal remedies
              available under applicable law.
            </p>

            <h2>12. Changes</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date will
              change when we do. Continued use of the Site after an update constitutes acceptance
              of the revised Terms where permitted by law.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a> ·{" "}
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
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
