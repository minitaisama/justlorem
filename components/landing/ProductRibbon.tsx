"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import { productVisuals } from "@/lib/site";
import { cn } from "@/lib/utils";

const ribbonCardClass =
  "group flex h-24 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-[1.5rem] px-2 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 focus-visible:-translate-y-1 md:h-28 md:w-36";

export default function ProductRibbon() {
  const cards = [...productVisuals, ...productVisuals];
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const didDrag = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) {
      return;
    }

    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    dragStartX.current = event.clientX;
    dragStartScroll.current = viewport.scrollLeft;
    didDrag.current = false;
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const delta = event.clientX - dragStartX.current;
    if (Math.abs(delta) > 4) {
      didDrag.current = true;
    }

    viewport.scrollLeft = dragStartScroll.current - delta;
  }

  function stopDragging(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  }

  function handleCardClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!didDrag.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    didDrag.current = false;
  }

  return (
    <section className="bg-[#f9fafb] px-4 pb-8 md:px-8 md:pb-10">
      <div
        ref={viewportRef}
        className={cn(
          "mx-auto w-full max-w-[1400px] product-ribbon-mask",
          isDragging && "is-dragging",
        )}
        aria-label="Kéo để xem thêm sản phẩm bản quyền"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        <div className="product-ribbon-track flex w-max gap-3 pr-3 md:gap-5 md:pr-5">
          {cards.map((item, index) => (
            <TrackedLink
              key={`${item.name}-${index}`}
              href={item.href}
              eventName="product_select"
              eventParameters={{
                source: "product_ribbon",
                product_name: item.name,
                product_slug: item.href.startsWith("/san-pham/")
                  ? item.href.split("/").at(-1)
                  : undefined,
              }}
              draggable={false}
              onClick={handleCardClick}
              className={ribbonCardClass}
              aria-label={`Xem ${item.name}: ${item.note}`}
              title={item.name}
            >
              <Image
                src={item.image}
                alt=""
                width={96}
                height={96}
                draggable={false}
                className={cn(
                  item.imageClass,
                  "object-contain drop-shadow-[0_12px_18px_rgba(37,99,235,0.12)] transition-transform duration-300 group-hover:scale-110 md:h-[72px] md:w-[72px]",
                )}
              />
              <span className="flex min-h-8 max-w-28 items-center justify-center text-balance text-[11px] font-semibold leading-tight text-[#24466f] transition-colors group-hover:text-[#061936] md:max-w-32 md:text-[13px]">
                {item.name}
              </span>
            </TrackedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
