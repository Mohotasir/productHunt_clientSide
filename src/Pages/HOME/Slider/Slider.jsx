import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact, FaRobot, FaBolt, FaChartLine, FaCogs } from "react-icons/fa";

const IconBubble = ({ icon, className }) => (
  <div
    className={`absolute ${className} p-4 rounded-2xl 
    bg-[var(--bg-card)] border border-[var(--border)] 
    shadow-lg backdrop-blur-md hover:scale-110 transform transition-transform duration-500`}
  >
    <span className="text-2xl text-[var(--text-primary)]">{icon}</span>
  </div>
);

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="w-full"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--hero-gradient-indigo)]" />

          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-0 gap-10">
            <div className="max-w-xl backdrop-blur-xl bg-[var(--bg-card)]/70 p-8 rounded-3xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-[var(--text-primary)]">
                Hunt Your Product in{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  TRENDZ
                </span>
              </h1>

              <p className="mt-4 text-lg lg:text-xl text-[var(--text-secondary)]">
                Discover trending products powered by cutting-edge technology and AI. Find your next favorite product easily!
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2 text-gray-600">
                  <FaBolt className="text-indigo-500 animate-pulse" /> Fast & Efficient Discovery
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaRobot className="text-indigo-500 animate-pulse" /> AI-Powered Recommendations
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaChartLine className="text-indigo-500 animate-pulse" /> Trending Product Insights
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl">
                  Explore Products
                </button>
                <button className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all shadow-sm hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Center icon with glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 rounded-3xl bg-[var(--bg-card)] shadow-2xl border border-[var(--border)] relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 animate-pulse"></div>
                    <FaCogs className="text-7xl text-indigo-500 animate-spin-slow" />
                  </div>
                </div>

                {/* Floating icons */}
                <IconBubble icon={<FaRobot />} className="top-0 left-1/2 -translate-x-1/2 animate-bounce" />
                <IconBubble icon={<FaBolt />} className="right-0 top-1/2 -translate-y-1/2 animate-bounce delay-200" />
                <IconBubble icon={<FaChartLine />} className="bottom-0 left-1/2 -translate-x-1/2 animate-bounce delay-400" />
                <IconBubble icon={<FaCogs />} className="left-0 top-1/2 -translate-y-1/2 animate-bounce delay-600" />
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--hero-gradient-indigo)]" />
          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-0 gap-10">

            <div className="max-w-xl backdrop-blur-xl bg-[var(--bg-card)]/70 p-8 rounded-3xl ">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[var(--text-primary)]">
                Make Life Easy with{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>

              <p className="mt-4 text-lg lg:text-xl text-[var(--text-secondary)]">
                Discover smart products and tools powered by artificial intelligence.
              </p>

              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2 text-gray-600">
                  <FaBolt className="text-indigo-500 animate-pulse" /> AI-Powered Suggestions
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaRobot className="text-indigo-500 animate-pulse" /> Smart Automation
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaChartLine className="text-indigo-500 animate-pulse" /> Real-Time Insights
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl">
                  Explore Products
                </button>
                <button className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all shadow-sm hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[320px] h-[320px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 rounded-3xl bg-[var(--bg-card)] shadow-2xl border border-[var(--border)] relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 animate-pulse"></div>
                    <FaCogs className="text-7xl text-indigo-500 animate-spin-slow" />
                  </div>
                </div>

                <IconBubble icon={<FaRobot />} className="top-0 left-1/2 -translate-x-1/2 animate-bounce" />
                <IconBubble icon={<FaBolt />} className="right-0 top-1/2 -translate-y-1/2 animate-bounce delay-200" />
                <IconBubble icon={<FaChartLine />} className="bottom-0 left-1/2 -translate-x-1/2 animate-bounce delay-400" />
                <IconBubble icon={<FaCogs />} className="left-0 top-1/2 -translate-y-1/2 animate-bounce delay-600" />
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--hero-gradient-indigo)]" />
          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-0 gap-10">

            <div className="max-w-xl backdrop-blur-xl bg-[var(--bg-card)]/70 p-8 rounded-3xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[var(--text-primary)]">
                Use{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  COUPON
                </span>{" "}
                & Get Discount
              </h1>

              <p className="mt-4 text-lg lg:text-xl text-[var(--text-secondary)]">
                Unlock exclusive deals and save on trending products instantly.
              </p>

              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2 text-gray-600">
                  <FaBolt className="text-indigo-500 animate-pulse" /> Exclusive Offers
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaRobot className="text-indigo-500 animate-pulse" /> AI-Recommended Deals
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaChartLine className="text-indigo-500 animate-pulse" /> Trending Discounts
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl">
                  Explore Products
                </button>
                <button className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all shadow-sm hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[320px] h-[320px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 rounded-3xl bg-[var(--bg-card)] shadow-2xl border border-[var(--border)] relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 animate-pulse"></div>
                    <FaBolt className="text-7xl text-indigo-500 animate-spin-slow" />
                  </div>
                </div>

                <IconBubble icon={<FaRobot />} className="top-0 left-1/2 -translate-x-1/2 animate-bounce" />
                <IconBubble icon={<FaBolt />} className="right-0 top-1/2 -translate-y-1/2 animate-bounce delay-200" />
                <IconBubble icon={<FaChartLine />} className="bottom-0 left-1/2 -translate-x-1/2 animate-bounce delay-400" />
                <IconBubble icon={<FaCogs />} className="left-0 top-1/2 -translate-y-1/2 animate-bounce delay-600" />
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
