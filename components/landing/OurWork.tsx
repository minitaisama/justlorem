import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  FileSignature,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { productVisuals, trustSignals } from "@/lib/site";
import { cn } from "@/lib/utils";

const trustIcons = [
  ShieldCheck,
  Building2,
  BadgeCheck,
  FileCheck2,
  FileSignature,
  ReceiptText,
];

export default function OurWork() {
  return (
    <section id="trust" className="bg-[#f9fafb] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
              Nguồn hàng & chứng từ
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.14] tracking-tight text-[#0a1b33] md:text-6xl">
              Hàng chính hãng. Hồ sơ rõ ràng.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {productVisuals.slice(0, 5).map((product) => (
              <span
                key={product.name}
                className="flex h-14 w-20 items-center justify-center rounded-2xl border border-slate-200/70 bg-white px-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} logo`}
                  width={96}
                  height={42}
                  className={cn("h-auto w-auto object-contain", product.imageClass)}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal, index) => {
            const Icon = trustIcons[index % trustIcons.length];

            return (
            <article
              key={signal.title}
              className="rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_24px_70px_-46px_rgba(15,23,42,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[#0a1b33] shadow-sm">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-[#0a1b33]">
                {signal.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-[#64748b]">
                {signal.body}
              </p>
            </article>
            );
          })}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/nguon-hang-ho-so"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-[#0a1b33] transition hover:border-slate-300"
          >
            Xem quy trình nguồn hàng & hồ sơ <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
