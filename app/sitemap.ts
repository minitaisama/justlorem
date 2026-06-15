import type { MetadataRoute } from "next";
import { allRoutes, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-06-15"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
