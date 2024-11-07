export default async function TranslatedLyrics() {
  let headersList = {
    Accept: "application/json",
    Authorization: `DeepL-Auth-Key ${process.env.TRANSLATION_API_KEY}`,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    text: ["More than enough"],
    target_lang: "ES",
  });

  let response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  return data;
}
