"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Our Work", href: "#work" },
  { name: "Our Service", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      className="sticky top-0 z-50 w-full bg-[#030712] py-4"
    >
      <nav className="flex items-center justify-between gap-8 max-w-[1400px] mx-auto w-full px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/logo.png"
              alt="Lorem Logo"
              width={190}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Center Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleSmoothScroll(event, link.href)}
              className="text-sm font-display uppercase tracking-[0.25em] text-slate-200 hover:text-[#2F5FB3] transition-colors duration-300 whitespace-nowrap relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#2F5FB3] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex justify-end shrink-0">
          <Link
            href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
            className="text-sm font-display uppercase tracking-[0.25em] text-white border border-white/60 rounded-full px-5 py-2 hover:text-white hover:bg-[#2F5FB3] hover:border-[#2F5FB3] transition-colors duration-300 whitespace-nowrap inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            Book a Call
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto p-2 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden mt-4 pt-4 border-t border-white/10"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleSmoothScroll(event, link.href)}
                className="text-sm font-display uppercase tracking-[0.25em] text-slate-200 hover:text-[#2F5FB3] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#2F5FB3] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
              className="text-sm font-display uppercase tracking-[0.25em] text-white hover:text-[#2F5FB3] transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
