import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-uq text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:brightness-110",
  secondary:
    "border border-[var(--border-strong)] bg-transparent text-white hover:border-blue hover:bg-white/5",
  ghost: "text-gray hover:text-white",
  light: "bg-white text-navy hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition focus-ring",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
