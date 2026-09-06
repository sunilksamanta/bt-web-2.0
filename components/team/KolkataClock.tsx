"use client";

import { useEffect, useState } from "react";

export function KolkataClock({ place }: { place: string }) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => {
      try {
        setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
      } catch {
        setTime("--:--");
      }
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="kolkata__line">
      KOLKATA <span suppressHydrationWarning>{time}</span> IST · {place}
    </div>
  );
}
