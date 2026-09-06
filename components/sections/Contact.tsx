import { company, contact } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { Pill } from "@/components/ui/Pill";

export function Contact({ lastUpdated }: { lastUpdated?: string } = {}) {
  return (
    <Stratum id="contact" label="contact /" tone="canvas" className="contact" headClassName="contact__head">
      <div className="contact__row">
        <h2 className="h2 contact__title">{contact.title}</h2>
        <Pill href={`mailto:${company.email}`} label={contact.cta} tone="dark" size="lg" />
      </div>
      <div className="contact__divider" aria-hidden="true" />
      <footer className="footer">
        <div className="footer__col footer__col--brand">
          <span className="footer__brand">broadifi</span>
          <address className="footer__addr">
            <span>{company.address.street}, {company.address.locality} {company.address.postalCode}</span>
            <a className="footer__phone" href={`tel:${company.phoneIntl}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>
        {contact.columns.map((col) => (
          <nav key={col.label} className="footer__col" aria-label={col.label.replace(" /", "")}>
            <span className="footer__label">{col.label}</span>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>{l.label}</a>
            ))}
          </nav>
        ))}
      </footer>
      <div className="footer__legal">
        {contact.legal}
        {lastUpdated && <span className="footer__updated">Last updated: {lastUpdated}</span>}
      </div>
    </Stratum>
  );
}
