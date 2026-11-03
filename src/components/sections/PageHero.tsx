import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  tone?: "dark" | "paper";
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "",
  tone = "dark",
  className,
  children,
}: Props) {
  const dark = tone === "dark";

  return (
    <section
      id="site-hero"
      className={cn(
        "relative overflow-hidden border-b",
        dark
          ? "border-white/10 bg-midnight text-white"
          : "border-[var(--line)] bg-paper text-ink",
        className,
      )}
    >
      <div className="container-uq grid items-end gap-10 pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+4.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="animate-rise max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-xl text-lg leading-relaxed",
                dark ? "text-gray" : "text-slate",
              )}
            >
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  size="lg"
                  variant={dark ? "inverse" : "primary"}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  size="lg"
                  variant={dark ? "outline-light" : "ghost"}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {(image || children) && (
          <div className="animate-rise delay-2">
            {children ?? (
              <div className="img-frame relative aspect-[4/3] rounded-[var(--radius-md)]">
                <Image
                  src={image!}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 480px"
                  priority
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
