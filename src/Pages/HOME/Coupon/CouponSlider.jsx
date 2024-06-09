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
    <div className="bg-cover bgClr bg-no-repeat ">
      <div className="lg:h-[50vh] container py-6 md:py-0 mx-auto  items-center justify-center md:flex-row gap-6  ">
        <div className=" m-8 max-w-screen-xl mx-auto mulish ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            breakpoints={{
              640: {
                  slidesPerView: 1, 
              },
              768: {
                  slidesPerView: 2, 
              },
              1024: {
                  slidesPerView: 2, 
              },
          }}
            modules={[Autoplay]}
            className="mySwiper  rounded-2xl  h-[35vh]  "
          >
            { coupon && coupon.map((cpn) => (
              <SwiperSlide className="bg-cover rounded-lg flex flex-col  bg-slate-50   bg-no-repeat">
                <div className="bg-blue-100 py-3 w-full rounded-t-lg text-center ">
                    <h1 className="text-sm font-bold ">valid till : {cpn.date}</h1>
                </div>
                <div className="w-full px-12 pb-10 pt-4">
                  <h1 className="text-4xl text-blue-900 lg:text-5xl font-bold ">
                    {cpn.amount}% <span className="text-lg ">Discount</span>
                  </h1>
                  
                  <p className="text-xl my-4 max-w-[600px] font-light text-blue-900 ">
                    {cpn.des}
                  </p>
                  <p className="text-lg font-extrabold">
                    {" "}
                    coupon code:{" "}
                    <span className="italic font-bold text-3xl">{cpn.code}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CouponSlider;
