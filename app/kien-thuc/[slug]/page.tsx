import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BadgeCheck, CalendarDays, Clock3, ExternalLink, Link2, UsersRound } from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import QuoteCta from "@/components/QuoteCta";
import { findCategory, findProduct } from "@/lib/catalog";
import { findKnowledgeArticle, knowledgeArticles } from "@/lib/knowledge";
import { articleJsonLd, breadcrumbsJsonLd, pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findKnowledgeArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: `/kien-thuc/${article.slug}`,
  });
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = findKnowledgeArticle(slug);
  if (!article) notFound();

  const category = findCategory(article.relatedCategory);
  const relatedProducts = article.relatedProductSlugs
    .map((productSlug) => findProduct(productSlug))
    .filter((product) => product !== undefined);
  if (!category) notFound();

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33]">
      <Header />
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Kiến thức", path: "/kien-thuc" },
            { name: article.title, path: `/kien-thuc/${article.slug}` },
          ]),
          articleJsonLd(article),
        ]}
      />

      <article>
        <header className="border-b border-slate-200/70 px-5 py-10 md:px-8 md:py-16">
          <div className="mx-auto w-full max-w-[1000px]">
            <Breadcrumbs
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Kiến thức", href: "/kien-thuc" },
                { label: article.title },
              ]}
            />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{article.category}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
              <span>Biên soạn: LOREM Technology</span>
              <span className="flex items-center gap-2">
                <CalendarDays size={14} aria-hidden="true" /> Xuất bản {article.publishedAt} · Kiểm tra {article.reviewedAt}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={14} aria-hidden="true" /> {article.readingMinutes} phút đọc
              </span>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-blue-200/70 bg-blue-50 p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Trả lời ngắn</p>
              <p className="mt-3 text-base font-semibold leading-8 text-[#18345f]">{article.answer}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {article.keyTakeaways.map((takeaway) => (
                <div key={takeaway} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <BadgeCheck size={17} className="text-[#2457d6]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 rounded-xl bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2f5bff]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {article.externalResources?.length ? (
              <section aria-labelledby="related-resources-heading">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2457d6]">
                  <Link2 size={15} aria-hidden="true" /> Tài nguyên biên tập
                </p>
                <h2 id="related-resources-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Đọc tiếp theo nhu cầu triển khai
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Các liên kết dưới đây bổ sung thông tin sản phẩm hoặc quy trình chuyên môn; không thể hiện quan hệ sở hữu hay đối tác giữa các website.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {article.externalResources.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-related-site-link="true"
                      data-target-domain={resource.targetDomain}
                      data-target-path={new URL(resource.href).pathname}
                      data-source-path={`/kien-thuc/${article.slug}`}
                      data-content-slug={article.slug}
                      data-link-context={resource.linkContext}
                      className="group flex min-h-40 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-[0_18px_45px_-34px_rgba(37,87,214,0.65)]"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        {resource.targetDomain}
                      </p>
                      <h3 className="mt-2 text-base font-bold leading-6 group-hover:text-[#2457d6]">{resource.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-[#2457d6]">
                        Mở tài nguyên <ExternalLink size={14} aria-hidden="true" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Nguồn tham khảo chính thức</h2>
              <div className="mt-5 divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white px-5">
                {article.sources.map((source) => (
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
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                <UsersRound size={14} aria-hidden="true" /> Phù hợp với
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-slate-700">
                {article.audience.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2457d6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Giải pháp liên quan</p>
              <h2 className="mt-2 text-xl font-semibold">{category.title}</h2>
              <Link
                href={`/giai-phap/${category.slug}`}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#2457d6]"
              >
                Xem nhóm sản phẩm <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            {relatedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/san-pham/${product.slug}`}
                className="block rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-slate-300"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Sản phẩm</p>
                <h2 className="mt-2 text-base font-bold leading-6">{product.name}</h2>
              </Link>
            ))}
            <QuoteCta
              location="knowledge_sidebar"
              category={category.slug}
              className="w-full bg-[#0a152d] text-white"
            />
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}
