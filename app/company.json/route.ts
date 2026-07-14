import { absoluteUrl, brandAssets, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    schemaVersion: 1,
    updatedAt: "2026-07-14",
    brandName: site.name,
    legalName: site.legalName,
    internationalName: site.internationalName,
    taxId: site.taxId,
    website: site.url,
    brandAssetsPage: absoluteUrl("/brand-assets"),
    logos: {
      lightBackground: absoluteUrl(brandAssets.logoUsage.lightBackground.asset),
      darkBackground: absoluteUrl(brandAssets.logoUsage.darkBackground.asset),
    },
    publicTaxReference: site.masothueUrl,
    address: site.address,
    description: site.description,
    ...(site.phone ? { phone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.zaloUrl.startsWith("https://zalo.me/") ? { zalo: site.zaloUrl } : {}),
    approvedWording: brandAssets.approvedWording,
    claimGuardrails: brandAssets.avoidedWording,
  });
}
