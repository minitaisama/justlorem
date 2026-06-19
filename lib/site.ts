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
    "Lorem Technology is an AI-first development studio building agentic workflows, product interfaces, and launch-ready software for founders and digital teams.",
};

export const aiPositioning = {
  eyebrow: "AI-first development studio",
  headline: "AI-first development studio for products that need to ship.",
  subheadline:
    "We combine senior product engineering with AI-assisted delivery systems to design, build, test, and launch faster.",
  primaryCta: "Book AI Build Call",
  secondaryCta: "See AI delivery system",
  cockpitLabel: "Live delivery cockpit",
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
    title: "AI Product Engineering",
    eyebrow: "Build systems",
    summary:
      "AI-assisted product builds that move from product intent to interface, implementation, tests, and deployable software.",
    description:
      "We combine product strategy, frontend engineering, AI-assisted coding workflows, and launch discipline so teams can ship useful software without drifting through open-ended development cycles.",
    outcomes: [
      "Product scope, user flows, and build-ready technical plan",
      "Responsive product UI implemented with maintainable frontend patterns",
      "AI-assisted coding loops with human review and quality gates",
      "Static-export friendly deployment, metadata, and measurable launch paths",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "AI UX & Prototype Systems",
    eyebrow: "Experience loops",
    summary:
      "Interface systems, clickable prototypes, and AI-era product flows that make complex tools feel clear and usable.",
    description:
      "We turn fuzzy product ideas into interface systems, interaction states, and prototypes that help founders validate direction before heavy engineering spend.",
    outcomes: [
      "AI workflow mapping, user journeys, and information architecture",
      "High-fidelity responsive UI for web, app, and agent-assisted products",
      "Reusable design tokens, states, and implementation notes",
      "Prototype screens that can become production components",
    ],
  },
  {
    slug: "game-development",
    title: "Agentic Workflow Automation",
    eyebrow: "Operations AI",
    summary:
      "AI-assisted operational workflows that turn repetitive handoffs into reviewable, auditable delivery pipelines.",
    description:
      "We design and build workflow systems where AI can draft, classify, summarize, generate, or route work while humans stay in control of approvals and edge cases.",
    outcomes: [
      "Workflow discovery and automation opportunity mapping",
      "Human-in-the-loop review states and escalation paths",
      "Dashboards, queues, prompts, and operational UI surfaces",
      "Documentation for maintaining AI-assisted business processes",
    ],
  },
  {
    slug: "solution-architecture",
    title: "Product Architecture",
    eyebrow: "Launch planning",
    summary:
      "Practical technical direction for AI-enabled products that need to scale beyond a first prototype.",
    description:
      "We map product requirements into system boundaries, frontend/backend responsibilities, AI integration points, data flow, deployment paths, and quality gates.",
    outcomes: [
      "Technical discovery and implementation roadmap",
      "AI integration boundaries, data modeling, and failure-mode planning",
      "Scalable deployment and maintenance approach",
      "Documentation that keeps founders, engineers, and AI workflows aligned",
    ],
  },
];

export const aiDeliverySteps = [
  {
    label: "Prompt intake",
    detail: "Clarify goal, constraints, risks, and launch path.",
    status: "scoping",
  },
  {
    label: "Agent plan",
    detail: "Break product work into reviewed tasks and interfaces.",
    status: "planning",
  },
  {
    label: "UI build",
    detail: "Generate, refine, and implement product surfaces.",
    status: "building",
  },
  {
    label: "Tests",
    detail: "Run lint, typecheck, audit, build, and browser checks.",
    status: "verifying",
  },
  {
    label: "PR / deploy",
    detail: "Ship through reviewable commits and deployment gates.",
    status: "ready",
  },
];

export const aiProofPoints = [
  { value: "AI+", label: "Human-reviewed delivery loops" },
  { value: "19", label: "Static routes generated in the current build" },
  { value: "2019", label: "Registered technology company" },
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
    question: "What does AI-first development mean here?",
    answer:
      "It means product strategy, design, engineering, tests, and delivery are supported by AI-assisted workflows while human engineers still review scope, code, security, and launch decisions.",
  },
  {
    question: "Can you build AI features or only use AI internally?",
    answer:
      "Both. We can build AI-enabled product surfaces and automation workflows, and we also use AI-assisted delivery systems internally to move faster with clearer review points.",
  },
  {
    question: "How do you keep AI-assisted work reliable?",
    answer:
      "We keep a human-in-the-loop process with scoped prompts, implementation review, linting, type checks, audits, production builds, browser checks, and explicit handoff notes.",
  },
  {
    question: "Where is the company registered?",
    answer:
      "Lorem Technology is registered in Ho Chi Minh City, Vietnam as CÔNG TY TNHH CÔNG NGHỆ LOREM with tax ID 0315880407.",
  },
  {
    question: "What is the best way to start?",
    answer:
      "Book an AI build call or email the project context. We will clarify the product goal, data boundaries, launch constraints, and the fastest practical path to a reviewed build.",
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
