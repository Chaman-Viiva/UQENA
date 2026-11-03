import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles personal information when you use this website and contact us.`,
};

const lastUpdated = "November 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Draft policy for ${siteConfig.name}. Company-specific details marked below require legal and business review before publication.`}
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <div
            className="mb-10 border border-amber-200 bg-amber-50/90 px-5 py-4 md:px-6 md:py-5"
            role="note"
          >
            <p className="text-sm leading-relaxed text-slate">
              <span className="font-semibold text-ink">Review required.</span> This is a draft
              template. Replace bracketed placeholders with verified legal entity details,
              jurisdiction, data processors, and retention practices before relying on it
              operationally.
            </p>
          </div>

          <div className="prose-uq">
            <p className="text-sm text-slate">Last updated: {lastUpdated}</p>

            <h2>1. Who we are</h2>
            <p>
              This website is operated by{" "}
              <strong>{siteConfig.legalName}</strong> (&quot;{siteConfig.name}&quot;,
              &quot;we&quot;, &quot;us&quot;).{" "}
              <strong>[Registered legal entity name and company number — confirm with counsel.]</strong>
            </p>
            <p>
              Registered address:{" "}
              <strong>[Insert verified registered office address — confirm with counsel.]</strong>
            </p>
            <p>
              Privacy contact:{" "}
              <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a>{" "}
              <strong>[Confirm dedicated privacy inbox if different.]</strong>
            </p>

            <h2>2. Scope</h2>
            <p>
              This policy describes how we handle information when you visit {siteConfig.url},
              read our content, or contact us. It does not cover third-party websites linked from
              our pages.
            </p>

            <h2>3. Information we collect</h2>
            <h3>3.1 Information you provide</h3>
            <p>
              If you email us or use the contact form, you may provide your name, email address,
              company name, project details, and other information you choose to include. The
              contact form on this site uses a <code>mailto</code> link — submission occurs through
              your email client, not a server-side form handler on this website.
            </p>
            <h3>3.2 Automatic technical data</h3>
            <p>
              Like most websites, hosting and infrastructure providers may process technical logs
              (such as IP address, browser type, and request timestamps) for security and
              reliability.{" "}
              <strong>
                [Document actual hosting provider, analytics tools, and log retention — legal review.]
              </strong>
            </p>

            <h2>4. How we use information</h2>
            <ul>
              <li>Respond to inquiries and provide requested services.</li>
              <li>Operate, secure, and improve our website.</li>
              <li>Comply with legal obligations.</li>
              <li>
                <strong>[Add marketing/analytics uses only if accurately implemented.]</strong>
              </li>
            </ul>

            <h2>5. Legal bases (where applicable)</h2>
            <p>
              If you are in the European Economic Area, United Kingdom, or other regions with
              similar laws, we rely on appropriate bases such as consent, contract, legitimate
              interests, or legal obligation.{" "}
              <strong>[Map each processing activity to a legal basis with counsel.]</strong>
            </p>

            <h2>6. Sharing and processors</h2>
            <p>
              We do not sell personal information. We may share data with service providers who
              assist with hosting, email, or professional services under contractual safeguards.{" "}
              <strong>[List subprocessors and international transfer mechanisms.]</strong>
            </p>

            <h2>7. Retention</h2>
            <p>
              We retain information only as long as needed for the purposes above, unless a longer
              period is required by law.{" "}
              <strong>[Define retention schedules per data category.]</strong>
            </p>

            <h2>8. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, restrict,
              or object to certain processing, and to lodge a complaint with a supervisory
              authority. Contact us at {siteConfig.contact.email} to exercise applicable rights.
            </p>

            <h2>9. Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures to protect
              information. No method of transmission or storage is completely secure.
            </p>

            <h2>10. Children</h2>
            <p>
              Our services are directed at businesses and professionals. We do not knowingly collect
              personal information from children.
            </p>

            <h2>11. Changes</h2>
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the
              top will change when we do.
            </p>

            <h2>12. Related policies</h2>
            <p>
              See also our{" "}
              <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
              <Link href="/terms-and-conditions">Terms and Conditions</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
