import { notFound } from "next/navigation";
import { aiUseCases } from "@/content/narratives";
import { NarrativePage, narrativeMetadata } from "@/components/narrative/NarrativePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(aiUseCases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = aiUseCases[slug];
  if (!n) return {};
  return narrativeMetadata(n);
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = aiUseCases[slug];
  if (!n) notFound();
  return <NarrativePage n={n} />;
}
