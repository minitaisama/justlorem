import { displayPrice, productCategories, productFamilies } from "@/lib/catalog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    schemaVersion: 1,
    updatedAt: "2026-07-10",
    website: site.url,
    pricingPolicy: {
      type: "reference",
      reviewCycleDays: 30,
      note: "Giá tham khảo cần được xác nhận lại qua kênh báo giá chính thức trước khi đặt hàng.",
    },
    categories: productCategories.map((category) => ({
      slug: category.slug,
      name: category.title,
      description: category.summary,
      url: `${site.url}/giai-phap/${category.slug}`,
    })),
    products: productFamilies.map((product) => ({
      slug: product.slug,
      category: product.category,
      brand: product.brand,
      name: product.name,
      description: product.summary,
      licensingModel: product.licensingModel,
      audience: product.audience,
      platform: product.platform,
      term: product.term,
      url: product.catalogOnly
        ? `${site.url}/giai-phap/${product.category}`
        : `${site.url}/san-pham/${product.slug}`,
      catalogOnly: product.catalogOnly ?? false,
      variants: product.variants.map((variant) => ({
        name: variant.name,
        ...(variant.partNumber ? { partNumber: variant.partNumber } : {}),
        language: variant.language,
        deliveryMethod: variant.deliveryMethod,
        unit: variant.unit,
        quantity: variant.quantity,
        displayPrice: displayPrice(variant),
        priceCheckedAt: variant.priceCheckedAt,
        pricingNote: variant.pricingNote,
      })),
      officialSources: product.sources,
    })),
  });
}
