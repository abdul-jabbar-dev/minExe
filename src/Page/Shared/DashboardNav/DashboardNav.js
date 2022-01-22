import { BsBook } from '@react-icons/all-files/bs/BsBook';
import { IoRocketOutline } from '@react-icons/all-files/io5/IoRocketOutline';
import { RiBookLine } from '@react-icons/all-files/ri/RiBookLine';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <div className='w-full h-max'>
            <div className='justify-center flex'>
                <NavLink to={'/'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink " : " ")} >
                    <BsBook className='inline'></BsBook>
                    ১ম - দ্বাদশ শ্রেণি
                </NavLink>

                <NavLink to={'/skills'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <IoRocketOutline className='inline'></IoRocketOutline>
                    কোর্সসমূহ
                </NavLink>

                <NavLink to={'/SkillDetails'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <BsBook className='inline'></BsBook>
                    ভর্তি পরীক্ষা
                </NavLink>

                <NavLink to={'/courdse'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                    <RiBookLine className='inline'></RiBookLine>
                    বুক স্টোর
                </NavLink>
            </div>
        </div>
    );
};

export default DashboardNav;