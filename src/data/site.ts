export const site = {
  name: "ClothOff AI Safe Guide",
  shortName: "ClothOff AI",
  domain: "clothoffai.fun",
  url: "https://clothoffai.fun",
  description:
    "A consent-first ClothOff AI safety guide covering image privacy, AI clothing remover risks, virtual try-on, and responsible outfit-changing alternatives.",
  author: "ClothOff AI Safe Guide editorial team",
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
