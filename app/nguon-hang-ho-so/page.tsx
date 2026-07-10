import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileCheck2,
  FileSignature,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import QuoteCta from "@/components/QuoteCta";
import { breadcrumbsJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Nguồn hàng và hồ sơ bản quyền doanh nghiệp",
  description:
    "Quy trình nguồn hàng, hợp đồng, hóa đơn VAT và bàn giao thông tin license của LOREM Technology.",
  path: "/nguon-hang-ho-so",
});

const supplyChain = [
  { title: "Hãng phần mềm", detail: "Microsoft hoặc Adobe phát hành sản phẩm và điều kiện cấp phép." },
  { title: "Kênh phân phối", detail: "Nhà phân phối hoặc đại lý cung ứng theo chương trình và hồ sơ giao dịch." },
  { title: "LOREM", detail: "Đối chiếu nhu cầu, SKU, số lượng và yêu cầu chứng từ trước khi báo giá." },
  { title: "Doanh nghiệp", detail: "Nhận license cùng thông tin bàn giao, hợp đồng và hóa đơn theo giao dịch." },
];

const documents = [
  { icon: FileSignature, title: "Hợp đồng", detail: "Hỗ trợ hồ sơ hợp đồng theo nhu cầu và quy trình mua hàng đã xác nhận." },
  { icon: ReceiptText, title: "Hóa đơn VAT", detail: "Thông tin xuất hóa đơn được đối chiếu theo pháp nhân và giao dịch thực tế." },
  { icon: PackageCheck, title: "Thông tin license", detail: "Tên sản phẩm, SKU, số lượng, người dùng hoặc thiết bị được bàn giao rõ." },
  { icon: FileCheck2, title: "Chứng từ liên quan", detail: "Các tài liệu giao dịch được lưu cùng báo giá và đầu mối hỗ trợ sau mua." },
];

export default function SupplyAndDocumentsPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33]">
      <Header />
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Trang chủ", path: "/" },
          { name: "Nguồn hàng và hồ sơ", path: "/nguon-hang-ho-so" },
        ])}
      />

      <section className="border-b border-slate-200/70 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Nguồn hàng và hồ sơ" }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Procurement transparency</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Nguồn hàng rõ. Hồ sơ bàn giao rõ.
              </h1>
            </div>
            <p className="text-base font-medium leading-8 text-slate-600">
              LOREM đối chiếu sản phẩm, nguồn cung và yêu cầu chứng từ theo từng giao dịch. Trang này không công bố tài liệu có dữ liệu khách hàng.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Chuỗi cung ứng</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Từ hãng đến doanh nghiệp.</h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-4">
            {supplyChain.map((step, index) => (
              <div key={step.title} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <span className="text-xs font-bold text-blue-700">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                {index < supplyChain.length - 1 ? (
                  <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-blue-300 lg:block" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((item) => (
              <article key={item.title} className="border-l-2 border-blue-200 pl-5">
                <item.icon className="h-6 w-6 text-[#2457d6]" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] bg-[#15376a] p-6 text-white md:p-8">
            <ShieldCheck className="h-8 w-8 text-blue-200" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold">Wording về nguồn nhập.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              LOREM có thể ưu tiên nguồn hàng từ các đầu mối phân phối uy tín như FPT/Synnex FPT khi phù hợp với sản phẩm và hồ sơ. Cách diễn đạt này không thiết lập quan hệ đại lý hoặc đối tác chính thức giữa LOREM và Microsoft.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://devicepartner.microsoft.com/en-us/connect/distributor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-xs font-bold text-[#0a1b33]"
              >
                Microsoft distributor finder <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="https://synnexfpt.com/en/synnex-fpt-chosen-to-distribute-microsoft-surface-in-vietnam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-xs font-bold text-white"
              >
                Synnex FPT reference <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 md:p-8">
            <Building2 className="h-8 w-8 text-[#2457d6]" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold">Thông tin cần gửi.</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700">
              {["Tên sản phẩm hoặc nhu cầu sử dụng", "Số lượng thiết bị, người dùng hoặc seat", "Thời hạn subscription nếu có", "Tên pháp nhân và MST xuất hóa đơn", "Yêu cầu hợp đồng và người nhận bàn giao"].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2f5bff]" />
                  {item}
                </li>
              ))}
            </ul>
            <QuoteCta location="supply_documents" className="mt-7 bg-[#0a152d] text-white" />
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
