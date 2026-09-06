import { services } from "@/content/site";
import { homeServices } from "@/content/services";
import { Stratum } from "@/components/ui/Stratum";

export function Services() {
  return (
    <Stratum id="services" label="services /" tone="canvas" className="services">
      <h2 className="h2 services__title">{services.title}</h2>
      <div className="svc-grid">
        {homeServices.map((s) => (
          <article key={s.slug} className="svc">
            <h3 className="svc__title">{s.href ? <a href={s.href}>{s.title}</a> : s.title}</h3>
            <p className="svc__body">{s.body}</p>
          </article>
        ))}
        <a className="svc svc--all" href="/services">
          <span className="svc__label">all services /</span>
          <span className="svc__title svc--all__title">See all services offered</span>
          <span className="svc__body svc--all__body">Web3, GIS and logistics, internal systems, vibe coding rescue, and more.</span>
          <span className="chip chip--a1" aria-hidden="true">↗</span>
        </a>
      </div>
    </Stratum>
  );
}
