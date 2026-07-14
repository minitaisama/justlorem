"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function RelatedSiteAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLElement>("[data-related-site-link]");
      if (!link) return;

      trackEvent("related_site_click", {
        target_domain: link.dataset.targetDomain,
        target_path: link.dataset.targetPath,
        source_path: link.dataset.sourcePath,
        content_slug: link.dataset.contentSlug,
        link_context: link.dataset.linkContext,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
