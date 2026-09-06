import type { Narrative } from "./types";

export const internalSystems: Narrative = {
  path: "/internal-systems",
  slug: "internal-systems",
  tab: "operations /",
  title: "Custom ERP, Inventory, HR, Procurement Software | Broadifi",
  metaDescription:
    "Broadifi builds internal systems that run companies quietly: inventory, HR, procurement, and ERP software integrated with Tally, Zoho, and your tools.",
  ogTitle: "Software that runs a company quietly.",
  h1: "Software that runs a company quietly.",
  opening:
    "Broadifi Technologies builds internal operations software for established businesses: inventory, HR, procurement, order management, and ERP-class systems that integrate with Tally, Zoho, and the tools you already run. Designed to work for years, cost little to operate, and never trap you in a vendor.",
  witty: "The best internal system is the one nobody talks about, because it just works.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "Internal Systems", path: "/internal-systems" }],
  blocks: [
    {
      kind: "bullets",
      tab: "who /",
      h2: "Is this page for you?",
      items: [
        "Your operations live in spreadsheets, WhatsApp groups, and one person's memory, and growth is exposing that.",
        "You outgrew an off-the-shelf tool and its per-seat pricing, and customizing it costs more than building.",
        "You need inventory, HR, or procurement to talk to your accounting software without manual re-entry.",
      ],
    },
    {
      kind: "steps",
      tab: "process /",
      h2: "How we build systems that last",
      steps: [
        { title: "Map the real process", body: "We shadow the people who do the work before drawing a screen." },
        { title: "Design the data model first", body: "The model outlives every interface. We get it right and document it." },
        { title: "Build the core, then integrate", body: "Tally, Zoho, Busy, Dynamics, Shopify, payment gateways, and your existing tools." },
        { title: "Roles, audit trails, and approvals", body: "Internal software is about who may do what, and proving it later." },
        { title: "Deploy lean", body: "Right-sized infrastructure that costs a fraction of per-seat SaaS at your scale." },
        { title: "Hand over and support", body: "Documentation, training, and a maintenance plan you can cancel." },
      ],
    },
    {
      kind: "prose",
      tab: "proof /",
      h2: "Systems we have built",
      paragraphs: [
        "For AliciaBots, an autonomous hull-cleaning robotics company, we built the internal product inventory, HR, and procurement systems that run the company, alongside their web presence. For Töölö, a children's library with home delivery and a franchise network, we built the operations platform. Attender, an industrial services marketplace for maritime, offshore, and wind, runs on architecture we designed.",
      ],
      muted: ["Some of our most complex systems we cannot show you. Their uptime speaks for us."],
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "Build custom or buy off the shelf?", a: "Buy when a tool fits 80 percent of your process and your headcount is small. Build when customization, integration, or per-seat cost has started to hurt. We will tell you which on the first call." },
      { q: "Can it integrate with Tally or Zoho?", a: "Yes. Accounting integration is standard in our internal systems work, including Tally, Zoho, Busy, and Microsoft Dynamics." },
      { q: "How long does an internal system take?", a: "A first usable release in [[TODO: real figure]], then iterations with your team. We ship the core early so operations improve before the project ends." },
      { q: "What does it cost to run?", a: "Typically a small, fixed monthly infrastructure cost with no per-seat pricing. We design that cost before building." },
      { q: "Who owns the software?", a: "You do. Source code, data, and infrastructure are yours, with documentation for any future team." },
    ],
  },
  related: ["/devops-and-cloud-cost", "/ai-solutions", "/stacks", "/open-source"],
  schema: {
    service: { name: "Internal Systems and ERP Development", serviceType: "Custom business software development", areaServed: ["IN", "US", "EU", "AE", "SA"] },
  },
};
