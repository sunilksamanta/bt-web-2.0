import { SITE_URL, company, faq, openSource, work } from "@/content/site";
import { allServices } from "@/content/services";

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

/** Site-wide nodes. Every page graph starts with these, so the Organization is present on every page. */
export function baseNodes() {
  const organization = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: company.name,
    alternateName: company.shortName,
    legalName: company.name,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    image: `${SITE_URL}/opengraph-image`,
    description: company.boilerplate,
    slogan: company.tagline,
    foundingDate: company.founded,
    foundingLocation: { "@type": "Place", name: "Kolkata, India" },
    email: company.email,
    telephone: company.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: company.geo.latitude, longitude: company.geo.longitude },
    areaServed: ["IN", "US", "EU", "AE", "SA"],
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 11, maxValue: 50 },
    sameAs: Object.values(company.social),
    knowsAbout: [
      "Software development", "Product engineering", "SaaS development", "AI and automation",
      "Cloud cost engineering", "DevOps", "Node.js", "Next.js", "React", "NestJS", "Python", "Go",
      "MongoDB", "PostgreSQL", "Kubernetes", "AWS", "GCP", "Azure", "Hedera", "Tauri",
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "ISO 9001:2015", credentialCategory: "certification" },
      { "@type": "EducationalOccupationalCredential", name: "DPIIT Recognised Startup", credentialCategory: "recognition" },
    ],
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: company.email, telephone: company.phoneIntl, availableLanguage: ["en", "hi", "bn"] }],
  };

  const website = {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: company.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };

  return [organization, website];
}

export function faqNode(id: string, items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `${SITE_URL}${b.path === "/" ? "" : b.path}`,
    })),
  };
}

/** Home page graph. */
export function buildHomeGraph() {
  const webpage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${company.name}: ${company.tagline}`,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    description: company.description,
    inLanguage: "en",
  };

  const catalog = {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#services`,
    name: "Services",
    url: `${SITE_URL}/services`,
    itemListElement: allServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.body, url: `${SITE_URL}${s.href ?? "/services"}`, provider: { "@id": ORG_ID } },
    })),
  };

  const tools = openSource.tools.map((t) => ({
    "@type": "SoftwareSourceCode",
    name: t.name,
    description: t.description,
    url: t.url,
    codeRepository: t.url.includes("github") ? t.url : company.social.github,
    author: { "@id": ORG_ID },
  }));

  const portfolio = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#work`,
    name: "Selected work",
    itemListElement: work.projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "CreativeWork", name: p.name, description: p.description, ...(p.url ? { url: p.url } : {}), creator: { "@id": ORG_ID } },
    })),
  };

  return [...baseNodes(), webpage, catalog, faqNode(`${SITE_URL}/#faq`, faq.items), breadcrumbNode([{ name: "Home", path: "/" }]), portfolio, ...tools];
}

/** Renders exactly one JSON-LD script with a @graph. */
export function JsonLd({ graph }: { graph: object[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
