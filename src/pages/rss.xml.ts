import { getCollection } from "astro:content";
import { site } from "../data/site";

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;" })[character] ?? character);

export async function GET() {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const items = posts.map((post) => `<item><title>${escapeXml(post.data.title)}</title><link>${site.url}/blog/${post.id}/</link><guid>${site.url}/blog/${post.id}/</guid><pubDate>${post.data.publishDate.toUTCString()}</pubDate><description>${escapeXml(post.data.description)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(site.name)}</title><link>${site.url}/blog/</link><description>${escapeXml(site.description)}</description><language>en-us</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
