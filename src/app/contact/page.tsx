import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about software engineering, product design, and digital transformation engagements.`,
};

const contactFaqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Submitting opens your email client with a prefilled message to our contact address. We do not receive submissions through a backend on this site. Once you send the email, our team will review it and reply using the contact details you provide.",
  },
  {
    question: "How quickly should I expect a reply?",
    answer:
      "We aim to respond to substantive inquiries within a few business days. Complex scoping questions may take longer while we assemble the right people for an initial conversation.",
  },
  {
    question: "Do you sign NDAs before early conversations?",
    answer:
      "For most exploratory calls, a mutual understanding of confidentiality is enough to start. If your situation requires a formal NDA before sharing sensitive details, mention that in your message and we will align on next steps.",
  },
  {
    question: "What information helps you respond well?",
    answer:
      "A concise description of the problem, desired timeline, existing team or systems, and what success looks like helps us suggest a sensible first step — even if you are still choosing between build, buy, or partner.",
  },
  {
    question: "Is my form data stored on your servers?",
    answer:
      "No. This contact experience is frontend-only. Fields are validated in the browser and passed to your mail client via a mailto link. Nothing is persisted on UQENA infrastructure from this form alone.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation"
        description={`Tell ${siteConfig.name} about your product, platform, or modernization goals. We will respond with clarity — no automated sales sequences.`}
        primaryCta={{ label: "Email directly", href: siteConfig.contact.mailto }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <section className="section-pad">
        <div className="container-uq">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="card-uq p-8 md:p-10">
              <SectionHeading
                eyebrow="Inquiry"
                title="Project inquiry form"
                description="Share context so we can prepare for a useful first reply."
                className="mb-8"
              />
              <ContactForm />
            </div>

            <aside className="space-y-8">
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-navy-elevated p-6 md:p-8">
                <h2 className="text-lg font-semibold text-white">Direct contact</h2>
                <ul className="mt-5 space-y-4 text-sm text-gray">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
                    <span>
                      <a
                        href={siteConfig.contact.mailto}
                        className="font-medium text-white hover:text-blue"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
                    <span>
                      <span className="block font-medium text-white">
                        {siteConfig.contact.locationLabel}
                      </span>
                      <span className="mt-1 block text-gray">{siteConfig.contact.locationNote}</span>
                      <span className="mt-2 block text-gray">
                        Phone: {siteConfig.contact.phone}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-navy-elevated p-6 md:p-8"
                role="note"
              >
                <h2 className="text-lg font-semibold text-white">Privacy note</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Information you include in the mailto message is handled according to our{" "}
                  <Link href="/privacy-policy" className="text-blue hover:underline">
                    Privacy Policy
                  </Link>
                  . Because this site does not transmit form data to a server, you control what
                  leaves your device when you send email. Do not include secrets or credentials in
                  unsolicited messages.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="FAQs"
              title="Contact questions"
              description="How reaching out works on this site and what to expect next."
            />
            <FaqAccordion items={contactFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer email?"
        description={`Write to ${siteConfig.contact.email} with your brief — the same team reads both paths.`}
        ctaLabel="Send email"
        ctaHref={siteConfig.contact.mailto}
      />
    </SiteShell>
  );
}
