import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { articles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/work",
    "/about",
    "/process",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = articles.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...workRoutes, ...insightRoutes];
}
