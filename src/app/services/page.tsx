import type { Metadata } from "next";
import Image from "next/image";
import { Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
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
      />

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="What we deliver"
            title="End-to-end capabilities for ambitious teams"
            description="Choose a focused engagement or combine services into one coherent delivery path."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                title={service.title}
                summary={service.summary}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Why partner with us"
            title="Business benefits that compound"
            description="Technology choices should serve how you compete, operate, and grow — not the other way around."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6 md:p-7"
              >
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="How we work"
            title="A process overview"
            description="Structured enough to manage risk, flexible enough to learn as we build."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="card-uq p-6 md:p-7">
                <span className="text-sm font-bold text-blue">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Technology"
            title="Technical expertise across the stack"
            description="We select tools for maintainability and fit — the lists below reflect common foundations across our service lines."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="card-uq p-6 md:p-7">
                <h3 className="text-base font-semibold text-white">{category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-navy-muted px-3 py-1 text-sm text-gray"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <div className="card-uq grid gap-10 overflow-hidden p-8 md:p-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-uq text-white shadow-lg shadow-blue/20">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {dedicatedTeamsService.title}
              </h2>
              <p className="mt-4 text-lg text-gray">{dedicatedTeamsService.summary}</p>
              <p className="mt-4 text-base leading-relaxed text-gray">
                {dedicatedTeamsService.description}
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Discuss dedicated teams
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-muted">
              <Image
                src="/images/services/custom.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Questions"
              title="Services FAQs"
              description="Common questions about how UQENA scopes and delivers engineering work."
            />
            <FaqAccordion items={servicesLandingFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to scope your next initiative?"
        description="Tell us what you are building — we will help you choose the right services and delivery model."
      />
    </SiteShell>
  );
}
