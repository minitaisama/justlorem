import Header from "@/components/landing/Header";
import Banner from "@/components/landing/Banner";
import Partners from "@/components/landing/Partners";
import Services from "@/components/landing/Services";
import OurWork from "@/components/landing/OurWork";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden w-full">
      <Header />
      <Banner />
      <div className="max-w-[1400px] mx-auto w-full">
        <Partners />
        <OurWork />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
