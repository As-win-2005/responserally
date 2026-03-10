const axios = require("axios")
const calculateMetrics = require("../utils/metrics")

async function openrouterProvider(prompt, model) {
console.log("Using API Key:", process.env.OPENROUTER_API_KEY?.slice(0,10));
  const start = Date.now()

  try {

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: model,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "ResponseRally"
        }
      }
    )

    const latency = Date.now() - start

    const text = response.data.choices[0].message.content

    const metrics = calculateMetrics(text)

    return {
      provider: model,
      text: text,
      latency: latency,
      tokens: response.data.usage?.total_tokens || 0,
      metrics: metrics,
      status: "success"
    }

  } catch (error) {

    console.log("OpenRouter API Error:", error.response?.data || error.message)

    return {
      provider: model,
      status: "error",
      message: error.response?.data || error.message
    }

  }

}

module.exports = openrouterProvider