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
  const [featured, ...rest] = industries;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Domains"
        title="Industry experience that respects context"
        description={`${siteConfig.name} builds software for regulated, operationally complex, and customer-facing environments. Each industry page outlines typical challenges, how we help, and outcomes teams pursue — without generic playbooks.`}
        primaryCta={{ label: "Talk about your sector", href: "/contact" }}
        secondaryCta={{ label: "Our solutions", href: "/solutions" }}
        image="/images/industries/healthcare.jpg"
        imageAlt="Healthcare technology environment"
      />

      <section className="section-pad section-paper">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Explore"
            title="Where we apply product engineering"
            description="Select an industry to see challenges, solution patterns, and expected outcomes drawn from how these sectors actually operate."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <IndustryCard
              href={`/industries/${featured.slug}`}
              title={featured.title}
              summary={featured.summary}
              image={featured.image}
              lead
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
            />
            {rest.slice(0, 2).map((industry) => (
              <IndustryCard
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                title={industry.title}
                summary={industry.summary}
                image={industry.image}
              />
            ))}
            {rest.slice(2).map((industry) => (
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

      <section className="section-pad section-cream border-t border-[var(--line)]">
        <div className="container-uq max-w-3xl">
          <SectionHeading
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
