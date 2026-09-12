import type { CSSProperties } from "react";
import Image from "next/image";
import { company, openSource } from "@/content/site";
import type { Tool } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { OutLink } from "@/components/ui/OutLink";

function Window({ tool }: { tool: Tool }) {
  const { demo } = tool;
  return (
    <div className="osw">
      <div className="osw__bar" aria-hidden="true">
        <span className="osw__dot" />
        <span className="osw__dot" />
        <span className="osw__dot" />
        <span className="osw__title">{tool.window}</span>
      </div>
      {demo.type === "terminal" ? (
        <pre className="term" aria-label={`${tool.name} example`}>
          {demo.lines.map((l, i) => (
            <div key={i} className={`term__line${l.dim ? " term__dim" : ""}`} style={{ "--i": i } as CSSProperties}>
              {l.prompt && <span className="term__p">{l.prompt}</span>}
              {l.prompt ? " " : ""}
              {l.text}
              {i === demo.lines.length - 1 && <span className="term__cursor" aria-hidden="true" />}
            </div>
          ))}
        </pre>
      ) : demo.type === "image" ? (
        <Image
          className="osw__img"
          src={demo.src}
          alt={demo.alt}
          width={demo.width}
          height={demo.height}
          sizes="(max-width: 880px) 100vw, 50vw"
          loading="lazy"
        />
      ) : (
        <div className="ph osw__shot" role="img" aria-label={demo.label}>
          {demo.label}
        </div>
      )}
    </div>
  );
}

export function OpenSource() {
  return (
    <Stratum id="open-source" label="open-source /" tone="dark" className="oss" ariaLabel="Open source">
      <div className="oss__head">
        <h2 className="h2 oss__title">{openSource.title}</h2>
        <div className="oss__copy">
          <p className="lede oss__intro">{openSource.intro}</p>
          <p className="oss__insist">{openSource.insist}</p>
        </div>
      </div>

      <ol className="oss__list">
        {openSource.tools.map((t, i) => (
          <li key={t.name} className="osr">
            <article className="osr__in">
              <div className="osr__text">
                <div className="osr__top">
                  <span className="osr__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="osr__name">{t.name}</h3>
                  <span className="tag">{t.kind}</span>
                </div>
                <ul className="osr__meta" aria-label={`${t.name} facts`}>
                  {t.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p className="osr__desc">{t.description}</p>
                <OutLink href={t.url} label={t.linkLabel} />
              </div>
              <Window tool={t} />
            </article>
          </li>
        ))}
      </ol>

      <div className="oss__foot">
        <div className="oss__also">
          <span className="oss__also-label">{openSource.alsoLabel}</span>
          {openSource.also.map((a) => (
            <span key={a} className="oss__also-chip">{a}</span>
          ))}
        </div>
        <OutLink href={company.social.github} label={openSource.githubLabel} />
      </div>
    </Stratum>
  );
}
