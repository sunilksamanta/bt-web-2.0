import { ImageResponse } from "next/og";
import { company, hero } from "@/content/site";

export const runtime = "nodejs";
export const alt = `${company.name}: ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#101828", color: "#F2F5FA", padding: 72, fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#3D6BFF" }} />
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>broadifi</div>
          <div style={{ flex: 1, height: 1, background: "rgba(245,244,240,.18)", marginLeft: 16 }} />
          <div style={{ fontSize: 18, color: "rgba(245,244,240,.5)", letterSpacing: 3 }}>interface /</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000, display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
            <span>{hero.prefix}</span><span style={{ color: "#3D6BFF", marginLeft: 18 }}>{hero.words[0]}</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(245,244,240,.62)", maxWidth: 900, lineHeight: 1.4 }}>{`${company.tagline} From Kolkata, since 2019.`}</div>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 16, color: "rgba(245,244,240,.55)", letterSpacing: 2 }}>
          <span>ISO 9001:2015</span><span>·</span><span>DPIIT RECOGNISED</span><span>·</span><span>EST. 2019</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
