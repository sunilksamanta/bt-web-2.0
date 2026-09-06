import { hero } from "@/content/site";
import { HeroBar } from "@/components/HeroBar";
import { RotatingWord } from "@/components/RotatingWord";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
  return (
    <header id="interface" className="stratum stratum--dark hero">
      <HeroBar tab="interface /" />

      <div className="hero__body">
        <h1 className="hero__title">
          {hero.prefix} <RotatingWord words={hero.words} />
        </h1>
        <p className="hero__support">{hero.support}</p>
      </div>

      <div className="hero__foot">
        <Pill href="#contact" label={hero.cta} tone="paper" />
      </div>
    </header>
  );
}
