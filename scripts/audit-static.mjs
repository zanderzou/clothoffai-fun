import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist", "client");
const failures = [];
const htmlFiles = [];

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
};

const check = (condition, message) => {
  if (!condition) failures.push(message);
};

const targetForHref = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/")) return null;
  const decoded = decodeURIComponent(clean);
  if (decoded === "/") return path.join(out, "index.html");
  if (path.extname(decoded)) return path.join(out, decoded);
  return path.join(out, decoded, "index.html");
};

walk(out);
const canonicals = new Map();

for (const file of htmlFiles) {
  const relative = path.relative(out, file).replaceAll("\\", "/");
  const html = readFileSync(file, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;

  check(Boolean(title), `${relative}: missing title`);
  check(Boolean(description) && description.length >= 70 && description.length <= 180, `${relative}: meta description should be 70-180 characters`);
  check(Boolean(canonical?.startsWith("https://clothoffai.fun/")), `${relative}: invalid canonical`);
  check(h1Count === 1, `${relative}: expected exactly one h1, found ${h1Count}`);
  check(/<meta name="robots" content="[^"]+"/i.test(html), `${relative}: missing robots directive`);
  check(/<meta property="og:title"/i.test(html) && /<meta property="og:image"/i.test(html), `${relative}: incomplete Open Graph metadata`);

  if (canonical) {
    check(!canonicals.has(canonical), `${relative}: duplicate canonical also used by ${canonicals.get(canonical)}`);
    canonicals.set(canonical, relative);
  }

  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    check(/\salt="[^"]+"/i.test(tag), `${relative}: image missing descriptive alt text`);
  }

  for (const href of html.matchAll(/href="([^"]+)"/gi)) {
    const target = targetForHref(href[1]);
    if (target) check(existsSync(target), `${relative}: broken internal link ${href[1]}`);
  }
}

check(existsSync(path.join(out, "robots.txt")), "missing robots.txt");
check(existsSync(path.join(out, "sitemap-index.xml")), "missing sitemap-index.xml");
check(existsSync(path.join(out, "rss.xml")), "missing rss.xml");
check(existsSync(path.join(out, "b795a33fb675447ba63a4990ace35c19.txt")), "missing IndexNow key file");

if (failures.length) {
  console.error(`SEO audit failed with ${failures.length} issue(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`SEO audit passed for ${htmlFiles.length} HTML pages.`);
