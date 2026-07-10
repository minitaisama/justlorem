import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import NeedSelector from "@/components/catalog/NeedSelector";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import QuoteCta from "@/components/QuoteCta";
import TrackView from "@/components/TrackView";
import TrackedLink from "@/components/TrackedLink";
import {
  findCategory,
  productCategories,
  productFamilies,
  productsForCategory,
} from "@/lib/catalog";
import {
  breadcrumbsJsonLd,
  faqJsonLd,
  itemListJsonLd,
  pageMetadata,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};

  return pageMetadata({
    title: `${category.title} cho doanh nghiệp`,
    description: category.summary,
    path: `/giai-phap/${category.slug}`,
    image: category.icon,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const products = productsForCategory(category.slug);
  const productNames = Object.fromEntries(
    productFamilies.map((product) => [product.slug, product.name]),
  );

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33]">
      <Header />
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Giải pháp", path: "/#solutions" },
            { name: category.title, path: `/giai-phap/${category.slug}` },
          ]),
          itemListJsonLd(
            `${category.title} - danh mục sản phẩm`,
            products.map((product) => ({
              name: product.name,
              path: `/san-pham/${product.slug}`,
            })),
          ),
          faqJsonLd(category.faqs),
        ]}
      />

      <section className="border-b border-slate-200/70 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Giải pháp", href: "/#solutions" },
              { label: category.title },
            ]}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {category.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                {category.title} cho doanh nghiệp.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600">
                {category.description}
              </p>
            </div>
            <div className="flex min-h-64 items-center justify-center rounded-[2rem] bg-white p-8 shadow-[0_28px_80px_-50px_rgba(15,23,42,0.45)]">
              <Image
                src={category.icon}
                alt={`${category.title} icon`}
                width={220}
                height={220}
                className="h-36 w-36 object-contain sm:h-44 sm:w-44"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Chọn theo nhu cầu
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Bắt đầu từ cách doanh nghiệp sử dụng.
            </h2>
          </div>
          <div className="mt-7">
            <NeedSelector options={category.needOptions} productNames={productNames} />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <TrackedLink
                key={product.slug}
                href={`/san-pham/${product.slug}`}
                eventName="product_select"
                eventParameters={{
                  product_slug: product.slug,
                  category: category.slug,
                  source: "category_grid",
                }}
                className="group grid min-h-72 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 sm:grid-cols-[0.72fr_1fr] sm:items-center sm:p-6"
              >
                <div className="flex h-36 items-center justify-center sm:h-52">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={360}
                    height={240}
                    className="max-h-36 w-auto max-w-full object-contain sm:max-h-48"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:pl-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    {product.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {product.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2457d6]">
                    Xem chi tiết <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      <TrackView
        eventName="comparison_view"
        parameters={{ category: category.slug }}
        className="border-y border-slate-200/70 bg-white px-5 py-14 md:px-8 md:py-20"
      >
        <div className="mx-auto w-full max-w-[1320px]">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            So sánh nhanh.
          </h2>
          <div className="mt-7 overflow-x-auto rounded-[1.5rem] border border-slate-200">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-[#f7faff]">
                <tr>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Tiêu chí
                  </th>
                  {category.comparison.columns.map((column) => (
                    <th key={column} className="px-5 py-4 text-sm font-bold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {category.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-200">
                    <th className="px-5 py-4 text-sm font-bold text-slate-600">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`} className="px-5 py-4 text-sm leading-6 text-slate-600">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TrackView>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Câu hỏi thường gặp.</h2>
          </div>
          <div className="divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white px-5">
            {category.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {faq.question}
                  <CheckCircle2 size={18} className="shrink-0 text-[#2f5bff]" aria-hidden="true" />
                </summary>
                <p className="pb-1 pr-8 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15376a] px-5 py-12 text-white md:px-8">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">Báo giá theo hồ sơ</p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold sm:text-3xl">
              Gửi số lượng và nhu cầu để LOREM rà soát phiên bản phù hợp.
            </h2>
          </div>
          <QuoteCta
            location="category_footer"
            category={category.slug}
            className="bg-white text-[#0a1b33] hover:bg-blue-50"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
