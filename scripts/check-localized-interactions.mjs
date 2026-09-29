import { chromium } from "playwright";
const origin = process.env.QA_ORIGIN || "http://127.0.0.1:4173";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const assert = (condition, message) => { if (!condition) throw Error(message); };
try {
  const article = "/blog/clothoff-ai-vs-photoroom/";
  await page.goto(`${origin}/ja${article}`);
  await page.locator(".language-menu summary").click();
  await page.locator('.language-menu a[lang="de"]').click();
  assert(new URL(page.url()).pathname === `/de${article}`, "Language switch lost article route");
  assert(await page.locator("html").getAttribute("lang") === "de", "Language switch did not update html lang");
  await page.goto(`${origin}/ar/`);
  await page.locator("[data-menu-button]").click();
  assert(await page.locator("[data-mobile-nav]").isVisible(), "Arabic mobile navigation did not open");
  await page.locator("[data-mobile-nav] a").last().click();
  assert(new URL(page.url()).pathname === "/ar/blog/", "Arabic mobile navigation lost locale");
  await page.goto(`${origin}/ar/privacy/`);
  assert(await page.locator("#analytics-settings").textContent() === "إعدادات التحليلات", "Arabic analytics control not translated");
  assert(await page.locator('#analytics-notice a[href="/ar/privacy/"]').count() === 1, "Localized analytics privacy link missing");
  assert((await page.locator("#site-analytics").getAttribute("data-status-private"))?.includes("الخصوصية"), "Arabic analytics status not translated");
  console.log("Language switching, Arabic mobile navigation, and localized analytics UI passed.");
} finally {
  await browser.close();
}
