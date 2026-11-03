import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Industry"
        title={industry.title}
        description={industry.description}
        primaryCta={{ label: "Discuss your product", href: "/contact" }}
        secondaryCta={{ label: "All industries", href: "/industries" }}
      >
        <div className="card-uq overflow-hidden p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-muted">
            <Image
              src={industry.image}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-uq max-w-3xl">
          <p className="text-lg leading-relaxed text-gray md:text-xl">{industry.summary}</p>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Context"
            title="Challenges teams face"
            description="Recurring friction points we hear when scoping work in this space."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="card-uq flex gap-4 p-5 md:p-6">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden />
                <p className="text-sm leading-relaxed text-gray md:text-base">{challenge}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="How we help"
            title="Solution patterns"
            description={`Ways ${siteConfig.name} typically supports ${industry.shortTitle.toLowerCase()} products and operations.`}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {industry.solutions.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 md:text-base"
              >
                <span className="font-semibold text-blue" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Outcomes"
            title="What teams pursue"
            description="Directional goals engagements aim toward — measured against your own metrics, not generic benchmarks."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {industry.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-navy-elevated p-6"
              >
                <p className="font-medium text-white">{outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div className="card-uq grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Related capabilities
              </h2>
              <p className="mt-3 max-w-xl text-gray">
                Explore how we deliver across services, solution types, and our delivery process.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="secondary" size="md">
                Services
              </Button>
              <Button href="/solutions" variant="secondary" size="md">
                Solutions
              </Button>
              <Button href="/process" variant="secondary" size="md">
                Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Plan ${industry.shortTitle.toLowerCase()} software with clarity`}
        description={industry.summary}
      />
    </SiteShell>
  );
}
