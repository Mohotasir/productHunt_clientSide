import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProdiver";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    signInUser(email.value, password.value)
      .then((res) => {
        if (res.user) {
          setShowModal(true);
          setTimeout(() => {
            navigate(location?.state || "/");
            setShowModal(false);
          }, 1500);
        }
        e.target.reset();
      })
      .catch(() => alert("Login failed!"));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        const usrInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          photoURL: res.user?.photoURL,
          status: null,
          role: "user",
        };

        axiosPublic.post("/users", usrInfo);
        setShowModal(true);

        setTimeout(() => {
          navigate(location?.state || "/");
          setShowModal(false);
        }, 1000);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 dark:text-slate-300">
      <div className="w-full max-w-md   rounded-2xl shadow-xl p-8 border dark:border-purple-950 ">
        <h2 className="text-3xl font-bold text-center ">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg dark:bg-[var(--bgsecondary)] dark:border-indigo-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium  mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg dark:bg-[var(--bgsecondary)] dark:border-indigo-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Register */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center shadow-xl animate-scaleIn">
            <IoMdCheckmarkCircleOutline className="text-5xl text-cyan-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              Login Successful
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Redirecting to dashboard...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
