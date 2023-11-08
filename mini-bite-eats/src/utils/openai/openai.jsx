import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeText(
  prompt,
  maxTokens = 500,
  model = "text-davinci-003"
) {
  try {
    const response = await openai.completions.create({
      model,
      prompt,
      max_tokens: maxTokens,
    });
    return response.choices[0].text;
  } catch (error) {
    console.error("Error while analyzing text:", error);
    return null;
  }
}
