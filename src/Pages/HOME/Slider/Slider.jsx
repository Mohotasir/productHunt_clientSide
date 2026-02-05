import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import {
  FaRobot,
  FaBolt,
  FaChartLine,
  FaCogs,
  FaUsers,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa"

const IconBubble = ({ icon, className }) => (
  <div
    className={`absolute ${className} p-4 rounded-2xl
    bg-[var(--bg-card)] border border-[var(--border)]
    shadow-lg backdrop-blur-md
    hover:scale-110 transition-all duration-500`}
  >
    <span className="text-2xl text-indigo-500">{icon}</span>
  </div>
)

const StatCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-md">
    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 text-xl">
      {icon}
    </div>
    <div>
      <p className="text-sm text-[var(--text-secondary)]">{title}</p>
      <h4 className="text-lg font-bold text-[var(--text-primary)]">
        {value}
      </h4>
    </div>
  </div>
)

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="w-full"
    >
      <SwiperSlide>
        <div className="relative h-[85vh] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--hero-gradient-indigo)]" />

          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-[2.2fr_1.4fr_1fr] items-center gap-12 px-2">

            <div className="backdrop-blur-xl bg-[var(--bg-card)]/70 p-2 lg:p-0 rounded-3xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight">
                Hunt Products in{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  TRENDZ
                </span>
              </h1>

              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                AI-powered product discovery platform helping you find what’s
                trending, faster and smarter.
              </p>

              <div className="mt-6 space-y-3">
                <p className="flex gap-2 items-center text-gray-600">
                  <FaBolt className="text-indigo-500" /> Smart recommendations
                </p>
                <p className="flex gap-2 items-center text-gray-600">
                  <FaRobot className="text-indigo-500" /> AI-based filtering
                </p>
                <p className="flex gap-2 items-center text-gray-600">
                  <FaChartLine className="text-indigo-500" /> Market insights
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg">
                  Explore Products
                </button>
                <button className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative p-10 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
                    <FaCogs className="relative text-7xl text-indigo-500 animate-spin-slow" />
                  </div>
                </div>

                <IconBubble icon={<FaRobot />} className="top-0 left-1/2 -translate-x-1/2 animate-bounce" />
                <IconBubble icon={<FaBolt />} className="right-0 top-1/2 -translate-y-1/2 animate-bounce delay-200" />
                <IconBubble icon={<FaChartLine />} className="bottom-0 left-1/2 -translate-x-1/2 animate-bounce delay-400" />
                <IconBubble icon={<FaShieldAlt />} className="left-0 top-1/2 -translate-y-1/2 animate-bounce delay-600" />
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-6">
              <StatCard
                icon={<FaUsers />}
                title="Active Users"
                value="120K+"
              />
              <StatCard
                icon={<FaStar />}
                title="User Rating"
                value="4.9 / 5"
              />
              <StatCard
                icon={<FaShieldAlt />}
                title="Product Quality"
                value="100%"
              />

              <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl">
                <h3 className="text-lg font-semibold">
                  Trusted by All People
                </h3>
                <p className="text-sm mt-2 opacity-90">
                  Discover verified products, real reviews, and smart deals —
                  all in one place.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
