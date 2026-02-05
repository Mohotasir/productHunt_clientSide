import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 text-gray-300">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
            <img src={logo} alt="TrendZ Logo" className="w-40 -ml-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              <span className="font-semibold text-white">TrendZ</span> is a
              modern product-hunt platform to discover trending products,
              powered by AI insights and real user feedback.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allproducts"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL + TRUST */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-4 mb-6">
              <a className="p-3 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-indigo-400 transition">
                <FaTwitter />
              </a>
              <a className="p-3 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-indigo-400 transition">
                <FaYoutube />
              </a>
              <a className="p-3 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-indigo-400 transition">
                <FaFacebookF />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h4 className="text-white font-semibold">
                Trusted Platform
              </h4>
              <p className="text-sm mt-2 text-gray-400">
                Verified products • Real reviews • Secure browsing
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">TrendZ</span>.  
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}
