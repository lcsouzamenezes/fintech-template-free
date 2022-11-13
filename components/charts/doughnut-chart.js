import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

export default function DoughnutChart () {
    Chart.register(ArcElement)

    const doughnutData = {
        datasets: [{
            label: 'Doughnut chart',
            data: [59, 83, 89, 76, 55, 40],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ]
        }]
    }
    const doughnutOptions = {
        elements: {
            arc: {
                weight: 0.5,
                borderWidth: 20
            }
        },
        cutout: 150
    }

    return <Doughnut data={doughnutData} options={doughnutOptions} width={10} height={10} />
}