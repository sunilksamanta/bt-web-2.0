"use client";

import { useEffect, useState } from "react";
import { nav, narrativeNav, company, hero } from "@/content/site";

export function MenuButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button className="hero__menu" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="site-menu">
        menu ↗
      </button>
      {open && (
        <div className="menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation">
          <button className="menu__scrim" onClick={() => setOpen(false)} aria-label="Close menu" />
          <nav className="menu__panel">
            <div className="menu__head">
              <span className="menu__label">stack trace /</span>
              <button className="menu__close" onClick={() => setOpen(false)}>close ✕</button>
            </div>
            <div className="menu__list">
              {nav.map((n) => (
                <a key={n.id} className="trace" href={`/#${n.id}`} onClick={() => setOpen(false)}>
                  <span className="trace__arrow" aria-hidden="true">→</span> {n.label}
                </a>
              ))}
            </div>
            <span className="menu__label menu__label--pages">pages /</span>
            <div className="menu__list">
              {narrativeNav.map((n) => (
                <a key={n.href} className="trace" href={n.href} onClick={() => setOpen(false)}>
                  <span className="trace__arrow" aria-hidden="true">→</span> {n.label}
                </a>
              ))}
            </div>
            <div className="menu__foot">
              <a className="pill pill--paper" href={`mailto:${company.email}`}>
                {hero.cta}
                <span className="chip chip--dark" aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
