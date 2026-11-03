import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsightListing } from "@/components/insights/InsightListing";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from UQENA on software engineering, AI, product design, web and mobile development, automation, and technology strategy.",
};

export default function InsightsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Insights"
        title="Ideas for building with clarity"
        description={`Practical notes from the ${siteConfig.name} editorial team on engineering, design, and technology decisions — written to inform, not to sell hype.`}
        primaryCta={{ label: "Work with us", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Articles"
            title="Browse by topic"
            description="Filter by category or read the latest across software, AI, design, and strategy."
          />
          <div className="mt-10">
            <InsightListing />
          </div>
        </div>
      </section>

      <CtaBand
        title="Turning ideas into shipped software?"
        description="Share your context — we will help you choose the right technical path and delivery model."
      />
    </SiteShell>
  );
}
