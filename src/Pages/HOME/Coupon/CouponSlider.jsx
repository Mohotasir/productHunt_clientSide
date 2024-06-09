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
        <div className=" m-8 max-w-screen-lg mx-auto mulish ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            breakpoints={{
              // Configure different settings for different screen sizes
              640: {
                  slidesPerView: 1, // Number of slides to show on smaller screens (e.g., mobile)
              },
              768: {
                  slidesPerView: 2, // Number of slides to show on medium screens (e.g., tablets)
              },
              1024: {
                  slidesPerView: 3, // Number of slides to show on larger screens (e.g., desktops)
              },
          }}
            modules={[Autoplay]}
            className="mySwiper  rounded-2xl  h-[35vh]  "
          >
            { coupon && coupon.map((cpn) => (
              <SwiperSlide className="bg-cover rounded-lg  p-12 bg-slate-50   bg-no-repeat">
                <div className="w-full">
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
