import { Link, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, Truck, ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:3000/users/forgotPassword",
        {
          email: email,
        },
      );

      console.log(response.data);

      setSuccess("User found!");

      setTimeout(() => {
        navigate("/verifyotp");
      }, 1500);
    } catch (error) {
      console.log(error);

      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Unable to connect to server");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Truck size={32} className="text-white" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
            <LockKeyhole size={24} className="text-indigo-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Forgot Password?</h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            Don't worry! Enter your email address and we'll send you a link to
            reset your password.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mb-5 p-3 rounded-lg bg-green-50 text-green-600 text-sm text-center">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleForgotPassword} className="space-y-5">
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
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            Reset Password
            <Send size={18} />
          </button>
        </form>

        {/* Back to Login */}
        <div className="flex justify-center mt-7">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            <ArrowLeft size={17} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
