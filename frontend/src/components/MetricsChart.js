import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"
import { motion } from "framer-motion"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

function MetricsChart({responses}){

if(!responses || responses.length === 0){
return null
}

const providers = responses.map(r => r.provider)

const latencyData = responses.map(r => r.latency || 0)
const tokenData = responses.map(r => r.tokens || 0)
const wordData = responses.map(r => r.metrics?.word_count || 0)

const chartData = {

labels: providers,

datasets: [

{
label:"Latency",
data:latencyData,
backgroundColor:"#22c55e"
},

{
label:"Tokens",
data:tokenData,
backgroundColor:"#16a34a"
},

{
label:"Words",
data:wordData,
backgroundColor:"#4ade80"
}

]

}

const options = {

responsive:true,

plugins:{
legend:{position:"top"},
title:{
display:true,
text:"LLM Benchmark Metrics"
}
}

}

return(

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="bg-white p-6 rounded-xl shadow-md"
>

<h2 className="text-xl font-semibold text-green-700 mb-4">

📊 Model Performance Metrics

</h2>

<Bar data={chartData} options={options}/>

</motion.div>

)

}

export default MetricsChart