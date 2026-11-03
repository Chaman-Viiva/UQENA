import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  summary: string;
  image: string;
};

export function IndustryCard({ href, title, summary, image }: Props) {
  return (
    <Link href={href} className="card-uq focus-ring group overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-muted">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-elevated via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray">{summary}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-blue">
          View industry →
        </span>
      </div>
    </Link>
  );
}
