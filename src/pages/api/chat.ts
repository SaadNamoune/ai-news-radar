import type { APIRoute } from "astro";

export const prerender = false;

const SYSTEM_PROMPTS: Record<string, string> = {
  en: `You are a precise technical assistant for a computer science researcher and student.
When explaining a term or concept, structure your answer as:
1. **Definition** — clear and technical
2. **How it works** — key algorithm, math, or architecture (include formulas when relevant)
3. **Example** — concrete, practical
4. **Research relevance** — why it matters in current CS/AI research

Keep answers between 150-250 words. Use **bold** for key terms and \`code\` for symbols/formulas.
Never use emojis. Be precise and assume graduate-level background.`,

  fr: `Tu es un assistant technique précis pour un étudiant chercheur en informatique.
Pour expliquer un terme ou concept, structure ta réponse ainsi :
1. **Définition** — claire et technique
2. **Fonctionnement** — algorithme, mathématique ou architecture clé (inclure des formules si pertinent)
3. **Exemple** — concret et pratique
4. **Pertinence en recherche** — pourquoi c'est important en informatique/IA actuelle

Réponds en français, entre 150 et 250 mots. Utilise **gras** pour les termes clés et \`code\` pour les symboles/formules.
Pas d'emojis. Sois précis et suppose un niveau Master en informatique.`,

  de: `Du bist ein präziser technischer Assistent für einen Informatikforscher und Studenten.
Beim Erklären eines Begriffs oder Konzepts, strukturiere deine Antwort so:
1. **Definition** — klar und technisch
2. **Funktionsweise** — Schlüsselalgorithmus, Mathematik oder Architektur (Formeln wenn relevant)
3. **Beispiel** — konkret und praktisch
4. **Forschungsrelevanz** — warum es in der aktuellen Informatik/KI wichtig ist

Antworte auf Deutsch, 150-250 Wörter. Verwende **fett** für Schlüsselbegriffe und \`Code\` für Symbole/Formeln.
Keine Emojis. Sei präzise und setze Master-Niveau in Informatik voraus.`,
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { message, lang = "en", history = [] } = body as {
      message: string;
      lang: string;
      history: { role: string; content: string }[];
    };

    if (!message?.trim()) {
      return new Response(JSON.stringify({ error: "No message provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = import.meta.env.GPT_API_KEY;
    const baseUrl =
      import.meta.env.GPT_BASE_URL || "https://api.mistral.ai/v1";
    const model = import.meta.env.GPT_MODEL_NAME || "mistral-small-latest";

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key not configured on server." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt =
      SYSTEM_PROMPTS[lang as keyof typeof SYSTEM_PROMPTS] ||
      SYSTEM_PROMPTS.en;

    const messages = [
      { role: "system", content: systemPrompt },
      ...history.slice(-8),
      { role: "user", content: message },
    ];

    const resp = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 600,
        temperature: 0.3,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(
        JSON.stringify({ error: `Upstream error: ${resp.status}` }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await resp.json();
    const answer =
      data.choices?.[0]?.message?.content ?? "No response generated.";

    return new Response(JSON.stringify({ answer }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
