function calculateHybridScore(responses){

let bestModel = null
let bestScore = -Infinity

responses.forEach(r=>{

if(r.status !== "success") return

const latencyScore = 10000 / r.latency

const tokenScore = 1000 / (r.tokens || 1)

const wordScore = r.metrics?.word_count || 0

const qualityScore = r.qualityScore * 50

const finalScore =
latencyScore +
tokenScore +
wordScore +
qualityScore

r.finalScore = finalScore

if(finalScore > bestScore){

bestScore = finalScore
bestModel = r.provider

}

})

return bestModel

}

module.exports = calculateHybridScore