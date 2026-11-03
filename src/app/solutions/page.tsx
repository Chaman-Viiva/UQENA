import type { Metadata } from "next";
import {
  Building2,
  ChartColumn,
  Layers,
  LayoutDashboard,
  PanelLeft,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
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

const icons: Record<string, LucideIcon> = {
  "building-2": Building2,
  layers: Layers,
  workflow: Workflow,
  "layout-dashboard": LayoutDashboard,
  "panel-left": PanelLeft,
  sparkles: Sparkles,
  "chart-column": ChartColumn,
  store: Store,
  smartphone: Smartphone,
};

export default function SolutionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What we build"
        title="Solutions shaped for real operating contexts"
        description={`${siteConfig.name} engineers digital products across the patterns below — each engagement is scoped to your domain, constraints, and roadmap rather than a one-size template.`}
        primaryCta={{ label: "Discuss your product", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />

      <section className="section-pad border-b border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Overview"
            title="Nine solution types we deliver"
            description="Explore what each pattern covers, who it serves, the problems it addresses, and how we typically approach delivery."
          />
          <nav
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Jump to solution"
          >
            {solutions.map((solution) => (
              <a
                key={solution.slug}
                href={`#${solution.slug}`}
                className="rounded-full border border-[var(--border)] bg-navy-elevated px-4 py-2 text-sm text-gray transition hover:border-blue/40 hover:text-white"
              >
                {solution.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {solutions.map((solution, index) => {
        const Icon = icons[solution.icon] ?? Layers;
        const isLight = index % 2 === 1;

        return (
          <section
            key={solution.slug}
            id={solution.slug}
            className={`section-pad scroll-mt-24 ${isLight ? "bg-surface" : ""}`}
          >
            <div className="container-uq">
              <article className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
                <div
                  className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg ${
                    isLight
                      ? "bg-gradient-uq text-white shadow-blue/20"
                      : "bg-navy-muted text-blue"
                  }`}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <h2
                    className={`mt-2 text-3xl font-bold tracking-tight md:text-4xl ${
                      isLight ? "text-navy" : "text-white"
                    }`}
                  >
                    {solution.title}
                  </h2>
                  <p
                    className={`mt-4 max-w-3xl text-lg leading-relaxed ${
                      isLight ? "text-slate-600" : "text-gray"
                    }`}
                  >
                    {solution.summary}
                  </p>

                  <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div
                      className={
                        isLight
                          ? "rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6 md:p-7"
                          : "card-uq p-6 md:p-7"
                      }
                    >
                      <h3
                        className={`text-sm font-semibold uppercase tracking-wide ${
                          isLight ? "text-blue" : "text-blue"
                        }`}
                      >
                        Who it helps
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed md:text-base ${
                          isLight ? "text-slate-700" : "text-gray"
                        }`}
                      >
                        {solution.helps}
                      </p>
                    </div>
                    <div
                      className={
                        isLight
                          ? "rounded-[var(--radius-lg)] border border-slate-200 bg-white p-6 md:p-7"
                          : "card-uq p-6 md:p-7"
                      }
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue">
                        Our approach
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed md:text-base ${
                          isLight ? "text-slate-700" : "text-gray"
                        }`}
                      >
                        {solution.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3
                      className={`text-base font-semibold ${
                        isLight ? "text-navy" : "text-white"
                      }`}
                    >
                      Problems we address
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {solution.problems.map((problem) => (
                        <li
                          key={problem}
                          className={`flex gap-3 rounded-xl px-4 py-3 text-sm md:text-base ${
                            isLight
                              ? "border border-slate-200 bg-slate-50 text-slate-700"
                              : "border border-[var(--border)] bg-navy-muted text-gray"
                          }`}
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden />
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

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq prose-uq max-w-3xl">
          <SectionHeading
            eyebrow="Fit"
            title="Solutions meet services and industries"
            description="These patterns describe the kinds of products we build. Delivery is shaped through our service lines, process, and domain experience."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services" variant="secondary">
              View services
            </Button>
            <Button href="/industries" variant="secondary">
              Industries we serve
            </Button>
            <Button href="/process" variant="secondary">
              How we work
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Which solution pattern matches your roadmap?"
        description="Share your context — we will help you frame scope, sequencing, and the right mix of engineering and design."
      />
    </SiteShell>
  );
}
