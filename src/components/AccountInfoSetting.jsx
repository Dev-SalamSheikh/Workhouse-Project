import React from "react";

const AccountInfoSetting = ({ userData, setUserData }) => {
  return (
    <div className="account_info">
      {/* Name Box */}
      <div>
        {/* Full Name */}
        <div className="flex items-center lg:gap-8 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/12 w-full">
            <span className="font-semibold text-[17px]">Full Name</span>
          </div>
          <div className="lg:w-6/12 w-full">
            <input
              value={userData.fullName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  fullName: e.target.value,
                })
              }
              type="text"
              className="border border-black w-full py-1 px-4 outline-none rounded-sm"
            />
          </div>
        </div>
        {/* Email Boox */}
        <div className="mt-2 lg:mt-2 flex items-center lg:gap-8 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/12 w-full">
            <span className="font-semibold text-[17px]">Email</span>
          </div>
          <div className="lg:w-6/12 w-full">
            <input
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
              type="text"
              className="border border-black w-full py-1 px-4 outline-none rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Activity Toggle */}
      <div className="lg:my-12 my-6">
        {/* Toggle Button */}
        <div className="flex gap-4 items-center">
          <span className="text-[17px] font-semibold">Appear Offline</span>
          <label htmlFor="toogleC" className="flex items-center cursor-pointer">
            <div className="relative">
              <input id="toogleC" type="checkbox" className="sr-only" />
              <div className="w-8 h-3 bg-blue-300 rounded-full shadow-inner"></div>
              <div className="dot absolute w-5 h-5 bg-white rounded-full shadow-md -left-1 -top-1 transition"></div>
            </div>
          </label>
        </div>

        {/* Text part */}
        <div className="lg:w-6/12 mt-2 mb-4">
          <p>
            Your accounts or anything associated with your account not be found
            anywhere on the website. If you have other account they will still
            be visible
          </p>
        </div>

        {/* Line break */}
        <hr className=" border-slate-400" />
      </div>

      {/* Linked Account */}
      <div>
        <p className="text-[17px] font-semibold">Linked Accounts</p>
        {/* Texts */}
        <div className="lg:w-6/12 mt-1 mb-4">
          <span>
            Account registered under the same email and different categories e.g
            Freelance account & Company account.
          </span>
        </div>

        {/* Dropdown */}
        <div className="mt-6 w-full lg:w-max">
          <select
            className="border border-black outline-none font-medium w-full lg:w-max"
            value={userData.profile}
            onChange={(e) =>
              setUserData({
                ...userData,
                profile: e.target.value,
              })
            }
          >
            <option value="freelancer">Freelancer Account</option>
            <option value="local">Local Service Provider</option>
            <option value="company">Company Account</option>
            <option value="worker">Worker Account</option>
            <option value="tutor">Tutor Account</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoSetting;
