import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Slider/banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useCoupon from "../../../Hooks/Coupon/useCoupon";

const CouponSlider = () => {
  const [coupon, refetch] = useCoupon();

  return (
    <div className="bg-cover bg-no-repeat py-10">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={false} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },   
            768: { slidesPerView: 2 },   
            1024: { slidesPerView: 3 }, 
          }}
          modules={[Autoplay, Pagination, Navigation]}
          
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {coupon &&
            coupon.map((cpn) => (
              <SwiperSlide key={cpn.code}>
                <div className=" shadow-lg lg:h-80 rounded-2xl overflow-hidden  hover:shadow-xl transition-shadow duration-300">
                  <div className=" py-3 text-center rounded-2xl">
                    <h1 className="text-white p-6 bg-blue-950 font-semibold text-sm md:text-base">
                      Valid till: {cpn.date}
                    </h1>
                  </div>
                  <div className="p-6 md:p-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {cpn.amount}%
                      <span className="text-lg md:text-xl font-medium text-gray-500 ml-2">
                        Discount
                      </span>
                    </h2>

                    <p className="text-gray-600 text-md md:text-lg mb-6 max-w-md mx-auto">
                      {cpn.des}
                    </p>

                    {/* Coupon code */}
                    <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold text-xl md:text-2xl py-2 px-4 rounded-full shadow-md hover:scale-105 transform transition-transform duration-300">
                      {cpn.code}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CouponSlider;
