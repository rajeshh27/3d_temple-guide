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
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

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


// ElevenLabs TTS was removed in favor of Web Speech Synthesis



// --- AI Narrative Engine ---
// Directly returns the pre-written narration from temple_data.js.
app.get('/api/narrative', (req, res) => {
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

    // Get the pre-written narration from data
    let text = "";
    if (typeof eraData.narration === 'object' && eraData.narration !== null) {
        // Multi-language object format
        text = eraData.narration[language.code] || eraData.narration['en'];
    } else {
        // String format (fallback)
        text = eraData.narration;
    }

    // Ultimate fallback if text is missing
    if (!text) {
        text = `Welcome to ${temple.name}. You are viewing the ${eraData.label} era. ` +
               (eraData.facts ? eraData.facts[0] : "");
    }

    // Return the response directly
    res.json({
        text: text,
        templeId: temple.id,
        era: eraKey,
        lang: language.code,
        speechCode: language.speechCode,
        source: "local_data"
    });
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