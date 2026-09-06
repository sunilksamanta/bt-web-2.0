import { SITE_URL, company, hero } from "@/content/site";
import { teamPage as t } from "@/content/team";
import { HeroBar } from "@/components/HeroBar";
import { RotatingWord } from "@/components/RotatingWord";
import { Stratum } from "@/components/ui/Stratum";
import { Pill } from "@/components/ui/Pill";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, ORG_ID, SITE_ID, baseNodes, breadcrumbNode } from "@/components/JsonLd";
import { TeamGrid } from "./TeamGrid";
import { KolkataClock } from "./KolkataClock";

const WAVE = [30, 62, 44, 86, 38, 70, 26, 54];

export function teamGraph() {
  const url = `${SITE_URL}${t.path}`;
  return [
    ...baseNodes(),
    {
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: t.title,
      headline: `${t.hero.prefix} ${t.hero.words[0]}`,
      description: t.metaDescription,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      dateModified: t.lastUpdated,
      inLanguage: "en",
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og/team` },
    },
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Team", path: t.path }]),
  ];
}

function Wave({ bars = WAVE, opacity = 0.5 }: { bars?: number[]; opacity?: number }) {
  return (
    <div className="wave" aria-hidden="true">
      {bars.map((h, i) => <span key={i} style={{ height: `${h}%`, opacity }} />)}
    </div>
  );
}

export function TeamPage() {
  return (
    <>
      <JsonLd graph={teamGraph()} />
      <a className="sr-only" href="#thinking">Skip to content</a>
      <div className="shell">
        <header className="stratum stratum--dark hero tpeople" id="people">
          <HeroBar tab="people /" />
          <ol className="crumbs" aria-label="Breadcrumb">
            <li><a href="/">Home</a></li>
            <li><span aria-current="page">Team</span></li>
          </ol>
          <div className="hero__body">
            <h1 className="hero__title tpeople__title">
              {t.hero.prefix} <RotatingWord words={t.hero.words} />
            </h1>
            <p className="hero__support">{t.hero.support}</p>
          </div>
        </header>

        <main>
          <Stratum id="thinking" label="thinking /" tone="light" zIndex={2}>
            <div className="eff__grid">
              <div>
                <h2 className="h2 eff__title" style={{ maxWidth: "20ch" }}>{t.thinking.h2}</h2>
              </div>
              <div className="prose">
                {t.thinking.paragraphs.map((p) => <p key={p}>{p}</p>)}
                <p className="muted">{t.thinking.aside}</p>
              </div>
            </div>
          </Stratum>

          <Stratum id="humans" label="humans /" tone="canvas" zIndex={3}>
            <p className="lede" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }}>Hover a card, or press and hold anywhere on the grid, to see what each of us makes when the editor is closed.</p>
            <TeamGrid>
              {t.members.map((m, i) => (
                <article key={i} className={`mcard ${m.pending ? "mcard--pending" : ""}`} style={{ animationDelay: `${-(i * 1.2)}s` }}>
                  <div className="lyr l1 mcard__photo ph" role="img" aria-label={m.pending ? "Team member photo pending" : `Photo of ${m.name}`}>
                    <span>{m.pending ? "member pending / photo + name" : `photo / ${m.name}`}</span>
                  </div>
                  <div className="lyr l2 mcard__meta">
                    <h3 className="mcard__name">{m.name}</h3>
                    <p className="mcard__role">{m.role}</p>
                    <div className="mcard__layers">
                      {m.layers.map((l, j) => <span key={j} className="tag">{l}</span>)}
                    </div>
                  </div>
                  <div className="art">
                    {m.artifact.type === "audio" && <Wave />}
                    {m.artifact.type === "code" && (
                      <pre className="mcard__code">
                        {m.artifact.lines.map((l, j) => <div key={j} className={l.dim ? "term__dim" : undefined}>{l.text}</div>)}
                      </pre>
                    )}
                    {m.artifact.type === "pending" && <div className="ph mcard__pending">{m.artifact.caption}</div>}
                    {m.artifact.type !== "pending" && <div className="mcard__caption">{m.artifact.caption}</div>}
                  </div>
                </article>
              ))}
            </TeamGrid>
          </Stratum>

          <Stratum id="off-hours" label="off-hours /" tone="light" className="offhours" zIndex={4}>
            <h2 className="h2 offhours__title">{t.offHours.h2}</h2>
            <div className="strip">
              {t.offHours.items.map((it, i) => (
                <figure key={i} className="strip__item" style={{ width: `min(78vw, ${it.width}px)` }}>
                  <div className={`strip__box strip__box--${it.kind}`} style={{ height: it.height }} role="img" aria-label={it.label}>
                    {it.kind === "audio" ? (
                      <>
                        <Wave bars={[34, 70, 48, 90, 36, 64, 28, 56, 42]} opacity={0.45} />
                        <span>{it.label}</span>
                      </>
                    ) : (
                      <span>{it.label}</span>
                    )}
                  </div>
                  <figcaption className="strip__caption">{it.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Stratum>

          <Stratum id="home" label="home /" tone="dark" zIndex={5} ariaLabel="Kolkata">
            <p className="kolkata__line-big">{t.kolkata.line}</p>
            <KolkataClock place={t.kolkata.place} />
          </Stratum>

          <Stratum id="how-we-are" label="how-we-are /" tone="light" zIndex={6} ariaLabel="How we are">
            <div className="values">
              {t.values.map((v, i) => <p key={v} className={i === 0 ? "values__line" : "values__line values__line--muted"}>{v}</p>)}
            </div>
          </Stratum>

          <Stratum id="join" label="join /" tone="canvas" zIndex={7}>
            <div className="contact__row">
              <h2 className="h2 join__title">{t.join.h2}</h2>
              <Pill href={t.join.href} label={t.join.cta} tone="dark" size="lg" />
            </div>
          </Stratum>
        </main>

        <Contact lastUpdated={t.lastUpdated} />
      </div>
    </>
  );
}
