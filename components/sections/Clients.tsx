import { clients } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";

export function Clients() {
  return (
    <Stratum id="clients" label="clients /" tone="dark" className="clients" headClassName="clients__head">
      <figure style={{ margin: 0 }}>
        <blockquote className="clients__quote">“{clients.featured.quote}”</blockquote>
        <figcaption className="clients__by">
          <span className="clients__avatar" aria-hidden="true" />
          <span>{clients.featured.name}, {clients.featured.role}</span>
        </figcaption>
      </figure>
      <div className="clients__grid">
        {clients.more.map((t) => (
          <figure key={t.name} className="tquote" style={{ margin: 0 }}>
            <blockquote><p>“{t.quote}”</p></blockquote>
            <figcaption>{t.name}, {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </Stratum>
  );
}
