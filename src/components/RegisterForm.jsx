import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  // States
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    language: "",
    interested: "",
  });

  return (
    <div className="py-8 lg:pt-16 lg:pb-12 bg-Banner">
      <div className="container mx-auto lg:w-6/12 w-10/12">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <div className="content border-black border rounded-lg px-4 py-8 mt-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-8">Sign up</h1>
          <form>
            {/* Email */}
            <div className="mb-4 md:w-8/12">
              <p className="text-base md:text-lg font-semibold">Email</p>
              <input
                placeholder="example@mail.com"
                type="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
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
                placeholder="@#$%^&12345"
                type="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
              />
            </div>
            {/* Confirm Password */}
            <div className="mb-4 md:w-8/12">
              <p className="text-base md:text-lg font-semibold">
                Confirm Password
              </p>
              <input
                placeholder="@#$%^&12345"
                type="password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
                className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
              />
            </div>

            {/* Name */}
            <div className="w-full flex gap-2 md:gap-8">
              {/* First Name */}
              <div className="mb-4 w-6/12">
                <p className="text-base md:text-lg font-semibold">First Name</p>
                <input
                  type="text"
                  placeholder="Jhon"
                  value={registerData.firstName}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      firstName: e.target.value,
                    })
                  }
                  className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
                />
              </div>
              {/* Last Name */}
              <div className="mb-4 w-6/12">
                <p className="text-base md:text-lg font-semibold">Last Name</p>
                <input
                  type="text"
                  placeholder="Doe."
                  value={registerData.lastName}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      lastName: e.target.value,
                    })
                  }
                  className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
                />
              </div>
            </div>

            {/* Male ar female */}
            <p className="text-base md:text-lg font-semibold">Your gender</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-lg w-max">
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center gap-2 text-lg w-max">
                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            {/* Language and category*/}
            <div className="flex gap-4">
              <div
                className="mt-4 p-2 w-full md:w-6/12 lg:w-3/12 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full text-lg"
                  value={registerData.language}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      language: e.target.value,
                    })
                  }
                >
                  <option>Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Bengali">Bengali</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
              <div
                className="mt-4 p-2 w-full md:w-6/12 lg:w-3/12 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full text-lg"
                  value={registerData.interested}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      interested: e.target.value,
                    })
                  }
                >
                  <option>Interested in</option>
                  <option value="freelance">Freelance</option>
                  <option value="worker">Worker</option>
                  <option value="Tutoring">Tutoring</option>
                  <option value="Hiring">Hiring</option>
                  <option value="Local Services">Local Services</option>
                  <option value="Service Provider">Service Provider</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 text-end">
              {registerData.interested === "freelance" ? (
                <NavLink to="/buildcv">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#999999" }}
                    className="text-white font-semibold text-lg p-2 rounded-lg"
                  >
                    Sign up
                  </button>
                </NavLink>
              ) : registerData.interested === "worker" ? (
                <NavLink to="/buildcv">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#999999" }}
                    className="text-white font-semibold text-lg p-2 rounded-lg"
                  >
                    Sign up
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#999999" }}
                    className="text-white font-semibold text-lg p-2 rounded-lg"
                  >
                    Sign up
                  </button>
                </NavLink>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
