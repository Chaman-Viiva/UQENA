import type { Metadata } from "next";
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

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Delivery"
        title="A process built for learning while shipping"
        description={`${siteConfig.name} structures engagements so risk is managed, decisions stay shared, and working software appears early — then improves with real usage.`}
        primaryCta={{ label: "Discuss your timeline", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <section className="section-pad">
        <div className="container-uq max-w-3xl">
          <SectionHeading
            eyebrow="Overview"
            title="Six stages from insight to evolution"
            description="Each phase has defined outputs and a clear role for your team. Sequencing flexes with project size, but the intent stays the same: clarity before code, increments before big-bang releases."
          />
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq space-y-16">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="grid gap-8 border-b border-[var(--border)] pb-16 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,240px)_1fr]"
            >
              <div>
                <span className="text-sm font-bold text-blue">{step.number}</span>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{step.title}</h2>
                <p className="mt-3 text-sm text-gray">{step.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="card-uq p-6 md:p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue">
                    Deliverables
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-gray md:text-base"
                      >
                        <span className="text-blue" aria-hidden>
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-uq p-6 md:p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue">
                    Your involvement
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray md:text-base">
                    {step.clientInvolvement}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:col-span-2 lg:block" aria-hidden>
                  <div className="ml-[120px] h-px w-12 bg-[var(--border)]" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Engagement"
            title="What to expect from us"
            description="Practical commitments that sit behind the stage names."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Regular demos of working software — not slide-only updates",
              "Written capture of decisions, scope changes, and open questions",
              "Early conversation about non-functional needs: security, performance, compliance",
              "Launch planning that includes rollback paths and support windows",
              "Post-launch iteration informed by usage, not only the original spec",
            ].map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-lg)] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <div className="card-uq flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">See capabilities in context</h2>
              <p className="mt-2 max-w-xl text-gray">
                Services describe what we build; solutions describe product patterns; industries
                describe domain context.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/services">Services</Button>
              <Button href="/solutions" variant="secondary">
                Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to walk through your roadmap?"
        description="We will map your goals to the right starting phase — whether that is discovery or a focused build sprint."
      />
    </SiteShell>
  );
}
