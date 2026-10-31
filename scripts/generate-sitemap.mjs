import { writeFileSync, rmSync } from "node:fs";

const siteUrl = process.env.VITE_SITE_URL?.trim()?.replace(/\/$/, "");
const sitemapPath = new URL("../public/sitemap.xml", import.meta.url);
const robotsPath = new URL("../public/robots.txt", import.meta.url);

if (!siteUrl) {
  rmSync(sitemapPath, { force: true });
  writeFileSync(robotsPath, "User-agent: *\nAllow: /\n");
  console.log("VITE_SITE_URL is not set: sitemap generation skipped until the final domain is configured.");
  process.exit(0);
}

const circuitSlugs = [
  "jbel-siroua", "sahara", "jbel-saghro", "jbel-mgoun", "tizi-n-test",
  "randonnee-cotiere", "tafraoute", "toubkal", "yagour-zat",
  "tessaout-ait-bouli", "oued-noun",
];
const routes = [
  "/", "/circuits", ...circuitSlugs.map((slug) => `/circuits/${slug}`),
  "/experiences", "/destinations", "/voyages", "/contact", "/devis",
  "/politique-confidentialite", "/mentions-legales", "/politique-cookies",
  "/conditions-generales",
];
const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(sitemapPath, xml);
writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated sitemap for ${siteUrl}`);
