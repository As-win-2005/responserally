import {useState} from "react"

function PromptBox({onSubmit}){

const [prompt,setPrompt] = useState("")

const handleSubmit = ()=>{

if(prompt.trim()){
onSubmit(prompt)
}

}

return(

<div className="bg-white shadow rounded-xl p-6 mb-6">

<h2 className="text-lg font-semibold mb-3">
Enter Prompt
</h2>

<textarea
rows="4"
className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
placeholder="Ask something to compare AI models..."
onChange={(e)=>setPrompt(e.target.value)}
/>

<button
onClick={handleSubmit}
className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
>

Compare Models

</button>

</div>

)

}

export default PromptBox