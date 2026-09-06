import { narrativeBySlug } from "@/content/narratives";
import { NarrativePage, narrativeMetadata } from "@/components/narrative/NarrativePage";

const n = narrativeBySlug["services"];
export const metadata = narrativeMetadata(n);
export default function Page() {
  return <NarrativePage n={n} />;
}
