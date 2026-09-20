# ClothOff AI Safe Guide

A consent-first static educational website for `clothoffai.fun`. It covers ClothOff AI safety, privacy, AI clothing-remover risks, virtual try-on, and responsible outfit-changing alternatives.

The site intentionally provides no photo upload, nudification, face-swap, login, payment, or clothing-removal feature.

## Build

```bash
npm run build
```

Static production files are written to `dist/client`.

## Preview

```bash
npm run preview
```

## Add or edit blog posts

Posts live in `src/site.mjs`. Add an item to the `posts` array, then rebuild. The generator creates the article page, updates the blog index, and adds the URL to `sitemap.xml`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist/client`
- Root directory: repository root
- Production branch: `main`
