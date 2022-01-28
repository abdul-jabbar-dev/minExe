import React from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { data, data1, lineData } from '../../../Api/Dashboard/Chart';
import { masterChart, optionsChart, optionsChart1 } from '../../../Api/Dashboard/ChartOptions';
import { FiPlayCircle } from "@react-icons/all-files/fi/FiPlayCircle";
import { BiUpArrow } from "@react-icons/all-files/bi/BiUpArrow";
import { BiDownArrow } from "@react-icons/all-files/bi/BiDownArrow";
import { BsStopwatch } from "@react-icons/all-files/bs/BsStopwatch";
import DataCard from '../../../Components/Dashboard/DataCard';
import { SiGoogleclassroom } from '@react-icons/all-files/si/SiGoogleclassroom';
import ReportetList from '../../../Api/Dashboard/ReportetList';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Legend)
const DashboardHome = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-5 container mx-auto mt-10'>

                <div className='grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-5 my-8'>
                    <DataCard></DataCard>
                </div>

                <div class="row-span-2 col-span-2">
                    <div className=" grid grid-cols-4 row-span-2  ">
                        <div className='px-10 col-span-2 grid grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <Doughnut options={optionsChart} data={data} />
                            </div>
                            <div className='grid grid-rows-2  '>
                                <div className='flex justify-around'>
                                    <div className='flex justify-evenly flex-col items-center'>
                                        <FiPlayCircle style={{ backgroundColor: '#FF4069' }} className='text-5xl rounded-full text-white p-3'></FiPlayCircle>
                                    </div>
                                    <div className=' flex justify-center flex-col items-start mb-4 lg:mb-0'>
                                        <p className='text-sm  '>নতুন ভিডিও</p>
                                        <p className='text-2xl font-semibold'>80+</p>
                                        <span className='text-sm  rounded-full inline text-green-700'>
                                            <BiUpArrow className='inline'></BiUpArrow>
                                            0.5% &nbsp;
                                            <p className='inline text-black'>Last 30 days</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-around'>
                                    <div className='flex justify-evenly flex-col items-center'>
                                        <SiGoogleclassroom style={{ backgroundColor: '#FF4069' }} className='text-5xl rounded-full text-white p-3'></SiGoogleclassroom>
                                    </div>
                                    <div className='flex justify-center flex-col items-start'>
                                        <p className='text-sm  '>ক্লাসের পরিমান</p>
                                        <p className='text-2xl font-semibold'>130+</p>
                                        <span className='text-sm  rounded-full inline text-red-700'>
                                            <BiDownArrow className='inline'></BiDownArrow>
                                            0.5% &nbsp;
                                            <p className='inline text-black'>Last 30 days</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-10 col-span-2 grid  grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <Pie options={optionsChart1} data={data1} />
                            </div>
                            <div className='grid grid-rows-2 '>
                                <div className='flex justify-around'>
                                    <div className='flex justify-evenly flex-col items-center'>
                                        <FiPlayCircle style={{ backgroundColor: '#FF4069' }} className='text-5xl rounded-full text-white p-3'></FiPlayCircle>
                                    </div>
                                    <div className='flex justify-center flex-col items-start mb-4 lg:mb-0'>
                                        <p className='text-sm  '>ক্লাসের পরিমান</p>
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

                    </div>
                </div>


                <div class="row-span-3 grid gap-5 grid-cols-6"  >

                    <div className=' lg:col-span-3  col-span-6' >
                        <Line style={{ maxHeight: '300px' }} options={masterChart} data={lineData} />
                    </div>

                    <div className='scrollClass lg:col-span-3 col-span-6' style={{ height: '300px', overflow: 'auto' }}>
                        <ReportetList></ReportetList>
                    </div>

                </div>

                <div class="col-span-2">02</div>
            </div>
        </div>
    );
};

export default DashboardHome;