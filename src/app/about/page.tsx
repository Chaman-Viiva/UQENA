import type { Metadata } from "next";
import {
  Compass,
  HeartHandshake,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
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
    icon: MessageSquare,
  },
  {
    title: "Craft with accountability",
    description:
      "Quality means systems that behave well in production — not only polished presentations.",
    icon: Shield,
  },
  {
    title: "Respect for context",
    description:
      "Your domain, team, and constraints shape the architecture — we do not force a favorite stack.",
    icon: Compass,
  },
  {
    title: "Partnership, not handoffs",
    description:
      "We work alongside your stakeholders with visible progress, risks, and next steps.",
    icon: HeartHandshake,
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About us"
        title={`${siteConfig.name} builds software with intent`}
        description={siteConfig.description}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "How we work", href: "/process" }}
      />

      <section className="section-pad">
        <div className="container-uq max-w-3xl prose-uq">
          <SectionHeading eyebrow="Introduction" title="Who we are" />
          <p className="mt-6 text-lg leading-relaxed text-gray md:text-xl">
            {siteConfig.name} is a software engineering and digital technology company. We help
            teams design, build, and evolve web platforms, mobile experiences, internal systems,
            and AI-assisted products — with an emphasis on maintainable architecture and
            interfaces people can actually use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray">
            This page describes how we think and work. It does not claim a specific founding
            story, headcount, or tenure — those details will be shared when they are verified
            for public communication.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Mission"
              title="Engineer products that hold up under real use"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Our mission is to turn ambitious ideas into dependable software — pairing product
              thinking with engineering discipline so teams can ship, learn, and scale without
              rebuilding from scratch every year.
            </p>
          </div>
          <div>
            <SectionHeading
              light
              eyebrow="Vision"
              title="Technology that serves how businesses compete"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              We aim to be a long-term technical partner for organizations that treat software as
              core infrastructure — not a one-off project. That means honest scoping, modern
              practices, and systems designed for the people who operate them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Values"
            title="Core values"
            description="Principles that guide how we engage, communicate, and build."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-uq p-6 md:p-7">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-muted text-blue">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="Engineering philosophy"
              description="How we think about architecture, delivery, and quality."
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-gray md:text-base">
              <li className="flex gap-3">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
                <span>
                  <strong className="font-semibold text-white">Modular by default.</strong> We
                  favor boundaries that match the domain so teams can change one area without
                  destabilizing the whole.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
                <span>
                  <strong className="font-semibold text-white">Incremental value.</strong>{" "}
                  Roadmaps are sequenced so useful capabilities land early, with room to learn
                  from real usage.
                </span>
              </li>
              <li className="flex gap-3">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
                <span>
                  <strong className="font-semibold text-white">Test what matters.</strong>{" "}
                  Automated checks and release discipline protect critical journeys — especially
                  where data, money, or safety are involved.
                </span>
              </li>
            </ul>
          </div>
          <div className="card-uq p-8 md:p-10">
            <h3 className="text-xl font-bold text-white">Working approach</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray md:text-base">
              Engagements typically move through discovery, strategy, design, engineering, launch,
              and evolution — with your team involved at decision points, not only at kickoff and
              delivery. We document assumptions, surface risks early, and demo working software
              on a steady cadence.
            </p>
            <div className="mt-6">
              <Button href="/process" variant="secondary">
                See the full process
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Culture"
            title="How collaboration feels"
            description="Professional, direct, and respectful of your time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6">
              <Users className="h-6 w-6 text-blue" aria-hidden />
              <h3 className="mt-4 font-semibold text-navy">Embedded when useful</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We join your rituals — standups, reviews, planning — when it helps alignment, and
                stay lightweight when async communication is enough.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6">
              <MessageSquare className="h-6 w-6 text-blue" aria-hidden />
              <h3 className="mt-4 font-semibold text-navy">Transparent progress</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Status, blockers, and scope conversations stay visible. Surprises belong in
                planning, not launch week.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6">
              <HeartHandshake className="h-6 w-6 text-blue" aria-hidden />
              <h3 className="mt-4 font-semibold text-navy">Long-term orientation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We write code and documentation for the team that will maintain the product —
                including yours after handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Why UQENA"
            title="Reasons teams partner with us"
            description="Differentiators we hold ourselves to — not marketing claims tied to unnamed clients."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="card-uq p-6 md:p-7">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to learn whether we are a fit?"
        description="Share what you are building and how your team works today — we will respond with an honest view of how we can help."
      />
    </SiteShell>
  );
}
