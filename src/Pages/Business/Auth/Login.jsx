import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import errorIcon from "../../../assets/img/error.png";
import { AppContext } from "../../../Context/AppContext";

import MainSlider from "../../../components/sliders/Slider";
import { baseUrl } from "../../../config";

const Login = () => {
  const { token, setToken, user, setUser } = useContext(AppContext);


  const [formData, setFormData] = useState({ email: "victor@gmail.com", password: "12345678" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${baseUrl}/business/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.status === "success") {
        const token = data.data.access_token;
        localStorage.setItem("token", token);
        setToken(token);
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      // setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* {name} */}

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto h-screen w-screen">
        <div className="hidden lg:block h-screen w-full bg-gray-100">
          <MainSlider />
        </div>

        <div className="flex items-center justify-center bg-lightBg p-4 h-screen">
          <div className="w-full max-w-none lg:max-w-[460px]">
            {/* Logo and Text */}
            <div className="flex flex-col items-center text-center mb-6">
              <img src={logo} className="w-[90px] h-auto mb-3" alt="Logo" />
              <h1 className="font-bold text-[20px] text-primary">
                Login to your account {user.id}
              </h1>
              <p className="text-[12px] text-lightText leading-snug mt-1">
                Enter your details
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-[14px] rounded-[10px] outline-none text-[13px] px-3"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red text-[12px] flex items-center gap-2 mt-2">
                    <img className="h-[12px]" src={errorIcon} alt="error" />
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-[14px] font-medium mb-1"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-[14px] rounded-[10px] outline-none text-[13px] pr-10 pl-3"
                    placeholder="Enter your password"
                  />

                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.396-3.568"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.458 6.458A9.964 9.964 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.966 9.966 0 01-4.137 5.228"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {errors.password && (
                  <span className="text-red text-[12px] flex items-center gap-2 mt-2">
                    <img className="h-[12px]" src={errorIcon} alt="error" />
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="text-end gap-2 text-[12px] mt-4">
                <Link
                  to="/forget-password"
                  className="text-[12px] font-semibold text-primary transition-all duration-300 hover:text-primaryHover"
                >
                  Forget Password?
                </Link>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="submit-btn bg-primary text-white text-[14px] font-semibold rounded-[10px] h-[42px] w-full transition-all opacity-90 flex items-center justify-center gap-2"
                >
                  {!loading ? (
                    <span className="btn-text">Login</span>
                  ) : (
                    <span className="btn-loading flex items-center gap-2">
                      <i className="fa-solid fa-spinner animate-spin"></i>{" "}
                      Loading...
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="text-[13px]">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-bold underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
