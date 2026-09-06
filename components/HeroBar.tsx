import { company } from "@/content/site";
import { MenuButton } from "@/components/Menu";

export function HeroBar({ tab }: { tab: string }) {
  return (
    <div className="hero__bar">
      <span className="stratum__label">{tab}</span>
      <span className="stratum__rule" aria-hidden="true" />
      <a className="hero__brand" href="/" aria-label={`${company.shortName} home`}>
        <span className="hero__brand-dot" aria-hidden="true" />
        <span className="hero__brand-name">broadifi</span>
      </a>
      <span className="stratum__rule" aria-hidden="true" />
      <MenuButton />
    </div>
  );
}
