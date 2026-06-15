export const site = {
  name: "Lorem Technology",
  legalName: "CÔNG TY TNHH CÔNG NGHỆ LOREM",
  internationalName: "LOREM TECHNOLOGY COMPANY LIMITED",
  shortName: "LOREM",
  url: "https://justlorem.com",
  taxId: "0315880407",
  phone: "0931138999",
  email: "taind2512@gmail.com",
  address:
    "196/11/10 Tan Son Nhi, Tan Son Nhi Ward, Tan Phu District, Ho Chi Minh City, Vietnam",
  masothueUrl:
    "https://masothue.com/0315880407-cong-ty-tnhh-cong-nghe-lorem",
  calendarUrl: "https://calendar.app.google/AC9XWNQLaUhp3yMq9",
  mapsUrl: "https://maps.app.goo.gl/xMb8egHrPFntwvcR8",
  logo: "/images/logo-v2.webp",
  ogImage: "/og-image.jpg",
  description:
    "Lorem Technology designs and builds web products, app experiences, games, and scalable software architecture for founders and digital teams.",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Legal", href: "/legal" },
];

export const serviceCategories = [
  {
    slug: "web-design-development",
    title: "Website Design & Development",
    eyebrow: "Web products",
    summary:
      "Conversion-focused websites and web applications designed for launch speed, maintainability, and measurable business outcomes.",
    description:
      "We plan, design, and build marketing sites, dashboards, landing systems, and product interfaces with a clear content model, static performance, and maintainable frontend architecture.",
    outcomes: [
      "Product positioning, site architecture, and conversion flows",
      "Responsive UI implementation with production-ready components",
      "Static-export friendly deployment for fast global delivery",
      "SEO foundations: metadata, internal links, sitemap, and structured content",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UX/UI Design",
    eyebrow: "Product experience",
    summary:
      "Interface systems, product flows, and visual direction for teams that need a polished digital product instead of a generic template.",
    description:
      "We turn product intent into clear screens, interaction states, and a visual system that can be implemented without guesswork.",
    outcomes: [
      "User flows, information architecture, and wireframes",
      "High-fidelity responsive UI for web and app products",
      "Design tokens and reusable component states",
      "Developer-ready handoff with layout, spacing, and accessibility notes",
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    eyebrow: "Interactive systems",
    summary:
      "Playable web and app game experiences with reliable interaction loops, responsive presentation, and launch-ready interfaces.",
    description:
      "We build lightweight game interfaces and interactive products where feel, performance, and a clear gameplay loop matter as much as visuals.",
    outcomes: [
      "Game UI, menus, onboarding, and player-facing states",
      "Interactive prototypes and browser-based gameplay experiences",
      "Performance-aware frontend implementation",
      "Launch pages and community-facing product surfaces",
    ],
  },
  {
    slug: "solution-architecture",
    title: "Solution Architecture",
    eyebrow: "Technical planning",
    summary:
      "Architecture and implementation planning for software products that need to scale beyond a first prototype.",
    description:
      "We map product requirements into practical system boundaries, frontend/backend responsibilities, data flow, and deployment paths.",
    outcomes: [
      "Technical discovery and implementation roadmap",
      "Frontend architecture, integration boundaries, and data modeling",
      "Scalable deployment and maintenance approach",
      "Documentation that helps founders and engineers move in the same direction",
    ],
  },
];

export const projects = [
  {
    slug: "hyperlaunch",
    title: "HyperLaunch",
    category: "UX / UI Design",
    serviceSlug: "ui-ux-design",
    image: "/projects/hyperlaunch.webp",
    href: "https://hyperlaunch.xyz/",
    summary:
      "A launch-focused product interface for a Web3 ecosystem that needed clearer onboarding and stronger visual momentum.",
    problem:
      "The product needed to make a complex launch experience feel fast, credible, and easy to scan for early users.",
    scope: ["Interface direction", "Landing experience", "Product UI system"],
    deliverables: [
      "High-impact landing and product sections",
      "Token/category presentation patterns",
      "Responsive visual system for launch content",
    ],
  },
  {
    slug: "bumpies",
    title: "Bumpies",
    category: "Game Development",
    serviceSlug: "game-development",
    image: "/projects/bumpie.webp",
    href: "https://www.bumpies.gg/",
    summary:
      "A playful game-facing web experience built to communicate character, community, and product energy quickly.",
    problem:
      "The brand needed a web surface that felt game-native while still being simple enough for new visitors to understand.",
    scope: ["Game web UI", "Responsive pages", "Visual polish"],
    deliverables: [
      "Character-forward page composition",
      "Interactive content structure",
      "Launch-ready responsive implementation",
    ],
  },
  {
    slug: "card-masters",
    title: "Card Masters",
    category: "Website Design & Development",
    serviceSlug: "web-design-development",
    image: "/projects/cardmasters.webp",
    href: "https://cardmasters.io/",
    summary:
      "A product website for a card-game experience where clarity, atmosphere, and conversion needed to work together.",
    problem:
      "The site had to show the game world, explain the product, and give visitors a direct path into the live experience.",
    scope: ["Website design", "Frontend build", "Product storytelling"],
    deliverables: [
      "Responsive product landing page",
      "Visual hierarchy for game features",
      "External launch and community paths",
    ],
  },
  {
    slug: "ton-farm",
    title: "Ton Farm",
    category: "Website Design & Development",
    serviceSlug: "web-design-development",
    image: "/projects/tonfarm.webp",
    href: "https://tonfarm.co/",
    summary:
      "A clean web product surface for a farming-themed digital product with a focus on fast comprehension.",
    problem:
      "The product needed a web presence that could explain mechanics and value without overwhelming visitors.",
    scope: ["Landing page", "Product sections", "Responsive UI"],
    deliverables: [
      "Structured content sections",
      "Product-benefit hierarchy",
      "Performance-conscious static implementation",
    ],
  },
  {
    slug: "sugar-senpai",
    title: "Sugar Senpai",
    category: "Game Development",
    serviceSlug: "game-development",
    image: "/projects/sugarsenpai.webp",
    href: "https://sugarsenpai.com/",
    summary:
      "A stylized game website designed to make the product feel distinct while keeping core actions visible.",
    problem:
      "The experience needed enough personality to be memorable without hiding navigation, product context, or calls to action.",
    scope: ["Game landing page", "UI direction", "Responsive polish"],
    deliverables: [
      "Brand-forward website composition",
      "Gameplay and feature presentation blocks",
      "Mobile-friendly launch surface",
    ],
  },
  {
    slug: "xaykenhtiktok",
    title: "XayKenhTikTok",
    category: "Solution Architecture",
    serviceSlug: "solution-architecture",
    image: "/projects/xaykenhtiktok.webp",
    href: "https://xaykenhtiktok.com/",
    summary:
      "A business automation and content-operation product where system clarity mattered more than visual decoration.",
    problem:
      "The project needed a practical architecture that could connect operations, content workflows, and customer-facing surfaces.",
    scope: ["Architecture planning", "Workflow design", "Product implementation"],
    deliverables: [
      "Operational flow mapping",
      "Scalable technical direction",
      "Production-ready digital product surface",
    ],
  },
];

export const faqs = [
  {
    question: "What does Lorem Technology build?",
    answer:
      "We build websites, product interfaces, app experiences, game-facing web surfaces, and practical software architecture for founders and digital teams.",
  },
  {
    question: "Where is the company registered?",
    answer:
      "Lorem Technology is registered in Ho Chi Minh City, Vietnam as CÔNG TY TNHH CÔNG NGHỆ LOREM with tax ID 0315880407.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Small launches usually take 4 to 6 weeks. Larger product builds or architecture-led engagements are scoped after discovery so timeline, deliverables, and risk are clear.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes. Each engagement starts from the product goal, audience, constraints, and launch path rather than a fixed template.",
  },
  {
    question: "What is the best way to start?",
    answer:
      "Book a discovery call or email the project context. We will clarify scope, constraints, and the fastest practical path to a useful launch.",
  },
];

export const allRoutes = [
  "/",
  "/about",
  "/legal",
  "/privacy-policy",
  "/data-deletion",
  ...serviceCategories.map((service) => `/services/${service.slug}`),
  ...projects.map((project) => `/work/${project.slug}`),
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function findService(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
