import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-horizon pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-blue/15 blur-[100px]" />

      <div className="container-uq relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="animate-fade-up">
          <div className="mb-8">
            <Logo href={null} showWordmark className="scale-110 origin-left" />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
            Engineering What&apos;s Next.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
            From ambitious ideas to intelligent digital products, UQENA helps
            businesses design, build, and scale technology that moves them forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Capabilities
            </Button>
          </div>
        </div>

        <div className="animate-fade-up delay-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[var(--border)] bg-navy-muted shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/hero/abstract.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
            />
            <Image
              src="/images/hero/hero-ribbons.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-violet/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
