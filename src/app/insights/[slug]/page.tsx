import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteShell } from "@/components/layout/SiteShell";
import { articles, getArticle } from "@/data/insights";
import { siteConfig } from "@/lib/config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article not found" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        primaryCta={{ label: "All insights", href: "/insights" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
        image={article.cover}
        imageAlt=""
      />

      <section className="section-pad section-cream border-b border-[var(--line)]">
        <div className="container-uq">
          <p className="text-sm text-slate">
            {article.author} · {article.readingTime} min read · Published{" "}
            {formatDate(article.publishedAt)}
          </p>
          <div className="prose-uq mt-10 max-w-3xl">
            {article.content.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <Link href="/insights" className="link-arrow mt-10 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to insights
          </Link>
        </div>
      </section>

      {fallbackRelated.length > 0 && (
        <section className="section-pad section-paper">
          <div className="container-uq">
            <SectionHeading
              eyebrow="Continue reading"
              title="Related articles"
              description={`More from ${siteConfig.name} on similar themes.`}
            />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {fallbackRelated.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group block h-full border border-[var(--line)] bg-cream p-6 transition hover:border-ink/20"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-medium text-ink group-hover:text-blue">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{item.excerpt}</p>
                    <p className="mt-3 text-xs text-slate">{item.readingTime} min read</p>
                    <span className="link-arrow mt-4">
                      Read <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title="Applying these ideas to your roadmap?"
        description="Tell us where you are stuck — we will respond with an honest view of options and trade-offs."
      />
    </SiteShell>
  );
}
