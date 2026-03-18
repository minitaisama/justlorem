"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Lorem offer?",
    answer:
      "We provide end-to-end digital product design and development services, including UI/UX design, web and mobile app development, branding, and product strategy.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on project size and complexity. On average, smaller projects take 4–6 weeks, while larger, more complex builds can take several months. We’ll provide a detailed timeline after the initial discovery phase.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes. Every project we deliver is tailored to your specific business goals, user needs, and technical requirements—no off-the-shelf templates.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We collaborate across a wide range of industries, including fintech, e-commerce, healthcare, education, and technology startups. Our flexible approach allows us to adapt quickly to new fields.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials models, depending on your project scope and needs. After understanding your requirements, we’ll recommend the most cost-effective approach.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#030712] py-16 md:py-32"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F5FB3]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-16 right-8 w-[520px] h-[260px] bg-[#2F5FB3]/10 rounded-full blur-[120px]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Got Questions?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 md:mb-8">
              <span className="gradient-text">FREQUENTLY ASKED</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-4 md:mb-8">
              Have questions about working with us? Here are answers to some
              common inquiries.
            </p>

            {/* Decorative Element */}
            <div className="relative w-48 h-48 hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-[#2F5FB3]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-[#60a5fa]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-[#2F5FB3]/50 rounded-full"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -6, 0], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[#2F5FB3] font-bold text-5xl">?</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_20px_rgba(47,95,179,0.2)] cursor-pointer"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-[#2F5FB3]" : "bg-white/5"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={20} className="text-white" />
                      ) : (
                        <Plus size={20} className="text-white" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
