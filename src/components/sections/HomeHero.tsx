import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section id="site-hero" className="relative min-h-[88vh] overflow-hidden bg-midnight text-white">
      <Image
        src="/images/hero/architecture.jpg"
        alt="Contemporary architectural facade with precise structural lines"
        fill
        priority
        className="object-cover object-center opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />

      <div className="container-uq relative flex min-h-[92vh] flex-col justify-center pb-20 pt-[calc(var(--header-h)+2rem)] md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="animate-rise max-w-3xl">
            <p className="eyebrow mb-6 !text-[#7dd3fc]">Software engineering studio</p>
            <h1 className="font-display text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[4.75rem] lg:leading-[0.98]">
              Engineering
              <br />
              What&apos;s Next.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray md:text-xl">
              From ambitious ideas to intelligent digital products, UQENA helps
              businesses design, build, and scale technology that moves them forward.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" variant="inverse">
                Start a Project
              </Button>
              <Button href="/work" size="lg" variant="outline-light">
                View selected work
              </Button>
            </div>
          </div>

          <div className="animate-rise delay-2 hidden border-l border-white/15 pl-8 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray">
              What we build
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>Custom software platforms</li>
              <li>Web & mobile products</li>
              <li>AI-enabled workflows</li>
              <li>Cloud & delivery systems</li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-gray">
              Partnering with founders, product teams, and operators who need
              engineering that holds up under growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
