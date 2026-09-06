export function OutLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a className="out" href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {label} <span className="out__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
