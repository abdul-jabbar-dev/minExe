import React from 'react';

const Carousel = () => {
    return (
        <div className='cutm-carousel-section'>
            <h2 className='text-center'>ক্যারিয়ার ও স্কিল ডেভেলপমেন্ট</h2>
            <div className='container mx-auto'>
                <div className='container mx-auto grid md:grid-cols-12  gap-4 mt-5 rounded-2xl'>
                    <div className='col-span-3 cust-card-background custm-card-shdw'>
                        <img src="https://i.ibb.co/hWGQW7w/IMAGE-7.jpg" alt="" className='rounded-2xl' />
                        <h5 className='carousel-heading'>  ঘরে বসে Spoken English </h5>
                        <h5 className='carousel-heading-two'>   Munzereen Shahid  </h5>
                    </div>
                    <div className='col-span-3 cust-card-background custm-card-shdw'>
                        <img src="https://i.ibb.co/fn2bhYb/IMAGE-3.jpg" alt="" className='rounded-2xl' />
                        <h5 className='carousel-heading'>  Kid's English </h5>
                        <h5 className='carousel-heading-two'>   Munzereen Shahid  </h5>
                    </div>
                    <div className='col-span-3 cust-card-background custm-card-shdw'>
                        <img src="https://i.ibb.co/MgTvGmX/IMAGE-4.jpg" alt="" className='rounded-2xl' />
                        <h5 className='carousel-heading'>  ২৪ ঘন্টায় কোরআন শিখি  </h5>
                        <h5 className='carousel-heading-two'>    মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন   </h5>
                    </div>
                    <div className='col-span-3 cust-card-background custm-card-shdw'>
                        <img src="https://i.ibb.co/tznnc9H/IMAGE-5.jpg" alt="" className='rounded-2xl' />
                        <h5 className='carousel-heading'>   English Grammar Crash Course </h5>
                        <h5 className='carousel-heading-two'> Sakib Bin Rashid </h5>
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Carousel;