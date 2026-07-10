import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { productCategories, productsForCategory } from "@/lib/catalog";

export default function Services() {
  return (
    <section id="solutions" className="bg-[#f9fafb] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
              Giải pháp tư vấn
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.14] tracking-tight text-[#0a1b33] md:text-6xl">
              Chọn đúng license trước khi mua.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold leading-7 text-[#64748b]">
            LOREM hỗ trợ IT và kế toán phân loại nhu cầu Windows, Office,
            Microsoft 365 và Adobe trước khi chốt báo giá.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
            {productCategories.map((category, index) => {
              const products = productsForCategory(category.slug);
              return (
              <Link
                key={category.slug}
                href={`/giai-phap/${category.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-sm transition hover:border-slate-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-[#f9fafb] text-sm font-semibold text-[#0a1b33] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {category.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-medium leading-tight text-[#0a1b33]">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {products.map((product) => (
                      <span
                        key={product.slug}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200/60 bg-[#f9fafb] px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        <CheckCircle2 size={13} className="text-[#0a1b33]" />
                        {product.shortName}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="mt-auto pt-5 text-slate-400 transition group-hover:text-[#0a1b33]" />
              </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
