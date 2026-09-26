const SITE_URL = "https://goldensageroofing.example.ca";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

export function seo({ title, description, path }: SeoInput) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Golden Sage Roofing Pvt. Ltd." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  type: "application/ld+json",
  children: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Golden Sage Roofing Pvt. Ltd.",
    url: SITE_URL,
    description:
      "Canadian roofing company supplying roofing shingles and roofing solutions for residential and commercial buildings.",
    areaServed: "CA",
  }),
};

export function breadcrumbJsonLd(page: string, path: string) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page, item: `${SITE_URL}${path}` },
      ],
    }),
  };
}

export { SITE_URL };
