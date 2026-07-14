import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import TrackedLink from "@/components/TrackedLink";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Thông tin pháp lý doanh nghiệp",
  description:
    "Thông tin pháp nhân, mã số thuế 0315880407, địa chỉ, hotline và hồ sơ Masothue để đối chiếu LOREM Technology trước giao dịch.",
  path: "/legal",
});

export default function LegalPage() {
  const rows = [
    { label: "Tên pháp lý", value: site.legalName },
    { label: "Tên quốc tế", value: site.internationalName },
    { label: "Tên ngắn", value: site.shortName },
    { label: "Mã số thuế", value: site.taxId },
    { label: "Hotline", value: site.phone, href: site.phoneHref },
    { label: "Địa chỉ", value: site.address },
  ];

  return (
    <main className="min-h-screen bg-[#eef3ff] text-[#14213d]">
      <Header />
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#2f5bff]">
            Pháp lý doanh nghiệp
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.03] tracking-[-0.02em] md:text-7xl">
            Thông tin pháp nhân LOREM Technology.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#4b5873]">
            Trang này công khai thông tin pháp nhân để khách hàng, công cụ tìm
            kiếm và hệ thống trả lời có thể đối chiếu đúng entity LOREM.
            Masothue được liên kết như nguồn tham khảo mã số thuế công khai.
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#c9d6f2] bg-white shadow-[0_22px_65px_rgba(20,33,61,0.09)]">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-[#e2e9f7] px-5 py-4 last:border-b-0 md:grid-cols-[240px_1fr]"
              >
                <dt className="text-sm font-bold text-[#8290ad]">{row.label}</dt>
                <dd className="text-sm leading-7 text-[#14213d]">
                  {row.href ? (
                    <a href={row.href} className="font-bold text-[#2f5bff] hover:text-[#244be0]">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="legal_reference_click"
              eventParameters={{ source: "legal_page" }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f5bff] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#244be0]"
            >
              Mở hồ sơ Masothue <ArrowUpRight size={16} />
            </TrackedLink>
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b7c7eb] bg-white px-6 py-3 text-sm font-bold text-[#14213d] transition hover:border-[#2f5bff] hover:text-[#2f5bff]"
            >
              Về LOREM Technology
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
