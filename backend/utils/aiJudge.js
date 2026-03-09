const openrouterProvider = require("../providers/openrouterProvider")

async function evaluateResponses(prompt,responses){

try{

let evaluationPrompt = `You are an AI evaluator.

User Prompt:
${prompt}

Below are responses from different AI models.

`

responses.forEach((r,i)=>{

if(r.status === "success"){
evaluationPrompt += `
Model ${i+1}: ${r.provider}
Response:
${r.text}

`
}

})

evaluationPrompt += `
Evaluate the responses based on:
1. Accuracy
2. Clarity
3. Completeness

Give each response a score from 1 to 10.

Return ONLY JSON like this:

{
 "scores":[
   {"provider":"model_name","score":8}
 ]
}
`

const judge = await openrouterProvider(
evaluationPrompt,
"openai/gpt-4o-mini"
)

const result = JSON.parse(judge.text)

return result.scores

}catch(err){

console.log("AI Judge Error",err)

return []

}

}

module.exports = evaluateResponses