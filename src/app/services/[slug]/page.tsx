import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Cloud,
  Code2,
  Compass,
  Globe,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SiteShell } from "@/components/layout/SiteShell";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/lib/config";

const icons: Record<string, LucideIcon> = {
  "code-2": Code2,
  globe: Globe,
  smartphone: Smartphone,
  sparkles: Sparkles,
  palette: Palette,
  cloud: Cloud,
  server: Server,
  workflow: Workflow,
  compass: Compass,
};

const serviceImages: Record<string, string> = {
  "custom-software-development": "/images/services/custom.svg",
  "web-development": "/images/services/web.svg",
  "mobile-app-development": "/images/services/mobile.svg",
  "ai-solutions": "/images/services/ai.svg",
  "ui-ux-design": "/images/services/design.svg",
  "cloud-devops": "/images/services/cloud.svg",
  "backend-api-development": "/images/services/backend.svg",
  automation: "/images/services/automation.svg",
  "digital-transformation": "/images/services/transformation.svg",
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

  const Icon = icons[service.icon] ?? Code2;
  const heroImage = serviceImages[service.slug] ?? "/images/services/custom.svg";

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
        primaryCta={{ label: "Discuss this service", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
      >
        <div className="relative">
          <div className="card-uq overflow-hidden p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-muted">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-uq text-white shadow-lg shadow-blue/25">
            <Icon className="h-7 w-7" />
          </div>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-uq">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Value" title="What you gain" />
            <p className="mt-6 text-lg leading-relaxed text-gray md:text-xl">
              {service.valueProposition}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Problems we address"
            title="When this service matters"
            description="Situations where focused engineering partnership makes a measurable difference."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {service.problems.map((problem) => (
              <li key={problem} className="card-uq flex gap-4 p-5 md:p-6">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden />
                <p className="text-sm leading-relaxed text-gray md:text-base">{problem}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Capabilities"
            title="What we deliver"
            description="Concrete outcomes and workstreams within this service line."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 md:text-base"
              >
                <span className="font-semibold text-blue" aria-hidden>
                  →
                </span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Stack"
            title="Technology we work with"
            description="Representative tools and platforms for this service — chosen per project requirements."
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--border)] bg-navy-elevated px-4 py-2 text-sm text-gray"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Approach"
            title="Our process for this work"
            description="How we move from understanding the problem to shipped, operable results."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="card-uq p-6 md:p-7">
                <span className="text-sm font-bold text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Applications"
            title="Typical use cases"
            description="Examples of where clients engage UQENA for this capability."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.useCases.map((useCase) => (
              <li
                key={useCase}
                className="rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6"
              >
                <p className="font-medium text-navy">{useCase}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="FAQs"
              title={`${service.shortTitle} questions`}
              description={`Answers about how ${siteConfig.name} delivers ${service.title.toLowerCase()}.`}
            />
            <FaqAccordion items={service.faqs} />
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
