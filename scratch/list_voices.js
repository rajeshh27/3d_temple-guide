const axios = require('axios');
require('dotenv').config();

async function listVoices() {
    const key = process.env.ELEVENLABS_API_KEY;
    console.log("Using key:", key.substring(0, 10) + "...");
    try {
        const response = await axios.get('https://api.elevenlabs.io/v1/voices', {
            headers: { 'xi-api-key': key }
        });
        console.log("Available Voices:", response.data.voices.map(v => `${v.name} (${v.voice_id})`).slice(0, 10));
    } catch (err) {
        console.error("Failed to list voices:", err.response ? err.response.data : err.message);
    }
}

listVoices();
