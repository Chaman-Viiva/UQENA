import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  summary: string;
  image: string;
  className?: string;
  lead?: boolean;
};

export function IndustryCard({ href, title, summary, image, className, lead }: Props) {
  const src = image.endsWith(".svg") ? image.replace(".svg", ".jpg") : image;
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group block h-full overflow-hidden rounded-[var(--radius-md)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden bg-paper-deep",
          lead ? "min-h-[320px]" : "aspect-[16/11]",
        )}
      >
        <Image
          src={src}
          alt={`${title} industry`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl font-medium text-white">{title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/75">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
