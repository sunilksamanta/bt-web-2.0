import { efficiency } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";
import { EfficiencyDiff } from "@/components/EfficiencyDiff";

export function Efficiency() {
  return (
    <Stratum id="efficiency" label="efficiency /" tone="light" className="eff" headClassName="eff__head">
      <div className="eff__grid">
        <div>
          <h2 className="h2 eff__title">{efficiency.title}</h2>
          <p className="eff__body">{efficiency.body}</p>
          <p className="eff__aside">{efficiency.aside}</p>
        </div>
        <EfficiencyDiff before={efficiency.before} after={efficiency.after} note={efficiency.note} />
      </div>
    </Stratum>
  );
}
