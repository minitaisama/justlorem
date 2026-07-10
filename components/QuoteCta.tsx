"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type QuoteCtaProps = {
  label?: string;
  location: string;
  productSlug?: string;
  category?: string;
  className?: string;
  compact?: boolean;
  showIcon?: boolean;
};

export default function QuoteCta({
  label = "Hỏi giá qua Zalo",
  location,
  productSlug,
  category,
  className,
  compact = false,
  showIcon = true,
}: QuoteCtaProps) {
  const baseClass = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-bold transition",
    compact ? "px-4 py-2 text-xs" : "px-5 py-3 text-sm",
    className,
  );

  return (
    <Link
      href={site.zaloUrl}
      className={baseClass}
      data-quote-product={productSlug}
      onClick={() =>
        trackEvent("zalo_click", {
          cta_location: location,
          product_slug: productSlug,
          category,
          page_path: window.location.pathname,
        })
      }
    >
      {showIcon ? <MessageCircle size={16} aria-hidden="true" /> : null}
      {label}
      <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}
