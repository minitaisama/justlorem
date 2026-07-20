import { knowledgeArticles } from "@/lib/knowledge";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    schemaVersion: 1,
    generatedAt: "2026-07-20",
    indexUrl: absoluteUrl("/kien-thuc"),
    articles: knowledgeArticles.map((article) => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      answer: article.answer,
      category: article.category,
      audience: article.audience,
      readingMinutes: article.readingMinutes,
      publishedAt: article.publishedAt,
      reviewedAt: article.reviewedAt,
      url: absoluteUrl(`/kien-thuc/${article.slug}`),
      relatedCategory: article.relatedCategory,
      relatedProducts: article.relatedProductSlugs.map((slug) =>
        absoluteUrl(`/san-pham/${slug}`),
      ),
      officialSources: article.sources,
    })),
  });
}
