import type { Narrative } from "./types";

export const openSourcePage: Narrative = {
  path: "/open-source",
  slug: "open-source",
  tab: "open-source /",
  title: "Open Source by Broadifi: CalmAPI, Ognom, TerCTL | Broadifi",
  metaDescription:
    "Broadifi maintains CalmAPI (Node.js REST API framework), Ognom (MongoDB client), and TerCTL (desktop SSH terminal). Read our code before you hire us.",
  ogTitle: "Read our code before you hire us. We insist.",
  h1: "Read our code before you hire us. We insist.",
  opening:
    "Broadifi Technologies maintains three open-source developer tools: CalmAPI, a production-ready modular Node.js REST API framework; Ognom, a free native MongoDB client with a visual aggregation builder and AI-assisted query fixing; and TerCTL, an open-source desktop SSH terminal built with Tauri and React. They are built and maintained in public and used by developers we have never met.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "Open Source", path: "/open-source" }],
  blocks: [
    {
      kind: "cards",
      tab: "tools /",
      h2: "What we maintain",
      cards: [
        {
          title: "CalmAPI",
          chip: "framework /",
          body: "Layered Controller-Service-Model architecture, auto-routing, DTOs, JWT auth, and a CLI that generates a complete module in one command. MIT licensed, on npm.",
          code: "npx calmapi   [[TODO: confirm exact command]]",
          links: [
            { label: "calmapi.dev", href: "https://calmapi.dev" },
            { label: "Repository", href: "https://github.com/broadifi" },
            { label: "npm", href: "https://www.npmjs.com/package/calmapi" },
          ],
        },
        {
          title: "Ognom",
          chip: "native /",
          body: "Free, native, open-source MongoDB client. Visual aggregation builder, AI-assisted query fixing, encryption. [[TODO: repo URL and license]]",
          code: "download: [[TODO: release URL]]",
          links: [{ label: "Repository", href: "https://github.com/broadifi" }],
        },
        {
          title: "TerCTL",
          chip: "native /",
          body: "Clean, fast, privacy-friendly desktop SSH terminal. Tauri and React. [[TODO: license]]",
          code: "download: terctl.dev",
          links: [
            { label: "terctl.dev", href: "https://terctl.dev" },
            { label: "Repository", href: "https://github.com/broadifi" },
          ],
        },
      ],
      after: ["Also: asLIT (SSH management CLI), KrakenD plugin dev environment (Go, Docker), node-mongoose-setup."],
    },
    {
      kind: "prose",
      tab: "why /",
      h2: "Why a dev shop publishes its internals",
      paragraphs: [
        "Because it is the only proof that cannot be faked. Anyone can write \"senior engineers\" on a website. A framework that other teams run in production is evidence. Our open source also gives our projects a head start: we begin from tested foundations instead of from zero.",
      ],
    },
  ],
  faq: {
    h2: "Questions developers actually asked",
    items: [
      { q: "Can I use CalmAPI in a commercial project?", a: "Yes. It is MIT licensed." },
      { q: "Is Ognom really free?", a: "Yes, free and open source. ([[TODO: confirm license]])" },
      { q: "Do you accept contributions?", a: "Yes. Issues and pull requests are welcome on each repository." },
      { q: "Will you build my project on these tools?", a: "When they fit. CalmAPI is our default for Node.js APIs; it is a starting point, not a lock-in." },
    ],
  },
  related: ["/stacks", "/vibe-coding-rescue", "/ai-solutions"],
  schema: {
    software: [
      { name: "CalmAPI", description: "Production-ready, modular Node.js REST API framework with layered Controller-Service-Model architecture, auto-routing, DTOs, JWT auth, and CLI module generation.", url: "https://calmapi.dev", codeRepository: "https://github.com/broadifi", downloadUrl: "https://www.npmjs.com/package/calmapi", license: "https://opensource.org/licenses/MIT", operatingSystem: "Linux, macOS, Windows", applicationCategory: "DeveloperApplication" },
      { name: "Ognom", description: "Free, native, open-source MongoDB client with a visual aggregation builder, AI-assisted query fixing, and encryption.", url: "https://github.com/broadifi", codeRepository: "https://github.com/broadifi", operatingSystem: "Linux, macOS, Windows", applicationCategory: "DeveloperApplication" },
      { name: "TerCTL", description: "Open-source desktop SSH terminal built with Tauri and React. Clean, fast, privacy-friendly.", url: "https://terctl.dev", codeRepository: "https://github.com/broadifi", downloadUrl: "https://terctl.dev", operatingSystem: "Linux, macOS, Windows", applicationCategory: "DeveloperApplication" },
    ],
  },
};
