const axios = require('axios');
const { performance } = require('perf_hooks');

async function benchmarkAPI(endpoint, payload, name) {
    console.log(`\nBenchmarking ${name}...`);
    const start = performance.now();
    try {
        const response = await axios.post(`http://localhost:3000${endpoint}`, payload);
        const end = performance.now();
        console.log(`Status: ${response.status}`);
        console.log(`Latency: ${(end - start).toFixed(2)}ms`);
        if (response.data.text) {
            console.log(`Response length: ${response.data.text.length} chars`);
        }
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

async function runBenchmark() {
    console.log("=== Temple Discovery System Benchmark ===");
    
    // Test Chat (AI Latency)
    await benchmarkAPI('/api/chat', { 
        message: "Tell me the story of the cosmic dance.", 
        persona: "Devadasi Meena" 
    }, "Gemini AI Chat");

    // Test Voice (TTS Latency)
    await benchmarkAPI('/api/voice', { 
        text: "The sacred stones speak of ancient wisdom.", 
        voiceId: "rishi_voice" 
    }, "ElevenLabs Voice");

    console.log("\n=== Benchmark Complete ===");
}

runBenchmark();
