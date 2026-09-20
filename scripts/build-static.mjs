#!/usr/bin/env node
import { copyFileSync, cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { posts, render404, renderBlogIndex, renderHome, renderPost, site } from "../src/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist", "client");

rmSync(out, { recursive: true, force: true });
mkdirSync(path.join(out, "assets"), { recursive: true });
mkdirSync(path.join(out, "blog"), { recursive: true });

const write = (relative, value) => {
  const destination = path.join(out, relative);
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, value, "utf8");
};

write("index.html", renderHome());
write("404.html", render404());
write("blog/index.html", renderBlogIndex());

for (const post of posts) {
  write(path.join("blog", post.slug, "index.html"), renderPost(post));
}

copyFileSync(path.join(root, "src", "site.css"), path.join(out, "assets", "styles.css"));
copyFileSync(path.join(root, "src", "main.js"), path.join(out, "assets", "main.js"));
copyFileSync(path.join(root, "src", "favicon.svg"), path.join(out, "favicon.svg"));
copyFileSync(
  path.join(root, "src", "assets", "clothoff-ai-fashion-visualizer-hero.png"),
  path.join(out, "assets", "clothoff-ai-fashion-visualizer-hero.png"),
);

write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
    { path: "/", date: "2026-09-20", priority: "1.0" },
    { path: "/blog/", date: "2026-09-20", priority: "0.8" },
    ...posts.map((post) => ({ path: `/blog/${post.slug}/`, date: post.date, priority: "0.7" })),
  ]
    .map((item) => `  <url><loc>${site.url}${item.path}</loc><lastmod>${item.date}</lastmod><changefreq>monthly</changefreq><priority>${item.priority}</priority></url>`)
    .join("\n")}\n</urlset>`,
);
write(
  "_headers",
  `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'\n`,
);
write("_redirects", `/blog /blog/ 301\n/blog/:slug /blog/:slug/ 301\n`);

console.log(`Built ${posts.length + 3} static HTML pages in ${out}`);
