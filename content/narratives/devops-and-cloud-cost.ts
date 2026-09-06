import type { Narrative } from "./types";

export const devopsAndCloudCost: Narrative = {
  path: "/devops-and-cloud-cost",
  slug: "devops-and-cloud-cost",
  tab: "efficiency /",
  title: "DevOps, Kubernetes and Cloud Cost Engineering | Broadifi",
  metaDescription:
    "Broadifi engineers Kubernetes, monitoring, and cloud infrastructure that scales without your bill doing the same. Fixed-fee cost review. No vendor lock-in.",
  ogTitle: "We treat your cloud bill like a bug.",
  h1: "We treat your cloud bill like a bug.",
  opening:
    "Broadifi Technologies engineers DevOps, Kubernetes, and monitoring for teams whose cloud spend is growing faster than revenue or whose deploys are fragile. We right-size infrastructure, design for gradual scale, build observability, and keep everything on open standards so you stay free to leave any vendor. Including us.",
  witty: "Vendor lock-in is just tech debt with a subscription.",
  lastUpdated: "6 September 2026",
  breadcrumb: [{ name: "Home", path: "/" }, { name: "DevOps and Cloud Cost", path: "/devops-and-cloud-cost" }],
  blocks: [
    {
      kind: "bullets",
      tab: "who /",
      h2: "Is this page for you?",
      items: [
        "Your AWS, GCP, or Azure bill went up again and nobody can explain exactly why.",
        "Deploys are scary, rollbacks are manual, and monitoring means someone noticing on Slack.",
        "You are on a platform or an agency stack that you cannot leave without a rewrite.",
      ],
    },
    {
      kind: "steps",
      tab: "process /",
      h2: "What cloud cost engineering includes",
      steps: [
        { title: "Cost audit", body: "We map every recurring charge to a workload and a decision. Most bills contain servers sized for a launch day that never came." },
        { title: "Right-sizing", body: "Instances, databases, storage tiers, and reserved capacity matched to real load, with autoscaling based on evidence, not fear." },
        { title: "Kubernetes done quietly", body: "Cluster design, node pools, requests and limits tuned, spot capacity where safe, and no Kubernetes at all when a simpler setup costs less." },
        { title: "Observability", body: "Metrics, logs, and traces with alerts that mean something. Prometheus, Grafana, OpenTelemetry, or your existing tools." },
        { title: "CI/CD and environments", body: "Reproducible pipelines, preview environments, and rollbacks that take one command." },
        { title: "Portability", body: "Containers, infrastructure as code, and open standards, so moving between AWS, GCP, Azure, or bare metal is a plan, not a crisis. We have migrated clients off previous agencies' stacks." },
        { title: "Monthly cost review", body: "Recurring cost is a design decision, so we keep designing it after launch." },
      ],
    },
    {
      kind: "prose",
      tab: "proof /",
      h2: "What we have built and run",
      paragraphs: [
        "Setside, a cloud deployment platform for developers, is our own product. Our KrakenD API gateway plugin toolkit, written in Go and Docker, is open source. Our team runs Linux, Kubernetes, and bare-metal infrastructure for client platforms in maritime, commerce, and education.",
        "Representative result: [[TODO: real figure]] (one real before/after monthly infrastructure figure from a client engagement, with the client's permission).",
      ],
      diff: { before: "TODO: real figure", after: "TODO: real figure", note: "representative engagement, to be filled with a real client figure" },
    },
    {
      kind: "offer",
      tab: "offer /",
      h2: "The Cloud Cost Review",
      paragraphs: [
        "A fixed-fee review, [[TODO: real figure]], that produces: a line-by-line cost map, a savings estimate with confidence bands, a prioritized plan ordered by savings per hour of work, and a lock-in risk assessment.",
        "Price: [[TODO: real figure]]. Credited against implementation if you continue with us.",
      ],
      notWhen:
        "If your monthly infrastructure spend is below [[TODO: real figure]], the review may cost more than it saves in the first year; we will tell you that on the call and point you to what to fix yourself.",
    },
  ],
  faq: {
    h2: "Questions clients actually asked",
    items: [
      { q: "How do you reduce cloud costs without hurting performance?", a: "By matching resources to measured load, tuning databases before adding replicas, using autoscaling on evidence, and removing services that exist because of a vendor default rather than a need." },
      { q: "Do we need Kubernetes?", a: "Often not. We recommend Kubernetes when you run many services with variable load and a team to operate it. Otherwise a simpler container setup is cheaper and calmer." },
      { q: "Can you migrate us off our current cloud or agency stack?", a: "Yes. We plan migrations with zero-downtime cutovers and keep both environments running until the new one is proven." },
      { q: "What monitoring do you set up?", a: "Metrics, logs, and traces, with alerting tied to user-facing symptoms. We prefer open tools like Prometheus, Grafana, and OpenTelemetry but will work with Datadog or your existing stack." },
      { q: "Will we be locked into Broadifi?", a: "No. Infrastructure as code, documented runbooks, and open standards mean any competent team can take over." },
      { q: "Do you work with AWS, GCP, and Azure?", a: "Yes, and with bare metal and hybrid setups. The right choice depends on your workload and your bill, not on our preferences." },
    ],
  },
  related: ["/vibe-coding-rescue", "/stacks", "/internal-systems", "/open-source"],
  schema: {
    service: {
      name: "DevOps, Kubernetes and Cloud Cost Engineering",
      serviceType: "Cloud infrastructure and cost optimization",
      areaServed: ["IN", "US", "EU", "AE", "SA"],
      offer: { name: "Cloud Cost Review", priceCurrency: "USD", description: "Fixed-fee review producing a line-by-line cost map, savings estimate, prioritized plan, and lock-in risk assessment." },
    },
  },
};
