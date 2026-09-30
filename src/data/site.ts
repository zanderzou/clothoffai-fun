export const site = {
  name: "ClothOff AI",
  shortName: "ClothOff AI",
  domain: "clothoffai.fun",
  url: "https://clothoffai.fun",
  description:
    "An independent, consent-first ClothOff AI publication covering image privacy, AI clothing remover risks, virtual try-on, and responsible outfit-changing alternatives.",
  author: "ClothOff AI independent editorial team",
  language: "en",
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);

export const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);
