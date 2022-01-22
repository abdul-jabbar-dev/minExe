import React from 'react';
import { Line, Pie, PolarArea, Radar, } from 'react-chartjs-2';
import { data, lineData } from '../../Api/Chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';
ChartJS.register(ArcElement, Tooltip, RadialLinearScale, CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Legend);

const Dashboard = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div className='grid grid-cols-2  gap-5 container mx-auto'>
                <div className= 'p-16 border-2 border-gray-300 rounded-3xl' >
                    <Pie data={data} />
                </div>
                <div className= 'p-16 border-2 border-gray-300 rounded-3xl' >
                    <PolarArea data={data} />
                </div>
                <div className= 'p-16 border-2 border-gray-300 rounded-3xl' >
                    <Radar data={data} />
                </div>
                <div className= 'p-16 border-2 border-gray-300 rounded-3xl' >
                    <Line options={options} data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;