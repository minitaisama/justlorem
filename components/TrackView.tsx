"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackViewProps = {
  children: ReactNode;
  eventName: AnalyticsEvent;
  parameters?: Record<string, string | number | boolean | undefined>;
  className?: string;
};

export default function TrackView({
  children,
  eventName,
  parameters,
  className,
}: TrackViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        trackEvent(eventName, {
          ...parameters,
          page_path: window.location.pathname,
        });
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eventName, parameters]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
