import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginSuccess = () => {
    alert("Login Success");
    navigate("/");
  };
  return (
    <div className="py-8 lg:pt-16 lg:pb-12 bg-Banner">
      <div className="container mx-auto lg:w-6/12 w-10/12">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <div className="content border-black border rounded-lg px-4 py-8 mt-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-8">Sign up</h1>
          <form onSubmit={loginSuccess}>
            {/* Email */}
            <div className="mb-4 md:w-8/12">
              <p className="text-base md:text-lg font-semibold">Email</p>
              <input
                required
                placeholder="example@mail.com"
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
              />
            </div>
            {/* Password */}
            <div className="mb-4 md:w-8/12">
              <p className="text-base md:text-lg font-semibold">Password</p>
              <input
                required
                placeholder="@#$%^&12345"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
              />
            </div>

            {/* Buttons */}
            <button
              type="submit"
              style={{ backgroundColor: "#999999" }}
              className="text-white font-semibold text-lg p-2 rounded-lg"
            >
              Login
            </button>

            {/* Already have an account */}
            <div className="mt-4">
              <p className="text-sm md:text-base font-semibold">
                Don't have an account?{" "}
                <span className="text-borderColor">
                  <NavLink to="/register">Register here</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
