import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler

} from "chart.js";

import {Bar, Doughnut, Pie,Line } from 'react-chartjs-2'

import {months} from '../utils/constant';


ChartJS.register(
    CategoryScale,
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
)

// Bar Chart
export const BarChart = ({
    data_1 = [],
    data_2 = [],
    title_1,
    title_2,
    bgColor_1,
    bgColor_2,
    horizontal = false, // true : vertical : horizontal
    labels = months
 }) =>  {
    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x", // horizontal ? y : "x"
        plugins: {
            legend: {
                display: true  // if legend display is true the show legend title if not the hide title
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart"
            }
        },
        scales: {    // here is that condition execute if horizontal is true the horizontal chart or vertical char
            y: {
                beginAtZero: true, // chart start from zero
                grid: {
                    display: false // show the line in horizontal if the y grid true
                }
            },
            x: {
                grid: {
                    display: false  // show the line in vertical if the x grid true 
                }
            }
        }
    };

    const barData = {
        labels,
        datasets: [
            {
                label: title_1, //  legend title
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: "flex",
                barPercentage: 1, // chart width 
                categoryPercentage: 0.5 // chart width 
            },
            {
                label: title_2, // legend title
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: "flex",
                barPercentage: 1, // chart width 
                categoryPercentage: 0.5 // chart width 
            }
        ]
    };


    return <Bar width={horizontal ? "200%": ""} options={options} data={barData} />
};

//----------- Doughnut Chart -----------------
export const DoughnutChart = ({ labels,data,backgroundColor,cutout,legends=true,offset }) => {

const doughnutData = {
    labels,
    datasets:[
        {
            data,
            backgroundColor,
            borderWidth:0,
            offset
        }
    ]
  };
  
    // Options
  const doughnutOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:legends,
            position:"bottom", // left right , top , bottom
            labels:{
               padding:40,  
            }
        }
    },
    cutout
  }
   return <Doughnut data={doughnutData} options={doughnutOptions}  />
  };


  //---------  Pie Chart -------------------------------

  export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset
}) => {

    // Data
    const pieChartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 1,
                offset // / offset to set how many distance cutout
            }
        ]
    };

    // Options
    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
    };

    return <Pie data={pieChartData} options={pieChartOptions} />
}


// Line Chart

export const LineChart = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels = [] // Default empty array if not provided
}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    const lineChartData = {
        labels,
        datasets: [
            {
                fill: true,
                label,
                data,
                backgroundColor,
                borderColor,
            }
        ]
    };

    return <Line options={options} data={lineChartData} />;
};

