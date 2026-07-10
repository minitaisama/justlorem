"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import CallCta from "@/components/CallCta";
import QuoteCta from "@/components/QuoteCta";
import TrackedLink from "@/components/TrackedLink";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const menuLinks = navLinks.filter((link) => link.href !== "/brand-assets");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300",
        isScrolled
          ? "border-slate-300/80 bg-[#f9fafb]/96 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.55)]"
          : "border-slate-200/70 bg-[#f9fafb]/88",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="LOREM Technology homepage"
        >
          <Image
            src={site.logo}
            alt="LOREM Technology logo"
            width={500}
            height={500}
            className="h-14 w-14 object-contain md:h-16 md:w-16"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <CallCta
            location="header_desktop"
            label="Gọi hotline"
            className="border border-slate-200 bg-white text-[#0a1b33] hover:border-slate-300"
          />
          <QuoteCta
            location="header_desktop"
            label="Báo giá Zalo"
            className="bg-[#0a152d] text-white shadow-[0_16px_36px_rgba(10,21,45,0.18)] hover:bg-[#13264c]"
          />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <CallCta
            location="header_mobile"
            label="Gọi"
            compact
            className="border border-slate-200 bg-white text-[#0a1b33]"
          />
          <QuoteCta
            location="header_mobile"
            label="Zalo"
            compact
            className="bg-[#0a152d] text-white"
          />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#14213d]"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="xl:hidden">
          <button
            type="button"
            aria-label="Đóng lớp nền menu"
            className="fixed inset-0 top-20 z-40 bg-[#14213d]/28"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-4 top-24 z-50 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(20,33,61,0.18)]">
            <div className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-bold text-[#14213d] transition hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <TrackedLink
                href={site.masothueUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="legal_reference_click"
                eventParameters={{ source: "mobile_menu" }}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500"
              >
                Masothue: MST {site.taxId}
              </TrackedLink>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <CallCta
                  location="mobile_menu"
                  label="Gọi hotline"
                  className="w-full border border-slate-200 bg-white text-[#0a1b33]"
                />
                <QuoteCta
                  location="mobile_menu"
                  label="Báo giá Zalo"
                  className="w-full bg-[#0a152d] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
