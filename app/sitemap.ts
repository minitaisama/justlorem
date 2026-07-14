import type { MetadataRoute } from "next";
import { allRoutes, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-07-14"),
    changeFrequency:
      route === "/" || route === "/kien-thuc" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/giai-phap") || route.startsWith("/san-pham")
          ? 0.85
          : route.startsWith("/kien-thuc/")
            ? 0.75
            : route.startsWith("/tai-nguyen/")
              ? 0.75
            : 0.7,
  }));
}
