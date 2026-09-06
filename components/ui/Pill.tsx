export function Pill({ href, label, tone, size, className = "" }: { href: string; label: string; tone: "paper" | "dark"; size?: "lg"; className?: string }) {
  const chip = tone === "paper" ? "chip--dark" : "chip--a1";
  return (
    <a className={`pill pill--${tone} ${size ? `pill--${size}` : ""} ${className}`} href={href}>
      {label}
      <span className={`chip ${chip}`} aria-hidden="true">↗</span>
    </a>
  );
}
