import type { Metadata } from "next";
import Banner from "@/components/landing/Banner";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import OurWork from "@/components/landing/OurWork";
import Partners from "@/components/landing/Partners";
import Services from "@/components/landing/Services";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Software, Web, App & Product Development",
  description: site.description,
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <Banner />
      <Partners />
      <OurWork />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
