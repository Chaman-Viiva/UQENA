import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { services, dedicatedTeamsService } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import {
  processSteps,
  capabilities,
  differentiators,
  technologies,
} from "@/data/process";
import { siteConfig } from "@/lib/config";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "UQENA is a software engineering partner for custom products, web and mobile apps, AI, cloud, and digital transformation — built with clarity, quality, and long-term partnership in mind.",
};

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <SiteShell>
      <OrganizationJsonLd />
      <HomeHero />

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Technology partner"
              title="Software engineering with product discipline"
              description="UQENA helps organizations design, build, and evolve digital products that matter — combining strategy, design, and engineering in one accountable partnership."
            />
            <div className="prose-uq max-w-none rounded-[28px] border border-[var(--border)] bg-navy-elevated p-8 md:p-10">
              <p>
                Whether you are shaping a new platform, modernizing critical systems, or
                embedding AI where it creates real leverage, we work as an extension of
                your team — with transparent collaboration and architecture you can grow
                into.
              </p>
              <p className="mb-0">
                We focus on durable outcomes: clear interfaces, dependable services, and
                delivery practices that keep momentum after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-elevated/40">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end capabilities for ambitious products"
            description="From custom platforms to dedicated teams, explore how UQENA can support your roadmap."
            className="mb-12 md:mb-14"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard
                  href={`/services/${service.slug}`}
                  title={service.shortTitle}
                  summary={service.summary}
                  icon={service.icon}
                />
              </li>
            ))}
            <li>
              <ServiceCard
                href="/services"
                title={dedicatedTeamsService.title}
                summary={dedicatedTeamsService.summary}
                icon="users"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="What we deliver"
            title="Featured capabilities"
            description="Cross-functional depth across the product lifecycle — so you can move from idea to production with one partner."
            className="mb-12 md:mb-14"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <li key={cap.title} className="card-uq p-6">
                <h3 className="text-base font-semibold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{cap.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-navy-elevated/30">
        <div className="container-uq">
          <div className="card-uq relative overflow-hidden p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12">
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
            <div className="relative max-w-xl">
              <p className="eyebrow mb-4">Solutions</p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Outcome-oriented solutions for complex digital challenges
              </h2>
              <p className="mt-4 text-gray">
                Explore how UQENA combines services into focused solution paths — from
                greenfield products and platform modernization to AI-enabled workflows
                and dedicated engineering teams.
              </p>
            </div>
            <div className="relative mt-8 shrink-0 md:mt-0">
              <Button href="/solutions" size="lg" className="gap-2">
                View solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Industries"
            title="Domain-aware engineering"
            description="We adapt product and platform patterns to the realities of your sector — without one-size-fits-all templates."
            className="mb-12 md:mb-14"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <IndustryCard
                  href={`/industries/${industry.slug}`}
                  title={industry.shortTitle}
                  summary={industry.summary}
                  image={industry.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-navy-elevated/40">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Process"
            title="How we work"
            description="A clear sequence from discovery through evolution — with your team involved at every meaningful decision."
            className="mb-12 md:mb-14"
          />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="card-uq flex flex-col p-6 md:p-7">
                <span className="text-gradient text-sm font-bold tracking-widest">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Featured work"
            title="Conceptual projects"
            description="These demonstrations illustrate our approach to product craft and engineering — they are not claims about specific clients or live deployments."
            className="mb-12 md:mb-14"
          />
          <ul className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="card-uq focus-ring group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] bg-navy-muted">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}40, transparent 60%)`,
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit rounded-full border border-[var(--border)] bg-navy-muted px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gray">
                      Conceptual project
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray">{project.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray">
                      {project.summary}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-blue">
                      View demonstration →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href="/work" variant="secondary">
              Browse all demonstrations
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-elevated/40">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Why UQENA"
            title="Built for teams who care about what ships"
            description="Principles that guide how we architect, collaborate, and deliver."
            className="mb-12 md:mb-14"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <li key={item.title} className="card-uq p-6 md:p-7">
                <Sparkles className="h-5 w-5 text-blue" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Technology"
            title="Technology ecosystem"
            description="Modern stacks chosen for maintainability, performance, and fit — not trend-chasing."
            className="mb-12 md:mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(Object.entries(technologies) as [string, readonly string[]][]).map(
              ([category, items]) => (
                <div key={category} className="card-uq p-6 md:p-7">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-violet" aria-hidden />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                      {category}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-navy-muted px-3 py-1 text-xs font-medium text-gray"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to engineer what's next?"
        description="Tell us about your product, platform, or transformation initiative — we'll respond with clarity on how UQENA can help."
        ctaLabel="Start a Project"
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
