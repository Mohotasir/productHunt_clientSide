import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import './banner.css';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="clip bg-cover bgClr bg-no-repeat  bg-slate-50 ">
            <div className='container py-6 md:py-0 mx-auto  items-center justify-center  '>
                <div className=' max-w-screen-lg mx-auto mulish'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                          
                        }}
                        modules={[Autoplay]}
                        className="mySwiper rounded-2xl h-[40vh] lg:h-[80vh]"
                    >
                        <SwiperSlide className='bg-cover   lg:-mt-12   p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                                <h1 className='text-4xl text-gray-500 lg:text-7xl font-bold '>Hunt Your Product in <span  className='text-blue-300'>TRENDZ</span> </h1>
                                <p className=' md:text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desired product! Make your work easier with Technology and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-cover lg:-mt-12  p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                                <h1 className='text-4xl lg:text-7xl font-bold text-gray-500'>Use <span className='text-blue-300'>COUPON</span> & Get Discount</h1>
                                <p className='md:text-2xl my-4 max-w-[600px] font-light text-blue-900 '>Choose your desired product! Make your work easier with Technology and AI.</p>
                                <p className='btn bg-blue-50'>Explore Products</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-cover lg:-mt-12  p-12 bg-slate-50 bg-no-repeat'>
                            <div className='w-full'>
                            <h1 className='text-4xl text-gray-500 lg:text-7xl font-bold '>Make Life Easy with <span className='text-blue-300'>AI</span> </h1>
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
