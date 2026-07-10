import Link from "next/link";
import { ArrowUpRight, BookOpen, Plus } from "lucide-react";
import { complianceFaqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#f9fafb] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-1 sm:px-5 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769e0]">
            FAQ mua bản quyền
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] text-[#0a1b33] md:text-5xl lg:text-[3.5rem]">
            Những câu hỏi cần chốt trước khi mua.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            Câu trả lời thực tế dành cho IT, kế toán và bộ phận mua hàng khi chọn Windows, Office, Microsoft 365 hoặc Adobe.
          </p>

          <Link
            href="/kien-thuc"
            className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-[#0a1b33] transition-colors hover:text-[#1769e0]"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            Thư viện kiến thức
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)]">
          {complianceFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-slate-200 px-5 last:border-b-0 open:bg-[#f8fbff] sm:px-6 md:px-8"
            >
              <summary className="cursor-pointer list-none py-5 marker:hidden md:py-6">
                <span className="flex items-start justify-between gap-5">
                  <span>
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#1769e0]">
                      {faq.category}
                    </span>
                    <span className="mt-1.5 block text-base font-semibold leading-6 text-[#0a1b33] sm:text-lg">
                      {faq.question}
                    </span>
                  </span>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-open:bg-[#0a152d] group-open:text-white">
                    <Plus
                      className="h-4 w-4 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </summary>
              <div className="max-w-3xl pb-6 pr-12 md:pb-7">
                <p className="text-sm leading-7 text-slate-600 sm:text-[0.95rem]">
                  {faq.answer}
                </p>
                {faq.href ? (
                  <Link
                    href={faq.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#1769e0] hover:text-[#0a1b33]"
                  >
                    {faq.linkLabel ?? "Xem hướng dẫn chi tiết"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
