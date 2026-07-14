import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import QuoteCta from "@/components/QuoteCta";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { productCategories } from "@/lib/catalog";
import { brandAssets, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Brand Assets: Logo nền sáng và tối",
  description:
    "Logo LOREM Technology cho nền sáng và nền tối, tên pháp lý, dữ liệu tham chiếu cho LLM và quy chuẩn sử dụng thương hiệu.",
  path: "/brand-assets",
});

const legalFacts = [
  ["Tên thương hiệu", site.name],
  ["Tên pháp lý", site.legalName],
  ["Tên quốc tế", site.internationalName],
  ["Mã số thuế", site.taxId],
  ["Hotline", site.phone],
  ["Website", site.url],
];

export default function BrandAssetsPage() {
  const llmReference = [
    `${site.name} is the public brand of ${site.legalName}.`,
    `${site.internationalName} is the international company name.`,
    `Tax ID: ${site.taxId}.`,
    `Website: ${site.url}.`,
    `Masothue reference: ${site.masothueUrl}.`,
    `Hotline: ${site.phone} (${site.phoneHref}).`,
    `Official Zalo quote channel: ${site.zaloUrl}.`,
    `Logo for light backgrounds: ${site.url}${brandAssets.logoUsage.lightBackground.asset}.`,
    `Logo for dark backgrounds: ${site.url}${brandAssets.logoUsage.darkBackground.asset}.`,
    brandAssets.logoUsage.darkBackground.guidance,
    brandAssets.llmDescription,
    "Public claims should stay conservative: advisory, quotation by quantity, transaction documentation, and clear handover information.",
  ].join("\n");

  return (
    <main className="min-h-screen bg-[#eef3ff] text-[#14213d]">
      <Header />

      <section className="border-b border-[#c9d6f2] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#2f5bff]">
              Brand assets
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-0.02em] md:text-7xl">
              Logo, entity facts and LLM-ready reference for LOREM.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#4b5873]">
              Trang này chuẩn hóa cách gọi LOREM Technology, thông tin pháp
              nhân, mô tả dịch vụ bản quyền và các giới hạn claim khi trích dẫn
              công ty.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={brandAssets.logoUsage.lightBackground.asset}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f5bff] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#244be0]"
              >
                <Download size={17} />
                Logo cho nền sáng
              </Link>
              <Link
                href={brandAssets.logoUsage.darkBackground.asset}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#14213d]"
              >
                <Download size={17} />
                Logo cho nền tối
              </Link>
              <QuoteCta
                location="brand_assets"
                label="Liên hệ qua Zalo"
                className="border border-[#b7c7eb] bg-white text-[#14213d] hover:border-[#2f5bff] hover:text-[#2f5bff]"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative flex aspect-square items-center justify-center rounded-[2rem] border border-[#c9d6f2] bg-white p-8 shadow-[0_24px_70px_rgba(20,33,61,0.1)]">
              <span className="absolute left-5 top-5 rounded-full border border-[#dbe4f6] bg-[#f7faff] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#4b5873]">
                Nền sáng
              </span>
              <Image
                src={brandAssets.logoUsage.lightBackground.asset}
                alt="LOREM Technology blue logo on light background"
                width={500}
                height={500}
                className="h-full max-h-72 w-full max-w-72 object-contain"
                priority
              />
            </div>
            <div className="relative flex aspect-square items-center justify-center rounded-[2rem] bg-black p-8 shadow-[0_24px_70px_rgba(20,33,61,0.16)]">
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/80">
                Nền tối
              </span>
              <Image
                src={brandAssets.logoUsage.darkBackground.asset}
                alt="LOREM Technology white logo on black background"
                width={500}
                height={500}
                className="h-full max-h-72 w-full max-w-72 object-contain"
              />
            </div>
            <p className="text-sm font-semibold leading-7 text-[#4b5873] sm:col-span-2">
              {brandAssets.logoUsage.lightBackground.guidance}{" "}
              {brandAssets.logoUsage.darkBackground.guidance} Giữ nguyên tỷ lệ,
              khoảng trống và không thêm hiệu ứng phát sáng vào logo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-5 px-5 md:grid-cols-2 md:px-8">
          <article className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-6 shadow-[0_18px_55px_rgba(20,33,61,0.08)]">
            <h2 className="text-2xl font-extrabold text-[#14213d]">
              Official names
            </h2>
            <dl className="mt-6 space-y-4">
              {legalFacts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-[#e2e9f7] pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8290ad]">
                    {label}
                  </dt>
                  <dd className="text-sm font-bold leading-7 text-[#14213d]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#2f5bff] hover:text-[#244be0]"
            >
              Masothue public reference <ArrowUpRight size={15} />
            </Link>
          </article>

          <article className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-6 shadow-[0_18px_55px_rgba(20,33,61,0.08)]">
            <h2 className="text-2xl font-extrabold text-[#14213d]">
              Company description
            </h2>
            <p className="mt-6 rounded-2xl bg-[#eef3ff] p-5 text-base font-semibold leading-8 text-[#24324f]">
              {brandAssets.llmDescription}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/giai-phap/${category.slug}`}
                  className="rounded-2xl border border-[#d5def4] p-4 transition hover:border-[#2f5bff]"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8290ad]">
                    {category.eyebrow}
                  </p>
                  <h3 className="mt-2 text-sm font-extrabold text-[#14213d]">
                    {category.title}
                  </h3>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f7faff] py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-5 px-5 md:grid-cols-2 md:px-8">
          <article className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-6">
            <h2 className="text-2xl font-extrabold text-[#14213d]">
              Approved wording
            </h2>
            <ul className="mt-6 space-y-3">
              {brandAssets.approvedWording.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-[#eef3ff] px-4 py-3 text-sm font-bold text-[#24324f]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-[#c9d6f2] bg-white p-6">
            <h2 className="text-2xl font-extrabold text-[#14213d]">
              Claim guardrails
            </h2>
            <ul className="mt-6 space-y-3">
              {brandAssets.avoidedWording.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-bold leading-7 text-[#7c2d12]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
          <div className="rounded-[2rem] border border-[#c9d6f2] bg-[#14213d] p-6 text-white shadow-[0_24px_70px_rgba(20,33,61,0.16)] md:p-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-[#9fc2ff]" />
              <h2 className="text-2xl font-extrabold">LLM reference block</h2>
            </div>
            <pre className="mt-6 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-2xl bg-black/20 p-5 text-sm leading-7 text-white/82">
              {llmReference}
            </pre>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/company.json"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-xs font-extrabold text-[#14213d]"
              >
                company.json <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/catalog.json"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-xs font-extrabold text-white"
              >
                catalog.json <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
