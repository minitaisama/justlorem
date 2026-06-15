import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

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
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;

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
      images: [{ url: absoluteUrl(image), width: 1200, height: 630 }],
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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.internationalName, site.shortName],
    url: site.url,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.ogImage),
    taxID: site.taxId,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "196/11/10 Tan Son Nhi",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [site.masothueUrl, site.mapsUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: ["VN", "Global"],
        availableLanguage: ["English", "Vietnamese"],
      },
    ],
  };
}
