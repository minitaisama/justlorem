"use client";

import { useId, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import type { ProductCategory } from "@/lib/catalog";
import TrackedLink from "@/components/TrackedLink";
import { cn } from "@/lib/utils";

export default function NeedSelector({
  options,
  productNames,
}: {
  options: ProductCategory["needOptions"];
  productNames: Record<string, string>;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = options[selectedIndex];
  const panelId = `${tabListId}-panel`;

  function focusTab(index: number) {
    setSelectedIndex(index);
    requestAnimationFrame(() => tabRefs.current[index]?.focus());
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % options.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + options.length) % options.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;

    if (nextIndex === null) return;

    event.preventDefault();
    focusTab(nextIndex);
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)] md:p-5">
      <div
        className="grid gap-2 sm:grid-cols-3"
        role="tablist"
        aria-label="Chọn nhu cầu sử dụng"
      >
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={option.label}
              type="button"
              role="tab"
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`${tabListId}-tab-${index}`}
              aria-controls={panelId}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "min-h-12 rounded-xl border px-4 py-3 text-left text-sm font-bold transition",
                isSelected
                  ? "border-[#2f5bff] bg-blue-50 text-[#0a1b33]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
              )}
            >
              <span className="flex items-center gap-2">
                {isSelected ? <Check size={15} aria-hidden="true" /> : null}
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${tabListId}-tab-${selectedIndex}`}
        className="mt-4 flex flex-col justify-between gap-4 rounded-xl bg-[#f7faff] p-4 sm:flex-row sm:items-center"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Gợi ý bắt đầu
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{selected.description}</p>
          <p className="mt-1 font-bold text-[#0a1b33]">
            {productNames[selected.recommendedProductSlug]}
          </p>
        </div>
        <TrackedLink
          href={`/san-pham/${selected.recommendedProductSlug}`}
          eventName="product_select"
          eventParameters={{ product_slug: selected.recommendedProductSlug, source: "need_selector" }}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a152d] px-5 text-sm font-bold text-white"
        >
          Xem sản phẩm <ArrowUpRight size={15} aria-hidden="true" />
        </TrackedLink>
      </div>
    </div>
  );
}
