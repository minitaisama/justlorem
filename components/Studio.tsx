"use client";

import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { studioCopy, type DomainItem, type FaqItem, type Locale, type ProjectText, type StudioCopy } from "@/lib/studio-copy";

const reducedMotionMedia = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(reducedMotionMedia);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(reducedMotionMedia).matches;
const getServerReducedMotion = () => false;
// The server snapshot stays identical during hydration, then follows the live preference.
function useReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);
}

const navigationHrefs = ["#home", "#domain", "#services", "#work", "#faq", "#contact"];

const projects = [
  {
    title: "DDC HOLDINGS",
    href: "https://www.ddcholdings.co/",
    image: "/work/ddc-holdings.jpg",
    theme: "ddc",
    width: 1200,
    height: 631,
  },
  {
    title: "XÂY KÊNH TIKTOK",
    href: "https://xaykenhtiktok.com/",
    image: "/work/xay-kenh-tiktok.jpg",
    theme: "tiktok",
    width: 1200,
    height: 630,
  },
  {
    title: "VIỆT LICENSE",
    href: "https://vietlicense.org/",
    image: "/work/viet-license.jpg",
    theme: "viet-license",
    width: 1200,
    height: 630,
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TextMask({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  return (
    <span className="text-mask" ref={ref}>
      <motion.span
        className="text-mask-inner"
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: visible || reduceMotion ? "0%" : "110%" }}
        transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      >{children}</motion.span>
    </span>
  );
}

function SectionHeading({
  first,
  second,
  description,
  eyebrowLeft,
  eyebrowRight,
}: {
  first: string;
  second?: string;
  description: string;
  eyebrowLeft: string;
  eyebrowRight: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-top">
        <h2 className="section-title">
          <TextMask>{first}</TextMask>
          {second ? <TextMask delay={0.1}>{second}</TextMask> : null}
        </h2>
        <Reveal className="section-heading-description" delay={0.22}>
          <p>{description}</p>
        </Reveal>
      </div>
      <div className="section-heading-foot">
        <span>{eyebrowLeft}</span>
        <span>{eyebrowRight}</span>
      </div>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduceMotion) {
      setNumber(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setNumber(Math.round(latest)),
    });
    return () => controls.stop();
  }, [visible, value, reduceMotion]);

  return <span ref={ref}>{String(number).padStart(2, "0")}</span>;
}

