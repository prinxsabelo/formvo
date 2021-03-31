import { HorizontalBar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const SumChart = (props) => {

    const data = {
        labels: ['Simple', 'Easy',],

        datasets: [

            {
                label: "Percentage ",
                data: [100, 30],

                backgroundColor: 'rgb(116, 202, 254)',
                categoryPercentage: 1.0,
                barPercentage: 0.9,

            },

        ],

    }
    const options = {
        tooltips: { enabled: false },
        layout: {
            padding: {
                left: 40,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        plugins: {
            datalabels: {
                formatter: function (value, context) {
                    return value + '%';
                },
                display: true,
                color: 'black',
                align: 'start',
                anchor: 'start',
                clamp: true,
                position: 'right',
                font: {
                    size: "14",
                }

            }
        },
        legend: {
            display: false,

            responsive: true,
            maintainAspectRatio: false,

        },
        scales: {

            xAxes: [
                {
                    display: false,
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        stepSize: 20,

                    },
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                    },

                },

            ],
            yAxes: [{

                stacked: true,
                ticks: {
                    mirror: true,
                    padding: -5,
                    fontColor: 'black',

                    z: 1000,
                    fontSize: 14
                },
                gridLines: {
                    display: false,
                    offsetGridLines: false,
                },
            }]
        },
    }

    return (
        <>
            <div style={{ position: 'relative', width: '100%' }} className="hidden md:flex">
                < HorizontalBar
                    width={50} height={12}
                    data={data}
                    options={options}
                />
            </div >
            <div style={{ position: 'relative', width: '90%' }} className="md:hidden -2">
                < HorizontalBar
                    height={100}
                    data={data}
                    options={options}
                />
            </div >
        </>
    );
}
export default SumChart