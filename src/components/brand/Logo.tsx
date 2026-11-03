import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light" | "white" | "black";
  showWordmark?: boolean;
  showTagline?: boolean;
  stacked?: boolean;
  className?: string;
  href?: string | null;
};

/** Geometric UQ monogram — left U channel + right Q with diagonal spur */
function Symbol({ className, mono }: { className?: string; mono?: "white" | "black" }) {
  const fill = mono === "white" ? "#FFFFFF" : mono === "black" ? "#0B1020" : "url(#uqLogoGrad)";
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("shrink-0", className)}
      fill="none"
      aria-hidden="true"
    >
      {!mono && (
        <defs>
          <linearGradient id="uqLogoGrad" x1="10" y1="68" x2="70" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#885CF6" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={fill}
        fillRule="evenodd"
        d="M16 10h12v26c0 4.418 3.582 8 8 8h2c4.418 0 8-3.582 8-8V10h12v26c0 11.598-9.402 21-21 21h-2C23.402 57 14 47.598 14 36V10h2zm30 40 9 9c.8.8 2 .8 2.8 0l3.2-3.2c.8-.8.8-2 0-2.8l-9.4-9.4c-1.5 2.5-3.4 4.7-5.6 6.4z"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  showWordmark = true,
  showTagline = false,
  stacked = false,
  className,
  href = "/",
}: LogoProps) {
  const textColor =
    variant === "light" || variant === "black" ? "text-navy" : "text-white";
  const mono =
    variant === "white" ? "white" : variant === "black" ? "black" : undefined;

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        stacked && "flex-col gap-2 text-center",
        className,
      )}
    >
      <Symbol className="h-9 w-9 md:h-10 md:w-10" mono={mono} />
      {showWordmark && (
        <span className={cn("flex flex-col", stacked ? "items-center" : "items-start")}>
          <span
            className={cn(
              "font-bold tracking-[0.22em] text-[1.05rem] md:text-lg leading-none",
              textColor,
            )}
          >
            UQENA
          </span>
          {showTagline && (
            <span
              className={cn(
                "mt-1.5 text-[0.55rem] md:text-[0.62rem] font-medium tracking-[0.28em] uppercase opacity-70",
                textColor,
              )}
            >
              Engineering What&apos;s Next.
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (href === null) {
    return content;
  }

  return (
    <Link href={href} className="focus-ring rounded-md" aria-label="UQENA home">
      {content}
    </Link>
  );
}
