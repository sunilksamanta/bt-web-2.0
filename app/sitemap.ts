import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { narratives } from "@/content/narratives";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...narratives.map((n) => ({
      url: `${SITE_URL}${n.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: n.path.split("/").length > 2 ? 0.7 : 0.8,
    })),
  ];
}
