export type Service = {
  slug: string;
  title: string;
  body: string;
  /** Existing page for this service, if any. Future service pages will live at /services/<slug>. */
  href?: string;
  chip?: string;
};

export const allServices: Service[] = [
  { slug: "web-and-mobile", title: "Web & Mobile", body: "From first release to scale, on architecture that grows with your users, not ahead of them.", chip: "page coming /" },
  { slug: "saas", title: "SaaS", body: "Multi-tenant platforms, billing, roles, integrations, and the unglamorous parts that decide whether it scales.", chip: "page coming /" },
  { slug: "ai-and-automation", title: "AI & Automation", body: "Conversational commerce, intelligent workflows, LLM features in production, with a human accountable for the output.", href: "/ai-solutions" },
  { slug: "cloud-and-devops", title: "Cloud & DevOps", body: "Infrastructure that scales without your bill doing the same. AWS, GCP, Azure, or your own metal. Migration off any vendor.", href: "/devops-and-cloud-cost" },
  { slug: "vibe-coding-rescue", title: "Vibe Coding Rescue", body: "Audit and production hardening for applications built with Cursor, Lovable, Replit, Bolt, or v0.", href: "/vibe-coding-rescue" },
  { slug: "internal-systems", title: "Internal Systems", body: "Inventory, HR, procurement, and ERP-class software that runs a company quietly, integrated with Tally and Zoho.", href: "/internal-systems" },
  { slug: "web3", title: "Web3", body: "Smart contracts and distributed ledger systems, including Hedera. Delivered, not whitepapered.", chip: "page coming /" },
  { slug: "gis-and-logistics", title: "GIS & Logistics", body: "Navigation, route optimisation, and supply-chain platforms where a wrong turn costs money.", chip: "page coming /" },
];

/** The four shown on the home page. */
export const homeServices = allServices.filter((s) => ["web-and-mobile", "saas", "ai-and-automation", "cloud-and-devops"].includes(s.slug));
