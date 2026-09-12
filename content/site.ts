export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.broadifitech.com").replace(/\/$/, "");

export const company = {
  name: "Broadifi Technologies",
  shortName: "Broadifi",
  legalName: "Broadifi Technologies LLP",
  tagline: "Fast to ship. Built to last. Cheaper to run.",
  metaTitle: "Broadifi Technologies: Fast to ship. Built to last.",
  metaDescription: "Broadifi builds production software fast, on architecture that scales gradually and costs less to run, using AI under strict human ownership. Since 2019.",
  description:
    "Broadifi is a next-gen dev shop from Kolkata. We ship production software fast, starting from our own open-source tools (CalmAPI, Ognom, TerCTL), on architecture built to scale gradually and cost less every month. We use AI under strict human rules: named engineers own every line, humans decide every architecture, client data never enters AI tools.",
  boilerplate:
    "Broadifi Technologies is a next-generation development shop based in Kolkata, India, founded in 2019. Broadifi builds production software for founders and product teams worldwide, on architecture designed to scale gradually and reduce recurring cost, using AI under strict human ownership. The company maintains the open-source developer tools CalmAPI, Ognom, and TerCTL, and has shipped platforms including Mulltiply, Attender, and Setside. Broadifi is ISO 9001:2015 certified and DPIIT recognized.",
  founded: "2019",
  email: "hello@broadifitech.com",
  phone: "+91 82404 38524",
  phoneIntl: "+918240438524",
  address: {
    street: "Module 206, Webel IT Park, Tower 1, BN-4, Sector V",
    locality: "Kolkata",
    region: "West Bengal",
    postalCode: "700091",
    country: "IN",
    countryName: "India",
  },
  geo: { latitude: 22.5726, longitude: 88.4321 },
  social: {
    linkedin: "https://www.linkedin.com/company/broadifi-technologies-llp/",
    instagram: "https://www.instagram.com/broadifitech/",
    github: "https://github.com/broadifi",
  },
  credentials: ["EST. 2019", "BOOTSTRAPPED", "ISO 9001:2015", "DPIIT RECOGNISED"],
};

export const narrativeNav = [
  { href: "/services", label: "All services" },
  { href: "/vibe-coding-rescue", label: "Vibe coding rescue" },
  { href: "/devops-and-cloud-cost", label: "DevOps and cloud cost" },
  { href: "/ai-solutions", label: "AI solutions" },
  { href: "/stacks", label: "Development stacks" },
  { href: "/open-source", label: "Open source" },
  { href: "/internal-systems", label: "Internal systems" },
  { href: "/team", label: "Team" },
];

export const nav = [
  { id: "interface", label: "interface /" },
  { id: "about", label: "about /" },
  { id: "work", label: "work /" },
  { id: "open-source", label: "open-source /" },
  { id: "process", label: "process /" },
  { id: "services", label: "services /" },
  { id: "efficiency", label: "efficiency /" },
  { id: "team", label: "team /" },
  { id: "clients", label: "clients /" },
  { id: "faq", label: "faq /" },
  { id: "contact", label: "contact /" },
];

export const hero = {
  prefix: "Senior engineers, AI leverage, and products that outlive",
  words: ["the hype", "the demo", "the sprint", "the trend"],
  support:
    "Broadifi builds production software fast, on architecture that scales gradually and costs less every month, using AI under strict human ownership. From Kolkata, since 2019.",
  cta: "Book a call",
};

export const about = {
  lead: "A next-gen dev shop from Kolkata. Since 2019.",
  body:
    "We build production software for founders and product teams around the world. We ship fast because we start from our own tools, on architecture that scales gradually and costs less to run. AI is our accelerant. Judgment is our product.",
};

export type Project = {
  slug: string;
  name: string;
  tags: string[];
  url?: string;
  host?: string;
  shot: string;
  crop?: string;
  description: string;
};

