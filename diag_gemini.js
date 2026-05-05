const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        // There is no direct listModels in the client SDK like this, 
        // but we can try to initialize and check.
        // Actually, let's just try the most common one: 'gemini-1.5-flash' again but with a different approach.
        console.log("Testing API Key with gemini-flash-latest...");
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
        const result = await model.generateContent("Hi");
        console.log("Success:", result.response.text());
    } catch (err) {
        console.error("Error:", err.message);
    }
}

listModels();
