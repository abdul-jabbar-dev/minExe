import React from 'react';
import headerLogo from "../../images/logo/headerLogo.png"
import './navigatior.css'
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsBook } from "@react-icons/all-files/bs/BsBook";
import { RiBookLine } from "@react-icons/all-files/ri/RiBookLine";
import { IoRocketOutline } from "@react-icons/all-files/io5/IoRocketOutline";
import { Link, NavLink } from 'react-router-dom';
const Navigation = () => {

    return (
        <section className='container mx-auto sticky top-0 '>
            <nav className='container py-3  mx-auto flex justify-between items-center bg-gray-100 '>
                <div className=''>
                    <Link to="/"><img width={'115px'} src={headerLogo} alt="10 Minute school logo" srcset="" /></Link>
                </div>

                <div >
                    <div >
                        <NavLink to={'/'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink " : " ")} >
                            <BsBook className='inline'></BsBook>
                            ১ম - দ্বাদশ শ্রেণি
                        </NavLink>

                        <NavLink to={'/skills'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                            <IoRocketOutline className='inline'></IoRocketOutline>
                            কোর্সসমূহ/munnaV
                        </NavLink>

                        <NavLink to={'/SkillDetails'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                            <BsBook className='inline'></BsBook>
                            ভর্তি পরীক্ষা/marufv
                        </NavLink>

                        <NavLink to={'/courdse'} className={({ isActive }) => "listItemsLink md:ml-1 " + (isActive ? " activeListItemsLink md:ml-1" : " ")} >
                            <RiBookLine className='inline'></RiBookLine>
                            বুক স্টোর
                        </NavLink>
                    </div>
                </div>

                <div>
                    <button className='loginBtn'>
                        <FiLogIn className='inline'></FiLogIn> লগ-ইন
                    </button>
                </div>
            </nav>
        </section>
    );
};

export default Navigation;