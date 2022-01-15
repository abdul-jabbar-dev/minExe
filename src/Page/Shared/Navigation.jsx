import React from 'react';
import headerLogo from "../../images/logo/headerLogo.png"
import './navigatior.css'
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsBook } from "@react-icons/all-files/bs/BsBook";
import { RiBookLine } from "@react-icons/all-files/ri/RiBookLine";
import { IoRocketOutline } from "@react-icons/all-files/io5/IoRocketOutline";
const Navigation = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center bg-gray-100 '>
            <div>
                <img width={'115px'} src={headerLogo} alt="10 Minute school logo" srcset="" />
            </div>

            <div>
                <ul>
                    <li className='listItems px-4 '>
                        <BsBook className='inline'></BsBook>
                        ১ম - দ্বাদশ শ্রেণি
                    </li>

                    <li className='listItems'>
                        <BsBook className='inline'></BsBook>
                        ভর্তি পরীক্ষা
                    </li>

                    <li className='listItems'>
                        <IoRocketOutline className='inline'></IoRocketOutline>
                        কোর্সসমূহ
                    </li>

                    <li className='listItems' >
                        <RiBookLine className='inline'></RiBookLine>বুক স্টোর
                    </li>
                </ul>
            </div>

            <div>
                <button className='loginBtn'>
                    <FiLogIn className='inline'></FiLogIn> লগ-ইন
                </button>
            </div>
        </nav>
    );
};

export default Navigation;