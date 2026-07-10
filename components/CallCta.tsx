"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CallCtaProps = {
  label?: string;
  location: string;
  productSlug?: string;
  category?: string;
  className?: string;
  compact?: boolean;
  iconOnly?: boolean;
};

export default function CallCta({
  label = "Gọi hotline",
  location,
  productSlug,
  category,
  className,
  compact = false,
  iconOnly = false,
}: CallCtaProps) {
  return (
    <a
      href={site.phoneHref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-bold transition",
        iconOnly
          ? "min-w-11 p-3"
          : compact
            ? "px-4 py-2 text-xs"
            : "px-5 py-3 text-sm",
        className,
      )}
      aria-label={iconOnly ? label : undefined}
      data-call-product={productSlug}
      onClick={() =>
        trackEvent("hotline_click", {
          cta_location: location,
          product_slug: productSlug,
          category,
          page_path: window.location.pathname,
        })
      }
    >
      <Phone size={iconOnly ? 18 : 16} aria-hidden="true" />
      {iconOnly ? null : <span>{label}</span>}
      {iconOnly ? null : <ArrowUpRight size={15} aria-hidden="true" />}
    </a>
  );
}
