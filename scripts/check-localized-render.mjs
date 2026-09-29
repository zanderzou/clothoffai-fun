import { join } from "node:path";
import { tmpdir } from "node:os";
import { chromium } from "playwright";

const origin = process.env.QA_ORIGIN || "http://127.0.0.1:4173";
const locales = ["", "ja", "ko", "zh-hant", "es", "pt-br", "ru", "de", "fr", "ar"];
const routes = ["", "blog", "about", "contact", "editorial-policy", "privacy", "terms", ...["ai-outfit-changer", "virtual-try-on", "adobe-firefly", "canva-magic-edit", "photoroom"].map((name) => `blog/clothoff-ai-vs-${name}`)];
const browser = await chromium.launch({ channel: "chrome", headless: true });
const failures = [];
let passed = 0;
for (const width of [1440, 390]) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  for (const locale of locales) for (const route of routes) {
    const path = `/${locale ? `${locale}/` : ""}${route ? `${route}/` : ""}`;
    const response = await page.goto(origin + path, { waitUntil: "domcontentloaded", timeout: 20000 });
    if (response?.status() !== 200) { failures.push(`${width} ${path}: HTTP ${response?.status()}`); continue; }
    if (!route) {
      const editorial = page.locator(".seo-visual img");
      await editorial.scrollIntoViewIfNeeded();
      await editorial.evaluate((image) => image.decode());
      if (width === 1440 && locale === "ja") await page.locator(".seo-visual").screenshot({ path: join(tmpdir(), "clothoffai-ja-research-image.png") });
      await page.evaluate(() => scrollTo(0, 0));
    }
    const view = await page.evaluate(() => {
      const images = [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.currentSrc || image.src);
      return { documentWidth: document.documentElement.scrollWidth, viewportWidth: innerWidth, brokenImages: images };
    });
    if (view.documentWidth > view.viewportWidth + 2) failures.push(`${width} ${path}: horizontal overflow ${view.documentWidth - view.viewportWidth}px`);
    if (view.brokenImages.length) failures.push(`${width} ${path}: broken images ${view.brokenImages.join(", ")}`);
    if (width === 390 && locale === "ar" && ["", "blog", "blog/clothoff-ai-vs-photoroom", "privacy"].includes(route)) {
      await page.screenshot({ path: join(tmpdir(), `clothoffai-${locale}-${route.replaceAll("/", "-") || "home"}-mobile.png`), fullPage: true });
      if (!route) await page.locator(".hero").screenshot({ path: join(tmpdir(), "clothoffai-ar-hero-mobile.png") });
    }
    if (width === 1440 && ["ja", "de", "ar"].includes(locale) && route === "") {
      await page.screenshot({ path: join(tmpdir(), `clothoffai-${locale}-home-desktop.png`), fullPage: true });
    }
    passed++;
  }
  await context.close();
}
await browser.close();
if (failures.length) {
  console.error(`${failures.length} rendering problems across ${passed} opened routes:\n- ${failures.slice(0, 100).join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`${passed}/240 desktop/mobile routes rendered without horizontal overflow or broken images. Screenshots saved to ${tmpdir()}.`);
}
