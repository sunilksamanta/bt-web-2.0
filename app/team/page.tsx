import type { Metadata } from "next";
import { SITE_URL, company } from "@/content/site";
import { teamPage as t } from "@/content/team";
import { TeamPage } from "@/components/team/TeamPage";

const image = `${SITE_URL}/og/team`;
export const metadata: Metadata = {
  title: { absolute: t.title },
  description: t.metaDescription,
  alternates: { canonical: t.path },
  openGraph: { type: "website", url: `${SITE_URL}${t.path}`, siteName: company.name, title: t.ogTitle, description: t.metaDescription, images: [{ url: image, width: 1200, height: 630, alt: t.ogTitle }] },
  twitter: { card: "summary_large_image", title: t.ogTitle, description: t.metaDescription, images: [image] },
};

export default function Page() {
  return <TeamPage />;
}
