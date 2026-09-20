# ClothOff AI Safe Guide — Design QA

## Evidence

- Source visual truth: `qa/source-hero.png`
- Desktop implementation: `qa/implementation-desktop.jpg`
- Mobile implementation: `qa/implementation-mobile.png`
- Feature-section implementation: `qa/implementation-features.jpg`
- Combined source/implementation comparison: `qa/comparison-desktop.jpg`
- Comparison board: `qa/compare.html`

## Viewports and normalization

- Source pixels: 1586 × 992. The source is the generated hero art and establishes the subject, palette, lighting, fully clothed fashion context, right-weighted composition, and left-side negative space.
- Desktop implementation: 1440 × 900 pixels at a 1440 × 900 CSS viewport and device scale factor 1.
- Mobile implementation: 390 × 844 pixels at a 390 × 844 CSS viewport and device scale factor 1.
- The combined comparison board displays both desktop references in equal 16:10 panels. The source uses `object-fit: cover` only to normalize its 1.599 aspect ratio to the 1.6 comparison panel; no meaningful crop is introduced.
- State: homepage, dark theme, top of page, navigation at rest. Separate mobile evidence covers the responsive top-of-page state. A separate desktop screenshot covers the alternatives-card section.

## Full-view comparison evidence

The combined comparison in `qa/comparison-desktop.jpg` shows that the implementation preserves the source's adult subject, fully clothed wardrobe context, black/plum environment, violet/cyan accents, clean right-side subject weighting, and left-side negative space. The implementation adds a compact translucent header, a large condensed headline, safety framing, trust labels, and two clear calls to action without obscuring the fashion subject or the alternate-outfit panels.

## Focused-region evidence

- `qa/implementation-mobile.png` verifies the responsive hero crop, title wrapping, two stacked calls to action, visible safety labels, and absence of horizontal overflow at 390 px.
- `qa/implementation-features.jpg` verifies typography, card spacing, icon consistency, color-token separation, paragraph legibility, and section rhythm below the hero.
- A second source crop was not needed because the source visual truth is a single hero asset rather than a multi-screen UI. The full comparison already shows the source's important image details at readable size; focused implementation captures cover the new UI surfaces introduced by the build.

## Required fidelity surfaces

- Fonts and typography: Oswald provides the condensed, high-impact display style visible in the researched category while DM Sans keeps body copy readable. Weight, line-height, tracking, wrapping, and mobile scaling are consistent. The outlined second line creates hierarchy without reducing legibility.
- Spacing and layout rhythm: The desktop hero uses a stable two-zone composition and a 1240 px content rail. Section headings, cards, tables, FAQ rows, and footer groups follow a consistent vertical rhythm. Desktop and mobile captures show no clipped persistent controls or horizontal viewport overflow.
- Colors and visual tokens: Near-black backgrounds, plum panels, violet emphasis, electric-cyan actions, and green safety states map cleanly to the source art and the intended safety message. Text contrast is strong on primary surfaces; muted copy remains readable.
- Image quality and asset fidelity: The final project asset is the generated 1586 × 992 PNG in `src/assets/`. It is sharp at desktop and mobile sizes, uses the correct adult fully clothed subject, retains usable negative space, and has no text, logo, watermark, masking halo, or compression artifact.
- Copy and content: The homepage and article pages consistently communicate an independent, consent-first ClothOff AI safety guide. Keywords appear naturally in the header, hero, body, comparisons, FAQ, blog, metadata, and footer without duplicating the same paragraph or presenting an unsafe generation workflow.

## Interaction and runtime checks

- Mobile menu tested at 390 × 844: the button becomes visible, `aria-expanded` changes to `true`, the navigation changes to `display:flex`, and the page remains exactly 390 px wide.
- FAQ disclosure controls use native `details`/`summary` behavior.
- Homepage resource check: HTML, CSS, JavaScript, hero image, favicon, and font resources all returned HTTP 200.
- Browser runtime instrumentation captured `window.error`, unhandled promise rejection, and `console.error`; the post-load result was an empty error array with `document.readyState === "complete"`.
- DOM checks: one H1, one JSON-LD block, one complete hero image with nonzero natural width, one loaded stylesheet, and no body/client width mismatch.
- Static build tests: 4 passed, 0 failed.

## Findings

- No actionable P0, P1, or P2 design differences remain.
- P3: Google Fonts are loaded from the Google Fonts CDN. System fallbacks preserve layout if the CDN is unavailable, but self-hosting the two WOFF2 files could marginally improve first-visit resilience in restricted networks.

## Comparison history

- Pass 1: Desktop and mobile hero captures found no P0/P1/P2 issues. The mobile layout intentionally converts the desktop two-zone hero into an image-first stack so the subject remains visible and the title remains readable.
- Pass 2: The normalized 1440 × 900 combined comparison confirmed the source palette, image crop, subject scale, and negative-space usage. No visual changes were required, so no additional fix iteration was necessary.

## Implementation checklist

- [x] Desktop hero fidelity verified against the generated source visual.
- [x] Mobile hero and navigation verified at 390 × 844.
- [x] Below-the-fold card system inspected.
- [x] Article layout inspected.
- [x] Internal navigation, FAQ behavior, sitemap, robots, metadata, and structured data checked.
- [x] Browser resources and runtime errors checked.
- [x] Static build and packaging tests passed.

final result: passed
