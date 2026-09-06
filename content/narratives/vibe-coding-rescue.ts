import type { Narrative } from "./types";

export const vibeCodingRescue: Narrative = {
  path: "/vibe-coding-rescue",
  slug: "vibe-coding-rescue",
  tab: "rescue /",
  title: "Vibe Coding Rescue and AI Code Cleanup | Broadifi",
  metaDescription:
    "Built an app with Cursor, Lovable, Replit, or Bolt and hit the wall? Broadifi audits AI-generated code and makes it production-ready. Fixed-fee audit.",
  ogTitle: "Your AI-built app works in a demo. We make it work in production.",
  h1: "Your AI-built app works in a demo. We make it work in production.",
  opening:
    "Broadifi Technologies is a senior engineering team in Kolkata, India that rescues applications built with AI tools like Cursor, Lovable, Replit, Bolt, and v0. We audit the codebase, keep what the AI got right, restructure what it got wrong, add tests and CI, right-size the infrastructure, and hand you a system a senior engineer will respect.",
  witty: "We review AI-written code every day. Ours, and now yours.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "Vibe Coding Rescue", path: "/vibe-coding-rescue" }],
  blocks: [
    {
      kind: "bullets",
      tab: "who /",
      h2: "Is this page for you?",
      items: [
        "You shipped an MVP with an AI builder, users showed up, and now it breaks under load, leaks data, or nobody can add a feature without breaking two others.",
        "You hired a freelancer who vibe-coded the product and disappeared, and you need a team that will take ownership.",
        "Your engineers refuse to touch the codebase, or you have no engineers yet and need someone honest to tell you what you actually have.",
      ],
    },
    {
      kind: "steps",
      tab: "process /",
      h2: "How a vibe coding rescue works",
      steps: [
        { title: "Audit", body: "Two senior engineers read the entire codebase: architecture, security, data model, tests, dependencies, infrastructure, and cost. You receive a ranked risk report in plain language." },
        { title: "Decide", body: "Together we mark each part keep, restructure, or replace. A rescue is not automatically a rewrite. We rewrite only what is architecturally incompatible with production." },
        { title: "Harden", body: "We fix security holes first, then add tests, CI, environment separation, secrets management, error handling, and logging." },
        { title: "Restructure", body: "We move the code toward clean boundaries, typically a layered architecture like our own open-source CalmAPI, so it can grow without a second rescue." },
        { title: "Right-size", body: "We cost the infrastructure and shrink it: databases tuned, servers matched to real load, vendor lock-in removed where it hurts." },
        { title: "Hand over", body: "Documentation, a runbook, and a walkthrough. You own everything. You can leave us the day after, which is exactly why clients stay." },
      ],
    },
    {
      kind: "prose",
      tab: "proof /",
      h2: "Why we are good at fixing AI-generated code",
      paragraphs: [
        "Because we use AI to write code every day, under six published rules: humans decide architecture before any code is generated; every merged line has a named engineer who owns it; AI output has no shortcut to production, tests, review, and CI gate everything; no client data, credentials, or secrets ever enter an AI tool; we choose maintainability over cleverness; and we tell you where AI helped. Those rules are the checklist we run your codebase against.",
        "Our architecture standard is public: CalmAPI, our open-source Node.js REST framework, is the layered structure we migrate rescued backends toward. Read it before you hire us.",
      ],
    },
    {
      kind: "offer",
      tab: "offer /",
      h2: "The AI Code Audit",
      paragraphs: [
        "A fixed-fee diagnostic, [[TODO: real figure]] weeks, delivered by senior engineers. You receive: a ranked risk report (security, architecture, data, tests, infrastructure, cost), a keep/restructure/replace map, an infrastructure cost estimate, and a hardening plan with timeline.",
        "Price: [[TODO: real figure]]. The audit fee is credited against the hardening engagement if you continue with us.",
      ],
      notWhen:
        "If your app has no users yet and no budget for engineering, keep iterating in your AI tool; a rescue is for products that are already real. If you need a [[TODO: real figure]] landing page, we are not the right fit either.",
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "Should I rewrite or refactor my AI-generated app?", a: "Refactor when the core architecture can hold production requirements; rewrite only the parts that cannot, usually the data model or a monolith that should be modules. Our audit answers this with evidence, not opinion." },
      { q: "How long does a vibe coding cleanup take?", a: "The audit takes [[TODO: real figure]]. Hardening depends on what the audit finds; most engagements are scoped in weeks, not months, because we keep what works." },
      { q: "Will you work with my existing Supabase, Firebase, or Vercel setup?", a: "Yes. We keep managed services where they are cost-effective and portable, and we move you off them only where lock-in or cost is hurting you." },
      { q: "Can you take over from a freelancer or another agency?", a: "Yes. Handover from an absent developer is one of the most common reasons people arrive here. We start from the code, not from their notes." },
      { q: "Do you use AI during the rescue?", a: "Yes, for reading, mapping, and generating tests, under our human rules. Every change is reviewed and owned by a named engineer. No client code enters an AI tool outside our isolated environment." },
      { q: "What stacks do you rescue?", a: "Node.js, Next.js, NestJS, Python, Go, React, React Native, MongoDB, PostgreSQL, Supabase, Firebase, and the usual AI-builder output. See our stacks page." },
      { q: "Will I be locked into Broadifi afterward?", a: "No. Open standards, full documentation, clean handover. You can leave anytime." },
    ],
  },
  related: ["/devops-and-cloud-cost", "/ai-solutions", "/stacks", "/open-source"],
  schema: {
    service: {
      name: "Vibe Coding Rescue and AI Code Cleanup",
      serviceType: "Software code audit and production hardening",
      areaServed: ["IN", "US", "EU", "AE", "SA"],
      offer: { name: "AI Code Audit", priceCurrency: "USD", description: "Fixed-fee diagnostic of an AI-generated codebase: ranked risk report, keep/restructure/replace map, infrastructure cost estimate, and hardening plan." },
    },
  },
};
