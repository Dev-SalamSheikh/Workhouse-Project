import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountInfoSetting from "./AccountInfoSetting";
import BillingSetting from "./BillingSetting";
import NotificationSetting from "./NotificationSetting";
import SecuritySetting from "./SecuritySetting";

const SettingContainer = () => {
  // States
  const [accountInfo, setAccountInfo] = useState(true);
  const [security, setSecurity] = useState(false);
  const [notification, setNotification] = useState(false);
  const [billing, setBilling] = useState(false);

  const [userData, setUserData] = useState({
    fullName: "Work House",
    email: "Workhouse@gmail.com",
    password: 12345678909,
    securityAnswer: "BangladeshBogura",
    profile: "freelancer",
  });

  //   Toggle Function
  const showAccountInfo = () => {
    setAccountInfo(true);
    setSecurity(false);
    setNotification(false);
    setBilling(false);
  };

  const showSecurity = () => {
    setSecurity(true);
    setAccountInfo(false);
    setNotification(false);
    setBilling(false);
  };

  const showNotification = () => {
    setNotification(true);
    setSecurity(false);
    setAccountInfo(false);
    setBilling(false);
  };

  const showBilling = () => {
    setBilling(true);
    setNotification(false);
    setSecurity(false);
    setAccountInfo(false);
  };

  return (
    <div className="bg-Banner py-6 lg:py-14 min-h-[80vh]">
      <div className="container mx-auto lg:w-8/12 w-10/12">
        {/* Heading */}
        <p className="text-center lg:text-end font-medium">
          Need to update your profile? <br className="md:hidden block" />
          <span className="text-borderColor cursor-pointer">
            {userData.profile === "freelancer" ? (
              <NavLink to="/profile/freelancer">
                Go to your profile page
              </NavLink>
            ) : userData.profile === "local" ? (
              <NavLink to="/profile/localserviceprovider">
                Go to your profile page
              </NavLink>
            ) : userData.profile === "worker" ? (
              <NavLink to="/profile/worker">Go to your profile page</NavLink>
            ) : userData.profile === "company" ? (
              <NavLink to="/profile/company">Go to your profile page</NavLink>
            ) : (
              <NavLink to="/profile/tutor">Go to your profile page</NavLink>
            )}
          </span>
        </p>

        {/* Actual Content */}

        <div className="content flex justify-between flex-col lg:flex-row lg:mt-2 mt-8">
          {/* Left Side */}
          <div className="w-full lg:w-2/12">
            <div className="flex lg:flex-col lg:gap-4 gap-y-4 flex-wrap">
              {/* Account Info */}
              <div className="w-6/12 lg:w-full">
                <span
                  className={`${accountInfo && "font-semibold"} cursor-pointer`}
                  onClick={showAccountInfo}
                >
                  Account Info
                </span>
              </div>
              {/* Seecurity */}
              <div className="w-6/12 lg:w-full">
                <span
                  className={`${security && "font-semibold"} cursor-pointer`}
                  onClick={showSecurity}
                >
                  Security Settings
                </span>
              </div>
              {/* Notification */}
              <div className="w-6/12 lg:w-full">
                <span
                  className={`${
                    notification && "font-semibold"
                  } cursor-pointer`}
                  onClick={showNotification}
                >
                  Notifications
                </span>
              </div>
              {/* Billing */}
              <div className="w-6/12 lg:w-full">
                <span
                  className={`${billing && "font-semibold"} cursor-pointer`}
                  onClick={showBilling}
                >
                  Billing
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white w-full lg:w-10/12 px-4 lg:px-14 py-8 lg:pt-14 lg:pb-20 rounded-md shadow-md mt-4 lg:mt-0">
            {/* Account Info Show */}
            {accountInfo && (
              <AccountInfoSetting
                userData={userData}
                setUserData={setUserData}
              />
            )}

            {/* Security Settings Show */}
            {security && (
              <SecuritySetting userData={userData} setUserData={setUserData} />
            )}

            {/* Notification Setting */}
            {notification && <NotificationSetting />}

            {/* Billing Settings */}
            {billing && <BillingSetting />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingContainer;
