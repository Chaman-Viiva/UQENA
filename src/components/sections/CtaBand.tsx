import { Button } from "@/components/ui/Button";

type Props = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({
  title = "Have something ambitious in mind?",
  description = "Tell us about the product, platform, or engineering challenge you are working through. We will help you find a clear path forward.",
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="section-pad section-dark">
      <div className="container-uq">
        <div className="grid gap-6 border border-white/10 bg-navy-soft p-6 sm:gap-8 sm:p-8 md:grid-cols-[1.4fr_auto] md:items-end md:p-12 lg:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 !text-white/55">Next step</p>
            <h2 className="font-display text-[1.75rem] font-medium tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-3 text-base text-gray sm:mt-4 sm:text-lg">{description}</p>
          </div>
          <Button href={ctaHref} size="lg" variant="inverse" className="w-full md:w-auto">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
