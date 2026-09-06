import { about, company } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";

export function About() {
  return (
    <Stratum id="about" label="about /" tone="light" className="about" headClassName="about__head">
      <h2 className="about__lead">{about.lead}</h2>
      <p className="about__body">{about.body}</p>
      <ul className="about__creds" aria-label="Credentials" style={{ listStyle: "none", padding: 0 }}>
        {company.credentials.map((c) => (
          <li key={c} className="cred">{c}</li>
        ))}
      </ul>
    </Stratum>
  );
}
