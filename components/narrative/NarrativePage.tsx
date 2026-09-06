import type { Metadata } from "next";
import { SITE_URL, company, hero } from "@/content/site";
import type { Block, Narrative } from "@/content/narratives/types";
import { narrativeByPath } from "@/content/narratives";
import { Stratum } from "@/components/ui/Stratum";
import { Pill } from "@/components/ui/Pill";
import { OutLink } from "@/components/ui/OutLink";
import { HeroBar } from "@/components/HeroBar";
import { EfficiencyDiff } from "@/components/EfficiencyDiff";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, ORG_ID, SITE_ID, baseNodes, breadcrumbNode, faqNode } from "@/components/JsonLd";
import { Rich, plain } from "./Rich";

const tones = ["light", "canvas"] as const;
const idOf = (tab: string) => tab.replace(/\s*\/\s*$/, "").trim().replace(/\s+/g, "-");

export function narrativeMetadata(n: Narrative): Metadata {
  const url = `${SITE_URL}${n.path}`;
  const image = `${SITE_URL}/og/${n.slug}`;
  return {
    title: { absolute: n.title },
    description: n.metaDescription,
    alternates: { canonical: n.path },
    openGraph: { type: "website", url, siteName: company.name, title: n.ogTitle, description: n.metaDescription, images: [{ url: image, width: 1200, height: 630, alt: n.ogTitle }] },
    twitter: { card: "summary_large_image", title: n.ogTitle, description: n.metaDescription, images: [image] },
  };
}

export function narrativeGraph(n: Narrative) {
  const url = `${SITE_URL}${n.path}`;
  const nodes: object[] = [...baseNodes()];
  nodes.push({
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: n.title,
    headline: n.h1,
    description: n.metaDescription,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    dateModified: n.lastUpdated,
    inLanguage: "en",
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og/${n.slug}` },
  });
  if (n.schema.service) {
    const s = n.schema.service;
    nodes.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: s.name,
      serviceType: s.serviceType,
      description: plain(n.opening),
      url,
      provider: { "@id": ORG_ID },
      areaServed: s.areaServed ?? ["IN", "US", "EU", "AE", "SA"],
      ...(s.offer
        ? { offers: { "@type": "Offer", name: s.offer.name, ...(s.offer.description ? { description: s.offer.description } : {}), ...(s.offer.priceCurrency ? { priceCurrency: s.offer.priceCurrency } : {}), url: `${url}#offer`, seller: { "@id": ORG_ID } } }
        : {}),
    });
  }
  for (const sw of n.schema.software ?? []) {
    nodes.push({
      "@type": "SoftwareApplication",
      "@id": `${url}#${sw.name.toLowerCase()}`,
      name: sw.name,
      description: sw.description,
      url: sw.url,
      applicationCategory: sw.applicationCategory,
      operatingSystem: sw.operatingSystem,
      ...(sw.license ? { license: sw.license } : {}),
      ...(sw.codeRepository ? { codeRepository: sw.codeRepository } : {}),
      ...(sw.downloadUrl ? { downloadUrl: sw.downloadUrl } : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@id": ORG_ID },
    });
  }
  if (n.schema.itemList) {
    nodes.push({
      "@type": "ItemList",
      "@id": `${url}#list`,
      name: n.schema.itemList.name,
      itemListElement: n.schema.itemList.items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${SITE_URL}${it.path}` })),
    });
  }
  nodes.push(faqNode(`${url}#faq`, n.faq.items.map((f) => ({ q: plain(f.q), a: plain(f.a) }))));
  nodes.push(breadcrumbNode(n.breadcrumb));
  return nodes;
}

function BlockView({ b, tone, z }: { b: Block; tone: (typeof tones)[number]; z: number }) {
  const id = idOf(b.tab);
  const head = (
    <>
      <h2 className="h2 nblock__h2">{b.h2}</h2>
      {"intro" in b && b.intro && <p className="lede nblock__intro"><Rich text={b.intro} /></p>}
    </>
  );
  switch (b.kind) {
    case "bullets":
      return (
        <Stratum id={id} label={b.tab} tone={tone} zIndex={z}>
          {head}
          <ul className="bul">{b.items.map((t) => <li key={t}><span><Rich text={t} /></span></li>)}</ul>
        </Stratum>
      );
    case "steps":
      return (
        <Stratum id={id} label={b.tab} tone={tone} zIndex={z}>
          {head}
          <ol className="steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {b.steps.map((s, i) => (
              <li key={s.title} className="step">
                <div className="step__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body"><Rich text={s.body} /></p>
              </li>
            ))}
          </ol>
        </Stratum>
      );
    case "prose":
      return (
        <Stratum id={id} label={b.tab} tone={b.tab.startsWith("proof") ? "dark" : tone} zIndex={z}>
          {head}
          <div className={b.diff ? "prose--grid" : undefined}>
            <div className="prose">
              {b.paragraphs.map((p) => <p key={p}><Rich text={p} /></p>)}
              {b.muted?.map((p) => <p key={p} className="muted"><Rich text={p} /></p>)}
            </div>
            {b.diff && <EfficiencyDiff before={b.diff.before} after={b.diff.after} note={b.diff.note} />}
          </div>
        </Stratum>
      );
    case "offer":
      return (
        <Stratum id="offer" label={b.tab} tone={tone} zIndex={z}>
          {head}
          <div className="prose">
            {b.paragraphs.map((p) => <p key={p}><Rich text={p} /></p>)}
            {b.notWhen && <p className="muted"><strong>When not to hire us.</strong> <Rich text={b.notWhen} /></p>}
          </div>
          <div style={{ marginTop: 32 }}>
            <Pill href="#contact" label={hero.cta} tone="dark" />
          </div>
        </Stratum>
      );
    case "rules":
      return (
        <Stratum id={id} label={b.tab} tone={tone} zIndex={z}>
          {head}
          <div className="rules" style={{ marginTop: 0, borderTop: "none", paddingTop: 0 }}>
            <ol className="rules__list">{b.rules.map((r) => <li key={r}>{r}</li>)}</ol>
          </div>
          {b.after && <div className="prose" style={{ marginTop: 32 }}>{b.after.map((p) => <p key={p}>{p}</p>)}</div>}
        </Stratum>
      );
    case "cards":
      return (
        <Stratum id={id} label={b.tab} tone={tone} zIndex={z}>
          {head}
          <div className="ncards">
            {b.cards.map((c) => (
              <article key={c.title} className="ncard">
                <div className="ncard__head">
                  <h3 className="ncard__title">{c.href && !c.links ? <a href={c.href}>{c.title}</a> : c.title}</h3>
                  {c.chip && <span className="tag">{c.chip}</span>}
                </div>
                <p className="ncard__body"><Rich text={c.body} /></p>
                {c.note && <p className="ncard__note">{c.note}</p>}
                {c.code && <pre className="ncard__code"><Rich text={c.code} /></pre>}
                {c.links && (
                  <div className="ncard__links">
                    {c.links.map((l) => <OutLink key={l.href + l.label} href={l.href} label={l.label} />)}
                  </div>
                )}
                {c.href && c.linkLabel && !c.links && <OutLink href={c.href} label={c.linkLabel} />}
              </article>
            ))}
          </div>
          {b.after && <div className="prose" style={{ marginTop: 28 }}>{b.after.map((p) => <p key={p} className="muted">{p}</p>)}</div>}
        </Stratum>
      );
  }
}

