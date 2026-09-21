# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable project decisions

- `clothoffai.fun` is an independent, consent-first educational site. It must never provide image upload, nudification, face swapping, or clothing-removal functionality.
- The visual direction is premium black, plum, violet, and electric cyan, inspired by contemporary AI creative tools without copying a third party's interface.
- Search content should cover ClothOff AI safety, privacy, consent-first photo editing, AI virtual try-on, and outfit-changing alternatives in natural language.
- The production output is fully static HTML in `dist/client`, suitable for Cloudflare Pages. The site uses Astro with Markdown content collections under `src/content/blog`.
- SEO and generative-search optimization must remain people-first: answer-led sections, clear entities, primary sources, author/update signals, crawlable internal links, matching structured data, sitemap, RSS, and IndexNow support. Do not add invented AI-only markup or keyword stuffing.
- All people in imagery must be clearly adult and non-explicit. Mainstream swimwear and glamorous fashion imagery are allowed when licensed, context-appropriate, and accompanied by a no-endorsement disclosure; nudity, transparent garments, pornographic framing, and sexual acts are not.
