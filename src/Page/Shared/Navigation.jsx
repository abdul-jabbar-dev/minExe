import React from 'react';
import headerLogo from "../../images/logo/headerLogo.png"
import './navigatior.css'
const Navigation = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center'>
            <div>
                <img width={'115px'} src={headerLogo} alt="10 Minute school logo" srcset="" />
            </div>

            <div>
                <ul>
                    <li className='listItems mx-1 px-4'>
                        <i class="fas fa-book-open mr-3 "></i>
                        ১ম - দ্বাদশ শ্রেণি</li>
                    <li className='listItems mx-1 px-4'>
                        <i class="fas fa-book-open mr-3 "></i>
                        ভর্তি পরীক্ষা</li>
                    <li className='listItems mx-1 px-4'>কোর্সসমূহ</li>
                    <li className='listItems mx-1 px-4'>বুক স্টোর</li>
                </ul>
            </div>

            <div>

                <button className='loginBtn'> লগ-ইন</button>
            </div>
        </nav>
    );
};

export default Navigation;