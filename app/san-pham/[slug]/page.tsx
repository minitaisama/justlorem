import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  CircleAlert,
  ExternalLink,
  X,
} from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import CallCta from "@/components/CallCta";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import PriceDisplay from "@/components/PriceDisplay";
import QuoteCta from "@/components/QuoteCta";
import {
  displayPrice,
  findCategory,
  findProduct,
  isPriceCurrent,
  productFamilies,
} from "@/lib/catalog";
import {
  breadcrumbsJsonLd,
  faqJsonLd,
  pageMetadata,
  productJsonLd,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productFamilies
    .filter((product) => !product.catalogOnly)
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};

  return pageMetadata({
    title: `${product.name}: giá & tư vấn`,
    description: product.summary,
    path: `/san-pham/${product.slug}`,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const category = findCategory(product.category);
  const relatedProduct = findProduct(product.relatedProductSlug);
  if (!category || !relatedProduct) notFound();

  const leadVariant = product.variants[0];
  const leadPrice = displayPrice(leadVariant);

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-20 text-[#0a1b33] md:pb-0">
      <Header />
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: category.title, path: `/giai-phap/${category.slug}` },
            { name: product.name, path: `/san-pham/${product.slug}` },
          ]),
          productJsonLd(product),
          faqJsonLd(product.faqs),
        ]}
      />

      <section className="border-b border-slate-200/70 px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: category.title, href: `/giai-phap/${category.slug}` },
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {product.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600">
                {product.summary}
              </p>

              <dl className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
                {[
                  ["Cấp phép", product.licensingModel],
                  ["Nền tảng", product.platform],
                  ["Thời hạn", product.term],
                  ["Đối tượng", product.audience],
                ].map(([label, value]) => (
                  <div key={label} className="border-l-2 border-blue-200 pl-3">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {leadPrice.startsWith("Liên hệ") ? "Giá" : "Giá tham khảo từ"}
                  </p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">
                    <PriceDisplay
                      priceCheckedAt={leadVariant.priceCheckedAt}
                      initialCurrent={isPriceCurrent(leadVariant.priceCheckedAt)}
                      currentLabel={leadPrice}
                    />
                  </p>
                </div>
                <QuoteCta
                  location="product_hero"
                  productSlug={product.slug}
                  category={product.category}
                  className="bg-[#0a152d] text-white hover:bg-[#13264c]"
                />
                <CallCta
                  location="product_hero"
                  productSlug={product.slug}
                  category={product.category}
                  className="border border-slate-200 bg-white text-[#0a1b33] hover:border-slate-300"
                />
              </div>
            </div>

            <div className="relative flex min-h-72 items-center justify-center overflow-hidden px-6 py-8 lg:min-h-[460px]">
              <span className="absolute bottom-12 h-16 w-4/5 rounded-[50%] bg-blue-200/55 blur-2xl" />
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={720}
                height={520}
                className="relative max-h-72 w-auto max-w-full object-contain lg:max-h-[360px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-5 lg:grid-cols-2">
          <article className="rounded-[1.5rem] border border-emerald-200/70 bg-emerald-50/55 p-5 md:p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Check className="text-emerald-700" aria-hidden="true" /> Phù hợp khi
            </h2>
            <ul className="mt-5 space-y-3">
              {product.suitableFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <Check size={17} className="mt-1 shrink-0 text-emerald-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.5rem] border border-amber-200/70 bg-amber-50/55 p-5 md:p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <CircleAlert className="text-amber-700" aria-hidden="true" /> Không phù hợp khi
            </h2>
            <ul className="mt-5 space-y-3">
              {product.unsuitableFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <X size={17} className="mt-1 shrink-0 text-amber-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">SKU & giá</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Các lựa chọn trong catalog.</h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-slate-500">
              Giá chỉ mang tính tham khảo và tự chuyển sang trạng thái liên hệ sau 30 ngày chưa kiểm tra.
            </p>
          </div>

          <div className="mt-7 overflow-x-auto rounded-[1.5rem] border border-slate-200">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead className="bg-[#f7faff]">
                <tr>
                  {[
                    "Tên SKU",
                    "Ngôn ngữ",
                    "Bàn giao",
                    "Đơn vị",
                    "Giá",
                    "Kiểm tra giá",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.variants.map((variant) => {
                  const current = isPriceCurrent(variant.priceCheckedAt);
                  return (
                    <tr key={variant.name} className="border-t border-slate-200 align-top">
                      <td className="px-4 py-4">
                        <p className="max-w-xs text-sm font-bold leading-6">{variant.name}</p>
                        {variant.partNumber ? (
                          <p className="mt-1 text-xs text-slate-500">Part number: {variant.partNumber}</p>
                        ) : null}
                      </td>
                      <td className="px-4 py-4 text-sm leading-6 text-slate-600">{variant.language}</td>
                      <td className="px-4 py-4 text-sm leading-6 text-slate-600">{variant.deliveryMethod}</td>
                      <td className="px-4 py-4 text-sm text-slate-600">{variant.unit} · SL {variant.quantity}</td>
                      <td className="px-4 py-4">
                        <p className="whitespace-nowrap text-lg font-semibold">
                          <PriceDisplay
                            priceCheckedAt={variant.priceCheckedAt}
                            initialCurrent={isPriceCurrent(variant.priceCheckedAt)}
                            currentLabel={displayPrice(variant)}
                          />
                        </p>
                        <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">{variant.pricingNote}</p>
                      </td>
                      <td className="px-4 py-4">
                        <time dateTime={variant.priceCheckedAt} className="text-sm text-slate-600">
                          {new Intl.DateTimeFormat("vi-VN").format(new Date(`${variant.priceCheckedAt}T00:00:00Z`))}
                        </time>
                        <p className={`mt-1 text-xs font-bold ${current ? "text-emerald-700" : "text-amber-700"}`}>
                          {current ? "Trong chu kỳ 30 ngày" : "Cần xác nhận lại"}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-[1fr_0.75fr]">
          <article>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Tài liệu tham khảo</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Nguồn từ hãng.</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white px-5">
              {product.sources.map((source) => (
                <Link
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-16 items-center justify-between gap-4 py-4 text-sm font-bold transition hover:text-[#2457d6]"
                >
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-500">{source.publisher}</span>
                    <span className="mt-1 block">{source.title}</span>
                  </span>
                  <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </article>

          <aside className="rounded-[1.75rem] bg-[#15376a] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">So sánh liên quan</p>
            <h2 className="mt-3 text-2xl font-semibold">{relatedProduct.name}</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">{relatedProduct.summary}</p>
            <Link
              href={`/san-pham/${relatedProduct.slug}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#0a1b33]"
            >
              Xem sản phẩm <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-[0.65fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Trước khi đặt hàng.</h2>
          </div>
          <div className="divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 px-5">
            {product.faqs.map((faq) => (
              <details key={faq.question} className="py-5">
                <summary className="min-h-11 cursor-pointer font-bold leading-6">{faq.question}</summary>
                <p className="pb-1 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-3 md:hidden">
        <CallCta
          location="mobile_sticky"
          productSlug={product.slug}
          category={product.category}
          label="Gọi hotline"
          compact
          className="w-full border border-slate-200 bg-white text-[#0a1b33] shadow-[0_18px_50px_rgba(10,21,45,0.16)]"
        />
          <QuoteCta
            location="mobile_sticky"
            productSlug={product.slug}
            category={product.category}
            label="Báo giá Zalo"
            compact
            className="w-full bg-[#0a152d] text-white shadow-[0_18px_50px_rgba(10,21,45,0.3)]"
          />
      </div>
      <Footer />
    </main>
  );
}
