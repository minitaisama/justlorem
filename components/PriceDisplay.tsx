"use client";

import { useEffect, useState } from "react";
import { isPriceCurrent } from "@/lib/catalog";

type PriceDisplayProps = {
  priceCheckedAt: string;
  initialCurrent: boolean;
  currentLabel: string;
  staleLabel?: string;
  className?: string;
};

export default function PriceDisplay({
  priceCheckedAt,
  initialCurrent,
  currentLabel,
  staleLabel = "Liên hệ nhận giá mới",
  className,
}: PriceDisplayProps) {
  const [isCurrent, setIsCurrent] = useState(initialCurrent);

  useEffect(() => {
    setIsCurrent(isPriceCurrent(priceCheckedAt));
  }, [priceCheckedAt]);

  return <span className={className}>{isCurrent ? currentLabel : staleLabel}</span>;
}
