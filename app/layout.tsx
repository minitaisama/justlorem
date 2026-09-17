import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Lora, Manrope } from "next/font/google";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import "./globals.css";

const heroPoster = readFileSync(join(process.cwd(), "public/videos/lorem-studio-hero-poster.jpg")).toString("base64");

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-manrope",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-instrument-serif",
});

const vietnameseSerif = Lora({
  subsets: ["vietnamese"],
  style: "italic",
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justlorem.com"),
  title: "LOREM Technology — Digital Experiences",
  description:
    "LOREM Technology crafts Web3 solutions, immersive games, scalable architectures, and seamless digital experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "LOREM Technology",
    title: "LOREM Technology — Digital Experiences",
    description:
      "Building the future of digital experiences through Web3, games, architecture, and design.",
    images: [{ url: "/og-lorem-studio.jpg", width: 1200, height: 630, alt: "LOREM Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOREM Technology — Digital Experiences",
    description: "Building the future of digital experiences.",
    images: ["/og-lorem-studio.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-brand.ico", sizes: "any" },
      { url: "/favicon-brand-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-brand-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-v2.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} ${vietnameseSerif.variable}`}
        style={{ "--hero-poster": `url(data:image/jpeg;base64,${heroPoster})` } as React.CSSProperties}
      >{children}</body>
    </html>
  );
}
