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
import {
  CareFlowMock,
  GenericProjectMock,
  HavenlyMock,
  LedgerlyMock,
} from "@/components/work/ProjectMockups";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/lib/config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function ProjectVisual({
  slug,
  title,
  accent,
}: {
  slug: string;
  title: string;
  accent: string;
}) {
  if (slug === "careflow-health") return <CareFlowMock />;
  if (slug === "havenly-market") return <HavenlyMock />;
  if (slug === "ledgerly") return <LedgerlyMock />;
  return <GenericProjectMock name={title} accent={accent} />;
}

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
        eyebrow={`Conceptual · ${project.category}`}
        title={project.title}
        description={project.subtitle}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "All work", href: "/work" }}
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="img-frame relative h-full min-h-[220px] overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src={project.image}
                alt={`${project.title} concept visual`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
          <ProjectVisual slug={project.slug} title={project.title} accent={project.accent} />
        </div>
      </PageHero>

      <section className="section-pad section-cream border-b border-[var(--line)]">
        <div className="container-uq max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Conceptual demonstration — not client work
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate md:text-xl">{project.summary}</p>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-uq max-w-3xl">
          <SectionHeading
            eyebrow="Objective"
            title="What this concept explores"
            description="The learning goal behind this sample — not a measured business outcome."
          />
          <p className="mt-8 text-base leading-relaxed text-slate md:text-lg">{project.objective}</p>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq">
          <SectionHeading
            eyebrow="Features"
            title="Illustrative capabilities"
            description="Representative product ideas shown in this concept — not a shipped feature list for a live product."
          />
          <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-4 py-5 md:py-6">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
                <p className="text-sm leading-relaxed text-slate md:text-base">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-paper border-y border-[var(--line)]">
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
                className="rounded-[var(--radius)] border border-[var(--line)] bg-cream px-4 py-2 text-sm text-slate"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container-uq">
          <Link href="/work" className="link-arrow inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to portfolio
          </Link>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Discuss a real product
            </Button>
            <Button href="/services" variant="ghost" size="lg">
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
