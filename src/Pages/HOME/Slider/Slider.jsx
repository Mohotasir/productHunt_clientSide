import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import './banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="bg-cover bgClr bg-no-repeat border bg-blue-50">
            <div className='container py-6 md:py-0 mx-auto  items-center justify-center  '>
                <div className='m-8 max-w-screen-lg mx-auto mulish'>
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
                        className="mySwiper rounded-2xl h-[40vh]"
                    >
                        <SwiperSlide className='bg-cover  p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                                <h1 className='text-2xl text-gray-600 lg:text-5xl font-bold '>Welcome to TRENDZ</h1>
                                <p className=' md:text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desired product! Make your work easier with Technology and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-cover p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                                <h1 className='text-2xl lg:text-5xl font-bold text-pink-500'>Use COUPON & Get Discount</h1>
                                <p className='md:text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desired product! Make your work easier with Technology and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-cover p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                                <h1 className='text-2xl text-purple-400 lg:text-5xl font-bold '>Make Life Easy with AI</h1>
                                <p className='md:text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desired product! Make your work easier with Technology and AI.</p>
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
