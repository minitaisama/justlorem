import type { Metadata } from "next";
import Banner from "@/components/landing/Banner";
import DeliveryProcess from "@/components/landing/DeliveryProcess";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import OurWork from "@/components/landing/OurWork";
import Partners from "@/components/landing/Partners";
import Services from "@/components/landing/Services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI-First Development Studio",
  description:
    "Lorem Technology is an AI-first development studio for product engineering, agentic workflows, AI UX prototypes, and launch-ready software.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <Banner />
      <DeliveryProcess />
      <Partners />
      <OurWork />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
