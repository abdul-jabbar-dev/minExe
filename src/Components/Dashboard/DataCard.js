import React from 'react';
import frst from "../../images/Dashboard/custom-24.svg"
import sec from "../../images/Dashboard/easd2.svg"
import thir from "../../images/Dashboard/custom-26.svg"
import four from "../../images/Dashboard/custom-27.svg"
const DataCard = () => {
    return (
        <>
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
        </>
    );
};

export default DataCard;