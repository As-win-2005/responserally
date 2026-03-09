async function mockProvider(prompt) {

const start = Date.now()

// simulate AI thinking time
await new Promise(resolve => setTimeout(resolve,1000))

const latency = Date.now() - start

return {
    provider: "MockAI",
    text: `Mock response for prompt: ${prompt}`,
    latency: latency,
    tokens: 50,
    status: "success"
}

}

module.exports = mockProvider