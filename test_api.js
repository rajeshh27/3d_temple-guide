const axios = require('axios');

async function testChat() {
    try {
        console.log("Testing Chat API...");
        const response = await axios.post('https://api-3dtempleguide.vercel.app/api/chat', {
            message: "Tell me about the gopuram.",
            persona: "Rishi Veda"
        });
        console.log("Chat Response:", response.data);
    } catch (err) {
        console.error("Chat Test Failed:", err.message);
    }
}

async function testVoice() {
    try {
        console.log("\nTesting Voice API...");
        const response = await axios.post('https://api-3dtempleguide.vercel.app/api/voice', {
            text: "Welcome to the temple experience.",
            voiceId: "rishi_voice"
        });
        console.log("Voice Response:", response.data);
    } catch (err) {
        console.error("Voice Test Failed:", err.message);
    }
}

async function runTests() {
    await testChat();
    await testVoice();
}

runTests();
