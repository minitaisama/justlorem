"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Users,
  Layers,
  Sparkles,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "STRATEGY BEFORE AESTHETICS",
    description: "Every element is designed with intention ensuring.",
  },
  {
    icon: Target,
    title: "PIXEL-PERFECT EXECUTION",
    description: "Every element is designed with intention ensuring.",
  },
  {
    icon: Users,
    title: "TRUE COLLABORATION",
    description: "Every element is designed with intention ensuring.",
  },
  {
    icon: Layers,
    title: "PIXEL-PERFECT EXECUTION",
    description: "Every element is designed with intention ensuring.",
  },
  {
    icon: Sparkles,
    title: "TRUE COLLABORATION",
    description: "Every element is designed with intention ensuring.",
  },
  {
    icon: Shield,
    title: "STRATEGY AESTHETICS",
    description: "Every element is designed with intention ensuring.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-32 bg-[#030712]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2F5FB3]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-display">
              <span className="gradient-text">WHY WORK</span>
              <br />
              <span className="text-white">WITH US</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md text-right"
          >
            We believe the best creative work starts
            with deep understanding.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-8 glass rounded-2xl hover:bg-[#2F5FB3]/10 transition-all duration-500"
              >
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F5FB3] to-[#60a5fa] flex items-center justify-center"
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-display mb-3 group-hover:text-[#60a5fa] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
