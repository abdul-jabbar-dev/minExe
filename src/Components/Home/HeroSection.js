import React from 'react';
import '../../Page/Home/Home.css';
import fistImg from '../../images/hero-img/herobannerone.png';
import secondImg from '../../images/hero-img/herobannerone.png';
import thirdImg from '../../images/hero-img/herobannerone.png';

const HeroSection = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-12  gap-4 p-5' style={{backgroundColor:"#f7f8fa",borderRadius:"15px"}}>

            <div className='banner-section md:col-span-6 sm:col-span-12 col-span-7'>
                <div className='inner-banner-section'>
                    <h1 className='cstm-primiry-TC'><span className='cstm-secondary-TC '>ঘরে বসে</span> পড়াশোনার সহজ সমাধান</h1>
                    <p className='cstm-primiry-TC'>ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি জীবনের জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ ২৪/৭ দিকনির্দেশনা। <span className='cstm-secondary-TC font-bold '>সিলেক্ট করো তোমার সেকশন, শুরু করো তোমার জার্নি</span></p>
                </div>
                <div className='flex justify-between'>
                    <div style={{backgroundColor:"red", padding:"45px"}}>
                      <img src={fistImg } alt="" />
                      <h3>ক্লাস ১-১২</h3>
                    </div>
                    <div style={{backgroundColor:"red", padding:"45px"}}>
                      <img src={fistImg } alt="" />
                      <h3>ক্লাস ১-১২</h3>
                    </div>
                    <div style={{backgroundColor:"red", padding:"45px"}}>
                      <img src={fistImg } alt="" />
                      <h3>ক্লাস ১-১২</h3>
                    </div>
                </div>
            </div>

            <div className='md:col-span-6 sm:col-span-12 col-span-5'>
                Image ar jonnow Boradhow
            </div>

        </div>
    );
};

export default HeroSection;