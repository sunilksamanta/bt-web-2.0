import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  tone: "dark" | "light" | "canvas";
  className?: string;
  headClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
  zIndex?: number;
};

export function Stratum({ id, label, tone, className = "", headClassName = "", children, ariaLabel, zIndex }: Props) {
  return (
    <section id={id} className={`stratum stratum--${tone} ${className}`} aria-label={ariaLabel ?? label.replace(" /", "")} style={zIndex !== undefined ? { zIndex } : undefined}>
      <div className={`stratum__head ${headClassName}`}>
        <a className="stratum__label" href={`#${id}`}>{label}</a>
        <span className="stratum__rule" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
