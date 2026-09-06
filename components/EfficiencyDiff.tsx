"use client";

import { useEffect, useRef, useState } from "react";

export function EfficiencyDiff({ before, after, note }: { before: string; after: string; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "play">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return; // already in view: show final state
    setState("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("play");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`diff ${state === "armed" ? "diff--armed" : ""} ${state === "play" ? "diff--armed diff--play" : ""}`}>
      <div className="diff__code">
        <div className="diff__del">
          - monthly infra: {before}
          <span className="diff__strike" aria-hidden="true" />
        </div>
        <div className="diff__add">+ monthly infra: {after}</div>
      </div>
      <div className="diff__note">{note}</div>
    </div>
  );
}
