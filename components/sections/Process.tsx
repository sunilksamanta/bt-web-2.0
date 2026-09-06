import { workflow } from "@/content/site";
import { Stratum } from "@/components/ui/Stratum";

export function Process() {
  return (
    <Stratum id="process" label="process /" tone="light" className="process">
      <h2 className="h2 process__title">{workflow.title}</h2>
      <p className="lede process__intro">{workflow.intro}</p>
      <ol className="steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {workflow.steps.map((s) => (
          <li key={s.n} className="step">
            <div className="step__n" aria-hidden="true">{s.n}</div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="rules">
        <div className="rules__label">the human rules for AI /</div>
        <ol className="rules__list">
          {workflow.rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
      </div>
    </Stratum>
  );
}
