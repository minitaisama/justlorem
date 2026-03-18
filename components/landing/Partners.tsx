"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Avocadodao", href: "https://www.avocadodao.io/", logo: "/partners/avocado-logo.png" },
  { name: "SEI", href: "https://www.sei.io/", logo: "/partners/sei-logo.png" },
  { name: "B3", href: "https://www.b3.fun/", logo: "/partners/b3-logo.png" },
  { name: "Iota", href: "https://www.iota.org/", logo: "/partners/iota-logo.png" },
  { name: "DDC Holdings", href: "https://hyperlaunch.xyz/", logo: "/partners/ddc-logo.png" },
];

export default function Partners() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen py-12 md:py-20 bg-[#030712] overflow-hidden">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,200,255,0.9),transparent)] animate-line-sweep-rtl" />

      <div className="w-full px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            In Collaboration With
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 glass rounded-xl border border-transparent hover:border-white/80 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`h-9 md:h-11 w-auto opacity-85 hover:opacity-100 transition-all duration-300 ${
                  partner.name === "B3"
                    ? ""
                    : "[filter:brightness(0)_invert(1)] hover:[filter:brightness(0)_invert(1)]"
                }`}
                loading="lazy"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Gradient Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,200,255,0.9),transparent)] animate-line-sweep-rtl"
        style={{ animationDelay: "0.6s" }}
      />
    </section>
  );
}
