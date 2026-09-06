# Broadifi website 2.0

Next.js 16 (App Router, SSR/static prerender) implementation of the Broadifi redesign.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the canonical domain. It drives canonical URLs, sitemap, robots, JSON-LD, and llms.txt.

## Structure

- `content/site.ts`: every word on the page. Edit copy here, not in components.
- `components/sections/*`: one server component per stratum (Hero, About, Work, OpenSource, Process, Services, Efficiency, Team, Clients, Faq, Contact).
- `components/{Menu,RotatingWord,EfficiencyDiff}.tsx`: the only client components.
- `components/JsonLd.tsx`: schema.org graph (Organization, WebSite, WebPage, FAQPage, ItemList of work, SoftwareSourceCode for each tool).
- `app/{robots,sitemap,manifest}.ts`, `app/llms.txt/route.ts`, `app/opengraph-image.tsx`, `app/icon.svg`: SEO / AI-SEO surfaces.

## Narrative pages

Seven narrative landing pages are generated from `content/narratives/*.ts` by `components/narrative/NarrativePage.tsx`:
`/vibe-coding-rescue`, `/devops-and-cloud-cost`, `/ai-solutions`, `/stacks`, `/open-source`, `/internal-systems`.
Each ships its own metadata, OG image (`/og/<slug>`), and JSON-LD graph. Validate with:

```bash
node scripts/check-narratives.mjs http://localhost:3000
```

## Launch placeholders (from the rebrand doc, section 11)

- Efficiency section before/after infra figure (`efficiency.before/after` in `content/site.ts`).
- First-release timeline range in FAQ answer 1.
- Project screenshots (browser-frame placeholders in Work and Open Source).
- Team photos (Team section).
