"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectCategories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

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
              "focus-ring rounded-full border px-4 py-2 text-sm transition",
              active === cat
                ? "border-transparent bg-gradient-uq text-white"
                : "border-[var(--border)] text-gray hover:text-white",
            )}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="card-uq focus-ring group overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-navy-muted">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                Conceptual project · {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-gray">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
