import React from 'react';
import './Footer.css'
import footerLogo from '../../images/logo/footerLogoWhite.png'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import playStore from '../../images/logo/playstore.svg'
const Footer = () => {
    return (
        <div className='footerComponent  py-12'>
            <div className="container  mx-auto ">
                <div className="grid grid-cols-12 gap-5">

                    <div className='col-span-3'>

                        <div>
                            <img width={'115px'} src={footerLogo} alt="" />
                        </div>

                        <div className=' text-2xl my-6 flex gap-6 text-white'>
                            <div className=' footerLogo'>
                                <FaFacebookSquare />
                            </div>
                            <div className='footerLogo'>
                                <AiFillInstagram />
                            </div>
                            <div className='footerLogo'>
                                <FaYoutube />
                            </div>
                            <div className='footerLogo'>
                                <FaLinkedin />
                            </div>
                        </div>
                        <p>সমস্যার ক্ষেত্রে: <span className='cstm-secondary-TC'>০১৭৩-৩৯৪১৯১৩</span> (সকাল ৯টা - রাত ১০টা) অথবা মেসেজ করুন 10MSHelp to ২৬৯৬৯ (২৪x৭)</p>
                        <br />
                        <img src={playStore} alt="" />
                    </div>

                    <div className='col-span-2'>
                        <ul>
                            <label className=' text-xl font-bold'>কোম্পানি</label><br /><br />
                            <li className='moreLink'>Privacy policy</li>
                            <li className='moreLink'>Terms of use</li>
                            <li className='moreLink'>Refund policy</li>
                            <li className='moreLink'>Careers</li>
                        </ul>
                    </div>

                    <div className='col-span-3'>
                        <ul>
                            <label className=' text-xl font-bold'>ক্র্যাশ কোর্স</label><br /><br />
                            <li className='moreLink'>HSC 2021 এডমিশন প্রস্তুতি কোর্স</li>
                            <li className='moreLink'>SSC Crash Course 2022</li>
                            <li className='moreLink'>HSC Crash Course 2022</li>
                            <li className='moreLink'>Pre Admission Medical 2021</li>
                            <li className='moreLink'>HSC ICT Crash Course</li>
                            <li className='moreLink'>HSC Grammar Crash Course</li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <ul>
                            <label className=' text-xl font-bold'>জনপ্রিয়</label><br /><br />
                            <li className='moreLink'>ঘরে বসে Spoken English</li>
                            <li className='moreLink'>২৪ ঘণ্টায় কুরআন শিখি</li>
                            <li className='moreLink'>English</li>
                            <li className='moreLink'>Grammar</li>
                            <li className='moreLink'>Microsoft</li>
                            <li className='moreLink'>PowerPoint</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <label className=' text-xl font-bold'>অন্যান্য</label><br /><br />
                            <li className='moreLink'>Study</li>
                            <li className='moreLink'>Skills</li>
                            <li className='moreLink'>Book Store</li>
                            <li className='moreLink'>Blog</li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-16 mb-6' style={{ border: '1px solid #474747' }} />
            </div>
            <p className='text-center'>স্বত্ব © ২০১৫ - ২০২১ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত</p>
        </div>
    );
};

export default Footer;