# Broadifi website 2.0

Next.js 16 App Router site for Broadifi Technologies. Landing page only so far; Team page planned.

## Canonical domain (important)

- The site lives at `https://www.broadifitech.com`. Always **www**.
- Every absolute URL in the project must use the www host: canonical, Open Graph, sitemap, robots, JSON-LD `@id`s, llms.txt, emails, docs.
- The apex domain `broadifitech.com` redirects to www **at the Vercel level**. Do not add redirect logic to `next.config.ts` or middleware.
- Absolute URLs come from `SITE_URL` in `content/site.ts` (env `NEXT_PUBLIC_SITE_URL`, default `https://www.broadifitech.com`). Never hardcode the domain elsewhere.

## Content rules

- All copy lives in `content/site.ts`. Edit words there, not in components.
- Copy source of truth: `docs/broadifi-rebrand-company-profile.md`. It wins on wording and claims; the design file wins on layout and motion.
- Only projects present in the design are shown: Mulltiply, SkillDrift, Mockshala, Töölö, AliciaBots.
- Primary CTA is "Book a call". No superlatives, no metrics without real data (see doc section 11).

## Structure

- `components/sections/*` are server components, one per stratum.
- Client components are limited to `Menu`, `RotatingWord`, `EfficiencyDiff`.
- SEO surfaces: `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `app/llms.txt/route.ts`, `app/opengraph-image.tsx`, `components/JsonLd.tsx`.

## Commands

```bash
pnpm dev
pnpm build
```

## Narrative pages

- Content lives in `content/narratives/*.ts`, one typed `Narrative` per page, registered in `content/narratives/index.ts`. Rendered by `components/narrative/NarrativePage.tsx` with the existing strata components. No page-specific components.
- AI use-case pages live under `/ai-solutions/<slug>` and are published only by adding them to `aiUseCases` in the registry. Template: `content/narratives/_use-case-template.ts`.
- Unknown figures are written as `[[TODO: real figure]]` markers. They render as a visible highlighted mark and must never be replaced with a plausible number.
- Rules enforced by `node scripts/check-narratives.mjs` (run against a running dev server): no em/en dashes, no banned words, title under 60 and description under 155 characters, one JSON-LD script per page with Organization + Service provider ref + BreadcrumbList + FAQPage mirroring the visible FAQ, Mulltiply at most once per narrative page, opening paragraph under 60 words, Last updated line, related links.
- Run the checker after any content change; it prints the list of open TODOs.
