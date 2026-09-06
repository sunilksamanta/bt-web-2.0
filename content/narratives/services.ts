import type { Narrative } from "./types";
import { allServices } from "@/content/services";

const contactWith = (s: string) => `mailto:hello@broadifitech.com?subject=${encodeURIComponent("Services: " + s)}`;

export const servicesPage: Narrative = {
  path: "/services",
  slug: "services",
  tab: "services /",
  title: "Software Development Services | Broadifi",
  metaDescription:
    "Every service Broadifi offers: web and mobile, SaaS, AI and automation, cloud and DevOps, vibe coding rescue, internal systems, Web3, GIS and logistics.",
  ogTitle: "What we take on, and what we do not.",
  h1: "What we take on, and what we do not.",
  opening:
    "Broadifi Technologies is a senior engineering team in Kolkata, India serving founders, product leaders, and established businesses. We build web and mobile products, SaaS platforms, AI features, cloud infrastructure, and internal systems, and we rescue AI-generated codebases. Every engagement is lean by design and free of vendor lock-in.",
  witty: "We take on the work we can own. Everything else, we refer.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }],
  blocks: [
    {
      kind: "cards",
      tab: "all /",
      h2: "Every service we offer",
      intro: "Eight calm blocks, one sentence each. Services with their own page link to it; the rest are being written.",
      cards: allServices.map((s) => ({
        title: s.title,
        body: s.body,
        href: s.href ?? contactWith(s.title),
        linkLabel: s.href ? `Read about ${s.title}` : `Ask about ${s.title}`,
        chip: s.chip,
      })),
    },
    {
      kind: "prose",
      tab: "honesty /",
      h2: "What we do not take on",
      paragraphs: [
        "We do not take on PHP or .NET rewrites, native iOS in Swift, or Unity game development. If your project needs those, we will refer you rather than learn on your budget.",
      ],
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "How fast can you deliver?", a: "Fast, because we start from our own frameworks and use AI for the well-understood parts. The parts that must be right, we write and review by hand." },
      { q: "Do you use AI to write code?", a: "Yes, under strict rules: humans decide architecture, a named engineer owns every merged line, tests gate everything, and no client data enters AI tools." },
      { q: "Will we be locked into your stack?", a: "No. Open standards, open source, full documentation, clean handover. You can leave us anytime, which is exactly why clients stay." },
      { q: "Where are you based?", a: "Kolkata, India. We work with clients in India, the US, Europe, and the Middle East." },
    ],
  },
  related: ["/stacks", "/ai-solutions", "/vibe-coding-rescue", "/open-source"],
  schema: {
    service: { name: "Software Development Services", serviceType: "Custom software development", areaServed: ["IN", "US", "EU", "AE", "SA"] },
    itemList: { name: "Services", items: allServices.map((s) => ({ name: s.title, path: s.href ?? "/services" })) },
  },
};
