const axios = require('axios');
require('dotenv').config();

async function testTTS() {
    const key = process.env.ELEVENLABS_API_KEY;
    const voiceId = 'pNInz6obpg8ndPuo7H8W'; // Adam
    console.log("Testing TTS with key:", key.substring(0, 10) + "...");
    
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
            data: {
                text: "Hello world",
                model_id: "eleven_monolingual_v1"
            },
            headers: {
                'xi-api-key': key,
                'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer'
        });
        console.log("Success! Audio length:", response.data.byteLength);
    } catch (err) {
        console.error("TTS Failed:", err.response ? JSON.stringify(err.response.data.toString()) : err.message);
    }
}

testTTS();
