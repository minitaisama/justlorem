export type AnalyticsEvent =
  | "zalo_click"
  | "hotline_click"
  | "pricing_view"
  | "product_select"
  | "comparison_view"
  | "legal_reference_click";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEvent, parameters: EventParameters = {}) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  const safeParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  );

  window.gtag("event", name, safeParameters);
}
