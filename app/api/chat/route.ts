import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


let chatHistory: Array<{ role: "system" | "user" | "assistant"; text: string }> = [];

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response("No prompt provided", { status: 400 });
    }

    const MODEL_NAME = "gemini-2.5-flash";


    if (chatHistory.length === 0) {
      chatHistory.push({
        role: "system",
        text: `Eres "Kodi" 🐐, experta en Desarrollo Web.
      - Responde siempre en español.
      - Si preguntan precios: "Consulta https://ejemplo.com/precios".
      - Si preguntan soporte: "Soporte@ejemplo.com".
      - Sé profesional y usa ocasionalmente términos de cabra como "Beeee-nvenido"`,
      });
    }


    chatHistory.push({ role: "user", text: prompt });


    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: chatHistory.map(m => ({ text: m.text })),
    });

    chatHistory.push({ role: "assistant", text: response.text });

    return new Response(response.text, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("DEBUG ERROR:", error);
    return new Response(
      JSON.stringify({ error: "Error al generar respuesta" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