export function NarrativePage({ n }: { n: Narrative }) {
  const related = n.related.map((p) => narrativeByPath[p]).filter(Boolean);
  return (
    <>
      <JsonLd graph={narrativeGraph(n)} />
      <a className="sr-only" href="#who">Skip to content</a>
      <div className="shell">
        <header className="stratum stratum--dark hero nhero" id="interface">
          <HeroBar tab={n.tab} />
          <ol className="crumbs" aria-label="Breadcrumb">
            {n.breadcrumb.map((b, i) => (
              <li key={b.path}>{i < n.breadcrumb.length - 1 ? <a href={b.path}>{b.name}</a> : <span aria-current="page">{b.name}</span>}</li>
            ))}
          </ol>
          <div className="nhero__body">
            <h1 className="nhero__title">{n.h1}</h1>
            <p className="nhero__opening">{n.opening}</p>
            {n.witty && <p className="nhero__witty">{n.witty}</p>}
          </div>
          <div className="hero__foot nhero__foot">
            <Pill href="#contact" label={hero.cta} tone="paper" />
          </div>
        </header>

        <main>
          {n.blocks.map((b, i) => <BlockView key={b.tab + b.h2} b={b} tone={tones[i % 2]} z={i + 2} />)}

          <Stratum id="faq" label="faq /" tone="light" className="faq" headClassName="faq__head" ariaLabel="Frequently asked questions" zIndex={n.blocks.length + 2}>
            <h2 className="h2 faq__title">{n.faq.h2}</h2>
            <div className="faq__list">
              {n.faq.items.map((item, i) => (
                <details key={item.q} className="qa" name="faq" open={i === 0}>
                  <summary className="qa__sum">
                    <h3 style={{ font: "inherit" }}><Rich text={item.q} /></h3>
                    <span className="qa__sign" aria-hidden="true" />
                  </summary>
                  <p className="qa__a"><Rich text={item.a} /></p>
                </details>
              ))}
            </div>
          </Stratum>

          <Stratum id="related" label="related /" tone="dark" ariaLabel="Related narratives" zIndex={n.blocks.length + 3}>
            <h2 className="h2 nblock__h2">Read next</h2>
            <nav className="related" aria-label="Related pages">
              {related.map((r) => (
                <a key={r.path} className="related__item" href={r.path}>
                  <span className="related__tab">{r.tab}</span>
                  <span className="related__title">{r.breadcrumb[r.breadcrumb.length - 1].name} <span aria-hidden="true">↗</span></span>
                  <span className="related__desc">{r.metaDescription}</span>
                </a>
              ))}
            </nav>
          </Stratum>
        </main>

        <Contact lastUpdated={n.lastUpdated} />
      </div>
    </>
  );
}
