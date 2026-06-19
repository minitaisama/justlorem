"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { aiPositioning, navLinks, site } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src={site.logo}
            alt="Lorem Technology logo"
            width={190}
            height={64}
            className="h-11 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-display uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.masothueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:border-white/40 hover:text-white"
          >
            MST {site.taxId}
          </Link>
          <Link
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-display uppercase tracking-[0.2em] text-[#030712] transition hover:bg-[#9fc2ff]"
          >
            {aiPositioning.primaryCta} <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close navigation backdrop"
            className="fixed inset-0 top-20 z-40 bg-black/70"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-4 top-24 z-50 rounded-2xl border border-white/10 bg-[#0a0f1a] p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-display uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={site.masothueUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#c9dcff]"
              >
                Legal tax reference: {site.taxId}
              </Link>
              <Link
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-display uppercase tracking-[0.18em] text-[#030712]"
              >
                {aiPositioning.primaryCta} <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
