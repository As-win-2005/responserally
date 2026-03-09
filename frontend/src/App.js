import {useState} from "react"
import PromptBox from "./components/PromptBox"
import ComparisonGrid from "./components/ComparisonGrid"
import MetricsChart from "./components/MetricsChart"
import {comparePrompt} from "./services/api"

function App(){

const [responses,setResponses] = useState([])
const [bestModel,setBestModel] = useState(null)
const [loading,setLoading] = useState(false)

const handlePrompt = async(prompt)=>{

try{

setLoading(true)

const res = await comparePrompt(prompt)

setResponses(res.data.responses)
setBestModel(res.data.bestModel)

}catch(err){

console.log(err)

}

setLoading(false)

}

return(

<div className="min-h-screen bg-gray-50">

{/* HEADER */}

<div className="bg-white shadow-sm border-b">

<div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

<h1 className="text-3xl font-bold text-green-600">
ResponseRally
</h1>

<span className="text-gray-500">
AI Benchmark Dashboard
</span>

</div>

</div>

{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-8 py-8">

<PromptBox onSubmit={handlePrompt}/>

{/* LOADING */}

{loading && (

<div className="bg-white p-6 rounded-xl shadow mt-6">

<div className="flex items-center space-x-3">

<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>

<p className="text-gray-600">
Analyzing responses from multiple AI models...
</p>

</div>

</div>

)}

{/* BEST MODEL */}

{bestModel && (

<div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg mt-6 font-semibold">

🏆 Recommended Model: {bestModel}

</div>

)}

{/* RESPONSE GRID */}

<ComparisonGrid responses={responses} bestModel={bestModel}/>

{/* CHART */}

<div className="mt-10">

<MetricsChart responses={responses}/>

</div>

</div>

</div>

)

}

export default App