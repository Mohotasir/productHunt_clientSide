import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="bg-cover bgClr bg-no-repeat border bg-blue-50">
        <div className='lg:h-[50vh] container py-6 md:py-0 mx-auto flex flex-col-reverse items-center justify-center md:flex-row gap-6  '>
    
            <div className=' m-8 max-w-screen-lg mx-auto mulish '>
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper  rounded-2xl h-[40vh] "
                >

                    <SwiperSlide className='bg-cover  p-12 bg-slate-50   bg-no-repeat' >
                            <div className='w-full'>
                                <h1 className='text-4xl text-gray-600 lg:text-5xl font-bold '>Welcome to TRENDZ</h1>
                                <p className='text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desire product! Make easy your works by Technology  and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>    
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover  p-12 bg-slate-50   bg-no-repeat' >
                            <div className='w-full'>
                                <h1 className='text-4xl  lg:text-5xl font-bold text-pink-500'>Use COUPON & Get Discount</h1>
                                <p className='text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desire product! Make easy your works by Technology  and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>    
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover  p-12 bg-slate-50   bg-no-repeat' >
                            <div className='w-full'>
                                <h1 className='text-4xl text-purple-400 lg:text-5xl font-bold '>Make Life Easy with AI</h1>
                                <p className='text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desire product! Make easy your works by Technology  and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>    
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </div>
        </div>
     

    );
};

export default Slider;