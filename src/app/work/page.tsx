import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFilter } from "@/components/work/ProjectFilter";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Conceptual product demonstrations from UQENA — sample interfaces and architecture explorations that illustrate our engineering and design approach. Not client case studies.",
};

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Portfolio"
        title="Conceptual work that shows how we think"
        description={`These projects are original demonstrations created by ${siteConfig.name} to explore product patterns, UX, and engineering craft. They are not client engagements, live products, or claims of shipped outcomes for third parties.`}
        primaryCta={{ label: "Discuss your product", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />

      <section className="section-pad section-cream">
        <div className="container-uq">
          <div
            className="mb-10 border border-[var(--line)] bg-paper px-5 py-4 md:px-6 md:py-5"
            role="note"
          >
            <p className="text-sm leading-relaxed text-slate md:text-base">
              <span className="font-semibold text-ink">Conceptual demonstrations only.</span>{" "}
              Every item in this portfolio is a fictional or sample product concept used to
              showcase design and technical direction. No client names, testimonials, revenue
              figures, or production metrics are represented here.
            </p>
          </div>

          <SectionHeading
            eyebrow="Explore"
            title="Filter by industry and theme"
            description="Browse sample product concepts across healthcare, fintech, commerce, and more."
          />
          <div className="mt-10">
            <ProjectFilter />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want something built for real users?"
        description="Tell us about your product goals — we will scope an engagement based on your constraints, not these demos."
      />
    </SiteShell>
  );
}
