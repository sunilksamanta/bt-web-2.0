export type Tab = string;

export type Faq = { q: string; a: string };

export type Card = {
  title: string;
  body: string;
  /** Optional second line, rendered muted (used for "architecture default"). */
  note?: string;
  href?: string;
  linkLabel?: string;
  chip?: string;
  /** Mono block rendered inside the card (install command etc.). */
  code?: string;
  links?: { label: string; href: string }[];
};

export type Block =
  | { kind: "bullets"; tab: Tab; h2: string; items: string[]; intro?: string }
  | { kind: "steps"; tab: Tab; h2: string; steps: { title: string; body: string }[]; intro?: string }
  | { kind: "prose"; tab: Tab; h2: string; paragraphs: string[]; muted?: string[]; diff?: { before: string; after: string; note: string } }
  | { kind: "offer"; tab: Tab; h2: string; paragraphs: string[]; notWhen?: string }
  | { kind: "rules"; tab: Tab; h2: string; rules: string[]; after?: string[] }
  | { kind: "cards"; tab: Tab; h2: string; intro?: string; cards: Card[]; after?: string[] };

export type ServiceSchema = {
  name: string;
  serviceType: string;
  areaServed?: string[];
  offer?: { name: string; priceCurrency?: string; description?: string };
};

export type SoftwareSchema = {
  name: string;
  description: string;
  url: string;
  codeRepository?: string;
  downloadUrl?: string;
  license?: string;
  operatingSystem: string;
  applicationCategory: string;
};

export type Narrative = {
  /** Route path, e.g. "/vibe-coding-rescue" */
  path: string;
  /** Slug used for OG image route */
  slug: string;
  tab: Tab;
  title: string;
  metaDescription: string;
  ogTitle: string;
  h1: string;
  opening: string;
  witty?: string;
  blocks: Block[];
  faq: { h2: string; items: Faq[] };
  related: string[];
  lastUpdated: string;
  breadcrumb: { name: string; path: string }[];
  schema: {
    service?: ServiceSchema;
    software?: SoftwareSchema[];
    /** Extra ItemList of page paths (children) */
    itemList?: { name: string; items: { name: string; path: string }[] };
  };
};
