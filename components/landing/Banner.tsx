"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Number Of Projects" },
  { value: "35+", label: "Number Of Partners" },
  { value: "9", label: "Backed By" },
];

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const seed1 = ((i * 7919) % 10000) / 100;
    const seed2 = ((i * 104729) % 10000) / 100;
    const seed3 = (((i * 1299709) % 7000) / 10000) + 0.3;

    stars.push({
      left: seed1,
      top: seed2,
      opacity: Math.min(seed3, 1),
    });
  }
  return stars;
};

const STARS = generateStars(20);
const MOBILE_STARS = STARS.slice(0, 8);
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
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 120 : 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const starsToRender = shouldReduceMotion ? MOBILE_STARS : STARS;

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, WORD_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion]);

  const handleScrollToWork = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector("#work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#030712]">
      <div className="absolute inset-0">
        {starsToRender.map((star, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
            }}
            animate={shouldReduceMotion ? undefined : { opacity: [star.opacity * 0.75, star.opacity] }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-[1400px] flex-col gap-10 px-6 pb-24 pt-8 md:pb-32"
      >
        <div className="relative my-4 md:my-6">
          <div className="mt-12 text-center md:mt-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm uppercase leading-5 tracking-[0.3em] text-muted-foreground sm:text-[18px] sm:leading-[22px]"
            >
              Get your own custom digital solution right now !
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 min-h-[1.1em] text-5xl font-display tracking-tight sm:text-6xl md:text-9xl lg:text-[10rem]"
            >
              <motion.span
                key={HERO_WORDS[wordIndex]}
                variants={wordVariants}
                initial="initial"
                animate={shouldReduceMotion ? undefined : "animate"}
                className="gradient-text inline-block w-[8ch] text-center will-change-transform"
              >
                {HERO_WORDS[wordIndex].split("").map((letter, idx) => (
                  <motion.span
                    key={`${letter}-${idx}`}
                    variants={letterVariants}
                    className="inline-block"
                    animate={shouldReduceMotion ? { y: 0, opacity: 1 } : undefined}
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
              className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground"
            >
              We help brands grow through thoughtful strategy, strong design, and
              meaningful digital experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative my-6 hidden justify-center md:my-8 md:flex"
          >
            <div className="relative h-[150px] w-[300px]">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-[50%] border border-[#2F5FB3]/30"
                  style={{
                    transform: `rotateX(70deg) rotateZ(${i * 15}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotateZ: [i * 15, i * 15 + 360],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 20 + i * 5,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                />
              ))}
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F5FB3] blur-sm" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="w-full lg:w-auto"
          >
            <p className="text-[18px] leading-[22px] text-white/80">
              Get your own custom digital solution right now !
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="#work"
                onClick={handleScrollToWork}
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm text-white transition-colors duration-300 hover:border-[#2F5FB3] hover:text-[#2F5FB3]"
              >
                See Our Works
              </Link>
              <Link
                href="https://calendar.app.google/AC9XWNQLaUhp3yMq9"
                className="rounded-full bg-white px-6 py-3 text-center text-sm text-black transition-all duration-300 hover:bg-[#2F5FB3] hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Call
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-6 lg:flex-nowrap lg:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-left"
              >
                <span className="text-4xl font-display text-[#2F5FB3] md:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground md:text-base">
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
        className="absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown className="animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}
