import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outline-light";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<
  Variant,
  { className: string; style: CSSProperties }
> = {
  primary: {
    className: "hover:brightness-95",
    style: { backgroundColor: "#1677F8", color: "#ffffff" },
  },
  secondary: {
    className: "hover:brightness-110",
    style: { backgroundColor: "#0c1222", color: "#ffffff" },
  },
  ghost: {
    className: "hover:bg-[#e8e2d8]",
    style: { backgroundColor: "transparent", color: "#0c1222" },
  },
  inverse: {
    className: "hover:brightness-95",
    style: { backgroundColor: "#ffffff", color: "#0c1222" },
  },
  "outline-light": {
    className: "hover:bg-white/10",
    style: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.55)",
    },
  },
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "children" | "className" | "style"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className" | "style">;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const v = variantStyles[variant];
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[6px] font-semibold tracking-tight transition focus-ring",
    sizes[size],
    v.className,
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} style={v.style} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={v.style} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
