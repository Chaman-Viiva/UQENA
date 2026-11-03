import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteShell } from "@/components/layout/SiteShell";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/lib/config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} — Conceptual project`,
    description: `${project.summary} This is a ${siteConfig.name} demonstration concept, not a client case study.`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow={`Conceptual project · ${project.category}`}
        title={project.title}
        description={project.subtitle}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "All work", href: "/work" }}
      >
        <div className="card-uq overflow-hidden p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-muted">
            <Image
              src={project.image}
              alt={`Mockup illustration for ${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </PageHero>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <div
            className="inline-flex rounded-full border border-blue/40 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue"
            role="status"
          >
            Conceptual demonstration — not client work
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray">{project.summary}</p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-uq">
          <SectionHeading
            light
            eyebrow="Objective"
            title="What this concept explores"
            description="The learning goal behind this sample — not a measured business outcome."
          />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            {project.objective}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Features"
            title="Illustrative capabilities"
            description="Representative product ideas shown in this concept — not a shipped feature list for a live product."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="card-uq flex gap-4 p-5 md:p-6">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden />
                <p className="text-sm leading-relaxed text-gray md:text-base">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Stack"
            title="Technologies referenced"
            description="Tools and platforms this concept is designed around — chosen for illustration, not as a guarantee of every future build."
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--border)] bg-navy-elevated px-4 py-2 text-sm text-gray"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-uq">
          <Link
            href="/work"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-gray transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to portfolio
          </Link>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Discuss a real product
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View services
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Interested in a similar product direction?"
        description={`${siteConfig.name} can help you validate, design, and build production software — scoped to your users and constraints.`}
      />
    </SiteShell>
  );
}
