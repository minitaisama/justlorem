import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, CalendarDays, Clock3, LibraryBig } from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import { knowledgeArticles } from "@/lib/knowledge";
import { breadcrumbsJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kiến thức bản quyền Microsoft, Office và Adobe",
  description:
    "Kho kiến thức thực dụng về Windows, Office, Microsoft 365, Adobe và quy trình mua, triển khai, quản lý license cho doanh nghiệp.",
  path: "/kien-thuc",
});

const knowledgeGroups = [
  {
    title: "Windows",
    description: "Thiết bị mới, thiết bị hiện hữu, GGWA và cách đọc SKU.",
  },
  {
    title: "Office",
    description: "Mua một lần, LTSC, Microsoft 365 và cách triển khai đúng mô hình.",
  },
  {
    title: "Microsoft 365",
    description: "Chọn gói, cấp license, quản trị user và vận hành tenant.",
  },
  {
    title: "Adobe",
    description: "Creative Cloud, Acrobat và quản lý seat cho team.",
  },
  {
    title: "Procurement",
    description: "Báo giá, chứng từ, bàn giao và gia hạn subscription.",
  },
] as const;

export default function KnowledgeIndexPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33]">
      <Header />
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Kiến thức", path: "/kien-thuc" },
          ]),
          itemListJsonLd(
            "Kiến thức bản quyền phần mềm doanh nghiệp",
            knowledgeArticles.map((article) => ({
              name: article.title,
              path: `/kien-thuc/${article.slug}`,
            })),
          ),
        ]}
      />

      <section className="border-b border-slate-200/70 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Kiến thức" }]} />
          <div className="mt-8 max-w-4xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              <BookOpen size={16} aria-hidden="true" /> LOREM Knowledge Base
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Kiến thức để chọn, triển khai và quản lý license.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600">
              Dành cho IT, procurement và kế toán. Mỗi bài đi từ câu trả lời ngắn đến checklist triển khai, lỗi cần tránh và nguồn Microsoft hoặc Adobe để đối chiếu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4">
                <LibraryBig size={16} className="text-[#2457d6]" aria-hidden="true" />
                {knowledgeArticles.length} bài chuyên sâu
              </span>
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4">
                <BookOpen size={16} className="text-[#2457d6]" aria-hidden="true" />
                5 nhóm quyết định
              </span>
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4">
                <CalendarDays size={16} className="text-[#2457d6]" aria-hidden="true" />
                Kiểm tra ngày {knowledgeArticles[0]?.reviewedAt}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-14 md:space-y-20">
          {knowledgeGroups.map((group) => {
            const articles = knowledgeArticles.filter((article) => article.category === group.title);
            if (articles.length === 0) return null;

            return (
              <section key={group.title} aria-labelledby={`knowledge-${group.title}`}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2457d6]">Chủ đề</p>
                    <h2 id={`knowledge-${group.title}`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {group.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{group.description}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                    {articles.length} bài
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/kien-thuc/${article.slug}`}
                      className="group flex min-h-72 flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_22px_50px_-36px_rgba(15,23,42,0.42)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <Clock3 size={14} aria-hidden="true" /> {article.readingMinutes} phút
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold leading-tight sm:text-2xl">{article.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{article.description}</p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs font-semibold text-slate-500">
                        <span>{article.audience.slice(0, 2).join(" · ")}</span>
                        <ArrowUpRight size={17} className="shrink-0 transition group-hover:text-[#2457d6]" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
