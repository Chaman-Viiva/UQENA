import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light" | "white" | "black";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
  href?: string | null;
};

export function Logo({
  variant = "dark",
  showWordmark = true,
  showTagline = false,
  className,
  href = "/",
}: LogoProps) {
  const onDark = variant === "dark" || variant === "white";
  const wordmarkColor = onDark ? "#ffffff" : "#0c1222";
  const symbolSrc =
    variant === "white"
      ? "/brand/uqena-symbol-white.svg"
      : variant === "black"
        ? "/brand/uqena-symbol-black.svg"
        : "/brand/uqena-symbol.svg";

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={symbolSrc}
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 md:h-9 md:w-9"
        priority
      />
      {showWordmark && (
        <span className="flex flex-col items-start">
          <span
            className="font-display text-[1.05rem] md:text-[1.15rem] font-semibold tracking-[0.18em] leading-none"
            style={{ color: wordmarkColor }}
          >
            UQENA
          </span>
          {showTagline && (
            <span
              className="mt-1.5 text-[0.58rem] font-medium tracking-[0.24em] uppercase"
              style={{ color: wordmarkColor, opacity: 0.7 }}
            >
              Engineering What&apos;s Next.
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} className="focus-ring rounded-sm" aria-label="UQENA home">
      {content}
    </Link>
  );
}
