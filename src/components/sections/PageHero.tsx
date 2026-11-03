import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
  className,
  compact,
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-horizon",
        compact ? "pb-16 pt-12 md:pb-20 md:pt-16" : "pb-20 pt-14 md:pb-28 md:pt-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="container-uq relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">{description}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {children && <div className="animate-fade-up delay-2">{children}</div>}
      </div>
    </section>
  );
}
