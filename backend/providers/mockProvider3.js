async function mockProvider3(prompt){

const start = Date.now()

await new Promise(resolve => setTimeout(resolve,700))

const latency = Date.now() - start

return {
    provider:"MockAI-3",
    text:`MockAI-3 answer for: ${prompt}`,
    latency:latency,
    tokens:45,
    status:"success"
}

}

module.exports = mockProvider3