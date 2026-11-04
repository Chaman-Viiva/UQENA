import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { dedicatedTeamsService, services } from "@/data/services";
import { differentiators, processSteps, technologies } from "@/data/process";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering services from UQENA — custom development, web and mobile products, AI, design, cloud, APIs, automation, and digital transformation.",
};

const servicesLandingFaqs = [
  {
    question: "How do I know which UQENA service fits my situation?",
    answer:
      "Start with the outcome you need — a new product, a faster web experience, reliable infrastructure, or help modernizing legacy systems. We map that to the right mix of discovery, design, and engineering during an initial conversation.",
  },
  {
    question: "Can one engagement combine several services?",
    answer:
      "Yes. Most meaningful products touch multiple disciplines. We structure work so design, frontend, backend, mobile, and platform engineering stay aligned under one delivery rhythm rather than handoffs between vendors.",
  },
  {
    question: "Do you work with existing teams and codebases?",
    answer:
      "Often. We integrate with in-house product and engineering teams, respect your tools and standards where they serve you well, and focus on reducing risk while shipping the next slice of value.",
  },
  {
    question: "What does a typical project engagement look like?",
    answer:
      "We begin with discovery to clarify goals and constraints, agree on scope and sequencing, then deliver in increments with regular demos and transparent progress. Launch includes hardening and handover; many clients continue with evolution or dedicated capacity afterward.",
  },
  {
    question: "When are dedicated development teams the right model?",
    answer:
      "When you need sustained velocity on a roadmap — not a single fixed-scope release — and want engineers embedded in your rituals, tools, and quality bar without building every specialty in-house.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Engineering services"
        title="Services built for products that matter"
        description={`From first concept to long-term evolution, ${siteConfig.name} helps you design, build, and operate digital systems with clarity and craft.`}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "View our work", href: "/work" }}
        image="/images/services/engineering.jpg"
        imageAlt="Engineering workspace with monitors and architectural sketches"
      />

      <section className="section-pad section-cream border-b border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="What we deliver"
            title="End-to-end capabilities for ambitious teams"
            description="Choose a focused engagement or combine services into one coherent delivery path."
          />
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {services.map((service, index) => (
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

      <section className="section-pad section-paper">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why partner with us"
            title="Business benefits that compound"
            description="Technology choices should serve how you compete, operate, and grow — not the other way around."
          />
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-8"
              >
                <h3 className="font-display text-base font-medium text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-uq">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="How we work"
              title="A process overview"
              description="Structured enough to manage risk, flexible enough to learn as we build."
            />
            <Link href="/process" className="link-arrow shrink-0">
              Full process <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 flex gap-0 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
            {processSteps.map((step) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-paper border-y border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Technology"
            title="Technical expertise across the stack"
            description="We select tools for maintainability and fit — the lists below reflect common foundations across our service lines."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                  {category}
                </h3>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="img-frame relative aspect-[4/3] rounded-[var(--radius-md)]">
            <Image
              src="/images/services/custom.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Extended capacity</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              {dedicatedTeamsService.title}
            </h2>
            <p className="mt-4 text-lg text-slate">{dedicatedTeamsService.summary}</p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              {dedicatedTeamsService.description}
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Discuss dedicated teams
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Questions"
            title="Services FAQs"
            description="Common questions about how UQENA scopes and delivers engineering work."
          />
          <FaqAccordion items={servicesLandingFaqs} />
        </div>
      </section>

      <CtaBand
        title="Ready to scope your next initiative?"
        description="Tell us what you are building — we will help you choose the right services and delivery model."
      />
    </SiteShell>
  );
}
