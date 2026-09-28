import { localizedHome } from "../src/data/localized-home.ts";
import { comparisonSlugs, locales } from "../src/data/locales.ts";

const assert = (condition, message) => { if (!condition) throw new Error(message); };
const phrases = {
  ja: "AI着せ替え", ko: "옷 갈아입히기", "zh-hant": "AI 換裝",
  es: "cambiar ropa con IA", "pt-br": "trocar roupa com IA",
  ru: "замена одежды", de: "KI-Outfit-Wechsel",
  fr: "changement de tenue", ar: "تغيير الملابس",
};

assert(Object.keys(localizedHome).length === locales.length, "Expected exactly nine homepage editions");
const titles = new Set();
const snippets = new Set();
for (const { slug } of locales) {
  const copy = localizedHome[slug];
  assert(copy, `${slug}: missing homepage`);
  assert(copy.metaDescription.length >= 70 && copy.metaDescription.length <= 175, `${slug}: meta-description length ${copy.metaDescription.length}`);
  assert(copy.hero.tagline && copy.hero.description && copy.intro.lead && copy.intro.body, `${slug}: incomplete hero/intro`);
  assert(copy.alternatives.cards.length === 3 && copy.alternatives.cards.every(card => card.uses.length === 3), `${slug}: alternative coverage`);
  assert(copy.checklist.items.length === 4, `${slug}: checklist coverage`);
  assert(comparisonSlugs.every(key => copy.comparison.options[key]), `${slug}: missing VS comparison`);
  assert(copy.research.blocks.length === 3 && copy.research.blocks.every(block => block.paragraphs.length === 2), `${slug}: research coverage`);
  assert(copy.faq.items.length === 5, `${slug}: FAQ coverage`);
  const text = JSON.stringify(copy);
  assert(text.includes("ClothOff AI") && text.toLowerCase().includes(phrases[slug].toLowerCase()), `${slug}: keyword/search intent`);
  assert(text.length >= 2200, `${slug}: thin homepage draft`);
  titles.add(copy.hero.tagline);
  snippets.add(copy.metaDescription);
}
assert(titles.size === locales.length && snippets.size === locales.length, "Duplicate localized title or description");
console.log("ClothOff AI: 9/9 source-only homepage drafts passed depth, structure, keyword and distinct-metadata checks.");
