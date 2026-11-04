import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Official UQENA lockups only — never typeset the wordmark in CSS.
 *
 * uqena-nav-light-v2.png  → color mark + dark wordmark (cream / paper bars)
 * uqena-nav-dark-v2.png   → color mark + white wordmark (midnight / dark bars)
 * uqena-stacked-dark.png  → footer brand block with tagline
 * uqena-mark.png          → favicon / mark-only
 */

type LogoProps = {
  /** Surface behind the logo */
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

  let content: ReactNode;

  if (showTagline && onDark) {
    content = (
      <span className={cn("inline-flex h-10 items-center md:h-12", className)}>
        <Image
          src="/brand/uqena-stacked-dark.png"
          alt="UQENA — Engineering What's Next."
          width={220}
          height={151}
          className="h-full w-auto object-contain object-left"
          priority
        />
      </span>
    );
  } else if (showWordmark) {
    const src = onDark
      ? "/brand/uqena-nav-dark-v2.png"
      : variant === "black"
        ? "/brand/uqena-lockup-mono-dark.png"
        : "/brand/uqena-nav-light-v2.png";

    content = (
      <span
        className={cn(
          "header-logo inline-flex h-7 max-w-[11rem] items-center sm:h-8 sm:max-w-[13rem]",
          className,
        )}
      >
        <Image
          src={src}
          alt="UQENA"
          width={577}
          height={128}
          className="h-full w-auto max-h-full object-contain object-left"
          priority
          sizes="208px"
        />
      </span>
    );
  } else {
    content = (
      <span className={cn("inline-flex h-8 w-8 items-center", className)}>
        <Image
          src="/brand/uqena-mark.png"
          alt="UQENA"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </span>
    );
  }

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="focus-ring inline-flex h-9 max-h-9 shrink-0 items-center rounded-sm"
      aria-label="UQENA home"
    >
      {content}
    </Link>
  );
}
