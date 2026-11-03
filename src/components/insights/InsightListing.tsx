"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {filtered.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="group grid h-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-paper transition hover:border-ink/20"
            >
              <div className="img-frame relative aspect-[16/9]">
                <Image
                  src={article.cover}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                  {article.category}
                </p>
                <h2 className="mt-2 font-display text-xl font-medium text-ink group-hover:text-blue md:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{article.excerpt}</p>
                <p className="mt-4 text-xs text-slate">
                  {article.author} · {article.readingTime} min read · {formatDate(article.publishedAt)}
                </p>
                <span className="link-arrow mt-5">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-slate">No articles in this category yet.</p>
      )}
    </div>
  );
}
