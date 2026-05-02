const axios = require('axios');
require('dotenv').config();

async function listModels() {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
        const response = await axios.get(url);
        console.log("Available Models:");
        response.data.models.forEach(m => console.log(m.name));
    } catch (err) {
        console.error("List Models Error:", err.response ? err.response.data : err.message);
    }
}

listModels();
