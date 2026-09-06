import { openSource } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { OutLink } from "@/components/ui/OutLink";

export function OpenSource() {
  return (
    <Stratum id="open-source" label="open-source /" tone="dark" className="oss" ariaLabel="Open source">
      <h2 className="h2 oss__title">{openSource.title}</h2>
      <p className="lede oss__intro">{openSource.intro}</p>
      <p className="lede oss__insist">{openSource.insist}</p>

      <div className="oss__grid">
        {openSource.tools.map((t) => (
          <article key={t.name} className="tool">
            <div className="tool__head">
              <h3 className="tool__name">{t.name}</h3>
              <span className="tag">{t.kind}</span>
            </div>
            <p className="tool__desc">{t.description}</p>
            {t.demo.type === "terminal" ? (
              <pre className="term" aria-label={`${t.name} example`}>
                {t.demo.lines.map((l, i) => (
                  <div key={i} className={l.dim ? "term__dim" : undefined}>
                    {l.prompt && <span className="term__p">{l.prompt}</span>}{l.prompt ? " " : ""}{l.text}
                  </div>
                ))}
              </pre>
            ) : (
              <div className="tool__shot">
                <div className="ph ph--16x9" role="img" aria-label={t.demo.label}>{t.demo.label}</div>
              </div>
            )}
            <OutLink href={t.url} label={t.linkLabel} />
          </article>
        ))}
      </div>

      <div className="oss__also">
        <span className="oss__also-label">also /</span>
        {openSource.also.map((a) => (
          <span key={a} className="oss__also-chip">{a}</span>
        ))}
      </div>
    </Stratum>
  );
}
