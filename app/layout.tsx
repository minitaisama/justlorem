import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import JsonLd from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Bản quyền Microsoft & Adobe cho doanh nghiệp | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `Bản quyền Microsoft & Adobe cho doanh nghiệp | ${site.shortName}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "vi_VN",
    images: [
      {
        url: absoluteUrl(site.ogImage),
        width: 1200,
        height: 630,
        alt: site.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bản quyền Microsoft & Adobe cho doanh nghiệp | ${site.shortName}`,
    description: site.description,
    images: [absoluteUrl(site.ogImage)],
  },
  icons: {
    icon: [
      { url: "/favicon-brand.ico", sizes: "any" },
      { url: "/favicon-brand-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-brand-96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon-brand-32.png",
    apple: [{ url: "/apple-touch-icon-v2.png", sizes: "180x180", type: "image/png" }],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#f9fafb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} antialiased`}>
        {children}
        <JsonLd data={siteJsonLd()} />
        {measurementId ? <AnalyticsConsent measurementId={measurementId} /> : null}
        {cloudflareToken ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: cloudflareToken })}
          />
        ) : null}
      </body>
    </html>
  );
}
