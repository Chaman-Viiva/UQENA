"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles, insightCategories } from "@/data/insights";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function InsightListing() {
  const [active, setActive] = useState<(typeof insightCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter insights">
        {insightCategories.map((cat) => (
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

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="card-uq focus-ring group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] bg-navy-muted">
                <Image
                  src={article.cover}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                  {article.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-blue">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">{article.excerpt}</p>
                <p className="mt-4 text-xs text-gray">
                  {article.author} · {article.readingTime} min read · {formatDate(article.publishedAt)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-gray">No articles in this category yet.</p>
      )}
    </div>
  );
}
