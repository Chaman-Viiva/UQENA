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
        <div className="grid gap-8 border border-white/10 bg-navy-soft p-8 md:grid-cols-[1.4fr_auto] md:items-end md:p-12 lg:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Next step</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray">{description}</p>
          </div>
          <Button href={ctaHref} size="lg" variant="inverse">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
