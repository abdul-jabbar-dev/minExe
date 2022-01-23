import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { data, lineData } from '../../Api/Chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';
import { FiPlayCircle } from "@react-icons/all-files/fi/FiPlayCircle";
import { BiUpArrow } from "@react-icons/all-files/bi/BiUpArrow";
import { BiDownArrow } from "@react-icons/all-files/bi/BiDownArrow";
import { BsStopwatch } from "@react-icons/all-files/bs/BsStopwatch";
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
                position: 'right',
            },

        },
    };
    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        },
    };
    return (
        <div>
            <DashboardNav>

            </DashboardNav>
            <div className='grid grid-cols-1   gap-5 container mx-auto mt-10'>

                <div class="row-span-2 col-span-2">
                    <div className=" grid grid-cols-4 row-span-2  ">
                        <div className='px-10 col-span-2 grid grid-cols-2'>
                            <div>
                                <Doughnut options={options} data={data} />
                            </div>
                            <div className='grid grid-rows-2 '>
                                <div className='flex justify-around'>
                                    <div className='flex justify-evenly flex-col items-center'>
                                        <FiPlayCircle style={{ backgroundColor: '#FF4069' }} className='text-5xl rounded-full text-white p-3'></FiPlayCircle>
                                    </div>
                                    <div className='flex justify-center flex-col items-start'>
                                        <p className='text-sm  '>নতুন ভিডিও</p>
                                        <p className='text-2xl font-semibold'>80+</p>
                                        <span className='text-sm  rounded-full inline text-green-700'>
                                            <BiUpArrow className='inline'></BiUpArrow>
                                            0.5% &nbsp;
                                            <p className='inline text-black'>Last 6 days</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-around'>
                                    <div className='flex justify-evenly flex-col items-center'>
                                        <BsStopwatch style={{ backgroundColor: '#FF4069' }} className='text-5xl rounded-full text-white p-3'></BsStopwatch>
                                    </div>
                                    <div className='flex justify-center flex-col items-start'>
                                        <p className='text-sm  '>ভিডিও দেখার সময়</p>
                                        <p className='text-2xl font-semibold'>15,130+</p>
                                        <span className='text-sm  rounded-full inline text-red-700'>
                                            <BiDownArrow className='inline'></BiDownArrow>
                                            0.5% &nbsp;
                                            <p className='inline text-black'>Last 30 days</p>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='px-10 col-span-2 grid grid-cols-2'>
                            <div>
                                <Doughnut options={options} data={data} />
                            </div>
                            <div>

                            </div>
                        </div>


                    </div>
                </div>


                <div class="row-span-3 ">
                    <Line options={options2} data={lineData} />
                </div>

                <div class="col-span-2">02</div>
            </div>
        </div>
    );
};

export default Dashboard;