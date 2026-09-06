import { ImageResponse } from "next/og";
import { narrativeBySlug, narratives } from "@/content/narratives";
import { teamPage } from "@/content/team";

export const dynamic = "force-static";
export function generateStaticParams() {
  return [...narratives.map((n) => ({ slug: n.slug })), { slug: "team" }];
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = slug === "team" ? { tab: "people /", ogTitle: teamPage.ogTitle } : narrativeBySlug[slug];
  if (!n) return new Response("Not found", { status: 404 });
  const long = n.ogTitle.length > 48;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#101828", color: "#F2F5FA", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#3D6BFF" }} />
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>broadifi</div>
          <div style={{ flex: 1, height: 1, background: "rgba(245,244,240,.18)", marginLeft: 16 }} />
          <div style={{ fontSize: 18, color: "rgba(245,244,240,.5)", letterSpacing: 3 }}>{n.tab}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: long ? 60 : 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 1040 }}>{n.ogTitle}</div>
          <div style={{ display: "flex", fontSize: 24, color: "rgba(245,244,240,.6)", maxWidth: 900, lineHeight: 1.4 }}>Broadifi Technologies, Kolkata, India. Since 2019.</div>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 16, color: "rgba(245,244,240,.55)", letterSpacing: 2 }}>
          <span>ISO 9001:2015</span><span>·</span><span>DPIIT RECOGNISED</span><span>·</span><span>www.broadifitech.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
