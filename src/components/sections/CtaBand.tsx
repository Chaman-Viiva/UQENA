import { Button } from "@/components/ui/Button";

type Props = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({
  title = "Have an idea worth engineering?",
  description = "Let's turn your next big idea into something real.",
  ctaLabel = "Start a Conversation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="section-pad">
      <div className="container-uq">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-navy-elevated px-8 py-14 md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray">{description}</p>
            <div className="mt-8">
              <Button href={ctaHref} size="lg">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
