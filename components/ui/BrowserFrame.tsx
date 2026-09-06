export function BrowserFrame({ host, label, ratio = "16x10" }: { host: string; label: string; ratio?: "16x10" | "16x9" }) {
  return (
    <div className="frame">
      <div className="frame__bar" aria-hidden="true">
        <span className="frame__dot" /><span className="frame__dot" /><span className="frame__dot" />
        <span className="frame__host">{host}</span>
      </div>
      <div className={`ph ph--${ratio}`} role="img" aria-label={`Screenshot placeholder: ${host}`}>{label}</div>
    </div>
  );
}