export const work = {
  title: "Ship-grade, not demo-grade",
  intro:
    "From an AI commerce engine to the robots that clean the ships, and the internal systems that run those companies.",
  closing: "Some of our most complex systems we cannot show you. Their uptime speaks for us.",
  projects: <Project[]>[
    {
      slug: "mulltiply",
      name: "Mulltiply",
      tags: ["BUSINESS WORKFLOW /", "AI /"],
      url: "https://mulltiply.ai",
      host: "mulltiply.ai",
      shot: "screenshot / mulltiply.ai",
      crop: "crop / whatsapp-to-order flow",
      description:
        "An AI commerce engine for WhatsApp-first businesses. It reads orders sent as text, voice notes, or photos, in Hindi, English, or both, builds structured carts, and syncs them to Tally, Zoho, Dynamics, and Shopify, backed by its own cloud ERP. Recognized at MSME Honours 2026.",
    },
    {
      slug: "skilldrift",
      name: "SkillDrift",
      tags: ["UPSKILL & JOBS /", "AI /"],
      url: "https://app.skilldrift.ai",
      host: "app.skilldrift.ai",
      shot: "screenshot / app.skilldrift.ai",
      description:
        "AI career intelligence platform. Skill gap analysis, career pathing, and job matching. Engineered by Broadifi in partnership with SkillDrift Inc.",
    },
    {
      slug: "mockshala",
      name: "Mockshala",
      tags: ["EDTECH /"],
      host: "mockshala.com",
      shot: "screenshot / mockshala test player",
      description: "Edtech platform founded in 2023, built for exam practice at scale.",
    },
    {
      slug: "toolo",
      name: "Töölö",
      tags: ["CONSUMER /"],
      url: "https://toolo.in",
      host: "toolo.in",
      shot: "screenshot / toolo.in",
      description:
        "An online neighbourhood children's library. Curated books, doorstep delivery, personalized recommendations, and a growing franchise network across India.",
    },
    {
      slug: "aliciabots",
      name: "AliciaBots",
      tags: ["OPERATIONS /"],
      url: "https://aliciabots.com",
      host: "aliciabots.com",
      shot: "screenshot / aliciabots.com",
      description:
        "Autonomous hull-cleaning robotics for the maritime industry. We built their web presence and the internal systems that run the company: product inventory, HR, and procurement.",
    },
  ],
};

export type Tool = {
  name: string;
  kind: string;
  description: string;
  url: string;
  linkLabel: string;
  /** Short facts shown next to the name. Only facts from the company profile. */
  meta: string[];
  /** Title shown in the demo window's title bar. */
  window: string;
  demo:
    | { type: "terminal"; lines: { prompt?: string; text: string; dim?: boolean }[] }
    | { type: "shot"; label: string }
    | { type: "image"; src: string; alt: string; width: number; height: number };
};

export const openSource = {
  title: "We ship our tools too",
  intro: "Our open source spans a production API framework and native desktop tools, built and maintained in public.",
  insist: "Read our code before you hire us. We insist.",
  alsoLabel: "also /",
  also: ["KrakenD plugin toolkit", "asLIT"],
  githubLabel: "github.com/broadifi",
  tools: <Tool[]>[
    {
      name: "CalmAPI",
      kind: "framework /",
      description:
        "A production-ready, modular Node.js REST API framework. Layered Controller-Service-Model architecture, auto-routing, DTOs, JWT auth, and a CLI that generates a complete module in one command.",
      url: "https://calmapi.dev",
      linkLabel: "calmapi.dev",
      meta: ["MIT", "npm", "Node.js"],
      window: "calmapi / zsh",
      demo: {
        type: "terminal",
        lines: [
          { prompt: "$", text: "npm i -g calmapi" },
          { prompt: "$", text: "calmapi generate module orders" },
          { text: "✓ controller · service · model · route · dto", dim: true },
        ],
      },
    },
    {
      name: "Ognom",
      kind: "native /",
      description:
        "A free, native, open-source MongoDB client with a visual aggregation builder, AI-assisted query fixing, and proper encryption. Our own proof that we build with AI, not around it.",
      url: "https://ognom.dev",
      linkLabel: "ognom.dev",
      meta: ["MongoDB", "native", "free"],
      window: "ognom / shopdb.orders",
      demo: {
        type: "image",
        src: "/open-source/ognom.png",
        alt: "Ognom showing documents from the orders collection of a MongoDB database, with a Find query for paid orders over 120 and the index plan it used",
        width: 1800,
        height: 1008,
      },
    },
    {
      name: "TerCTL",
      kind: "native /",
      description: "Open-source desktop SSH terminal. Clean, fast, privacy-friendly. Built with Tauri and React.",
      url: "https://terctl.dev",
      linkLabel: "terctl.dev",
      meta: ["Tauri", "React", "SSH"],
      window: "terctl / deploy@prod-01",
      demo: {
        type: "terminal",
        lines: [
          { prompt: "➜", text: "ssh deploy@prod-01" },
          { text: "Last login: Sat Aug 29 09:14:02 2026 from 10.0.4.18", dim: true },
          { prompt: "deploy@prod-01", text: ":~$ systemctl status api" },
          { text: "● api.service: active (running) 41d", dim: true },
        ],
      },
    },
  ],
};

