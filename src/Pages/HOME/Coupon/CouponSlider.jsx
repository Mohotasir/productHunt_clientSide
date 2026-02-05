import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { FaTag, FaCopy } from "react-icons/fa"
import useCoupon from "../../../Hooks/Coupon/useCoupon"

const CouponSlider = () => {
  const [coupon] = useCoupon()

  return (
    <div className="py-8">
      <Swiper
        spaceBetween={24}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="!pb-12"
      >
        {coupon?.map((cpn) => (
          <SwiperSlide key={cpn.code}>
            <div className="group relative h-80 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">

              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-indigo-600 to-purple-600" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold flex items-center gap-1">
                <FaTag />
                Limited Offer
              </div>

              <div className="relative p-6 pt-20 text-center flex flex-col h-full">
                {/* <p className="text-sm text-gray-500 mb-1">
                  Valid till {cpn.date}
                </p> */}

                <h2 className="text-5xl font-extrabold text-blue-950">
                  {cpn.amount}
                  <span className="text-2xl align-top">%</span>
                </h2>
                <p className="text-lg font-semibold text-gray-700">
                  Discount
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed flex-grow">
                  {cpn.des}
                </p>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-dashed border-indigo-400 text-indigo-600 font-bold text-lg tracking-widest bg-indigo-50">
                    {cpn.code}
                    <FaCopy className="text-sm opacity-70 group-hover:opacity-100 transition" />
                  </div>

                  {/* <button className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition shadow-md">
                    Apply Coupon
                  </button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CouponSlider
