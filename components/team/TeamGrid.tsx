"use client";

import { useState, type ReactNode } from "react";

/** Press and hold anywhere on the grid to lift every card's layers at once. */
export function TeamGrid({ children }: { children: ReactNode }) {
  const [held, setHeld] = useState(false);
  return (
    <div
      className={`tgrid ${held ? "exploded" : ""}`}
      onPointerDown={() => setHeld(true)}
      onPointerUp={() => setHeld(false)}
      onPointerLeave={() => setHeld(false)}
      onPointerCancel={() => setHeld(false)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
