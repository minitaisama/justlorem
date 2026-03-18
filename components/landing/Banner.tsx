"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Number Of Projects" },
  { value: "35+", label: "Number Of Partners" },
  { value: "9", label: "Backed By" },
];

// Pre-generated deterministic star positions to avoid hydration mismatch
const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    // Use deterministic pseudo-random based on index
    const seed1 = ((i * 7919) % 10000) / 100;
    const seed2 = ((i * 104729) % 10000) / 100;
    const seed3 = (((i * 1299709) % 7000) / 10000) + 0.3;
    const seed4 = ((i * 15485863) % 3000) / 1000 + 2;
    const seed5 = ((i * 32452843) % 2000) / 1000;

    stars.push({
      left: seed1,
      top: seed2,
      opacity: Math.min(seed3, 1),
      duration: seed4,
      delay: seed5,
    });
  }
  return stars;
};

const HERO_WORDS = ["DESIGN", "DEVELOP", "DELIVER"];
const WORD_INTERVAL_MS = 2500;
const wordVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.04 } },
};
const letterVariants = {
  initial: { y: -28, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Banner() {
  const ref = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isLowPower, setIsLowPower] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, isLowPower ? 0 : 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, isLowPower ? 1 : 0]);
  const stars = useMemo(
    () => generateStars(isLowPower ? 60 : 100),
    [isLowPower]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, WORD_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsLowPower(reduceMotion.matches || smallScreen.matches);
    update();
    reduceMotion.addEventListener?.("change", update);
    smallScreen.addEventListener?.("change", update);
    return () => {
      reduceMotion.removeEventListener?.("change", update);
      smallScreen.removeEventListener?.("change", update);
    };
  }, []);


  return (
    <section
      ref={ref}
      className="relative left-1/2 -translate-x-1/2 w-screen min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star-dot absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pb-32 min-h-[78vh] flex flex-col gap-10"
      >
        <div className="relative top-6 my-6">
          {/* Hero Text */}
          <div className="text-center mt-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-[18px] leading-[22px] tracking-[0.3em] uppercase mb-4"
            >
              Get your own custom digital solution right now !
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-7xl md:text-9xl lg:text-[10rem] font-display tracking-tight mb-8 min-h-[1.1em]"
            >
              <motion.span
                key={HERO_WORDS[wordIndex]}
                variants={wordVariants}
                initial="initial"
                animate="animate"
                className="gradient-text inline-block w-[8ch] text-center will-change-transform"
              >
                {HERO_WORDS[wordIndex].split("").map((letter, idx) => (
                  <motion.span
                    key={`${letter}-${idx}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed"
            >
              We help brands grow through thoughtful strategy,
              strong design, and meaningful digital experiences.
            </motion.p>
          </div>

          {/* 3D Orbital Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative flex justify-center my-8"
          >
            <div className="relative w-[300px] h-[150px]">
              {/* Orbital Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-[#2F5FB3]/30 rounded-[50%]"
                  style={{
                    transform: `rotateX(70deg) rotateZ(${i * 15}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  animate={
                    isLowPower
                      ? { rotateZ: i * 15 }
                      : { rotateZ: [i * 15, i * 15 + 360] }
                  }
                  transition={
                    isLowPower
                      ? { duration: 0 }
                      : { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                  }
                />
              ))}
              {/* Center Glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2F5FB3] rounded-full blur-sm" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 -mt-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-[18px] leading-[22px] text-white/80">
              Get your own custom digital solution right now !
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="#work"
                onClick={handleScrollToWork}
                className="px-6 py-3 border border-white/20 rounded-full text-sm text-white hover:text-[#2F5FB3] hover:border-[#2F5FB3] transition-colors duration-300"
              >
                See Our Works
              </Link>
              <Link
                href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
                className="px-6 py-3 bg-white text-black rounded-full text-sm hover:bg-[#2F5FB3] hover:text-white transition-all duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Call
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-left"
              >
                <span className="text-4xl md:text-5xl font-display text-[#2F5FB3]">
                  {stat.value}
                </span>
                <p className="text-xs text-muted-foreground mt-2 whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-20 z-20"
      >
        <ArrowDown className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
  const handleScrollToWork = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector("#work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
