import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

export default function LineChart2 () {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)

    const lineData3 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                data: [2300, 3100, 1700, 2500, 1300, 2400, 1700, 1500, 1700]
            }
        ]
    }
    const lineOptions3 = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 2,
                borderColor: "rgb(75, 192, 192)"
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
                display: true
            }
        }
    }

    return <Line data={lineData3} options={lineOptions3} width={100} height={50} />
}