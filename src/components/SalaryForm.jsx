import React, { useState } from "react";

const SalaryForm = () => {
  // States
  const [formData, setFormData] = useState({
    jobRole: "",
    industry: "",
    experience: "",
    jobType: "",
    qualification: "",
    postal: "",
    city: "",
  });
  const [salary, setSalary] = useState("");

  // Job Experience Options
  const years = ["Years of Experiance", "1", "2", "3", "4", "5"];
  const jobTypes = [
    "Job Type",
    "Freelancer",
    "Tutor",
    "Teacher",
    "Local Service Provider",
  ];
  const Qlevel = [
    "Qualification Level",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
  ];

  //   Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSalary("100k USD - Year");
  };

  return (
    <div className="container mx-auto w-10/12 md:w-9/12 py-10 lg:pt-[100px] lg:pb-10">
      <div className="content">
        <form className="flex flex-wrap flex-col gap-4" onSubmit={handleSubmit}>
          {/* Firts Div */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Job role"
              value={formData.jobRole}
              onChange={(e) =>
                setFormData({ ...formData, jobRole: e.target.value })
              }
              className="w-full border-slate-300 border p-3 rounded-md focus:border-borderColor outline-none"
            />
            <input
              type="text"
              placeholder="Industry"
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              className="w-full border border-slate-300 p-3 rounded-md focus:border-borderColor outline-none"
            />
          </div>
          {/* Second Div */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <div
              className="p-3 w-full rounded-md"
              style={{ backgroundColor: "#8BC8DB" }}
            >
              <select
                className="w-full rounded-md bg-transparent border-none outline-none text-base"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              >
                {years.map((year, i) => (
                  <option key={i} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="p-3 w-full rounded-md"
              style={{ backgroundColor: "#8BC8DB" }}
            >
              <select
                className="w-full rounded-md bg-transparent border-none outline-none text-base"
                value={formData.jobType}
                onChange={(e) =>
                  setFormData({ ...formData, jobType: e.target.value })
                }
              >
                {jobTypes.map((job, i) => (
                  <option key={i} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Third Div */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <div
              className="p-3 w-full md:w-9/12 rounded-md"
              style={{ backgroundColor: "#8BC8DB" }}
            >
              <select
                className="w-full rounded-md bg-transparent border-none outline-none text-base"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
              >
                {Qlevel.map((qualification, i) => (
                  <option key={i} value={qualification}>
                    {qualification}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Postal"
              value={formData.postal}
              onChange={(e) =>
                setFormData({ ...formData, postal: e.target.value })
              }
              className="w-full md:w-3/12 border-slate-300 border p-3 rounded-md focus:border-borderColor outline-none"
            />
          </div>
          {/* Fourth Div */}
          <div className="w-full">
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="w-full md:w-[74.2%] border-slate-300 border p-3 rounded-md focus:border-borderColor outline-none"
            />
          </div>

          {/* Button Div */}
          <div className="w-full flex justify-center md:justify-end lg:mt-16 mt-4">
            <button
              type="submit"
              className="bg-AverageSalary text-white font-medium py-3 rounded-full md:w-5/12 lg:w-2/12 w-8/12"
            >
              Calculate
            </button>
          </div>
        </form>

        {/* Expected Salary Box */}
        <div className="w-full flex justify-end mt-6">
          <div className="w-full lg:w-5/12 bg-ExpectedSalary p-4 text-gray-700 rounded-md">
            <span>Expected Salary:</span>
            <span>&nbsp; {salary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryForm;
