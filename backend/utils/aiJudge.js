const openrouterProvider = require("../providers/openrouterProvider")

async function evaluateResponses(prompt, responses) {

  try {

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

Return ONLY valid JSON.

Example:
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

    if(!judge || judge.status === "error"){
      console.log("AI Judge returned error")
      return []
    }

    if(!judge.text){
      console.log("AI Judge empty response")
      return []
    }

    let parsed

    try{
      parsed = JSON.parse(judge.text)
    }
    catch(err){
      console.log("AI Judge JSON parse failed")
      console.log(judge.text)
      return []
    }

    if(parsed && parsed.scores){
      return parsed.scores
    }

    return []

  }

  catch(err){

    console.log("AI Judge Error:", err)

    return []

  }

}

module.exports = evaluateResponses