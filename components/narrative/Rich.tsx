import { Fragment, type ReactNode } from "react";

/** Renders text with [[TODO: ...]] markers as a visible highlighted mark. */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\[\[TODO:[^\]]*\]\])/g);
  return parts.map((p, i) => {
    const m = p.match(/^\[\[(TODO:[^\]]*)\]\]$/);
    return m ? <mark key={i} className="todo">{m[1]}</mark> : <Fragment key={i}>{p}</Fragment>;
  });
}

/** Plain-text version for metadata and JSON-LD. */
export const plain = (text: string) => text.replace(/\[\[(TODO:[^\]]*)\]\]/g, "$1");
