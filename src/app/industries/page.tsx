import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { industries } from "@/data/industries";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industries UQENA serves — healthcare, fintech, education, real estate, e-commerce, travel, logistics, SaaS, and professional services.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Domains"
        title="Industry experience that respects context"
        description={`${siteConfig.name} builds software for regulated, operationally complex, and customer-facing environments. Each industry page outlines typical challenges, how we help, and outcomes teams pursue — without generic playbooks.`}
        primaryCta={{ label: "Talk about your sector", href: "/contact" }}
        secondaryCta={{ label: "Our solutions", href: "/solutions" }}
      />

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Explore"
            title="Where we apply product engineering"
            description="Select an industry to see challenges, solution patterns, and expected outcomes drawn from how these sectors actually operate."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                title={industry.title}
                summary={industry.summary}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq max-w-3xl">
          <SectionHeading
            light
            eyebrow="Note"
            title="Sector knowledge, not sector slogans"
            description="Industry pages describe common problem spaces and engineering responses. Your engagement is scoped to your workflows, compliance needs, and product goals — not a canned vertical package."
          />
        </div>
      </section>

      <CtaBand
        title="Building in a sector not listed here?"
        description="Many products span multiple domains. Tell us about your users and constraints — we will map the right technical and design approach."
      />
    </SiteShell>
  );
}
