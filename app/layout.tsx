import type { Metadata, Viewport } from "next";
import { Anton, Raleway } from "next/font/google";
import { organizationJsonLd } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software, Web, App & Product Development`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} — Software, Web, App & Product Development`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [{ url: absoluteUrl(site.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software, Web, App & Product Development`,
    description: site.description,
    images: [absoluteUrl(site.ogImage)],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${anton.variable} ${raleway.variable} font-body antialiased bg-[#030712] text-white`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
