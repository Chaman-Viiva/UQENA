import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles personal information when you use this website and contact us.`,
};

const lastUpdated = "November 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${siteConfig.name} handles information when you visit this website or contact us.`}
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <div className="prose-uq">
            <p className="text-sm text-slate">Last updated: {lastUpdated}</p>

            <h2>1. Who we are</h2>
            <p>
              This website ({siteConfig.url}) is operated by{" "}
              <strong>{siteConfig.name}</strong> (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;), a software engineering brand. We do not currently publish a
              registered office address on this site.
            </p>
            <p>
              Privacy and general inquiries:{" "}
              <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a>
              . Phone:{" "}
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
            </p>

            <h2>2. Scope</h2>
            <p>
              This policy explains how we handle information when you browse {siteConfig.url},
              read our content, or contact us by email, phone, WhatsApp, or the inquiry form on
              this site. It does not cover third-party websites linked from our pages (including
              social networks).
            </p>

            <h2>3. Information you provide</h2>
            <p>
              If you email us, call or message us, or use the contact form, you may share your
              name, email address, company name, phone number, project details, and any other
              information you choose to include.
            </p>
            <p>
              The contact form on this website is frontend-only. Submitting it opens your email
              client with a prefilled message addressed to {siteConfig.contact.email}. We do not
              receive that form data through a server-side form handler on this website. Once you
              send the email (or contact us by another channel), the content of your message is
              processed as ordinary business correspondence.
            </p>

            <h2>4. Information collected automatically</h2>
            <p>
              This marketing site does not run first-party analytics scripts, advertising pixels,
              or marketing tags in its application code.
            </p>
            <p>
              Like most websites, our hosting and delivery infrastructure (currently Vercel) may
              process standard technical request data such as IP address, user agent, requested
              URL, and timestamps for security, reliability, abuse prevention, and operational
              logging. Those logs are controlled by the hosting provider under its own terms and
              retention practices.
            </p>

            <h2>5. Cookies and similar technologies</h2>
            <p>
              See our <Link href="/cookie-policy">Cookie Policy</Link> for details. In summary,
              this site does not set analytics or marketing cookies through its own code. Hosting
              or security layers may use strictly necessary technologies.
            </p>

            <h2>6. How we use information</h2>
            <ul>
              <li>Respond to inquiries and discuss potential engagements.</li>
              <li>Operate, secure, and maintain this website.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We do not sell personal information. We do not use contact inquiries for automated
              marketing sequences on this site.
            </p>

            <h2>7. Sharing</h2>
            <p>
              We may share information with service providers who help us operate the business —
              for example website hosting, email providers, and professional advisors — only as
              needed to provide those services. We may also disclose information if required by
              law or to protect rights, safety, and security.
            </p>

            <h2>8. Retention</h2>
            <p>
              Correspondence and inquiry details are retained only as long as reasonably needed
              to respond, manage an engagement, or meet legal and accounting requirements, then
              deleted or archived according to ordinary business practice.
            </p>

            <h2>9. Security</h2>
            <p>
              We use reasonable administrative and technical measures appropriate to a marketing
              website and email-based inquiry workflow. No method of transmission or storage is
              completely secure. Do not send passwords, payment card numbers, or other highly
              sensitive credentials in unsolicited messages.
            </p>

            <h2>10. International visitors</h2>
            <p>
              If you contact us from outside Pakistan, your message may be processed where we and
              our service providers operate. If data-protection laws in your region grant you
              specific rights (such as access, correction, or deletion), contact us at{" "}
              {siteConfig.contact.email} and we will respond in good faith within a reasonable
              time. This policy is written to describe actual practices; it is not a substitute
              for jurisdiction-specific legal advice.
            </p>

            <h2>11. Children</h2>
            <p>
              This website is directed at businesses and professionals. We do not knowingly
              collect personal information from children.
            </p>

            <h2>12. Changes</h2>
            <p>
              We may update this policy when our practices or hosting arrangements change. The
              &quot;Last updated&quot; date at the top will reflect the latest revision.
            </p>

            <h2>13. Related policies</h2>
            <p>
              See also our <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
              <Link href="/terms-and-conditions">Terms and Conditions</Link>.
            </p>

            <h2>14. Contact</h2>
            <p>
              Questions about privacy:{" "}
              <a href={siteConfig.contact.mailto}>{siteConfig.contact.email}</a> ·{" "}
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
