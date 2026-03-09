function calculateMetrics(text){

if(!text){
return null
}

const length = text.length

const words = text.split(/\s+/).length

const sentences = text.split(/[.!?]/).length

const avgWordsPerSentence = words / sentences

return {
response_length:length,
word_count:words,
sentence_count:sentences,
avg_words_per_sentence:avgWordsPerSentence.toFixed(2)
}

}

module.exports = calculateMetrics