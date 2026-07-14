import { downloadableResources } from "@/lib/resources";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    generatedAt: "2026-07-14",
    resources: downloadableResources.map((resource) => ({
      slug: resource.slug,
      title: resource.title,
      description: resource.description,
      url: absoluteUrl(`/tai-nguyen/${resource.slug}`),
      downloadUrl: absoluteUrl(resource.downloadPath),
      downloadFormat: resource.downloadFormat,
      publishedAt: resource.publishedAt,
      reviewedAt: resource.reviewedAt,
    })),
  });
}
