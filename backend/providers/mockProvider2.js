async function mockProvider2(prompt){

const start = Date.now()

await new Promise(resolve => setTimeout(resolve,1500))

const latency = Date.now() - start

return {
    provider:"MockAI-2",
    text:`MockAI-2 explanation for: ${prompt}`,
    latency:latency,
    tokens:60,
    status:"success"
}

}

module.exports = mockProvider2