export const workflow = {
  title: "AI writes the first draft. We decide what ships.",
  intro: "Four steps. Humans decide, AI accelerates, engineers own.",
  steps: [
    {
      n: "01",
      title: "Understand",
      body: "A short, sharp discovery. We map what must exist on day one versus what can wait, and we cost the infrastructure before writing code.",
    },
    {
      n: "02",
      title: "Design",
      body: "Humans decide the architecture: boundaries, data model, scaling path, and cost model. Documented before any code is generated.",
    },
    {
      n: "03",
      title: "Build",
      body: "AI-accelerated, human-owned. Foundations come from our own tools, senior engineers write the hard parts and review everything. Tests and CI gate every merge. A named engineer owns every line.",
    },
    {
      n: "04",
      title: "Run",
      body: "We deploy lean, monitor, and tune cost monthly. Clean handover and documentation are part of the build, not an add-on.",
    },
  ],
  rules: [
    "Architecture is decided by humans before any code is generated.",
    "Every merged line has a named engineer who owns it.",
    "AI output has no shortcut to production. Tests, review, and CI gate everything.",
    "No client data, credentials, or secrets ever enter an AI tool.",
    "We choose maintainability over cleverness, every time.",
    "We tell you where AI helped. No hidden generation.",
  ],
};

export const services = {
  title: "What we take on",
};

export const efficiency = {
  title: "We treat your cloud bill like a bug.",
  body:
    "We right-size servers, tune databases, and design on open standards so your infrastructure costs shrink instead of creep. And because everything we build is portable, you stay free to leave any vendor. Including us.",
  aside: "Vendor lock-in is just tech debt with a subscription.",
  // PLACEHOLDER: replace with one real before/after figure before launch.
  before: "$8,400",
  after: "$3,100",
  note: "representative engagement, figures vary",
};

export const team = {
  title: "You will know who is building your software",
  intro:
    "Module 206, Webel IT Park, Tower 1, Sector V, Kolkata. Senior engineers who take things apart to see how they work, and put them back together for a living.",
  culture: "Software is our day job. It is not our whole stack.",
  photos: ["team photo / 01", "team photo / 02", "team photo / 03", "team photo / 04"],
};

export const clients = {
  featured: {
    quote: "They are one of the best teams I have worked with. Their dedication and commitment to the work are exemplary.",
    name: "Deepanker Mahajan",
    role: "CEO, Spoolify",
  },
  more: [
    {
      quote:
        "They work like professionals and executed each and every aspect of our website beautifully, and they have owned the project like it's their own.",
      name: "Sheetal Shah",
      role: "Founder & CEO",
    },
    {
      quote: "Delivered earlier than quoted, on budget, and were super understanding and helpful throughout the entire process.",
      name: "Manish K",
      role: "Client",
    },
    {
      quote: "Very ethical and strong team, delivers on time and exceeded my expectations.",
      name: "Raza B.",
      role: "Client",
    },
  ],
};

export const faq = {
  title: "Questions clients actually asked.",
  items: [
    {
      q: "How fast can you deliver?",
      a: "Fast, because we start from our own frameworks and use AI for the well-understood parts. Most scopes reach a first release in four to twelve weeks, depending on complexity. The parts that must be right, we write and review by hand.",
    },
    {
      q: "Do you use AI to write code?",
      a: "Yes, under strict rules: humans decide architecture, a named engineer owns every merged line, tests gate everything, and no client data enters AI tools.",
    },
    {
      q: "Will we be locked into your stack?",
      a: "No. Open standards, open source, full documentation, clean handover. You can leave us anytime, which is exactly why clients stay.",
    },
    {
      q: "How do you keep running costs low?",
      a: "We right-size infrastructure from day one, tune databases, design for gradual scale, and review your cost monthly. Recurring cost is a design decision, so we design it.",
    },
    {
      q: "Can we see your code quality before hiring you?",
      a: "Yes. CalmAPI, Ognom, and TerCTL are open source. Read them.",
    },
    {
      q: "Where are you based?",
      a: "Kolkata, India. We work with clients in India, the US, Europe, and the Middle East.",
    },
  ],
};

export const contact = {
  title: "Have something worth building?",
  cta: "Book a call",
  columns: [
    { label: "company /", links: [{ label: "About", href: "/#about" }, { label: "Work", href: "/#work" }, { label: "Services", href: "/services" }, { label: "Team", href: "/team" }] },
    { label: "narratives /", links: narrativeNav.map((n) => ({ label: n.label, href: n.href })) },
    {
      label: "code /",
      links: [
        { label: "CalmAPI", href: "https://calmapi.dev" },
        { label: "Ognom", href: "https://ognom.dev" },
        { label: "TerCTL", href: "https://terctl.dev" },
      ],
    },
    {
      label: "elsewhere /",
      links: [
        { label: "LinkedIn", href: company.social.linkedin },
        { label: "Instagram", href: company.social.instagram },
        { label: "GitHub", href: company.social.github },
      ],
    },
  ],
  legal: "ISO 9001:2015 · DPIIT RECOGNISED STARTUP · © 2026 BROADIFI TECHNOLOGIES",
};
