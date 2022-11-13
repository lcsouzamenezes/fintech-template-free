import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

export default function LineChart1 () {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)

    const lineData1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4 ,0.6 ,0.3]
            }
        ]
    }
    const lineOptions1 = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 2,
                borderColor: "rgb(55, 65, 81)"
            },
            point: {
                radius: 0,
                hitRadius: 0
            }
        },
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        }
    }

    return <Line data={lineData1} options={lineOptions1} width={100} height={100} />
}