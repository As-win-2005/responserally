const openrouterProvider = require("../providers/openrouterProvider")

async function runProviders(prompt){

const providers = [

openrouterProvider(prompt,"openai/gpt-4o-mini"),

openrouterProvider(prompt,"meta-llama/llama-3-8b-instruct"),

openrouterProvider(prompt,"deepseek/deepseek-chat")

]

const results = await Promise.allSettled(providers)

return results.map(result => {

if(result.status === "fulfilled"){
return result.value
}else{
return {
provider:"unknown",
status:"error"
}
}

})

}

module.exports = runProviders