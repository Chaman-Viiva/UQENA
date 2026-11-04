import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteShell } from "@/components/layout/SiteShell";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import {
  CareFlowMock,
  HavenlyMock,
  LedgerlyMock,
} from "@/components/work/ProjectMockups";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { processSteps, differentiators, technologies } from "@/data/process";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "UQENA designs and engineers digital products, platforms, and intelligent systems for ambitious businesses worldwide.",
};

const featuredServices = [
  services[0],
  services[1],
  services[2],
  services[3],
  services[4],
  services[5],
];

const featuredIndustries = industries.slice(0, 6);

export default function HomePage() {
  return (
    <SiteShell>
      <OrganizationJsonLd />
      <HomeHero />

      {/* Editorial intro — asymmetric */}
      <section className="section-pad section-cream">
        <div className="container-uq grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              A technology partner for work that has to ship — and stay coherent.
            </h2>
          </div>
          <div className="prose-uq lg:col-span-6 lg:col-start-7">
            <p>
              UQENA helps organizations turn complex requirements into reliable
              software: products customers trust, platforms teams can operate, and
              systems that remain understandable as they grow.
            </p>
            <p>
              We work as an extension of your product organization — combining
              strategy, design, and engineering without the theatre of inflated
              claims or template solutions.
            </p>
            <Link href="/about" className="link-arrow mt-2">
              About UQENA <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="bg-paper">
        <div className="container-uq py-6 md:py-10">
          <div className="img-frame relative aspect-[21/9] rounded-[var(--radius-md)] md:aspect-[24/9]">
            <Image
              src="/images/about/workspace.jpg"
              alt="Bright modern workspace with long collaborative tables"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Services — numbered editorial list, not identical cards */}
      <section className="section-pad section-cream border-y border-[var(--line)]">
        <div className="container-uq">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Capabilities"
              title="Services built around real product work"
              description="Focused engagements or end-to-end delivery — scoped to your roadmap, not a package menu."
            />
            <Link href="/services" className="link-arrow shrink-0">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-4 py-7 transition md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-baseline md:gap-8"
              >
                <span className="font-display text-sm text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-medium text-ink group-hover:text-blue md:text-2xl">
                  {service.shortTitle}
                </h3>
                <p className="text-sm leading-relaxed text-slate md:text-base">
                  {service.summary}
                </p>
                <span className="text-sm font-semibold text-blue md:justify-self-end md:opacity-0 md:transition md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions teaser — dark band with distinct layout */}
      <section className="section-pad section-dark">
        <div className="container-uq grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Solutions"
              title="Built around the problem, not a product catalog"
              description="We shape platforms, portals, automation, and AI-enabled products around how your business actually operates."
            />
            <Link href="/solutions" className="link-arrow mt-8">
              Explore solutions <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {[
              "Enterprise platforms",
              "SaaS products",
              "Customer portals",
              "AI-powered applications",
              "Business automation",
              "Data dashboards",
            ].map((item) => (
              <div
                key={item}
                className="bg-midnight px-5 py-6 text-sm font-medium text-white/90"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — magazine grid */}
      <section className="section-pad section-paper">
        <div className="container-uq">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Industries"
              title="Domain-aware product engineering"
              description="We apply the same craft across sectors — with imagery, workflows, and constraints that match the field."
            />
            <Link href="/industries" className="link-arrow shrink-0">
              All industries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredIndustries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className={`group relative overflow-hidden rounded-[var(--radius-md)] ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px]" : "min-h-[220px]"
                }`}
              >
                <Image
                  src={industry.image.replace(".svg", ".jpg")}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                    {industry.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/75">
                    {industry.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work — strong visual identity */}
      <section className="section-pad section-cream">
        <div className="container-uq">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Conceptual projects that show how we think"
              description="Demonstration products — not client case studies. Each explores a different product language and engineering problem."
            />
            <Link href="/work" className="link-arrow shrink-0">
              Full portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 space-y-16">
            <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <CareFlowMock />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                  Conceptual · Healthcare
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink">
                  CareFlow Health
                </h3>
                <p className="mt-4 text-slate">
                  A calm clinic operations concept for appointments, care boards, and
                  follow-ups — designed for clarity under daily pressure.
                </p>
                <Link href="/work/careflow-health" className="link-arrow mt-6">
                  View project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
                  Conceptual · Real estate
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink">
                  Havenly Market
                </h3>
                <p className="mt-4 text-slate">
                  An editorial marketplace experience for discovering and comparing
                  properties without drowning high-intent users in noise.
                </p>
                <Link href="/work/havenly-market" className="link-arrow mt-6">
                  View project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <HavenlyMock />
              </div>
            </article>

            <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <LedgerlyMock />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  Conceptual · Fintech
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink">
                  Ledgerly
                </h3>
                <p className="mt-4 text-slate">
                  A finance console concept focused on balance clarity, transaction
                  readability, and controlled payment actions.
                </p>
                <Link href="/work/ledgerly" className="link-arrow mt-6">
                  View project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process — horizontal editorial timeline */}
      <section className="section-pad section-dark overflow-hidden">
        <div className="container-uq">
          <SectionHeading
            tone="dark"
            eyebrow="Process"
            title="How projects move from idea to durable software"
            description="A sequence with clear client involvement — not a theatre of identical cards."
          />
          <div className="mt-14 flex gap-0 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="min-w-[220px] border-l border-white/15 px-5 first:pl-0 md:min-w-0"
              >
                <div className="number-lg text-[2.5rem] md:text-[2.75rem]">
                  {step.number}
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <span className="sr-only">Next step</span>
                )}
              </div>
            ))}
          </div>
          <Link href="/process" className="link-arrow mt-10 inline-flex">
            Full process <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why UQENA — two-column with rules */}
      <section className="section-pad section-cream">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why UQENA"
            title="What we optimize for"
            description="Fewer slogans. More decisions that keep products healthy after launch."
          />
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {differentiators.slice(0, 6).map((item) => (
              <div key={item.title} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-8">
                <h3 className="font-display text-base font-medium text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology — typographic ecosystem, not logo soup */}
      <section className="section-pad section-paper border-y border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Technology"
            title="A practical engineering ecosystem"
            description="Tools chosen for maintainability and fit. Not a partnership claim — a working stack."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(technologies).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                  {group}
                </h3>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
