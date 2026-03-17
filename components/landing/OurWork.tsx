"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HyperLaunch",
    category: "UX / UI Design",
    image: "/projects/hyperlaunch.png",
    href: "https://hyperlaunch.xyz/",
  },
  {
    id: 2,
    title: "Bumpies",
    category: "Game Development",
    image: "/projects/bumpie.png",
    href: "https://www.bumpies.gg/",
  },
  {
    id: 3,
    title: "Card Masters",
    category: "Website Design & Development",
    image: "/projects/cardmasters.png",
    href: "https://cardmasters.io/",
  },
  {
    id: 4,
    title: "Ton Farm",
    category: "Website Design & Development",
    image: "/projects/tonfarm.png",
    href: "https://tonfarm.co/",
  },
  {
    id: 5,
    title: "Sugar Senpai",
    category: "Game Development",
    image: "/projects/sugarsenpai.png",
    href: "https://sugarsenpai.com/",
  },
  {
    id: 6,
    title: "XayKenhTikTok",
    category: "Solution Architecture",
    image: "/projects/xaykenhtiktok.png",
    href: "https://xaykenhtiktok.com/",
  },
];

export default function OurWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative left-1/2 -translate-x-1/2 w-screen py-16 md:py-32 bg-[#0a0f1a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,95,179,0.18),transparent_55%)] opacity-70" />
      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
              <span className="gradient-text">OUR WORK</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md italic"
          >
            "Our projects aren't just cool, they are freezing-cold"
          </motion.p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[260px]">
          {projects.map((project) => {
            return (
              <motion.a
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Inner Card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-transparent">
                  <div className="absolute inset-0 p-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Image Overlay (hover darken) */}
                  <div className="absolute inset-0 bg-[#030712]/15 transition-opacity duration-300 group-hover:bg-[#030712]/55" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-black/50 rounded-full text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.category}
                      </span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                        scale: hoveredId === project.id ? 1 : 0,
                      }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                    >
                      <ExternalLink size={18} className="text-black" />
                    </motion.div>
                  </div>

                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.h3 className="font-display text-white text-lg">
                      {project.title}
                    </motion.h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredId === project.id ? "50%" : 0,
                      }}
                      className="h-0.5 bg-white mt-2"
                    />
                  </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === project.id ? 0.2 : 0,
                  }}
                  className="absolute inset-0 bg-black"
                />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
