# ClothOff AI Safe Guide

A premium, consent-first Astro publication for people researching ClothOff AI safety, privacy, virtual try-on, and responsible AI outfit-changing alternatives.

The site intentionally provides no photo upload, nudification, face-swap, login, payment, or clothing-removal feature.

## Stack

- Astro static output
- Markdown content collections
- GitHub source control
- Cloudflare Pages hosting

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run test:seo
npm run test:sites
```

`npm run build` writes the production site to `dist/client` and preserves the prototype packaging output in `dist/server` and `dist/.openai`.

## Publishing a blog post

Add one Markdown file to `src/content/blog`. Required frontmatter is validated by `src/content.config.ts`; the blog index, article route, sitemap, RSS feed, metadata, related links, and structured data are generated during the build.

## Search foundations

The project includes canonical URLs, crawlable internal links, Article/Breadcrumb/FAQ/WebSite structured data, primary-source lists, author and update signals, `robots.txt`, XML sitemaps, RSS, social cards, descriptive images, security headers, and an IndexNow key.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist/client`
- Root directory: repository root
- Production branch: `main`
