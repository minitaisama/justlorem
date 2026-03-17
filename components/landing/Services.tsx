"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Code, Megaphone, BarChart, Gamepad2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "brand",
    title: "Website Design & Development",
    description:
      "From enterprise-scale applications to innovative MVPs, we architect and develop fully functional solutions that transform your vision into reality.",
    icon: Code,
    color: "#2F5FB3",
  },
  {
    id: "visual",
    title: "UX/UI Design",
    description:
      "Delivering over 20+ modern interfaces that breathe life into brands—each design crafted with its own unique personality and purpose-driven experience",
    icon: Palette,
    color: "#60a5fa",
  },
  {
    id: "uiux",
    title: "Game Development",
    description:
      "From concept to launch, we design and build engaging games with smooth performance, scalable systems, and immersive user experiences.",
    icon: Gamepad2,
    color: "#3b82f6",
  },
  {
    id: "content",
    title: "Solution Architecture",
    description:
      "We design scalable, efficient system architectures that ensure your product is reliable, flexible, and ready to grow.",
    icon: BarChart,
    color: "#1d4ed8",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(
    services[1].id
  );

  return (
    <section
      id="services"
      className="relative left-1/2 -translate-x-1/2 w-screen py-16 md:pt-40 md:pb-20 bg-[#0a0f1a]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
              <span className="gradient-text">OUR SERVICES</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              We design and build digital products that are clear, scalable, and made to perform.
            </p>
          </motion.div>

          {/* Right Side - Services Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group cursor-pointer border-b border-white/10 pb-4 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() =>
                    setActiveService((prev) =>
                      prev === service.id ? null : service.id
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive ? "bg-[#2F5FB3]" : "bg-white/5"
                        }`}
                      >
                        <Icon
                          size={24}
                          className={isActive ? "text-white" : "text-white/60"}
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold uppercase">
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 0 : -45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight
                        size={20}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-[#2F5FB3]" : "text-white/40"
                        }`}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm mt-4 pl-16 max-w-md leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
