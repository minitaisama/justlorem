import Image from "next/image";
import Link from "next/link";
import CallCta from "@/components/CallCta";
import QuoteCta from "@/components/QuoteCta";
import { site } from "@/lib/site";

const heroWebmUrl = "/videos/lorem-licensing-hero.webm";
const heroVideoUrl = "/videos/lorem-licensing-hero.mp4";
const heroPosterUrl = "/videos/lorem-licensing-hero-poster.jpg";

export default function Banner() {
  return (
    <section className="bg-[#f9fafb] px-4 pb-8 pt-8 md:px-8 md:pb-10 md:pt-10">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            poster={heroPosterUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="hero-video h-full w-full object-cover"
          >
            <source src={heroWebmUrl} type="video/webm" />
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <div className="max-w-[690px]">
            <p className="mb-4 inline-flex rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 backdrop-blur-xl">
              Tư vấn bản quyền doanh nghiệp
            </p>
            <h1 className="text-[42px] font-semibold leading-[1.12] tracking-tight text-[#0a1b33] md:text-[56px]">
              Bản quyền Microsoft & Adobe cho doanh nghiệp
            </h1>
            <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[#64748b] md:text-[15px]">
              Windows GGWA, Office LTSC, Microsoft 365 và Adobe theo số lượng,
              kèm hợp đồng, hóa đơn VAT và hồ sơ bàn giao theo giao dịch.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <nav className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40">
            <Link
              href="/"
              aria-label="LOREM Technology"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm"
            >
              <Image
                src={site.logo}
                alt="LOREM Technology logo"
                width={500}
                height={500}
                className="h-7 w-7 object-contain"
              />
            </Link>
            <CallCta
              location="hero_floating_nav"
              label="Gọi hotline"
              compact
              iconOnly
              className="hidden border border-slate-200/60 bg-white text-[#0a1b33] shadow-sm hover:border-slate-300 sm:inline-flex"
            />
            <Link
              href="#solutions"
              className="px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] md:px-4"
            >
              Giải pháp
            </Link>
            <Link
              href="#pricing"
              className="px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] md:px-4"
            >
              Bảng giá
            </Link>
            <QuoteCta
              location="hero_floating_nav"
              label="Báo giá Zalo"
              compact
              showIcon={false}
              className="border border-slate-200/60 bg-white text-[#0a1b33] shadow-sm hover:border-slate-300"
            />
          </nav>
        </div>
      </div>
    </section>
  );
}
