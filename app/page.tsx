import type { Metadata } from "next";
import Banner from "@/components/landing/Banner";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import OurWork from "@/components/landing/OurWork";
import ProductPricing from "@/components/landing/ProductPricing";
import ProductRibbon from "@/components/landing/ProductRibbon";
import Services from "@/components/landing/Services";
import { faqJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import { productCategories } from "@/lib/catalog";
import { complianceFaqs } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Bản quyền Microsoft & Adobe cho doanh nghiệp",
  description:
    "LOREM tư vấn bản quyền Windows GGWA, Office LTSC, Microsoft 365 và Adobe cho doanh nghiệp tại Việt Nam. Xem bảng giá hoặc liên hệ hotline, Zalo.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#14213d]">
      <Header />
      <JsonLd
        data={[
          faqJsonLd(complianceFaqs),
          itemListJsonLd(
            "Giải pháp bản quyền phần mềm doanh nghiệp",
            productCategories.map((category) => ({
              name: category.title,
              path: `/giai-phap/${category.slug}`,
            })),
          ),
        ]}
      />
      <Banner />
      <ProductRibbon />
      <ProductPricing />
      <Services />
      <OurWork />
      <FAQ />
      <Footer />
    </main>
  );
}
