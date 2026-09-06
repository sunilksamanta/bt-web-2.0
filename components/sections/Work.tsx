import { work } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { OutLink } from "@/components/ui/OutLink";

export function Work() {
  return (
    <Stratum id="work" label="work /" tone="canvas" className="work">
      <h2 className="h2 work__title">{work.title}</h2>
      <p className="lede work__intro">{work.intro}</p>

      <div className="work__list">
        {work.projects.map((p, i) => (
          <details key={p.slug} className="prow" name="work" open={i === 0} id={`work-${p.slug}`}>
            <summary className="prow__sum">
              <span className="prow__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="prow__name">{p.name}</h3>
              <span className="prow__tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </span>
              <span className="prow__sign" aria-hidden="true" />
            </summary>
            <div className="prow__body">
              <div>
                <BrowserFrame host={p.host ?? p.name} label={p.shot} />
                {p.crop && <div className="ph ph--crop">{p.crop}</div>}
              </div>
              <div className="prow__copy">
                <p className="prow__desc">{p.description}</p>
                {p.url && p.host && <OutLink href={p.url} label={p.host} />}
              </div>
            </div>
          </details>
        ))}
      </div>
      <p className="work__closing">{work.closing}</p>
    </Stratum>
  );
}
