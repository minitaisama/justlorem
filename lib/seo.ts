import type { Metadata } from "next";
import type { ProductFamily } from "./catalog";
import type { KnowledgeArticle } from "./knowledge";
import {
  absoluteUrl,
  complianceFaqs,
  site,
} from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = site.ogImage,
}: PageMetadata): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title === site.name ? title : `${title} | ${site.shortName}`;
  const openGraphImage =
    image === site.ogImage
      ? {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: site.ogImageAlt,
        }
      : { url: absoluteUrl(image) };

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
      siteName: site.name,
      locale: "vi_VN",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function organizationJsonLd() {
  const contactPoint =
    site.phone || site.email
      ? [
          {
            "@type": "ContactPoint",
            ...(site.phone ? { telephone: site.phone } : {}),
            ...(site.email ? { email: site.email } : {}),
            contactType: "sales",
            areaServed: ["VN"],
            availableLanguage: ["English", "Vietnamese"],
          },
        ]
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.internationalName, site.shortName],
    url: site.url,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.ogImage),
    taxID: site.taxId,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "196/11/10 Tan Son Nhi",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [
      site.masothueUrl,
      site.mapsUrl,
      ...(site.zaloUrl.startsWith("https://zalo.me/") ? [site.zaloUrl] : []),
    ],
    ...(contactPoint ? { contactPoint } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: site.url,
    inLanguage: "vi-VN",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }> = complianceFaqs,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function siteJsonLd() {
  return [organizationJsonLd(), websiteJsonLd()];
}

export function breadcrumbsJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: ProductFamily) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": absoluteUrl(`/san-pham/${product.slug}#product`),
    name: product.name,
    description: product.summary,
    image: absoluteUrl(product.image),
    category: product.category,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    url: absoluteUrl(`/san-pham/${product.slug}`),
    subjectOf: product.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.title,
      url: source.url,
      publisher: source.publisher,
    })),
  };
}

export function itemListJsonLd(
  name: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/kien-thuc/${article.slug}#article`),
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.reviewedAt,
    inLanguage: "vi-VN",
    mainEntityOfPage: absoluteUrl(`/kien-thuc/${article.slug}`),
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}
