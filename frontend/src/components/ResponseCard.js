import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import modelLogos from "../utils/modelLogos"


function ResponseCard({data,isBest}){

if(data.status === "error"){

return(

<div className="bg-red-50 border border-red-200 p-4 rounded-lg">

<h3 className="font-semibold text-red-600">
{data.provider}
</h3>

<p className="text-sm">
Error: {JSON.stringify(data.message)}
</p>

</div>

)

}

return(

<div className={`bg-white shadow-md rounded-xl p-6 transition hover:shadow-xl
${isBest ? "border-2 border-green-500" : "border"}`}>

{/* HEADER */}

<div className="flex items-center space-x-2 mb-3">

<img
src={modelLogos[data.provider]}
alt="logo"
className="w-20 h-10"
/>

<h3 className="text-lg font-semibold text-green-700">

{data.provider}

{isBest && (
<span className="ml-2 text-green-600">⭐ BEST</span>
)}

</h3>

</div>

{/* RESPONSE */}

<div className="text-gray-700 prose max-w-none">

<ReactMarkdown remarkPlugins={[remarkGfm]}>
{data.text}
</ReactMarkdown>

</div>

<hr className="my-4"/>

{/* METRIC BARS */}

<div className="space-y-3">

{/* Latency */}

<div>

<p className="text-sm font-semibold">Latency</p>

<div className="w-full bg-gray-200 rounded-full h-2">

<div
className="bg-green-500 h-2 rounded-full"
style={{width:`${Math.min(data.latency/100,100)}%`}}
></div>

</div>

</div>

{/* Tokens */}

<div>

<p className="text-sm font-semibold">Tokens</p>

<div className="w-full bg-gray-200 rounded-full h-2">

<div
className="bg-green-400 h-2 rounded-full"
style={{width:`${Math.min(data.tokens/10,100)}%`}}
></div>

</div>

</div>

{/* Quality */}

<div>

<p className="text-sm font-semibold">Quality Score</p>

<div className="w-full bg-gray-200 rounded-full h-2">

<div
className="bg-green-600 h-2 rounded-full"
style={{width:`${data.qualityScore*10}%`}}
></div>

</div>

</div>

</div>

</div>

)

}

export default ResponseCard