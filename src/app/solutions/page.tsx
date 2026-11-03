import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Software solution types from UQENA — enterprise platforms, SaaS products, automation, customer portals, internal systems, AI applications, dashboards, marketplaces, and mobile-first platforms.",
};

export default function SolutionsPage() {
  return (
    <SiteShell>
      <PageHero
        tone="paper"
        eyebrow="What we build"
        title="Solutions shaped for real operating contexts"
        description={`${siteConfig.name} engineers digital products across the patterns below — each engagement is scoped to your domain, constraints, and roadmap rather than a one-size template.`}
        primaryCta={{ label: "Discuss your product", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
        image="/images/hero/structure.jpg"
        imageAlt="Architectural structure detail"
      />

      <section className="section-pad section-cream border-b border-[var(--line)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Overview"
            title="Nine solution types we deliver"
            description="Product patterns — not SKU packages. Jump to a section or read straight through."
          />
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Jump to solution">
            {solutions.map((solution) => (
              <a
                key={solution.slug}
                href={`#${solution.slug}`}
                className="link-arrow text-sm"
              >
                {solution.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {solutions.map((solution, index) => {
        const isPaper = index % 2 === 0;

        return (
          <section
            key={solution.slug}
            id={solution.slug}
            className={`section-pad scroll-mt-24 ${
              isPaper ? "section-paper border-b border-[var(--line)]" : "section-cream"
            }`}
          >
            <div className="container-uq">
              <article className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                <header className="lg:col-span-4">
                  <p className="font-display text-sm text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate">{solution.summary}</p>
                </header>

                <div className="lg:col-span-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                        Who it helps
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                        {solution.helps}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                        Our approach
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                        {solution.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-display text-base font-medium text-ink">
                      Problems we address
                    </h3>
                    <ul className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                      {solution.problems.map((problem) => (
                        <li
                          key={problem}
                          className="py-4 text-sm leading-relaxed text-slate md:text-base"
                        >
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        );
      })}

      <section className="section-pad section-dark">
        <div className="container-uq grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Fit"
            title="Solutions meet services and industries"
            description="These patterns describe the kinds of products we build. Delivery is shaped through our service lines, process, and domain experience."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/services" variant="inverse" size="md">
              View services
            </Button>
            <Button href="/industries" variant="outline-light" size="md">
              Industries we serve
            </Button>
            <Button href="/process" variant="outline-light" size="md">
              How we work
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq max-w-3xl">
          <p className="text-sm leading-relaxed text-slate">
            Not sure which pattern fits? Most roadmaps blend several — a portal on top of an
            internal platform, automation feeding a dashboard, mobile as the primary surface.
            Share your context and we will help frame scope and sequencing.
          </p>
          <Link href="/contact" className="link-arrow mt-6 inline-flex">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Which solution pattern matches your roadmap?"
        description="Share your context — we will help you frame scope, sequencing, and the right mix of engineering and design."
      />
    </SiteShell>
  );
}
