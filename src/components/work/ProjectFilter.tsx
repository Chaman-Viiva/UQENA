"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectCategories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  CareFlowMock,
  HavenlyMock,
  LedgerlyMock,
  GenericProjectMock,
} from "@/components/work/ProjectMockups";

function ProjectVisual({ slug, title, accent }: { slug: string; title: string; accent: string }) {
  if (slug === "careflow-health") return <CareFlowMock />;
  if (slug === "havenly-market") return <HavenlyMock />;
  if (slug === "ledgerly") return <LedgerlyMock />;
  return <GenericProjectMock name={title} accent={accent} />;
}

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active) || p.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={cn(
              "focus-ring rounded-[var(--radius)] border px-4 py-2 text-sm transition",
              active === cat
                ? "border-ink bg-ink text-white"
                : "border-[var(--line)] text-slate hover:border-ink/30 hover:text-ink",
            )}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-16">
        {filtered.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={cn(
              "group grid gap-8 lg:grid-cols-2 lg:items-center",
              index % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 opacity-40">
                <div className="img-frame relative h-full min-h-[200px] overflow-hidden rounded-[var(--radius-md)]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
              <ProjectVisual slug={project.slug} title={project.title} accent={project.accent} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                Conceptual · {project.category}
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium text-ink group-hover:text-blue">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{project.subtitle}</p>
              <p className="mt-4 text-slate">{project.summary}</p>
              <span className="link-arrow mt-6">View project →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
