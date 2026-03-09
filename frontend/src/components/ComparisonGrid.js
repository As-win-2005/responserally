import ResponseCard from "./ResponseCard"

function ComparisonGrid({responses,bestModel}){

if(!responses || responses.length === 0){
return null
}

return(

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

{responses.map((res,index)=>(

<ResponseCard
key={index}
data={res}
isBest={res.provider === bestModel}
/>

))}

</div>

)

}

export default ComparisonGrid