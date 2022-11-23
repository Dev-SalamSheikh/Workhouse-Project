import React, { useState } from "react";
import ChangePassWarnPopup from "./ChangePassWarnPopup";
import SecurityAnswerPopup from "./SecurityAnswerPopup";
import UpdatePasswordPopup from "./UpdatePasswordPopup";

const SecuritySetting = ({ userData, setUserData }) => {
  const [warnPopup, setWarnPopup] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState(false);

  //   Wanrning Pass to Update Pass popup function
  const updatePassOpen = () => {
    setWarnPopup(!warnPopup);
    setPasswordToggle(true);
  };

  return (
    <div>
      {/* Password Box */}
      <div className="flex items-center lg:gap-8 flex-wrap gap-y-1">
        <div className="w-full lg:w-1/12">
          <span className="font-semibold text-[17px]">Password</span>
        </div>
        <div className="w-full lg:w-6/12">
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            type="password"
            className="border border-black w-full py-1 px-4 outline-none rounded-sm"
          />
        </div>
        <span
          className="font-semibold cursor-pointer"
          onClick={() => setWarnPopup(!warnPopup)}
        >
          Edit
        </span>
      </div>

      {/* Password Status */}
      <div>
        <p className="font-medium my-2">Your password has been set!</p>
      </div>

      {/* Line Break */}
      <hr className="border-slate-400 mt-4 mb-6" />

      {/* Security Questions */}
      <div className="flex items-center lg:gap-8 flex-wrap gap-y-1">
        <div className="w-full lg:w-2/12">
          <span className="font-semibold text-[17px]">Security Question</span>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="border border-black py-1 px-4">
            <select className="w-full bg-transparent">
              <option value="town">What town did you grow up?</option>
              <option value="country">What country did you born?</option>
              <option value="player">
                what is your favourite player's name?
              </option>
              <option value="nickname">
                What is your childhood favourite nickname?
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Questions Answers */}
      <div className="flex items-center flex-wrap lg:gap-8 mt-4 gap-y-1">
        <div className="w-full lg:w-2/12">
          <span className="font-semibold text-[17px]">Answer</span>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="border border-black py-1 px-4">
            <input
              value={userData.securityAnswer}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  securityAnswer: e.target.value,
                })
              }
              type="password"
              className="w-full"
            />
          </div>
        </div>
        <span
          className="font-semibold cursor-pointer"
          onClick={() => setSecurityAnswer(!securityAnswer)}
        >
          Edit
        </span>
      </div>

      {/* Update Password Popup */}
      {passwordToggle && (
        <UpdatePasswordPopup
          passwordToggle={passwordToggle}
          setPasswordToggle={setPasswordToggle}
        />
      )}
      {/* Warning Popup */}
      {warnPopup && (
        <ChangePassWarnPopup
          warnPopup={warnPopup}
          setWarnPopup={setWarnPopup}
          updatePassPopup={updatePassOpen}
        />
      )}

      {/* Security Question Popup */}
      {securityAnswer && (
        <SecurityAnswerPopup
          securityAnswer={securityAnswer}
          setSecurityAnswer={setSecurityAnswer}
        />
      )}
    </div>
  );
};

export default SecuritySetting;
