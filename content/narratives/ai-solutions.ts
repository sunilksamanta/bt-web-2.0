import type { Narrative } from "./types";
import { workflow } from "@/content/site";

const contactWith = (useCase: string) => `mailto:hello@broadifitech.com?subject=${encodeURIComponent("AI solutions: " + useCase)}`;

export const aiSolutions: Narrative = {
  path: "/ai-solutions",
  slug: "ai-solutions",
  tab: "ai /",
  title: "AI Development: Agents, RAG, Voice, LLM Apps | Broadifi",
  metaDescription:
    "Broadifi builds AI agents, RAG pipelines, voice agents, and LLM features that ship to production under strict human rules. LangChain, LangGraph, Qdrant.",
  ogTitle: "AI features that ship, scale, and stay under human control.",
  h1: "AI features that ship, scale, and stay under human control.",
  opening:
    "Broadifi Technologies builds AI solutions that run in production: conversational agents, retrieval-augmented generation over your own data, multilingual voice agents, document and order understanding, and LLM features inside existing products. We work in LangChain, LangGraph, and Qdrant, on Vapi, Retell, and custom stacks, and every system ships under our published human rules.",
  witty: "AI writes the first draft. We decide what ships.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "AI Solutions", path: "/ai-solutions" }],
  blocks: [
    {
      kind: "bullets",
      tab: "who /",
      h2: "Is this page for you?",
      items: [
        "You have an AI feature on the roadmap and a demo in a notebook, and you need it to survive real users, real data, and a real budget.",
        "You want to automate a workflow with an agent but need it to be reliable, observable, and safe to put in front of customers.",
        "You tried an AI vendor's platform and hit its limits, and now you want something built for your case that you own.",
      ],
    },
    {
      kind: "cards",
      tab: "use-cases /",
      h2: "What we build",
      cards: [
        { title: "Voice agents", body: "Inbound and outbound calls handled in your customers' language, Hindi, English, mixed, and Arabic as a target.", href: contactWith("Voice agents"), linkLabel: "Ask about voice agents", chip: "page coming /" },
        { title: "Agents and workflow automation", body: "LangGraph agents that take real actions in your systems, with approvals, retries, and audit trails.", href: contactWith("Agents and workflow automation"), linkLabel: "Ask about agents", chip: "page coming /" },
        { title: "RAG and knowledge assistants", body: "Retrieval over your documents, tickets, and databases with Qdrant, with evaluation sets so you know it is right.", href: contactWith("RAG and knowledge assistants"), linkLabel: "Ask about RAG", chip: "page coming /" },
        { title: "Document and order understanding", body: "Text, photos, and voice notes turned into structured data. In production today in a WhatsApp commerce engine that parses Hindi and English orders (Mulltiply).", href: contactWith("Document and order understanding"), linkLabel: "Ask about document understanding", chip: "page coming /" },
        { title: "LLM features in existing products", body: "Summaries, search, classification, and copilots inside the software you already run, with token cost engineered down.", href: contactWith("LLM features in existing products"), linkLabel: "Ask about LLM features", chip: "page coming /" },
      ],
    },
    {
      kind: "rules",
      tab: "rules /",
      h2: "The human rules we build under",
      rules: workflow.rules,
      after: [
        "These rules apply to our own workflow and to every system we ship for you.",
        "We are also honest about where AI should not be used; if a rule engine or a well-indexed search would do the job, we will say so.",
      ],
    },
    {
      kind: "prose",
      tab: "proof /",
      h2: "AI we have shipped",
      paragraphs: [
        "Ognom, our free open-source MongoDB client, includes AI-assisted query fixing that we built and maintain in public. Our WhatsApp commerce engine parses orders in Hindi and English as text, voice, and photos and syncs them to Tally, Zoho, Dynamics, and Shopify. SkillDrift, an AI career intelligence platform, was engineered by Broadifi in partnership with SkillDrift Inc.",
        "Our stack depth: LangChain, LangGraph, LangSmith, Qdrant, OpenAI and Anthropic APIs, open-weight models on our own infrastructure, Vapi, Retell, ElevenLabs, Deepgram.",
      ],
    },
    {
      kind: "offer",
      tab: "offer /",
      h2: "The AI Feasibility Sprint",
      paragraphs: [
        "A scoped, fixed-fee sprint, [[TODO: real figure]], that produces: a working proof of concept on your data, an evaluation set with measured accuracy, a per-request and per-month cost model, a production architecture, and a go/no-go recommendation we will actually stand behind, including \"do not build this\".",
        "Price: [[TODO: real figure]].",
      ],
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "Do you use LangChain?", a: "Yes, LangChain and LangGraph for orchestration and LangSmith for tracing, when they fit. For simple pipelines we write plain code; frameworks are a choice, not a reflex." },
      { q: "Which vector database do you recommend?", a: "Qdrant for most production cases because of its performance, filtering, and self-hosting option. We also work with pgvector where PostgreSQL is already in place." },
      { q: "How do you control AI costs?", a: "Model routing, caching, prompt and context budgeting, batching, and self-hosted models where volume justifies it. Cost is designed before the first prompt is written." },
      { q: "How do you keep AI outputs safe and correct?", a: "Evaluation sets built with you, guardrails on inputs and outputs, human approval on any action that touches money, customers, or records, and full tracing so every answer can be explained." },
      { q: "Will our data be used to train models?", a: "No. Client data stays in isolated environments and never enters an AI tool outside them. This is one of our published rules." },
      { q: "Can you build on OpenAI, Anthropic, or open models?", a: "All three. We pick per case on accuracy, latency, cost, and data residency, and we design so you can switch providers later." },
    ],
  },
  related: ["/vibe-coding-rescue", "/devops-and-cloud-cost", "/internal-systems", "/open-source"],
  schema: {
    service: {
      name: "AI Solutions Development",
      serviceType: "AI and machine learning application development",
      areaServed: ["IN", "US", "EU", "AE", "SA"],
      offer: { name: "AI Feasibility Sprint", priceCurrency: "USD", description: "Scoped, fixed-fee sprint producing a proof of concept, evaluation set, cost model, production architecture, and go/no-go recommendation." },
    },
  },
};
