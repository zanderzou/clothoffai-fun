import { chromium } from "playwright";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const assert = (condition, message) => { if (!condition) throw Error(message); };
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const googleRequests = [];
  page.on("request", (request) => {
    if (/googletagmanager\.com|google-analytics\.com/.test(request.url())) googleRequests.push(request.url());
  });
  await page.goto("https://clothoffai.fun/ja/", { waitUntil: "domcontentloaded" });
  const root = page.locator("#site-analytics");
  const id = await root.getAttribute("data-measurement-id");
  assert(/^G-[A-Z0-9]+$/.test(id ?? ""), "Missing GA4 property identifier");
  assert(await page.locator("#analytics-notice").isVisible(), "Japanese opt-in notice absent");
  assert(googleRequests.length === 0, "Google tracking requested before consent");
  assert(await page.locator('#analytics-notice a[href="/ja/privacy/"]').count() === 1, "Japanese privacy link missing");
  await page.locator("#analytics-accept").click();
  await page.waitForTimeout(500);
  assert(googleRequests.some((url) => url.includes("googletagmanager.com/gtag/js")), "GA did not load after explicit consent");
  assert((await page.evaluate(() => localStorage.getItem("site-analytics-consent-v1")))?.includes("granted"), "Consent choice not saved");
  await page.locator("#analytics-settings").click();
  await page.locator("#analytics-decline").click();
  assert((await page.evaluate(() => localStorage.getItem("site-analytics-consent-v1")))?.includes("denied"), "Consent withdrawal not saved");
  assert(await page.evaluate((measurementId) => window["ga-disable-" + measurementId] === true, id), "GA was not disabled after withdrawal");
  await context.close();
  const privateContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await privateContext.addInitScript(() => { Object.defineProperty(navigator, "globalPrivacyControl", { value: true, configurable: true }); });
  const privatePage = await privateContext.newPage();
  const privateRequests = [];
  privatePage.on("request", (request) => { if (/googletagmanager\.com|google-analytics\.com/.test(request.url())) privateRequests.push(request.url()); });
  await privatePage.goto("https://clothoffai.fun/ar/", { waitUntil: "domcontentloaded" });
  assert(await privatePage.locator("html").getAttribute("dir") === "rtl", "Arabic RTL missing");
  assert(!(await privatePage.locator("#analytics-notice").isVisible()), "Privacy signal should suppress opt-in prompt");
  await privatePage.locator("#analytics-settings").click();
  assert(await privatePage.locator("#analytics-accept").isDisabled(), "Privacy signal did not disable consent");
  assert(await privatePage.locator('#analytics-notice a[href="/ar/privacy/"]').count() === 1, "Arabic privacy link missing");
  assert(privateRequests.length === 0, "Google request made under privacy signal");
  await privateContext.close();
  console.log("Live Japanese GA opt-in/withdrawal and Arabic GPC/RTL/consent checks passed.");
} finally {
  await browser.close();
}
