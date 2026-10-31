const configuredSiteUrl = import.meta.env["VITE_SITE_URL"]?.trim();

export const SITE_URL = configuredSiteUrl
  ? configuredSiteUrl.replace(/\/$/, "")
  : "";

export function seo(path: string, title: string, description: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl = SITE_URL ? `${SITE_URL}${normalizedPath}` : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Voyager Autrement" },
      { property: "og:locale", content: "fr_CH" },
      ...(absoluteUrl ? [{ property: "og:url", content: absoluteUrl }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    ...(absoluteUrl ? { links: [{ rel: "canonical", href: absoluteUrl }] } : {}),
  };
}
