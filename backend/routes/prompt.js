const express = require("express")
const router = express.Router()

const runProviders = require("../services/orchestrator")
const evaluateResponses = require("../utils/aiJudge")
const calculateHybridScore = require("../utils/hybridScore")

router.post("/compare", async (req,res)=>{

const {prompt} = req.body

if(!prompt){
return res.status(400).json({error:"Prompt required"})
}

try{

// Run LLM providers
const responses = await runProviders(prompt)


// AI Judge evaluates quality
const scores = await evaluateResponses(prompt,responses)


// Attach quality score
responses.forEach(r=>{

const found = scores.find(s=>s.provider === r.provider)

if(found){
r.qualityScore = found.score
}else{
r.qualityScore = 0
}

})


// Calculate hybrid score
const bestModel = calculateHybridScore(responses)


// Return response
res.json({

prompt:prompt,

bestModel:bestModel,

responses:responses

})

}catch(err){

console.error(err)

res.status(500).json({
error:"Internal server error"
})

}

})

module.exports = router