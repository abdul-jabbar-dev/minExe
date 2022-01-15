import React from 'react';
import './CstomerSatisfaction.css'

const CstomerSatisfaction = () => {
    return (
        <div style={{backgroundColor:"#F7F8FA"}}>
            <div className="flex justify-center">
                <div className="text-center p-10 ">
                    <h1 className="text-3xl font-bold p-8">শেখো <span style={{ color: "#ff284f" }}>নিজের ইচ্ছেমতো!</span></h1>
                    <p className="mb-5">ভিডিও, কুইজ, ইন্টারেক্টিভ বই সমৃদ্ধ একাডেমিক লাইব্রেরি, প্রফেশনাল এবং স্কিল ডেভেলপমেন্ট <br /> কোর্সসমূহ পাবে সবসময়, সম্পূর্ণ বিনামূল্যে!</p>
                    <button className=" download_btn p-2 text-white pl-3 pr-3 rounded"><i class="fas fa-arrow-down"></i> ডাউনলোড অ্যাপ </button>
                </div>

            </div>
            <div className=" customer p-6 ml-5 flex justify-center grid grid-cols-4 gap-4">
                <div className="flex  bg-white p-4 rounded">
                    <div>
                        <img src="https://10minuteschool.com/assets/landing-page/video.svg" alt="" />
                    </div>
                    <div className="pl-3">
                    <h1 className="font-bold text-2xl"> ১৯,৪৪০+ </h1>
                        <p> ভিডিও টিউটোরিয়াল </p>
                    </div>
                </div>
                
                <div className="flex bg-white p-4 rounded">
                    <div>
                        <img src="https://10minuteschool.com/assets/landing-page/quiz.svg" alt="" />
                    </div>
                    <div className="pl-3">
                    <h1 className="font-bold text-2xl">  ৪৯,৫৩০+  </h1>
                        <p>  কুইজ </p>
                    </div>
                </div>
                <div className="flex bg-white p-4 rounded">
                    <div>
                        <img src="https://10minuteschool.com/assets/landing-page/smartbook.svg" alt="" />
                    </div>
                    <div className="pl-3">
                    <h1 className="font-bold text-2xl">  ১,১১৪+  </h1>
                        <p>  নোট  </p>
                    </div>
                </div>
                <div className="flex bg-white p-4 rounded">
                    <div>
                        <img src="https://10minuteschool.com/assets/landing-page/blog.svg" alt="" />
                    </div>
                    <div className="pl-3">
                        <h1 className="font-bold text-2xl">  ১,৩০০+  </h1>
                        <p> ব্লগ  </p>
                    </div>
                </div>
            </div>
            <div className=" p-10 pb-10 flex justify-center">
                <img src="https://10minuteschool.com/assets/landing-page/studying.svg" alt="" />
            </div>
        </div>
    );
};

export default CstomerSatisfaction;