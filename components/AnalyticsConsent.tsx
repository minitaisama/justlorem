"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "lorem-analytics-consent-v1";

type Consent = "granted" | "denied" | null;

export default function AnalyticsConsent({
  measurementId,
}: {
  measurementId: string;
}) {
  const [consent, setConsent] = useState<Consent>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    setConsent(stored === "granted" || stored === "denied" ? stored : null);
    setIsReady(true);
  }, []);

  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, nextConsent);
    setConsent(nextConsent);
  }

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="lorem-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true,allow_google_signals:false});`}
          </Script>
        </>
      ) : null}

      {isReady && consent === null ? (
        <aside
          className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.2)]"
          aria-label="Tùy chọn dữ liệu phân tích"
        >
          <p className="text-sm font-bold text-[#0a1b33]">Dữ liệu phân tích tùy chọn</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            LOREM chỉ bật Google Analytics khi bạn đồng ý. Không gửi nội dung tin nhắn hoặc thông tin liên hệ.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 rounded-full bg-[#0a152d] px-4 text-xs font-bold text-white"
            >
              Đồng ý analytics
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 rounded-full border border-slate-200 px-4 text-xs font-bold text-[#0a1b33]"
            >
              Chỉ dùng thiết yếu
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
