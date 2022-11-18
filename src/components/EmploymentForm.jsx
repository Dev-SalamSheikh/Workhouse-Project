import React from "react";

const EmploymentForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Employment</h1>

      {/* Form Content Start */}
      <div className="mt-8">
        {/* Position */}
        <div className="mb-4 w-11/12">
          <p className="text-base md:text-lg font-semibold">Position</p>
          <input
            type="text"
            value={formData.position}
            onChange={(e) =>
              setFormData({
                ...formData,
                position: e.target.value,
              })
            }
            className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
          />
        </div>

        {/* Employeer and city */}
        <div className="mb-4 w-11/12 flex justify-between gap-8">
          <div className="w-full">
            <p className="text-base md:text-lg font-semibold">Employer</p>
            <input
              type="text"
              value={formData.employment}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  employment: e.target.value,
                })
              }
              className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
            />
          </div>
          <div className="w-full">
            <p className="text-base md:text-lg font-semibold">City</p>
            <input
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  city: e.target.value,
                })
              }
              className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
            />
          </div>
        </div>

        {/* Start Date and End Date*/}

        <div className="mb-4 w-11/12 flex justify-between flex-wrap md:flex-nowrap gap-8">
          <div className="w-full">
            <p className="text-base md:text-lg font-semibold mb-1">
              Start Date
            </p>
            {/* Months and Year Div */}
            <div className="flex gap-8">
              {/* month div */}
              <div
                className="w-full pl-4 pr-2 py-1 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full"
                  value={formData.startmonth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startmonth: e.target.value,
                    })
                  }
                >
                  <option>Month</option>
                  <option value="january">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="Octobar">October</option>
                  <option value="Novembar">November</option>
                  <option value="Decembar">December</option>
                </select>
              </div>
              {/* Year div */}
              <div
                className="w-full pl-4 pr-2 py-1 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full"
                  value={formData.startyear}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startyear: e.target.value,
                    })
                  }
                >
                  <option>Year</option>
                  <option value="january">2022</option>
                  <option value="February">2021</option>
                  <option value="March">2020</option>
                  <option value="April">2019</option>
                  <option value="May">2018</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-8">
              <div className="w-full mb-1">
                <p className="text-base md:text-lg font-semibold">End Date</p>
              </div>
              <div className="w-full mb-1">
                <p className="text-base md:text-lg font-semibold">
                  Present{" "}
                  <input
                    type="checkbox"
                    checked={formData.checked}
                    value={formData.checked}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        checked: !formData.checked,
                      })
                    }
                  />
                </p>
              </div>
            </div>
            {/* Months and Year Div */}
            <div className="flex gap-8">
              {/* month div */}
              <div
                className="w-full pl-4 pr-2 py-1 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full"
                  value={formData.endmonth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      endmonth: e.target.value,
                    })
                  }
                >
                  <option>Month</option>
                  <option value="january">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="Octobar">October</option>
                  <option value="Novembar">November</option>
                  <option value="Decembar">December</option>
                </select>
              </div>
              {/* Year div */}
              <div
                className="w-full pl-4 pr-2 py-1 rounded-sm"
                style={{ backgroundColor: "#999999" }}
              >
                <select
                  className="bg-transparent w-full"
                  value={formData.endyear}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      endyear: e.target.value,
                    })
                  }
                >
                  <option>Year</option>
                  <option value="january">2022</option>
                  <option value="February">2021</option>
                  <option value="March">2020</option>
                  <option value="April">2019</option>
                  <option value="May">2018</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative mt-4">
          <p className="text-base md:text-lg font-semibold">Description</p>
          <textarea
            maxLength={2500}
            value={formData.employmentDesc}
            onChange={(e) =>
              setFormData({
                ...formData,
                employmentDesc: e.target.value,
              })
            }
            className="w-full bg-transparent border border-slate-400 resize-none outline-none p-2 rounded-md"
            rows="10"
          ></textarea>
          <div className="absolute right-4 bottom-4">
            <span>0/2500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentForm;
