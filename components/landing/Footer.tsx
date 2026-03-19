"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
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
    }
  };

  return (
    <footer
      id="footer"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
    >
      {/* Top Black CTA */}
      <div className="bg-[#030712] text-white">
        <div className="max-w-[1400px] mx-auto w-full px-6 pt-12 pb-6 md:pt-20 md:pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 text-center">
            Get your own custom digital solution right now !
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 text-center font-display leading-none text-[16vw] md:text-[12vw] lg:text-[10vw]"
          >
            <span className="gradient-text">CONTACT US</span>
          </motion.h2>
        </div>
      </div>

      {/* Bottom Light Bar */}
      <div className="bg-[#0a0f1a] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-6 py-10 md:py-14 relative z-10">
          <div className="grid lg:grid-cols-3 gap-10 items-end">
            <div className="relative min-h-[220px] flex flex-col gap-6 lg:col-span-1">
              <motion.a
                href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2F5FB3] px-8 py-3 font-semibold text-sm uppercase tracking-[0.2em] text-white"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Call
                <ArrowUpRight size={16} />
              </motion.a>
              <div className="relative h-12">
                <svg
                  className="absolute left-20 top-2 h-16 w-24 -rotate-85 text-[#2F5FB3]"
                  viewBox="0 0 120 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 8 C 40 8, 55 28, 46 44 C 38 58, 18 58, 18 42 C 18 28, 38 26, 54 36 C 76 50, 90 62, 108 72"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M104 62 L112 74 L96 74"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <div className="relative inline-block overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Lorem Logo"
                    width={280}
                    height={96}
                    className="h-28 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center lg:justify-center self-end">
              <div className="flex flex-row items-center gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/data-deletion"
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Data Deletion
                </Link>
              </div>
            </div>

            <div className="space-y-6 text-right lg:col-span-1">
              <p className="text-sm text-white/80 leading-relaxed">
                <span
                  style={{
                    background: "linear-gradient(135deg, #fff 0%, #2f5fb3 50%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  LOREM Technology
                </span>{" "}— Design. Develop. Deliver.
                <br />
                <em>We turn ideas into high-performing digital products.</em>
              </p>
              <div className="flex flex-col items-end gap-2 font-semibold">
                <Link
                  href="#work"
                  onClick={(event) => handleSmoothScroll(event, "#work")}
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Work
                </Link>
                <Link
                  href="#services"
                  onClick={(event) => handleSmoothScroll(event, "#services")}
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Services
                </Link>
                <Link
                  href="#faq"
                  onClick={(event) => handleSmoothScroll(event, "#faq")}
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  FAQs
                </Link>
                <Link
                  href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
                  className="transition-colors hover:text-[#2F5FB3]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Call
                </Link>
              </div>
              <div className="flex gap-4 justify-end text-sm">
                <Link
                  href="mailto:taind2512@gmail.com"
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Email
                </Link>
                <Link href="tel:0931138999" className="transition-colors hover:text-[#2F5FB3]">
                  Phone
                </Link>
                <Link
                  href="https://maps.app.goo.gl/xMb8egHrPFntwvcR8"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#2F5FB3]"
                >
                  Address
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
