import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

// Environment variables
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";
const GROQ_API_URL = process.env.GROQ_API_URL || "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

const HF_TOKEN = process.env.HF_TOKEN || "";
const HF_API_URL = process.env.HF_API_URL || "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0";

// Text Generation (Groq)
app.post("/api/chat", async (c) => {
  try {
    const { prompt } = await c.req.json();

    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1024,
      }),
    });

    const data = await res.json();

    if (data.choices?.[0]?.message?.content) {
      return c.json({ reply: data.choices[0].message.content });
    }

    return c.json({ reply: "Sorry, I couldn't generate a response." });
  } catch {
    return c.json({ reply: "Sorry, something went wrong. Please try again." });
  }
});

// Image Generation (HuggingFace)
app.post("/api/image", async (c) => {
  try {
    const { prompt } = await c.req.json();

    const res = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HF_TOKEN}`,
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const contentType = res.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const data = await res.json();
      return c.json({ error: data.error || "Image generation failed" });
    }

    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return c.json({ image: base64 });
  } catch {
    return c.json({ error: "Image generation failed. Please try again." });
  }
});

// Health check
app.get("/", (c) => c.json({ status: "ok" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
