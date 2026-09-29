import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const out = path.resolve("dist/client");
const origin = "https://clothoffai.fun";
const variants = [
  ["en", ""], ["ja", "ja"], ["ko", "ko"], ["zh-Hant", "zh-hant"],
  ["es", "es"], ["pt-BR", "pt-br"], ["ru", "ru"], ["de", "de"],
  ["fr", "fr"], ["ar", "ar"]
];
const routes = [
  "", "blog", "about", "contact", "editorial-policy", "privacy", "terms",
  ...["ai-outfit-changer", "virtual-try-on", "adobe-firefly", "canva-magic-edit", "photoroom"].map((name) => `blog/clothoff-ai-vs-${name}`)
];
const problems = [];
const urlFor = (slug, route) => `${origin}/${slug ? `${slug}/` : ""}${route ? `${route}/` : ""}`;
const capture = (html, regex) => [...html.matchAll(regex)].map((match) => match[1]);
const sitemapIndex = readFileSync(path.join(out, "sitemap-index.xml"), "utf8");
const sitemaps = capture(sitemapIndex, /<loc>([^<]+)<\/loc>/g).map((url) => {
  const file = path.join(out, new URL(url).pathname.slice(1));
  return existsSync(file) ? readFileSync(file, "utf8") : "";
}).join("\n");
const sitemapUrls = new Set(capture(sitemaps, /<loc>([^<]+)<\/loc>/g));

for (const route of routes) {
  const alternates = new Map(variants.map(([language, slug]) => [language, urlFor(slug, route)]));
  alternates.set("x-default", urlFor("", route));
  for (const [language, slug] of variants) {
    const expected = urlFor(slug, route);
    const file = path.join(out, slug, route, "index.html");
    if (!existsSync(file)) { problems.push(`${expected}: missing HTML`); continue; }
    const html = readFileSync(file, "utf8");
    const actualLang = capture(html, /<html\b[^>]*\blang="([^"]+)"/gi)[0];
    if (actualLang !== language) problems.push(`${expected}: lang ${actualLang}`);
    const canonicals = capture(html, /<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/gi);
    if (canonicals.length !== 1 || canonicals[0] !== expected) problems.push(`${expected}: canonical ${canonicals.join(", ")}`);
    if (capture(html, /<title>([\s\S]*?)<\/title>/gi).length !== 1) problems.push(`${expected}: title`);
    if (capture(html, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi).length !== 1) problems.push(`${expected}: H1`);
    if (!route && !/<title>ClothOff AI<\/title>/i.test(html)) problems.push(`${expected}: exact homepage title`);
    const actual = new Map([...html.matchAll(/<link\b[^>]*\brel="alternate"[^>]*\bhreflang="([^"]+)"[^>]*\bhref="([^"]+)"/gi)].map((match) => [match[1], match[2]]));
    if (actual.size !== 11) problems.push(`${expected}: ${actual.size} hreflang entries`);
    for (const [code, target] of alternates) if (actual.get(code) !== target) problems.push(`${expected}: hreflang ${code}`);
    if (!sitemapUrls.has(expected)) problems.push(`${expected}: absent from sitemap`);
    if (language === "ar" && !/<html\b[^>]*\bdir="rtl"/i.test(html)) problems.push(`${expected}: missing RTL`);
    if (language !== "en" && route.startsWith("blog/")) {
      const body = html.match(/<article\b[\s\S]*?<\/article>/i)?.[0] ?? "";
      const readable = body.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
      if (readable.length < 650) problems.push(`${expected}: thin article (${readable.length} characters)`);
      if (!html.includes('"@type":"Article"')) problems.push(`${expected}: missing Article JSON-LD`);
    }
    if (language !== "en" && !html.includes(`href="/${slug}/privacy/"`)) problems.push(`${expected}: localized privacy/consent link`);
  }
}
for (const file of ["robots.txt", "llms.txt"]) if (!existsSync(path.join(out, file))) problems.push(`missing ${file}`);
if (problems.length) {
  console.error(`${problems.length} localization audit failures:`);
  problems.slice(0, 100).forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}
console.log(`${routes.length * variants.length}/${routes.length * variants.length} routes passed canonical, title, H1, reciprocal hreflang, sitemap, RTL, privacy link and article-depth checks.`);
