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
    <Link
      href={href}
      className="focus-ring group flex h-full flex-col border border-[var(--line)] bg-cream p-6 transition hover:border-ink/20 hover:bg-paper md:p-7"
    >
      <Icon className="h-5 w-5 text-blue" strokeWidth={1.75} />
      <h3 className="mt-5 font-display text-xl font-medium text-ink group-hover:text-blue">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{summary}</p>
      <span className="mt-5 text-sm font-semibold text-blue">Explore →</span>
    </Link>
  );
}
