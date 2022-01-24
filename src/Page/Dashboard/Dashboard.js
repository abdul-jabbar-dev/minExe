import React from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { data, lineData } from '../../Api/Chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';
import { FiPlayCircle } from "@react-icons/all-files/fi/FiPlayCircle";
import { BiUpArrow } from "@react-icons/all-files/bi/BiUpArrow";
import { BiDownArrow } from "@react-icons/all-files/bi/BiDownArrow";
import { BsStopwatch } from "@react-icons/all-files/bs/BsStopwatch";
import { SiGoogleclassroom } from "@react-icons/all-files/si/SiGoogleclassroom";
import frst from "../../images/Dashboard/custom-24.svg"
import sec from "../../images/Dashboard/easd2.svg"
import thir from "../../images/Dashboard/custom-26.svg"
import four from "../../images/Dashboard/custom-27.svg"
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
            title: {
                display: true,
                text: 'Custom Chart Title'
            }

        },
    };
    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }, title: {
                display: true,
                text: 'ছাত্র বিশ্লেষণ',
                font: {
                    size: 18
                }
            }

        },
    };
    return (
        <div>
            <DashboardNav>

            </DashboardNav>

            <div className='grid grid-cols-1 gap-5 container mx-auto mt-10'>

                <div className='grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-5 my-8'>
                    <div className='flex justify-between px-4 items-center '>
                        <div className='order-1 sm:order-0' >
                            <p className='text-xl text-slate-500'>Total Students</p>
                            <p className='text-xl font-bold my-2'>1,542</p>
                            <p><span className='text-green-500'>12%</span> Increase</p>
                        </div>
                        <img className='sm:order-1 order-0' width={'100px'} src={frst} alt="" />
                    </div>

                    <div className='flex justify-between px-4 items-center'>
                        <div >
                            <p className='text-xl text-slate-500'>New Students</p>
                            <p className='text-xl font-bold my-2'>742</p>
                            <p><span className='text-green-500'>09% </span>Increase</p>
                        </div>
                        <img width={'100px'} src={sec} alt="" />
                    </div>

                    <div className='flex justify-between px-4 items-center'>
                        <div className='order-1 sm:order-0' >
                            <p className='text-xl text-slate-500'>Fees Collection</p>
                            <p className='text-xl font-bold my-2'>$542</p>
                            <p><span className='text-green-500'>49% </span> Total</p>
                        </div>
                        <img className='sm:order-1 order-0' width={'100px'} src={thir} alt="" />
                    </div>

                    <div className='flex justify-between px-4 items-center'>
                        <div>
                            <p className='text-xl text-slate-500'>Fees Pending</p>
                            <p className='text-xl font-bold my-2'>$785</p>
                            <p><span className='text-red-500'>-51% </span>  Total</p>
                        </div>
                        <img width={'100px'} src={four} alt="" />
                    </div>

                </div>

                <div class="row-span-2 col-span-2">
                    <div className=" grid grid-cols-4 row-span-2  ">
                        <div className='px-10 col-span-2 grid grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <Doughnut options={options} data={data} />
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
                                <Pie options={options} data={data} />
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


                <div class="row-span-3 ">
                    <Line options={options2} data={lineData} />
                </div>

                <div class="col-span-2">02</div>
            </div>
        </div>
    );
};

export default Dashboard;