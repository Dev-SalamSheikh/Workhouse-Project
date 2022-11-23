import React, { useState } from "react";

const NotificationSetting = () => {
  const [handleSelect, setHandleSelect] = useState({
    messageEmail: true,
    messageMobile: true,
    activityEmail: true,
    activityMobile: true,
    securityupdateEmail: true,
    securityupdateMobile: true,
    loginEmail: false,
    loginMobile: false,
  });
  return (
    <div className="flex justify-between lg:justify-start flex-wrap lg:flex-nowrap">
      {/* Left */}
      <div className="lg:w-4/12">
        {/* Label */}
        <h2 className="text-lg font-semibold">Types</h2>

        <div className="flex flex-col gap-1 mt-4">
          <div>
            <span className="font-semibold">Messages</span>
          </div>
          <div>
            <span className="font-semibold">Account Activity</span>
          </div>
          <div>
            <span className="font-semibold">Security Update</span>
          </div>
          <div>
            <span className="font-semibold">Login</span>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="lg:w-2/12 text-center">
        <h2 className="text-lg font-semibold">Email</h2>
        <div className="flex flex-col gap-1 mt-4">
          <div className="">
            <input
              value={handleSelect.messageEmail}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  messageEmail: e.target.checked,
                })
              }
              checked={handleSelect.messageEmail}
              type="checkbox"
              className=""
            />
          </div>
          <div>
            <input
              value={handleSelect.activityEmail}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  activityEmail: e.target.checked,
                })
              }
              checked={handleSelect.activityEmail}
              type="checkbox"
            />
          </div>
          <div>
            <input
              type="checkbox"
              className=""
              value={handleSelect.securityupdateEmail}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  securityupdateEmail: e.target.checked,
                })
              }
              checked={handleSelect.securityupdateEmail}
            />
          </div>

          <div>
            <input
              type="checkbox"
              value={handleSelect.loginEmail}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  loginEmail: e.target.checked,
                })
              }
              checked={handleSelect.loginEmail}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-2/12 text-center">
        <h2 className="text-lg font-semibold">Mobile</h2>
        <div className="flex flex-col gap-1 mt-4">
          <div className="">
            <input
              type="checkbox"
              className=""
              value={handleSelect.messageMobile}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  messageMobile: e.target.checked,
                })
              }
              checked={handleSelect.messageMobile}
            />
          </div>
          <div>
            <input
              type="checkbox"
              className=""
              value={handleSelect.activityMobile}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  activityMobile: e.target.checked,
                })
              }
              checked={handleSelect.activityMobile}
            />
          </div>
          <div>
            <input
              type="checkbox"
              className=""
              value={handleSelect.securityupdateMobile}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  securityupdateMobile: e.target.checked,
                })
              }
              checked={handleSelect.securityupdateMobile}
            />
          </div>
          <div>
            <input
              type="checkbox"
              className=""
              value={handleSelect.loginMobile}
              onChange={(e) =>
                setHandleSelect({
                  ...handleSelect,
                  loginMobile: e.target.checked,
                })
              }
              checked={handleSelect.loginMobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
