const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { TEMPLES, SUPPORTED_LANGUAGES, ERA_MAP } = require("./temple_data");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('./'));

const PORT = process.env.PORT || 3000;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// --- AI Chat Endpoint ---
app.post('/api/chat', async (req, res) => {
    const { message, persona } = req.body;
    
    try {
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_key_here') {
            return res.json({ text: `[Simulated ${persona}] Please add a real GEMINI_API_KEY in the .env file to enable live AI responses. Current message: "${message}"` });
        }

        const prompt = `You are ${persona}, an expert in Indian temple culture, history, and traditions. 
        Respond to the following message in a respectful, wise, and culturally rich manner. 
        Keep the response concise (max 3 sentences) but deeply informative.
        Message: "${message}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ text: response.text() });
    } catch (err) {
        console.warn("Gemini API unavailable (quota/network). Chatbot using local fallback.");
        res.json({ text: "🙏 The AI service is currently resting. Please try one of the quick questions for instant answers, or try again later." });
    }
});


// --- AI Narrative Engine ---
// Generates historically rich narration text for a specific temple, era, and language.
// The frontend will feed this text to Web Speech API for playback.
app.get('/api/narrative', async (req, res) => {
    const { templeId, era, lang } = req.query;

    // Validate temple
    const temple = TEMPLES[templeId];
    if (!temple) {
        return res.status(400).json({ 
            error: "Temple not found", 
            available: Object.keys(TEMPLES) 
        });
    }

    // Validate era
    const eraKey = ERA_MAP[era] || era; // Accept both "0" and "ancient"
    const eraData = temple.eras[eraKey];
    if (!eraData) {
        return res.status(400).json({ 
            error: "Era not found", 
            available: Object.keys(temple.eras) 
        });
    }

    // Validate language
    const language = SUPPORTED_LANGUAGES.find(l => l.code === (lang || "en"));
    if (!language) {
        return res.status(400).json({ 
            error: "Language not supported", 
            available: SUPPORTED_LANGUAGES.map(l => ({ code: l.code, name: l.name })) 
        });
    }

    try {
        // Check for valid API key
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_key_here') {
            // Return the pre-written narration (check if it's a multi-lang object or a simple string)
            let fallbackText = "";
            if (typeof eraData.narration === 'object' && eraData.narration !== null) {
                fallbackText = eraData.narration[language.code] || eraData.narration['en'];
            } else {
                fallbackText = eraData.narration;
            }

            if (!fallbackText) {
                fallbackText = `Welcome to ${temple.name}, located in ${temple.location}. ` +
                    `Built by the ${temple.dynasty} in ${temple.yearBuilt}. ` +
                    eraData.facts.join(" ");
            }

            return res.json({
                text: fallbackText,
                templeId: temple.id,
                era: eraKey,
                lang: language.code,
                speechCode: language.speechCode,
                source: "fallback"
            });
        }

        const prompt = `You are a world-class heritage narrator and storyteller. 
Generate a spoken narration about ${temple.name} (${temple.location}) for the "${eraData.label}" era.

CONTEXT — Use these historical facts as your foundation:
${eraData.facts.map((f, i) => `${i + 1}. ${f}`).join("\n")}

Additional context:
- Dynasty: ${temple.dynasty}
- Year Built: ${temple.yearBuilt}
- Deity: ${temple.deity}
- Key highlights: ${temple.highlights.join(", ")}

RULES:
1. Write the narration entirely in ${language.name} language.
2. The tone should be warm, poetic, and reverent — like a museum audio guide narrated by a wise elder.
3. Length: 4-6 sentences. It should take about 30-45 seconds to read aloud.
4. Start with a welcoming phrase appropriate to the language and culture.
5. Weave the historical facts into a flowing narrative — do NOT list them.
6. End with an evocative sentence that makes the listener feel connected to the place.
7. Output ONLY the narration text — no titles, labels, or markdown.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;

        res.json({
            text: response.text(),
            templeId: temple.id,
            era: eraKey,
            lang: language.code,
            speechCode: language.speechCode,
            source: "gemini"
        });

    } catch (err) {
        console.warn("Gemini API unavailable. Using pre-written narration.");
        // Use the pre-written narration as a high-quality fallback
        let fallbackText = "";
        if (typeof eraData.narration === 'object' && eraData.narration !== null) {
            fallbackText = eraData.narration[language.code] || eraData.narration['en'];
        } else {
            fallbackText = eraData.narration;
        }

        if (!fallbackText) {
            fallbackText = eraData.facts.join(". ") + ".";
        }

        res.json({
            text: fallbackText,
            templeId: temple.id,
            era: eraKey,
            lang: language.code,
            speechCode: language.speechCode,
            source: "fallback"
        });
    }
});


// --- Temple Info Endpoint ---
// Returns available temples, languages, and eras for the frontend
app.get('/api/temples', (req, res) => {
    const templeList = Object.values(TEMPLES).map(t => ({
        id: t.id,
        name: t.name,
        location: t.location,
        dynasty: t.dynasty,
        eras: Object.keys(t.eras).map(eraKey => ({
            key: eraKey,
            label: t.eras[eraKey].label
        }))
    }));

    res.json({
        temples: templeList,
        languages: SUPPORTED_LANGUAGES
    });
});


app.listen(PORT, () => {
    console.log(`Temple Backend running at http://localhost:${PORT}`);
});


app.get("/", (req, res) => {
  res.send("Temple Guide Backend Running 🚀");
});