function Accordion({
  items,
  defaultOpen = -1,
  variant,
}: {
  items: DomainItem[] | FaqItem[];
  defaultOpen?: number;
  variant: "domain" | "faq";
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduceMotion = useReducedMotion();

  return (
    <div className={`accordion accordion-${variant}`}>
      {items.map((item, index) => {
        const active = open === index;
        const panelId = `${variant}-panel-${index}`;
        const buttonId = `${variant}-button-${index}`;
        return (
          <div className="accordion-item" key={variant === "domain" ? (item as DomainItem).title : (item as FaqItem).question}>
            <h3>
              <button
                className="accordion-trigger"
                id={buttonId}
                type="button"
                aria-expanded={active}
                aria-controls={panelId}
                onClick={() => setOpen(active ? -1 : index)}
              >
                <span>{variant === "domain" ? (item as DomainItem).title : (item as FaqItem).question}</span>
                <span aria-hidden="true" className={`accordion-symbol ${active ? "is-active" : ""}`}>{active ? "×" : "+"}</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {active ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="accordion-panel"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeInOut" }}
                >
                  {variant === "domain" ? (
                    <div className="domain-answer">
                      {(item as DomainItem).details ? (
                        <ul>
                          {(item as DomainItem).details?.map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                          ))}
                        </ul>
                      ) : <p>{(item as DomainItem).body}</p>}
                    </div>
                  ) : <p className="faq-answer">{(item as FaqItem).answer}</p>}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function Header({ locale, copy, onLocaleChange }: { locale: Locale; copy: StudioCopy; onLocaleChange: (locale: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const recognition = document.querySelector(".recognition")?.getBoundingClientRect();
      const overRecognition = Boolean(recognition && recognition.top <= 65 && recognition.bottom > 16);
      setOverHero(window.scrollY < window.innerHeight * 0.58 || overRecognition);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [...document.querySelectorAll<HTMLElement>("main > section, main > footer")];
    background.forEach((element) => { element.inert = true; });
    const frame = window.requestAnimationFrame(() => {
      overlayRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !overlayRef.current) return;
      const elements = [...overlayRef.current.querySelectorAll<HTMLElement>("a, button")];
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => { element.inert = false; });
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${overHero || open ? "header-on-dark" : ""}`}>
        <a href="#home" aria-label={`LOREM Technology — ${copy.navigation[0]}`} className="brand-mark" onClick={() => setOpen(false)}>
          <Image src="/apple-touch-icon-v2.png" alt="" width={180} height={180} priority />
        </a>
        <div className="header-controls">
          <div className="locale-switch" role="group" aria-label={locale === "vi" ? "Ngôn ngữ" : "Language"}>
            <button type="button" lang="vi" aria-label="Tiếng Việt" aria-pressed={locale === "vi"} onClick={() => onLocaleChange("vi")}>VI</button>
            <span aria-hidden="true">/</span>
            <button type="button" lang="en" aria-label="English" aria-pressed={locale === "en"} onClick={() => onLocaleChange("en")}>EN</button>
          </div>
          <button
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? copy.menu.close : copy.menu.open}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen((value) => !value)}
            ref={triggerRef}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="navigation-overlay"
            id="site-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={copy.menu.dialog}
            ref={overlayRef}
            initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label={copy.menu.main} className="overlay-links">
              {navigationHrefs.map((href, index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <span className="overlay-index">0{index + 1}</span>{copy.navigation[index]}
                </motion.a>
              ))}
            </nav>
            <div className="overlay-bottom">
              <span>{copy.menu.tagline}</span>
              <a href="tel:+84382520281">0382520281</a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function IntroSequence({ copy }: { copy: StudioCopy }) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadingHero, setLoadingHero] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [heroActive, setHeroActive] = useState(true);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start start", "end end"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.68], [1, 0.7]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.68], [1, 0.001]);
  const firstWordY = useTransform(scrollYProgress, [0.67, 0.94], ["0%", "-50%"]);
  const secondWordY = useTransform(scrollYProgress, [0.67, 0.94], ["0%", "-50%"]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setHeroActive((current) => progress < 0.7 ? true : progress > 0.73 ? false : current);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const conservingData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    setSaveData(conservingData);
    video.defaultMuted = true;
    video.muted = true;

    if (reduceMotion || conservingData || document.hidden || (window.location.hash && window.location.hash !== "#home")) {
      video.pause();
      setLoadingHero(false);
      return;
    }

    // The loader represents real playback, not a fixed delay. Never block access indefinitely.
    const timeout = window.setTimeout(() => setLoadingHero(false), 8000);
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA && !video.paused) {
      setVideoPlaying(true);
      setLoadingHero(false);
    } else {
      void video.play().catch(() => setLoadingHero(false));
    }
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || loadingHero) return;
    const syncPlayback = () => {
      if (document.hidden || !heroActive || manualPause || reduceMotion || saveData || videoFailed) {
        video.pause();
      } else {
        void video.play().catch(() => setVideoPlaying(false));
      }
    };
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => document.removeEventListener("visibilitychange", syncPlayback);
  }, [heroActive, loadingHero, manualPause, reduceMotion, saveData, videoFailed]);

  function toggleVideo() {
    if (videoFailed) return;
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setManualPause(false);
      void video.play().catch(() => setVideoPlaying(false));
    } else {
      setManualPause(true);
      video.pause();
    }
  }

  return (
    <section id="home" ref={stageRef} className="intro-sequence" aria-label={copy.hero.label}>
      <AnimatePresence>
        {loadingHero ? <motion.div
          className="site-loader"
          role="status"
          aria-label={copy.loader.label}
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="site-loader-name">LOREM<span>TECHNOLOGY</span></span>
          <span className="site-loader-bottom"><span>{copy.loader.tagline}</span><span>{copy.loader.loading}</span></span>
          <span className="site-loader-track" aria-hidden="true"><span /></span>
        </motion.div> : null}
      </AnimatePresence>
      <noscript><style>{`.site-loader{display:none}`}</style></noscript>
      <div className="intro-sticky">
        <motion.section className="hero" aria-labelledby="hero-title" aria-hidden={!heroActive && !reduceMotion} style={reduceMotion ? undefined : { scale: heroScale, opacity: heroOpacity, visibility: heroActive ? "visible" : "hidden" }}>
        <video
          ref={videoRef}
          className={`hero-video${videoFailed || saveData ? " is-unavailable" : ""}`}
          poster="/videos/lorem-studio-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => { setVideoPlaying(true); setLoadingHero(false); }}
          onPause={() => setVideoPlaying(false)}
          onError={() => { setVideoFailed(true); setLoadingHero(false); }}
          aria-hidden="true"
        >
          <source src="/videos/lorem-reference-hero-mobile.webm" type="video/webm" media="(max-width: 809px)" />
          <source src="/videos/lorem-reference-hero-mobile.mp4" type="video/mp4" media="(max-width: 809px)" />
          <source src="/videos/lorem-reference-hero-desktop.webm" type="video/webm" />
          <source src="/videos/lorem-reference-hero-desktop.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        {!reduceMotion && !saveData && !videoFailed && heroActive ? <button className="video-toggle" type="button" onClick={toggleVideo} aria-label={videoPlaying ? copy.video.pause : copy.video.play}>
          <span aria-hidden="true">{videoPlaying ? "Ⅱ" : "▶"}</span>
        </button> : null}
        <div className="hero-grid">
          <h1 id="hero-title" className="hero-title">
            <TextMask>LOREM</TextMask>
            <TextMask delay={0.12}>TECHNOLOGY</TextMask>
          </h1>
          <div className="hero-caption">
            <p>{copy.hero.caption}</p>
          </div>
          <div className="hero-expertise">
            <ul>{copy.hero.expertise.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="hero-summary">
            <p>{copy.hero.summary}</p>
          </div>
        </div>
        </motion.section>
        <section className="manifesto" aria-label={copy.manifesto.label}>
          <h2 className="sr-only">{copy.manifesto.heading}</h2>
          <div className="manifesto-corners" aria-hidden="true">
            {copy.manifesto.corners.map((corner) => <span key={corner}>{corner}</span>)}
          </div>
          <div className="manifesto-words" aria-hidden="true">
            {copy.manifesto.words.map((pair, index) => (
              <div className="manifesto-pair" key={pair[0]}>
                <div className="manifesto-reel">
                  <motion.div style={reduceMotion ? undefined : { y: index === 0 ? firstWordY : secondWordY }}>
                    <span>{pair[0]}</span><span>{pair[1]}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function ProjectRow({ project, text, work, index, locale }: { project: (typeof projects)[number]; text: ProjectText; work: StudioCopy["work"]; index: number; locale: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <article ref={ref} className={`project project-${index + 1}`}>
      <motion.div
        className={`project-image project-image--${project.theme}`}
        initial={reduceMotion ? false : { clipPath: "inset(10% 0 10% 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="project-media" style={reduceMotion ? undefined : { scale, y }}>
          <Image
            src={project.image}
            alt={text.imageAlt}
            width={project.width}
            height={project.height}
            sizes="(max-width: 809px) 100vw, 50vw"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
      <Reveal className="project-copy">
        <span className="project-category">{text.category}</span>
        <h3>{project.title}</h3>
        <p>{text.description}</p>
        <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={locale === "vi" ? `Mở website ${project.title} (${work.newTab})` : `Visit ${project.title} website (${work.newTab})`}>
          {work.visit} <span aria-hidden="true">↗</span>
        </a>
      </Reveal>
    </article>
  );
}

export default function Studio() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = studioCopy[locale];
  const reduceMotion = useReducedMotion();
  const recognitionRef = useRef<HTMLElement>(null);
  const recognitionNearby = useInView(recognitionRef, { once: true, margin: "250px" });

  useEffect(() => {
    const syncLocale = () => {
      const requested = new URLSearchParams(window.location.search).get("lang");
      if (requested === "vi" || requested === "en") {
        setLocale(requested);
        return;
      }
      try {
        setLocale(window.localStorage.getItem("lorem-locale") === "vi" ? "vi" : "en");
      } catch {
        setLocale("en");
      }
    };
    syncLocale();
    window.addEventListener("popstate", syncLocale);
    return () => window.removeEventListener("popstate", syncLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    const syncMetadata = () => {
      if (document.title !== copy.pageTitle) document.title = copy.pageTitle;
      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (description && description.content !== copy.pageDescription) description.content = copy.pageDescription;
    };
    syncMetadata();
    // Next can restore the build-time title after client hydration; keep the chosen locale in sync.
    const observer = new MutationObserver(syncMetadata);
    observer.observe(document.head, { childList: true, characterData: true, attributes: true, attributeFilter: ["content"], subtree: true });
    return () => observer.disconnect();
  }, [locale, copy.pageTitle, copy.pageDescription]);

  function changeLocale(next: Locale) {
    if (next === locale) return;
    setLocale(next);
    try { window.localStorage.setItem("lorem-locale", next); } catch { /* Private browsing can disable storage. */ }
    const url = new URL(window.location.href);
    if (next === "vi") url.searchParams.set("lang", "vi");
    else url.searchParams.delete("lang");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }

  return (
    <main className={`locale-${locale}`}>
      <Header locale={locale} copy={copy} onLocaleChange={changeLocale} />
      <IntroSequence copy={copy} />

      <section id="domain" className="domain section-pad">
        <SectionHeading
          {...copy.domain}
        />
        <div className="domain-grid">
          <span className="side-note">{copy.domain.sideNote}</span>
          <Accordion items={copy.domain.items} defaultOpen={0} variant="domain" />
        </div>
      </section>

      <section ref={recognitionRef} className="recognition" aria-label={copy.recognition.label}>
        <h2 className="sr-only">{copy.recognition.label}</h2>
        {recognitionNearby ? <Image className="recognition-background" src="/images/recognition-bg.jpg" alt="" width={1054} height={1400} sizes="100vw" loading="lazy" /> : null}
        <div className="recognition-sticky"><div className="recognition-card">
          <p>{copy.recognition.copy}</p>
          <div className="recognition-stats">
            <div><strong><Counter value={14} /></strong><span>{copy.recognition.stats[0]}</span></div>
            <div><strong><Counter value={5} /></strong><span>{copy.recognition.stats[1]}</span></div>
            <div><strong><Counter value={18} /></strong><span>{copy.recognition.stats[2]}</span></div>
          </div>
        </div></div>
      </section>

      <section id="services" className="services section-pad">
        <SectionHeading
          {...copy.services}
        />
        <div className="service-list">
          {copy.services.items.map((service, index) => (
            <Reveal key={service} className="service-row" delay={index * 0.07}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service}</h3>
              <span aria-hidden="true" className="service-arrow">↗</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="work section-pad">
        <SectionHeading
          {...copy.work}
        />
        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectRow project={project} text={copy.work.projects[index]} work={copy.work} index={index} locale={locale} key={project.title} />
          ))}
        </div>
      </section>

      <section id="faq" className="faq section-pad">
        <SectionHeading
          {...copy.faq}
        />
        <div className="faq-grid">
          <div className="faq-prompt">
            <Reveal><h3>{copy.faq.promptFirst}<br />{copy.faq.promptSecond}</h3></Reveal>
            <a className="text-link" href="#contact">{copy.faq.contact} <span aria-hidden="true">◉</span></a>
          </div>
          <Accordion items={copy.faq.items} variant="faq" />
        </div>
      </section>

      <footer id="contact" className="closing section-pad">
        <h2 className="sr-only">{copy.footer.accessibleHeading}</h2>
        <div className="closing-title" aria-hidden="true">
          <div className="closing-first">
            <TextMask>{copy.footer.first}</TextMask>
            <motion.div className="closing-image flower" initial={reduceMotion ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 130, damping: 18, delay: 0.1 }}>
              <Image src="/images/flower.webp" alt="" width={819} height={1024} sizes="(max-width: 809px) 52px, 142px" loading="lazy" />
            </motion.div>
          </div>
          <div className="closing-second">
            <motion.div className="closing-image clouds" initial={reduceMotion ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 130, damping: 18 }}>
              <Image src="/images/clouds.webp" alt="" width={584} height={1024} sizes="(max-width: 809px) 52px, 142px" loading="lazy" />
            </motion.div>
            <TextMask delay={0.08}>{copy.footer.second}</TextMask>
          </div>
          <span className="closing-script">{copy.footer.script}</span>
        </div>
        <p className="closing-copy">{copy.footer.copy}</p>
        <div className="closing-actions">
          <a className="text-link" href="https://zalo.me/0382520281" target="_blank" rel="noopener noreferrer">{copy.footer.contact} <span aria-hidden="true">◉</span></a>
          <a className="phone-link" href="tel:+84382520281">0382520281</a>
        </div>
        <div className="closing-bottom"><span>© {new Date().getFullYear()} LOREM Technology</span><a href="#home">{copy.footer.backToTop}</a></div>
      </footer>
    </main>
  );
}
