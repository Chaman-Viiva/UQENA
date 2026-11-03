import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { differentiators } from "@/data/process";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "About UQENA — a software engineering and digital technology company focused on thoughtful product design, scalable architecture, and transparent collaboration.",
};

const coreValues = [
  {
    title: "Clarity over noise",
    description:
      "We explain trade-offs in plain language so product and engineering decisions stay shared.",
  },
  {
    title: "Craft with accountability",
    description:
      "Quality means systems that behave well in production — not only polished presentations.",
  },
  {
    title: "Respect for context",
    description:
      "Your domain, team, and constraints shape the architecture — we do not force a favorite stack.",
  },
  {
    title: "Partnership, not handoffs",
    description:
      "We work alongside your stakeholders with visible progress, risks, and next steps.",
  },
] as const;

const philosophyPoints = [
  {
    title: "Modular by default",
    body: "We favor boundaries that match the domain so teams can change one area without destabilizing the whole.",
  },
  {
    title: "Incremental value",
    body: "Roadmaps are sequenced so useful capabilities land early, with room to learn from real usage.",
  },
  {
    title: "Test what matters",
    body: "Automated checks and release discipline protect critical journeys — especially where data, money, or safety are involved.",
  },
] as const;

const collaborationNotes = [
  {
    title: "Embedded when useful",
    description:
      "We join your rituals — standups, reviews, planning — when it helps alignment, and stay lightweight when async communication is enough.",
  },
  {
    title: "Transparent progress",
    description:
      "Status, blockers, and scope conversations stay visible. Surprises belong in planning, not launch week.",
  },
  {
    title: "Long-term orientation",
    description:
      "We write code and documentation for the team that will maintain the product — including yours after handover.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="About us"
        title={`${siteConfig.name} builds software with intent`}
        description={siteConfig.description}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "How we work", href: "/process" }}
      />

      <section className="section-pad section-cream">
        <div className="container-uq grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Introduction" title="Who we are" />
          </div>
          <div className="prose-uq lg:col-span-6 lg:col-start-7">
            <p>
              {siteConfig.name} is a software engineering and digital technology company. We help
              teams design, build, and evolve web platforms, mobile experiences, internal systems,
              and AI-assisted products — with an emphasis on maintainable architecture and interfaces
              people can actually use.
            </p>
            <p>
              This page describes how we think and work. It does not claim a specific founding
              story, headcount, or tenure — those details will be shared when they are verified for
              public communication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper border-y border-[var(--line)]">
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

      <section className="section-pad section-paper">
        <div className="container-uq grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Mission</p>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Engineer products that hold up under real use
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Our mission is to turn ambitious ideas into dependable software — pairing product
              thinking with engineering discipline so teams can ship, learn, and scale without
              rebuilding from scratch every year.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Vision</p>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Technology that serves how businesses compete
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate">
              We aim to be a long-term technical partner for organizations that treat software as
              core infrastructure — not a one-off project. That means honest scoping, modern
              practices, and systems designed for the people who operate them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-cream border-t border-[var(--line)]">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Values"
            title="Core values"
            description="Principles that guide how we engage, communicate, and build."
          />
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {coreValues.map(({ title, description }) => (
              <div key={title} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-8">
                <h3 className="font-display text-base font-medium text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-slate md:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="Engineering philosophy"
              description="How we think about architecture, delivery, and quality."
            />
            <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {philosophyPoints.map(({ title, body }) => (
                <li key={title} className="py-5">
                  <h3 className="font-display text-base font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate md:text-base">{body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[var(--line)] bg-cream p-8 md:p-10">
            <h3 className="font-display text-xl font-medium text-ink">Working approach</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate md:text-base">
              Engagements typically move through discovery, strategy, design, engineering, launch,
              and evolution — with your team involved at decision points, not only at kickoff and
              delivery. We document assumptions, surface risks early, and demo working software on a
              steady cadence.
            </p>
            <div className="mt-6">
              <Button href="/process" variant="secondary">
                See the full process
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-cream border-t border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Culture"
            title="How collaboration feels"
            description="Professional, direct, and respectful of your time."
          />
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)] md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {collaborationNotes.map(({ title, description }) => (
              <div key={title} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <h3 className="font-display text-base font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            tone="dark"
            eyebrow="Why UQENA"
            title="Reasons teams partner with us"
            description="Differentiators we hold ourselves to — not marketing claims tied to unnamed clients."
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {differentiators.map((item) => (
              <div key={item.title} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-8">
                <h3 className="font-display text-base font-medium text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq">
          <Link href="/work" className="link-arrow inline-flex">
            View our work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Want to learn whether we are a fit?"
        description="Share what you are building and how your team works today — we will respond with an honest view of how we can help."
      />
    </SiteShell>
  );
}
