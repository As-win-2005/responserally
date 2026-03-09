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

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

function BenchmarkChart({responses, metric}){

const labels = responses.map(r => r.provider)

const dataValues = responses.map(r => {

if(metric === "latency") return r.latency
if(metric === "tokens") return r.tokens
if(metric === "score") return r.qualityScore

})

const data = {
labels: labels,
datasets: [
{
label: metric.toUpperCase(),
data: dataValues
}
]
}

return(
<div style={{marginTop:"30px"}}>
<h3>{metric.toUpperCase()} Comparison</h3>
<Bar data={data}/>
</div>
)

}

export default BenchmarkChart