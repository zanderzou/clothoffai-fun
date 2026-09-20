const host = "clothoffai.fun";
const key = "b795a33fb675447ba63a4990ace35c19";
const urlList = [
  `https://${host}/`,
  `https://${host}/blog/`,
  `https://${host}/blog/clothoff-ai-safety-guide/`,
  `https://${host}/blog/clothoff-ai-vs-virtual-try-on/`,
  `https://${host}/blog/clothoff-ai-vs-ai-outfit-changer/`,
  `https://${host}/about/`,
  `https://${host}/privacy/`,
  `https://${host}/terms/`,
  `https://${host}/editorial-policy/`,
  `https://${host}/contact/`,
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});

console.log(`IndexNow response: ${response.status} ${response.statusText}`);
if (!response.ok && response.status !== 202) process.exitCode = 1;
