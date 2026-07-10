import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileCheck2 } from "lucide-react";
import CallCta from "@/components/CallCta";
import QuoteCta from "@/components/QuoteCta";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import {
  productVisuals,
  quoteSteps,
  site,
  trustSignals,
} from "@/lib/site";
import { productCategories } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Về LOREM Technology",
  description:
    "LOREM Technology tư vấn giải pháp bản quyền Microsoft, Windows GGWA, Office, Microsoft 365 và Adobe cho doanh nghiệp tại Việt Nam.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#eef3ff] text-[#14213d]">
      <Header />
      <section className="border-b border-[#c9d6f2] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#2f5bff]">
              Về LOREM Technology
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-0.02em] md:text-7xl">
              Đầu mối tư vấn bản quyền phần mềm cho doanh nghiệp.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b5873]">
              Microsoft GGWA, Office, Microsoft 365 và Adobe. Báo giá qua Zalo
              hoặc hotline theo số lượng và hồ sơ giao dịch.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <QuoteCta
                location="about_hero"
                className="bg-[#2f5bff] text-white hover:bg-[#244be0]"
              />
              <CallCta
                location="about_hero"
                className="border border-[#b7c7eb] bg-white text-[#14213d] hover:border-[#2f5bff] hover:text-[#2f5bff]"
              />
              <Link
                href="/legal"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b7c7eb] bg-white px-6 py-3 text-sm font-bold text-[#14213d] transition hover:border-[#2f5bff] hover:text-[#2f5bff]"
              >
                Xem pháp lý LOREM
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#c9d6f2] bg-white p-6 shadow-[0_24px_70px_rgba(20,33,61,0.1)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#8290ad]">
              Pháp nhân đăng ký
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[#8290ad]">Tên pháp lý</dt>
                <dd className="mt-1 font-extrabold text-[#14213d]">{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-[#8290ad]">Tên quốc tế</dt>
                <dd className="mt-1 text-[#4b5873]">{site.internationalName}</dd>
              </div>
              <div>
                <dt className="text-[#8290ad]">Mã số thuế</dt>
                <dd className="mt-1 font-extrabold text-[#14213d]">{site.taxId}</dd>
              </div>
              <div>
                <dt className="text-[#8290ad]">Địa chỉ</dt>
                <dd className="mt-1 leading-6 text-[#4b5873]">{site.address}</dd>
              </div>
            </dl>
            <Link
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#2f5bff] hover:text-[#244be0]"
            >
              Đối chiếu hồ sơ Masothue <ArrowUpRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7faff] py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {productVisuals.slice(0, 8).map((product) => (
            <div
              key={product.name}
              className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-5 shadow-[0_18px_55px_rgba(20,33,61,0.08)]"
            >
              <div className="flex h-24 items-center justify-center rounded-[1.35rem] bg-[#f7faff] p-4">
                <Image
                  src={product.image}
                  alt={`${product.name} logo`}
                  width={170}
                  height={72}
                  className={cn("h-auto w-auto object-contain", product.imageClass)}
                />
              </div>
              <h2 className="mt-5 text-lg font-extrabold text-[#14213d]">
                {product.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#4b5873]">
                {product.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 px-5 md:grid-cols-4 md:px-8">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/giai-phap/${category.slug}`}
              className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-5 shadow-[0_18px_55px_rgba(20,33,61,0.08)] transition hover:-translate-y-0.5 hover:border-[#2f5bff]/55"
            >
              <CheckCircle2 className="h-6 w-6 text-[#2f5bff]" />
              <h2 className="mt-5 text-lg font-extrabold text-[#14213d]">
                {category.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7faff] py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#2f5bff]">
              Cách LOREM làm việc
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-[-0.02em] md:text-6xl">
              Phù hợp quy trình mua hàng của doanh nghiệp.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {quoteSteps.slice(0, 3).map((step, index) => (
              <article
                key={step.label}
                className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-6"
              >
                <FileCheck2 className="h-7 w-7 text-[#2f5bff]" />
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8290ad]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#14213d]">
                  {step.label}
                </h3>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trustSignals.slice(0, 3).map((signal) => (
              <article
                key={signal.title}
                className="rounded-[1.75rem] border border-[#c9d6f2] bg-[#f7faff] p-6"
              >
                <h3 className="text-xl font-extrabold text-[#14213d]">
                  {signal.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
