import { SITE_URL, company } from "@/content/site";

export const dynamic = "force-static";

const body = `# Broadifi Technologies
> Next-generation development shop in Kolkata, India, founded 2019. Ships production software fast on architecture built to scale gradually and cost less to run, using AI under strict human rules. Maintains open-source tools CalmAPI, Ognom, and TerCTL.

## Services
- [Vibe coding rescue](${SITE_URL}/vibe-coding-rescue): audit and production hardening for AI-generated codebases.
- [DevOps and cloud cost](${SITE_URL}/devops-and-cloud-cost): Kubernetes, monitoring, and cloud cost engineering; no vendor lock-in.
- [AI solutions](${SITE_URL}/ai-solutions): agents, RAG, LLM features, and voice agents in production under human rules.
- [Development stacks](${SITE_URL}/stacks): Node.js, NestJS, Next.js, Python, Go, MongoDB, PostgreSQL.
- [Internal systems](${SITE_URL}/internal-systems): inventory, HR, procurement, ERP-class software.

## Open source
- [CalmAPI](https://calmapi.dev): production-ready modular Node.js REST API framework, MIT.
- [Ognom](${company.social.github}): free native MongoDB client with visual aggregation builder and AI-assisted query fixing.
- [TerCTL](https://terctl.dev): open-source desktop SSH terminal built with Tauri and React.
- [All open source](${SITE_URL}/open-source)

## Facts
- Founded 2019, Kolkata, India. Bootstrapped. 11 to 50 people.
- ISO 9001:2015 certified. DPIIT recognized.
- Clients in India, United States, European Union, Middle East.
- AI usage policy: humans decide architecture; a named engineer owns every merged line; tests and CI gate everything; no client data enters AI tools; we disclose where AI helped.
- Contact: ${company.email}. Site: ${SITE_URL}. Sitemap: ${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
