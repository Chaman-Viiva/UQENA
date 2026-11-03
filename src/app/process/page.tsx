import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { processSteps } from "@/data/process";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Process",
  description:
    "UQENA delivery process — discover, strategize, design, engineer, launch, and evolve, with clear deliverables and client involvement at every stage.",
};

const engagementCommitments = [
  "Regular demos of working software — not slide-only updates",
  "Written capture of decisions, scope changes, and open questions",
  "Early conversation about non-functional needs: security, performance, compliance",
  "Launch planning that includes rollback paths and support windows",
  "Post-launch iteration informed by usage, not only the original spec",
];

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Delivery"
        title="A process built for learning while shipping"
        description={`${siteConfig.name} structures engagements so risk is managed, decisions stay shared, and working software appears early — then improves with real usage.`}
        primaryCta={{ label: "Discuss your timeline", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
        image="/images/hero/architecture.jpg"
        imageAlt="Architectural drawing and structure"
      />

      <section className="section-pad section-cream border-b border-[var(--line)]">
        <div className="container-uq max-w-3xl">
          <SectionHeading
            eyebrow="Overview"
            title="Six stages from insight to evolution"
            description="Each phase has defined outputs and a clear role for your team. Sequencing flexes with project size, but the intent stays the same: clarity before code, increments before big-bang releases."
          />
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq">
          <ol className="relative border-l border-[var(--line)] pl-8 md:pl-12">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative pb-16 last:pb-0">
                <span
                  className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--line)] bg-paper md:-left-12 md:h-7 md:w-7"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-blue" />
                </span>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12">
                  <div>
                    <p className="font-display text-sm text-blue">{step.number}</p>
                    <h2 className="mt-2 font-display text-2xl font-medium text-ink md:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>

                  <div className="grid gap-8 border-t border-[var(--line)] pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                        Deliverables
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-slate md:text-base"
                          >
                            <span className="text-blue" aria-hidden>
                              ·
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                        Your involvement
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate md:text-base">
                        {step.clientInvolvement}
                      </p>
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <span className="sr-only">Next: {processSteps[index + 1]?.title}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad section-cream border-y border-[var(--line)]">
        <div className="container-uq grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Engagement"
            title="What to expect from us"
            description="Practical commitments that sit behind the stage names."
          />
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {engagementCommitments.map((item) => (
              <li key={item} className="py-4 text-sm leading-relaxed text-slate md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-uq grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="font-display text-2xl font-medium text-white md:text-3xl">
              See capabilities in context
            </h2>
            <p className="mt-3 max-w-xl text-gray">
              Services describe what we build; solutions describe product patterns; industries
              describe domain context.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/services" variant="inverse" size="md">
              Services
            </Button>
            <Button href="/solutions" variant="outline-light" size="md">
              Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq">
          <Link href="/about" className="link-arrow inline-flex">
            About UQENA <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Ready to walk through your roadmap?"
        description="We will map your goals to the right starting phase — whether that is discovery or a focused build sprint."
      />
    </SiteShell>
  );
}
