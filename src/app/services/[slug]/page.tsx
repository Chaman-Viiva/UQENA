import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SiteShell } from "@/components/layout/SiteShell";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/lib/config";

const serviceImages: Record<string, string> = {
  "custom-software-development": "/images/services/custom.jpg",
  "web-development": "/images/services/web.jpg",
  "mobile-app-development": "/images/services/mobile.jpg",
  "ai-solutions": "/images/services/ai.jpg",
  "ui-ux-design": "/images/services/design.jpg",
  "cloud-devops": "/images/services/cloud.jpg",
  "backend-api-development": "/images/services/backend.jpg",
  automation: "/images/services/automation.jpg",
  "digital-transformation": "/images/services/transformation.jpg",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const heroImage = serviceImages[service.slug] ?? "/images/services/custom.jpg";
  const layoutVariant = services.findIndex((s) => s.slug === slug) % 3;

  return (
    <SiteShell>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
        primaryCta={{ label: "Discuss this service", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
        image={heroImage}
        imageAlt=""
      />

      <section className="section-pad section-cream">
        <div className="container-uq grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={layoutVariant === 1 ? "lg:col-span-5" : "lg:col-span-4"}>
            <SectionHeading eyebrow="Value" title="What you gain" />
          </div>
          <p
            className={`text-lg leading-relaxed text-slate md:text-xl ${
              layoutVariant === 1 ? "lg:col-span-7" : "lg:col-span-8"
            }`}
          >
            {service.valueProposition}
          </p>
        </div>
      </section>

      <section className="section-pad section-paper border-y border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Problems we address"
            title="When this service matters"
            description="Situations where focused engineering partnership makes a measurable difference."
          />
          {layoutVariant === 0 ? (
            <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {service.problems.map((problem, i) => (
                <li
                  key={problem}
                  className="grid gap-3 py-5 md:grid-cols-[3rem_1fr] md:gap-6"
                >
                  <span className="font-display text-sm text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-slate md:text-base">{problem}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {service.problems.map((problem) => (
                <p
                  key={problem}
                  className="border-l-2 border-blue pl-5 text-sm leading-relaxed text-slate md:text-base"
                >
                  {problem}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we deliver"
            description="Concrete outcomes and workstreams within this service line."
          />
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {service.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex gap-4 py-4 text-sm text-slate md:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-uq">
          <SectionHeading
            tone="dark"
            eyebrow="Stack"
            title="Technology we work with"
            description="Representative tools and platforms for this service — chosen per project requirements."
          />
          <p className="mt-10 max-w-4xl font-display text-2xl font-medium leading-snug text-white md:text-3xl">
            {service.stack.join(" · ")}
          </p>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Approach"
            title="Our process for this work"
            description="How we move from understanding the problem to shipped, operable results."
          />
          <ol className="mt-12 space-y-0">
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[5rem_14rem_1fr] md:gap-8"
              >
                <span className="font-display text-sm text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad section-cream border-t border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Applications"
            title="Typical use cases"
            description="Examples of where clients engage UQENA for this capability."
          />
          <ul className="mt-10 columns-1 gap-x-12 sm:columns-2">
            {service.useCases.map((useCase) => (
              <li
                key={useCase}
                className="mb-4 break-inside-avoid text-sm leading-relaxed text-slate md:text-base"
              >
                <span className="font-semibold text-ink">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQs"
            title={`${service.shortTitle} questions`}
            description={`Answers about how ${siteConfig.name} delivers ${service.title.toLowerCase()}.`}
          />
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <section className="section-pad section-cream border-t border-[var(--line)]">
        <div className="container-uq flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">Explore related pages</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/solutions" className="link-arrow">
              Solutions <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/process" className="link-arrow">
              Process <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Plan your ${service.shortTitle.toLowerCase()} initiative`}
        description={service.summary}
      />
    </SiteShell>
  );
}
