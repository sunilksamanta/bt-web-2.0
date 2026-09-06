/**
 * Template for future /ai-solutions/<slug> use-case pages.
 * Copy this file, fill every field, export the object, then register it in
 * `aiUseCases` in ./index.ts. Registration is what publishes the page; until
 * then the route returns 404 and is absent from the sitemap.
 *
 * Planned slugs: agents-and-automation, rag-and-knowledge,
 * document-and-order-understanding, llm-features, conversational-commerce (parked).
 */
import type { Narrative } from "./types";

export const useCaseTemplate: Narrative = {
  path: "/ai-solutions/<slug>",
  slug: "<slug>",
  tab: "<tab> /",
  title: "<Primary keyword first> | Broadifi",          // under 60 characters
  metaDescription: "<under 155 characters>",
  ogTitle: "<page-specific OG title>",
  h1: "<H1>",
  opening: "<Who this is for and what Broadifi does about it, under 60 words>",
  witty: "<one dry line, optional>",
  lastUpdated: "<d Month yyyy>",
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "AI Solutions", path: "/ai-solutions" },
    { name: "<Use case>", path: "/ai-solutions/<slug>" },
  ],
  blocks: [
    { kind: "bullets", tab: "who /", h2: "Is this page for you?", items: ["<bullet>", "<bullet>", "<bullet>"] },
    { kind: "steps", tab: "process /", h2: "<How it works>", steps: [{ title: "<step>", body: "<body>" }] },
    { kind: "prose", tab: "platforms /", h2: "<Platforms and stack>", paragraphs: ["<stack>"] },
    { kind: "prose", tab: "proof /", h2: "<Proof>", paragraphs: ["<proof, Mulltiply at most once per page>"] },
    { kind: "offer", tab: "offer /", h2: "<Offer name>", paragraphs: ["<scope> [[TODO: real figure]]", "Price: [[TODO: real figure]]."], notWhen: "<when not to hire us>" },
  ],
  faq: { h2: "Questions clients actually asked", items: [{ q: "<question>", a: "<answer>" }] },
  related: ["/ai-solutions", "<narrative>", "/open-source"],
  schema: {
    service: { name: "<Service name>", serviceType: "<serviceType>", areaServed: ["IN", "US", "EU", "AE", "SA"], offer: { name: "<Offer name>", priceCurrency: "USD" } },
  },
};
