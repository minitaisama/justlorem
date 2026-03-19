"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Our Work", href: "#work" },
  { name: "Our Service", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#footer" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-[#030712]/95 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-md md:py-4"
    >
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-8 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 cursor-default">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/logo-v2.png"
              alt="Lorem Logo"
              width={190}
              height={64}
              className="h-12 w-auto object-contain lg:h-20"
              priority
            />
          </motion.div>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleSmoothScroll(event, link.href)}
              className="relative whitespace-nowrap text-sm font-display tracking-[0.25em] text-slate-200 uppercase transition-colors duration-300 hover:text-[#2F5FB3] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#2F5FB3] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 justify-end lg:flex">
          <Link
            href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 text-sm font-display tracking-[0.25em] text-white uppercase transition-colors duration-300 hover:border-[#2F5FB3] hover:bg-[#2F5FB3] hover:text-white whitespace-nowrap"
            target="_blank"
            rel="noreferrer"
          >
            Book a Call
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-3 text-white transition-colors hover:bg-white/5 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu backdrop"
            className="fixed inset-0 top-[88px] z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[88px] z-50 mx-4 mt-3 rounded-2xl border border-white/10 bg-[#0a0f1a]/95 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleSmoothScroll(event, link.href)}
                  className="rounded-xl px-4 py-3 text-sm font-display tracking-[0.25em] text-slate-200 uppercase transition-colors duration-300 hover:bg-white/5 hover:text-[#2F5FB3]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#2F5FB3] px-5 py-3 text-sm font-display tracking-[0.25em] text-white uppercase transition-colors duration-300 hover:bg-[#3d6ccc]"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
}
