import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { getIndustry, industries } from "@/data/industries";
import { siteConfig } from "@/lib/config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) {
    return { title: "Industry not found" };
  }
  return {
    title: industry.title,
    description: industry.summary,
  };
}

function industryImageSrc(image: string) {
  return image.endsWith(".svg") ? image.replace(".svg", ".jpg") : image;
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) {
    notFound();
  }

  const imageSrc = industryImageSrc(industry.image);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={industry.description}
        primaryCta={{ label: "Discuss your product", href: "/contact" }}
        secondaryCta={{ label: "All industries", href: "/industries" }}
        image={imageSrc}
        imageAlt=""
      />

      <section className="section-pad section-cream">
        <div className="container-uq max-w-3xl">
          <p className="text-lg leading-relaxed text-slate md:text-xl">{industry.summary}</p>
        </div>
      </section>

      <section className="section-pad section-paper border-y border-[var(--line)]">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Context"
            title="Challenges teams face"
            description="Recurring friction points we hear when scoping work in this space."
          />
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {industry.challenges.map((challenge, i) => (
              <li
                key={challenge}
                className="grid gap-3 py-5 md:grid-cols-[3rem_1fr] md:gap-6"
              >
                <span className="font-display text-sm text-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-slate md:text-base">{challenge}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq">
          <SectionHeading
            eyebrow="How we help"
            title="Solution patterns"
            description={`Ways ${siteConfig.name} typically supports ${industry.shortTitle.toLowerCase()} products and operations.`}
          />
          <ul className="mt-10 grid gap-0 md:grid-cols-2">
            {industry.solutions.map((item) => (
              <li
                key={item}
                className="border-t border-[var(--line)] py-4 pr-0 text-sm leading-relaxed text-slate md:border-r md:pr-8 md:text-base odd:md:pr-8 even:md:pl-8 even:md:border-r-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-uq">
          <SectionHeading
            tone="dark"
            eyebrow="Outcomes"
            title="What teams pursue"
            description="Directional goals engagements aim toward — measured against your own metrics, not generic benchmarks."
          />
          <ul className="mt-10 space-y-4">
            {industry.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="border-l-2 border-blue pl-5 text-base leading-relaxed text-gray md:text-lg"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-paper border-t border-[var(--line)]">
        <div className="container-uq grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
              Related capabilities
            </h2>
            <p className="mt-3 max-w-xl text-slate">
              Explore how we deliver across services, solution types, and our delivery process.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/services" variant="secondary" size="md">
              Services
            </Button>
            <Button href="/solutions" variant="ghost" size="md">
              Solutions
            </Button>
            <Button href="/process" variant="ghost" size="md">
              Process
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq">
          <Link href="/industries" className="link-arrow inline-flex">
            All industries <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Plan ${industry.shortTitle.toLowerCase()} software with clarity`}
        description={industry.summary}
      />
    </SiteShell>
  );
}
