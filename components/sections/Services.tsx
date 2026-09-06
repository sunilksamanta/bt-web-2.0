import { services } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";

export function Services() {
  return (
    <Stratum id="services" label="services /" tone="canvas" className="services">
      <h2 className="h2 services__title">{services.title}</h2>
      <div className="svc-grid">
        {services.items.map((s) => (
          <article key={s.title} className="svc">
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__body">{s.body}</p>
          </article>
        ))}
      </div>
    </Stratum>
  );
}
