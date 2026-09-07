import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Mail, Lock, Eye, Truck, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });

      console.log("Login response:", response.data);

      // Login successful
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error:", error);

      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Unable to connect to server");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 animate-[fadeIn_0.6s_ease-out]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 animate-[float_3s_ease-in-out_infinite]">
            <Truck size={32} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your delivery account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  pl-12 pr-4 py-3.5
                  border border-gray-200
                  rounded-xl
                  bg-gray-50
                  outline-none
                  text-gray-800
                  placeholder-gray-400
                  transition-all duration-300
                  focus:bg-white
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-100
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  pl-12 pr-12 py-3.5
                  border border-gray-200
                  rounded-xl
                  bg-gray-50
                  outline-none
                  text-gray-800
                  placeholder-gray-400
                  transition-all duration-300
                  focus:bg-white
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-100
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgotpassword"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              py-3.5
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-indigo-200
              active:scale-95
            "
          >
            Login
            <ArrowRight size={19} />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-7">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-sm text-gray-400">OR</span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-gray-500">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-2 font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
