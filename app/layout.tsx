import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SITE_URL, company } from "@/content/site";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

const title = company.metaTitle;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${company.shortName}` },
  description: company.metaDescription,
  applicationName: company.shortName,
  keywords: [
    "software development company Kolkata", "next-gen dev shop", "product engineering", "SaaS development",
    "AI automation development", "cloud cost optimization", "DevOps consulting", "Node.js development",
    "Next.js agency", "CalmAPI", "Ognom", "TerCTL", "Broadifi", "Broadifi Technologies",
  ],
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title,
    description: company.metaDescription,
  },
  twitter: { card: "summary_large_image", title, description: company.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  manifest: "/manifest.webmanifest",
  other: { "geo.region": "IN-WB", "geo.placename": "Kolkata" },
};

export const viewport: Viewport = {
  themeColor: "#101828",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly summary" />
      </head>
      <body>{children}</body>
    </html>
  );
}
