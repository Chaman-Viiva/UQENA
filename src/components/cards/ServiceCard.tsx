import Link from "next/link";
import {
  Cloud,
  Code2,
  Compass,
  Globe,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "code-2": Code2,
  globe: Globe,
  smartphone: Smartphone,
  sparkles: Sparkles,
  palette: Palette,
  cloud: Cloud,
  server: Server,
  workflow: Workflow,
  compass: Compass,
  users: Users,
};

type Props = {
  href: string;
  title: string;
  summary: string;
  icon: string;
};

export function ServiceCard({ href, title, summary, icon }: Props) {
  const Icon = icons[icon] ?? Code2;
  return (
    <Link href={href} className="card-uq focus-ring group block p-6 md:p-7">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-uq text-white shadow-lg shadow-blue/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-blue transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray">{summary}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-blue">
        Explore service →
      </span>
    </Link>
  );
}
