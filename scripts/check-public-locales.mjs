const origin = "https://clothoffai.fun";
const variants = [["en", ""], ["ja", "ja"], ["ko", "ko"], ["zh-Hant", "zh-hant"], ["es", "es"], ["pt-BR", "pt-br"], ["ru", "ru"], ["de", "de"], ["fr", "fr"], ["ar", "ar"]];
const routes = ["", "blog", "about", "contact", "editorial-policy", "privacy", "terms", ...["ai-outfit-changer", "virtual-try-on", "adobe-firefly", "canva-magic-edit", "photoroom"].map((name) => `blog/clothoff-ai-vs-${name}`)];
const failures = [];
const urlFor = (slug, route) => `${origin}/${slug ? `${slug}/` : ""}${route ? `${route}/` : ""}`;
const capture = (html, regex) => [...html.matchAll(regex)].map((match) => match[1]);
const fetchText = async (url) => {
  const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20000), headers: { "user-agent": "ClothOffAI-public-release-check/1.0" } });
  if (response.status !== 200) throw Error(`${url}: HTTP ${response.status}`);
  return response.text();
};
const sitemapIndex = await fetchText(`${origin}/sitemap-index.xml`);
const sitemapUrls = new Set();
for (const url of capture(sitemapIndex, /<loc>([^<]+)<\/loc>/g)) {
  const sitemap = await fetchText(url);
  for (const route of capture(sitemap, /<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(route);
}
const jobs = variants.flatMap(([language, slug]) => routes.map((route) => ({ language, slug, route })));
let next = 0;
let passed = 0;
async function worker() {
  while (next < jobs.length) {
    const { language, slug, route } = jobs[next++];
    const url = urlFor(slug, route);
    try {
      const html = await fetchText(url);
      const expectedAlternates = new Map(variants.map(([lang, code]) => [lang, urlFor(code, route)]));
      expectedAlternates.set("x-default", urlFor("", route));
      const actualAlternates = new Map([...html.matchAll(/<link\b[^>]*\brel="alternate"[^>]*\bhreflang="([^"]+)"[^>]*\bhref="([^"]+)"/gi)].map((match) => [match[1], match[2]]));
      if (capture(html, /<html\b[^>]*\blang="([^"]+)"/gi)[0] !== language) failures.push(`${url}: lang`);
      if (capture(html, /<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/gi)[0] !== url) failures.push(`${url}: canonical`);
      if (capture(html, /<title>([\s\S]*?)<\/title>/gi).length !== 1) failures.push(`${url}: title`);
      if (capture(html, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi).length !== 1) failures.push(`${url}: H1`);
      if (!route && !/<title>ClothOff AI<\/title>/i.test(html)) failures.push(`${url}: exact homepage title`);
      if (actualAlternates.size !== 11 || [...expectedAlternates].some(([key, value]) => actualAlternates.get(key) !== value)) failures.push(`${url}: hreflang`);
      if (!sitemapUrls.has(url)) failures.push(`${url}: sitemap`);
      if (language === "ar" && !/<html\b[^>]*\bdir="rtl"/i.test(html)) failures.push(`${url}: RTL`);
      if (language !== "en" && route.startsWith("blog/") && !html.includes('"@type":"Article"')) failures.push(`${url}: Article JSON-LD`);
      passed++;
    } catch (error) { failures.push(error.message); }
  }
}
await Promise.all(Array.from({ length: 6 }, () => worker()));
for (const path of ["/", "/robots.txt", "/sitemap-index.xml", "/llms.txt"]) {
  try { await fetchText(`https://www.clothoffai.fun${path}`); } catch (error) { failures.push(error.message); }
}
for (const path of ["/robots.txt", "/llms.txt"]) {
  try { await fetchText(`${origin}${path}`); } catch (error) { failures.push(error.message); }
}
if (failures.length) {
  console.error(`${failures.length} public release failures after ${passed}/120 HTTP 200 pages:\n- ${failures.slice(0, 100).join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log("120/120 public HTTPS pages, reciprocal SEO metadata, sitemap, RTL, root/www and robots/llms passed.");
}
