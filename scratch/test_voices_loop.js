const axios = require('axios');
require('dotenv').config();

async function testMultipleVoices() {
    const key = process.env.ELEVENLABS_API_KEY;
    const voices = [
        '21m00T83T4S6m8e6gqR2', // Rachel
        'pNInz6obpg8ndPuo7H8W', // Adam
        'ErXw9S1naS7S2TbeX89h', // Antoni
        'EXAVITQu4vr4xnSDxMaL', // Bella
    ];
    
    for (const voiceId of voices) {
        console.log(`Testing Voice ID: ${voiceId}`);
        try {
            const response = await axios({
                method: 'post',
                url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
                data: { text: "Test", model_id: "eleven_monolingual_v1" },
                headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
                responseType: 'arraybuffer'
            });
            console.log(`✅ Success for ${voiceId}!`);
            return;
        } catch (err) {
            console.error(`❌ Failed for ${voiceId}:`, err.response ? err.response.status : err.message);
        }
    }
}

testMultipleVoices();
