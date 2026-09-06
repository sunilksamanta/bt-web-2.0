import type { Narrative } from "./types";

export const stacks: Narrative = {
  path: "/stacks",
  slug: "stacks",
  tab: "stacks /",
  title: "Node.js, NestJS, Next.js, Python, Go Developers | Broadifi",
  metaDescription:
    "Broadifi builds production software in Node.js, NestJS, Next.js, Python, Go, MongoDB, and PostgreSQL. Depth proven by open-source CalmAPI, Ognom, TerCTL.",
  ogTitle: "The stacks we know deeply enough to open-source.",
  h1: "The stacks we know deeply enough to open-source.",
  opening:
    "Broadifi Technologies builds production systems in Node.js, NestJS, Next.js, React, Python, Go, MongoDB, PostgreSQL, Docker, and Kubernetes, with native desktop work in Tauri. We do not claim every technology. We claim the ones we have shipped tools for: CalmAPI for Node.js APIs, Ognom for MongoDB, TerCTL for desktop, and our KrakenD plugin toolkit for Go.",
  witty: "A stack we have not open-sourced something in is a stack we will tell you we are learning.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "Stacks", path: "/stacks" }],
  blocks: [
    {
      kind: "cards",
      tab: "depth /",
      h2: "What we build with each stack",
      cards: [
        { title: "Node.js and NestJS", body: "APIs, platforms, and integrations.", note: "Default: layered Controller-Service-Model architecture, the structure CalmAPI generates.", href: "https://calmapi.dev", linkLabel: "Proof: CalmAPI" },
        { title: "Next.js and React", body: "Product frontends and SaaS dashboards.", note: "Default: server-rendered where it matters, static where it can be, lean client bundles.", href: "https://terctl.dev", linkLabel: "Proof: TerCTL's interface" },
        { title: "Python", body: "AI pipelines, data services, and automation.", note: "Default: typed, tested services with LangChain or plain code as the case warrants.", href: "/ai-solutions", linkLabel: "Proof: AI solutions" },
        { title: "Go", body: "API gateway plugins, high-throughput services, and CLIs.", note: "Default: small binaries, clear interfaces, no framework sprawl.", href: "https://github.com/broadifi", linkLabel: "Proof: KrakenD plugin dev environment" },
        { title: "MongoDB", body: "Document models for products and commerce.", note: "Default: schema discipline, indexes designed with the queries, aggregation over application loops.", href: "/open-source", linkLabel: "Proof: Ognom" },
        { title: "PostgreSQL", body: "Transactional systems and internal software.", note: "Default: normalized cores, pgvector where AI search is needed.", href: "/internal-systems", linkLabel: "Proof: internal systems work" },
        { title: "Docker and Kubernetes", body: "Everything we ship runs in containers; Kubernetes only when it earns its keep.", href: "/devops-and-cloud-cost", linkLabel: "Proof: DevOps and cloud cost, Setside" },
        { title: "Tauri (desktop)", body: "Native desktop tools with web interfaces.", href: "/open-source", linkLabel: "Proof: TerCTL, Ognom" },
      ],
    },
    {
      kind: "prose",
      tab: "honesty /",
      h2: "Stacks we will not pretend to master",
      paragraphs: [
        "We do not take on PHP or .NET rewrites, native iOS in Swift, or Unity game development. If your project needs those, we will refer you rather than learn on your budget.",
      ],
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "Do you work with our existing codebase or only greenfield?", a: "Both. Most engagements start inside an existing system." },
      { q: "Can you recommend a stack for a new product?", a: "Yes, on a short call, based on your team, your scale path, and your cost ceiling. We lean toward boring, well-supported choices." },
      { q: "Why does open source prove stack depth?", a: "Because a tool other developers adopt has survived scrutiny we cannot fake. Read CalmAPI, Ognom, and TerCTL before hiring us." },
      { q: "Do you do mobile?", a: "Yes, cross-platform mobile with React Native and Flutter ([[TODO: confirm which]]), and native desktop with Tauri." },
    ],
  },
  related: ["/open-source", "/vibe-coding-rescue", "/devops-and-cloud-cost"],
  schema: {
    service: { name: "Software Development by Stack", serviceType: "Custom software development", areaServed: ["IN", "US", "EU", "AE", "SA"] },
    itemList: {
      name: "Development stacks",
      items: [
        { name: "Node.js and NestJS", path: "/stacks#depth" },
        { name: "Next.js and React", path: "/stacks#depth" },
        { name: "Python", path: "/stacks#depth" },
        { name: "Go", path: "/stacks#depth" },
        { name: "MongoDB", path: "/stacks#depth" },
        { name: "PostgreSQL", path: "/stacks#depth" },
        { name: "Docker and Kubernetes", path: "/stacks#depth" },
        { name: "Tauri (desktop)", path: "/stacks#depth" },
      ],
    },
  },
};
