import { FiVideo } from '@react-icons/all-files/fi/FiVideo';
import { VscCreditCard } from '@react-icons/all-files/vsc/VscCreditCard';
import { AiOutlinePieChart } from '@react-icons/all-files/ai/AiOutlinePieChart';
import { ImProfile } from '@react-icons/all-files/im/ImProfile';

import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <div className='w-full h-max'>
            <div className='justify-center flex'>
                <NavLink end to={''} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink " : " ")} >
                    <AiOutlinePieChart className='inline'></AiOutlinePieChart>
                    কোর্স বিশ্লেষণ
                </NavLink>

                <NavLink to={'/dashboard/teachers'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <ImProfile className='inline'></ImProfile>
                    শিক্ষকদের প্রোফাইল
                </NavLink>

                <NavLink to={'/dashboard/courses'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <FiVideo className='inline'></FiVideo>
                    সব কোর্স
                </NavLink>

                <NavLink to={'/dashboard/currency'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <VscCreditCard className='inline'></VscCreditCard>
                    মূলধন
                </NavLink>
            </div>
        </div>
    );
};

export default DashboardNav;