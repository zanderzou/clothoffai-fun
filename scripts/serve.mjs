#!/usr/bin/env node
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist", "client");
const port = Number(process.env.PORT || 4173);
const mime = { ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8" };

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  let target = path.join(root, pathname);
  if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, "index.html");
  if (!existsSync(target)) target = path.join(root, "404.html");
  response.statusCode = target.endsWith("404.html") ? 404 : 200;
  response.setHeader("Content-Type", mime[path.extname(target)] || "application/octet-stream");
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Preview: http://127.0.0.1:${port}`));
