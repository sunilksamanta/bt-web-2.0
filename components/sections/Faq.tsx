import { faq } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";

export function Faq() {
  return (
    <Stratum id="faq" label="faq /" tone="light" className="faq" headClassName="faq__head" ariaLabel="Frequently asked questions">
      <h2 className="h2 faq__title">{faq.title}</h2>
      <div className="faq__list">
        {faq.items.map((item, i) => (
          <details key={item.q} className="qa" name="faq" open={i === 0}>
            <summary className="qa__sum">
              <h3 style={{ font: "inherit" }}>{item.q}</h3>
              <span className="qa__sign" aria-hidden="true" />
            </summary>
            <p className="qa__a">{item.a}</p>
          </details>
        ))}
      </div>
    </Stratum>
  );
}
