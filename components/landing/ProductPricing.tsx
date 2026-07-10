import Image from "next/image";
import { AlertTriangle, PackageCheck } from "lucide-react";
import QuoteCta from "@/components/QuoteCta";
import PriceDisplay from "@/components/PriceDisplay";
import TrackView from "@/components/TrackView";
import { isPriceCurrent } from "@/lib/catalog";
import { formatVnd, pricingCatalog, pricingNotice } from "@/lib/site";

const priceCheckedAt = "2026-07-10";

export default function ProductPricing() {
  return (
    <section id="pricing" className="bg-[#f9fafb] px-4 pb-14 md:px-8 md:pb-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white p-4 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.45)] sm:p-5 lg:rounded-[2.4rem] lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                <PackageCheck size={15} />
                Bảng giá tham khảo
              </p>
              <h2 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-[#0a1b33] sm:text-[2.45rem] md:text-[2.75rem] lg:text-6xl">
                Windows, Microsoft 365 & Office.
              </h2>
            </div>
            <p className="max-w-lg text-sm font-semibold leading-6 text-[#64748b] lg:max-w-md lg:leading-7">
              Giá tham khảo theo từng dòng sản phẩm. Gửi số lượng qua Zalo hoặc
              gọi hotline để nhận báo giá mới nhất theo hồ sơ doanh nghiệp.
              <span className="mt-1 block text-xs font-medium text-slate-400">
                Kiểm tra giá gần nhất: 10/07/2026.
              </span>
            </p>
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-[1.5rem] border border-amber-200/70 bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-amber-900">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <span>{pricingNotice}</span>
          </div>

          <div className="mt-7 divide-y divide-slate-200/70 lg:mt-9">
            {pricingCatalog.map((category) => (
              <TrackView
                key={category.id}
                eventName="pricing_view"
                parameters={{ category: category.id }}
                className="py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Image
                      src={category.image}
                      alt={`${category.label} product visual`}
                      width={120}
                      height={90}
                      className="h-10 w-auto shrink-0 object-contain sm:h-11 lg:h-12"
                    />
                    <div className="min-w-0">
                      <p className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:block">
                        {category.eyebrow}
                      </p>
                      <h3 className="text-xl font-semibold leading-tight text-[#0a1b33] sm:mt-1 sm:text-2xl">
                        {category.label}
                      </h3>
                      <p className="mt-1 hidden max-w-xl text-sm font-semibold leading-6 text-[#64748b] lg:block">
                        {category.summary}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-slate-200/70 bg-[#f8fbff] px-3 py-1.5 text-xs font-bold text-[#0a1b33]">
                    {category.products.length} sản phẩm
                  </span>
                </div>

                <div className="mt-3 overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-white lg:rounded-[1.75rem]">
                  {category.products.map((product) => (
                    <article
                      key={`${category.id}-${product.name}`}
                      className="group relative grid grid-cols-[4rem_1fr] gap-x-3 gap-y-2.5 border-b border-slate-100 px-3 py-3 transition-colors last:border-b-0 hover:bg-[#f8fbff] sm:grid-cols-[4.75rem_1fr] md:grid-cols-[5.75rem_minmax(0,1fr)_9.5rem_auto] md:items-center md:px-4 md:py-4 lg:grid-cols-[6.5rem_minmax(0,1fr)_10rem_11rem] lg:px-5"
                    >
                      <span
                        className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-[0.12]"
                        style={{ backgroundColor: category.accent }}
                      />
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={`${product.name} product visual`}
                          width={220}
                          height={180}
                          className="h-16 w-auto max-w-[4rem] object-contain sm:h-20 sm:max-w-[4.75rem] md:max-w-[5.75rem] lg:h-24 lg:max-w-[6.5rem]"
                        />
                      </div>
                      <div className="relative min-w-0">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-600">
                            {product.unit}
                          </span>
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-700">
                            SL {product.quantity}
                          </span>
                        </div>
                        <h4 className="mt-2 text-lg font-medium leading-tight text-[#0a1b33] lg:text-xl">
                          {product.name}
                        </h4>
                        <p className="mt-1.5 hidden text-sm font-medium leading-5 text-[#64748b] sm:block lg:leading-6">
                          {product.detail}
                        </p>
                      </div>
                      <div className="relative col-start-2 md:col-start-auto">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 lg:text-[11px]">
                          {"priceLabel" in product ? "Giá" : "Giá tham khảo"}
                        </p>
                        <p className="mt-0.5 text-2xl font-medium tracking-tight text-[#0a1b33] lg:text-3xl">
                          <PriceDisplay
                            priceCheckedAt={priceCheckedAt}
                            initialCurrent={isPriceCurrent(priceCheckedAt)}
                            currentLabel={
                              !isPriceCurrent(priceCheckedAt)
                                ? "Liên hệ nhận giá mới"
                                : "priceLabel" in product
                                  ? product.priceLabel
                                  : formatVnd(product.priceVnd)
                            }
                          />
                        </p>
                      </div>
                      <QuoteCta
                        location="homepage_pricing"
                        category={category.id}
                        productSlug={product.slug}
                        label="Hỏi giá"
                        compact
                        className="relative col-start-2 w-fit bg-[#0a152d] text-white hover:bg-[#102046] md:col-start-auto md:justify-self-end"
                      />
                    </article>
                  ))}
                </div>
              </TrackView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
