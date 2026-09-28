import { createRequire } from "node:module";
import { createServer } from "node:http";
import { createReadStream, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/zande/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "client");
const screenshots = path.join(root, "research", "layout-check");
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".png": "image/png" };

function htmlRoutes(directory, prefix = "") {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) return htmlRoutes(path.join(directory, entry.name), relative);
    if (entry.name !== "index.html") return [];
    return [`/${path.dirname(relative) === "." ? "" : path.dirname(relative).split(path.sep).join("/") + "/"}`];
  });
}

const routes = htmlRoutes(output);
const server = createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  let file = path.resolve(output, "." + pathname);
  if (!file.startsWith(output + path.sep) && file !== output) { response.writeHead(403); response.end(); return; }
  if (!path.extname(file)) file = path.join(file, "index.html");
  if (!existsSync(file)) { response.writeHead(404); response.end(); return; }
  response.setHeader("Content-Type", mime[path.extname(file)] ?? "application/octet-stream");
  createReadStream(file).pipe(response);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const failures = [];
let checked = 0;
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport, reducedMotion: "reduce" });
    page.on("pageerror", (error) => failures.push(`${viewport.width}: JavaScript ${error.message}`));
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: "domcontentloaded" });
      if (response?.status() !== 200) { failures.push(`${viewport.width} ${route}: HTTP ${response?.status()}`); continue; }
      const shape = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        viewport: innerWidth,
        h1: document.querySelectorAll("h1").length,
        heading: document.querySelector("h1")?.textContent?.trim().replace(/\s+/g, " "),
        broken: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).length,
      }));
      if (shape.width > shape.viewport + 2) failures.push(`${viewport.width} ${route}: overflow ${shape.width}px`);
      if (shape.h1 !== 1) failures.push(`${viewport.width} ${route}: H1 count ${shape.h1}`);
      if (route === "/" && shape.heading !== "ClothOff AI") failures.push(`${viewport.width}: homepage H1 ${shape.heading}`);
      if (shape.broken) failures.push(`${viewport.width} ${route}: ${shape.broken} broken images`);
      if (await page.locator("text=DIRECT ANSWER").count()) failures.push(`${viewport.width} ${route}: unwanted DIRECT ANSWER`);
      checked++;
      if (["/", "/blog/clothoff-ai-vs-photoroom/"].includes(route)) {
        mkdirSync(screenshots, { recursive: true });
        await page.screenshot({ path: path.join(screenshots, `${route === "/" ? "home" : "photoroom"}-${viewport.width}.png`), fullPage: false });
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`ClothOff AI: ${checked}/${routes.length * 2} desktop/mobile routes passed HTTP, H1, width, images and answer-box checks.`);
}
