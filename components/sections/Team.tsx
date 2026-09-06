import { team } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { OutLink } from "@/components/ui/OutLink";

export function Team() {
  return (
    <Stratum id="team" label="team /" tone="light" className="team">
      <h2 className="h2 team__title">{team.title}</h2>
      <p className="lede team__intro">{team.intro}</p>
      <div style={{ marginBottom: "clamp(28px, 4vw, 44px)", marginTop: "-16px" }}><OutLink href="/team" label="Meet the team" /></div>
      <div className="team__grid">
        {team.photos.map((p) => (
          <div key={p} className="ph team__photo" role="img" aria-label="Team photo placeholder">{p}</div>
        ))}
        <div className="team__culture">
          <span className="team__culture-label">culture /</span>
          <p className="team__culture-text">{team.culture}</p>
        </div>
      </div>
    </Stratum>
  );
}
