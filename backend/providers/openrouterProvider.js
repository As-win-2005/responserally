const axios = require("axios")

async function openrouterProvider(prompt, model){

const start = Date.now()

const calculateMetrics = require("../utils/metrics")

try{

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
"HTTP-Referer": "http://localhost:5000",
"X-Title": "ResponseRally"
}
}

)

const latency = Date.now() - start

const metrics = calculateMetrics(response.data.choices[0].message.content)

return {

provider:model,

text:response.data.choices[0].message.content,

latency:latency,

tokens:response.data.usage?.total_tokens || 0,

metrics:metrics,

status:"success"

}

}catch(error){

return {

provider: model,
status: "error",
message: error.response?.data || error.message

}

}

}

module.exports = openrouterProvider