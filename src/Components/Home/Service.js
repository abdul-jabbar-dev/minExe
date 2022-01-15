import React from 'react';


const Service = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-12  gap-4 p-24 mt-5 rounded-2xl'>
           
                <div className='col-span-4 cust-card-background'>
                    <img src="https://i.ibb.co/pfDHWkb/IMAGE.jpg" alt=""  className='rounded-2xl'/>
                    <h4> HSC 2021 এডমিশন প্রস্তুতি কোর্স </h4>
                    <div className='tags-section flex flex-wrap'>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                        <div className='inner-tag-div'>
                            <span className='inner-tag-icon'>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </span> 
                            ৭টি প্রোগ্রাম
                        </div>
                    </div>
                </div>
                <div className='col-span-4 cust-card-background'>
                    <img src="https://i.ibb.co/8D87807/IMAGE-1.jpg" alt=""  className='rounded-2xl'/>
                    <h4> HSC 2022 </h4>
                </div>
                <div className='col-span-4 cust-card-background'>
                    <img src="https://i.ibb.co/0mHxNxZ/IMAGE-2.jpg " alt="" className='rounded-2xl' />
                    <h4> SSC 2022 </h4>
                </div>
            
        </div>
    );
};

export default Service;