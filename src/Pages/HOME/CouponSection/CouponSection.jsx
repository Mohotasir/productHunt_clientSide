import React from "react"
import { FaTags, FaBolt } from "react-icons/fa"
import CouponSlider from "../Coupon/CouponSlider"

export default function CouponSection() {
  return (
    <section className="relative isolate py-20 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950" />
      <div className="absolute z-0 top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-semibold mb-5">
            <FaTags />
            Exclusive Deals
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Unlock{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Coupon Codes
            </span>{" "}
            & Save More
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Discover hand-picked discount coupons from trending products.
            Verified, updated, and powered by smart insights.
          </p>
        </div>

        <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 md:p-10">
          <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg flex items-center gap-2">
            <FaBolt />
            Hot Coupons
          </div>

          <CouponSlider></CouponSlider>
        </div>
      </div>
    </section>
  )
}
