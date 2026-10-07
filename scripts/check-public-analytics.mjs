import { chromium } from "playwright";
const browser = await chromium.launch({ channel: "chrome", headless: true, ...(process.env.QA_PROXY ? { proxy: { server: process.env.QA_PROXY } } : {}) });
const assert = (condition, message) => { if (!condition) throw Error(message); };
const humanAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
async function visit(route, options = {}) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: options.bot ? "Mozilla/5.0 (compatible; Googlebot/2.1)" : humanAgent });
  try {
    await context.addInitScript(({ gpc }) => {
      Object.defineProperty(navigator, "webdriver", { get: () => false });
      if (gpc) Object.defineProperty(navigator, "globalPrivacyControl", { get: () => true });
    }, { gpc: options.gpc === true });
    const requests = [];
    await context.route(/googletagmanager\.com|google-analytics\.com/, async route => {
      requests.push(route.request().url());
      await route.fulfill({ status: 200, contentType: "text/javascript", body: "/* Intercepted test; no analytics data sent. */" });
    });
    const page = await context.newPage();
    await page.goto("https://clothoffai.fun" + route, { waitUntil: "load" });
    assert(/^G-[A-Z0-9]+$/.test(await page.locator("#site-analytics").getAttribute("data-measurement-id") ?? ""), "Missing GA4 identifier");
    assert(await page.locator("#analytics-notice,#analytics-accept,#analytics-settings").count() === 0, "Consent UI remains");
    assert(requests.length === (options.bot || options.gpc ? 0 : 1), "Unexpected analytics loading");
    if (route.startsWith("/ar/")) assert(await page.locator("html").getAttribute("dir") === "rtl", "Arabic RTL missing");
  } finally { await context.close(); }
}
try {
  await visit("/ja/");
  await visit("/ar/", { gpc: true });
  await visit("/ja/", { bot: true });
  console.log("Automatic Japanese analytics, Arabic GPC/RTL and crawler exclusion passed; test requests intercepted.");
} finally { await browser.close(); }
