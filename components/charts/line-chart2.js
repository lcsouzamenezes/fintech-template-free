import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

export default function LineChart2 () {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)

    const lineData2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                data: [8, 10, 8, 9, 2, 3, 2, 3, 4]
            }
        ]
    }
    const lineOptions2 = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 2,
                borderColor: "rgb(153, 102, 255)"
            },
            point: {
                radius: 0,
                hitRadius: 0
            }
        }
    }

    return <Line data={lineData2} options={lineOptions2} width={100} height={50} />
}