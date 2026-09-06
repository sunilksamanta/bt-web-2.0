"use client";

import { useEffect, useRef, useState } from "react";

const CYCLE = ["var(--a1)", "var(--a2)", "var(--tint)"];

export function RotatingWord({ words, interval = 2800 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (timer.current || reduced) return;
    timer.current = setInterval(() => setI((n) => n + 1), interval);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    timer.current = setInterval(() => setI((n) => n + 1), interval);
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const n = words.length;
  const word = words[i % n];
  const prev = i > 0 ? words[(i - 1 + n) % n] : null;
  const accent = CYCLE[i % CYCLE.length];
  const prevAccent = CYCLE[(i - 1 + CYCLE.length) % CYCLE.length];
  const delay = i > 0 ? ".32s" : ".02s";

  return (
    <span
      className={`rot ${reduced ? "rot--static" : ""}`}
      style={{ color: accent }}
      onMouseEnter={stop}
      onMouseLeave={start}
      aria-live="polite"
    >
      {prev && !reduced && (
        <span key={`out${i}`} className="rot__out" style={{ color: prevAccent }} aria-hidden="true">{prev}</span>
      )}
      <span key={`in${i}`} className="rot__in" style={{ animationDelay: i > 0 ? ".3s" : "0s" }}>{word}</span>
      {!reduced && <span key={`car${i}`} className="rot__caret" style={{ background: accent, animationDelay: delay }} aria-hidden="true" />}
      <span key={`rule${i}`} className="rot__rule" style={{ background: accent, animationDelay: delay }} aria-hidden="true" />
    </span>
  );
}
