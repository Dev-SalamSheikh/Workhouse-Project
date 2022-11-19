import { useState } from "react";
import ImageUpload from "../images/addimage.png";

const GigForm = () => {
  const [formData, setFormData] = useState({
    gigname: "I will",
    imagePath: "",
    language: "",
    contries: "",
    requirments: "",
    category: "",
    skills: "",
    desc: "",
  });

  const [basicName, setBasicName] = useState(false);
  const [basicDesc, setBasicDesc] = useState(false);
  const [standardName, setStandardName] = useState(false);
  const [standardDesc, setStandardDesc] = useState(false);
  const [premiumName, setPremiumName] = useState(false);
  const [premiumDesc, setPremiumDesc] = useState(false);

  return (
    <div className="bg-Banner py-8">
      <div className="container w-10/12 lg:w-8/12 mx-auto content">
        <h1 className="text-2xl text-center md:text-start md:text-4xl font-semibold">
          Create a Gig
        </h1>
        {/* Form Start */}
        <div className="my-6">
          <form>
            {/* Name */}
            <div>
              <p className="text-lg md:text-xl font-semibold">Gig Name</p>
              <input
                type="text"
                value={formData.gigname}
                onChange={(e) =>
                  setFormData({ ...formData, gigname: e.target.value })
                }
                className="w-full md:w-6/12 bg-transparent py-2 px-4 border border-slate-300 outline-none focus:border-gigBorder rounded-md mt-2"
              />
            </div>
            {/* Images and Languages */}
            <div className="mt-4 flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-center">
              {/* Image Upload */}
              <div className="image w-full md:w-5/12">
                <div className="bg-white w-max text-center">
                  <p className="font-bold py-2">Add Image</p>
                  <label htmlFor="file">
                    <img src={ImageUpload} alt="image_upload" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
              </div>
              {/* Others */}
              <div className="w-full md:w-7/12 flex flex-col justify-end">
                <div className="flex flex-col gap-4 items-end">
                  {/* Language Select */}
                  <div
                    className="p-2 w-full md:w-8/12 rounded-md"
                    style={{ backgroundColor: "#7CD175" }}
                  >
                    <select
                      className="w-full rounded-md bg-transparent border-none outline-none text-base"
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          language: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Languages
                      </option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Nigerian">Nigerian</option>
                    </select>
                  </div>

                  {/* Contries Available */}
                  <div
                    className="p-2 w-full md:w-11/12 rounded-md"
                    style={{ backgroundColor: "#7CD175" }}
                  >
                    <select
                      className="w-full rounded-md bg-transparent border-none outline-none text-base"
                      value={formData.contries}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contries: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Contries available
                      </option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="USA">USA</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                    </select>
                  </div>

                  {/* Gig Requierments */}
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Gig Requirments"
                      value={formData.requirments}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirments: e.target.value,
                        })
                      }
                      className="w-full bg-transparent py-2 px-4 border border-slate-300 outline-none focus:border-gigBorder rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Category and Skills */}
            <div className="mt-4 md:mt-12">
              {/* Category */}
              <div
                className="p-2 w-full md:w-6/12 rounded-md"
                style={{ backgroundColor: "#7CD175" }}
              >
                <select
                  className="w-full rounded-md bg-transparent border-none outline-none text-base"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Category
                  </option>
                  <option value="Web Programming">Web Programming</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Content Writter">Content Writter</option>
                </select>
              </div>
              {/* Skills */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="List the skills you provide"
                  value={formData.skills}
                  onChange={(e) =>
                    setFormData({ ...formData, skills: e.target.value })
                  }
                  className="w-full md:w-7/12 bg-transparent py-2 px-4 border border-slate-300 outline-none focus:border-gigBorder rounded-md"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-lg font-semibold">Gig Description</p>
              <div className="relative">
                <textarea
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      desc: e.target.value,
                    })
                  }
                  className="w-full bg-transparent border border-slate-300 rounded-md overflow-scroll outline-none focus:border-gigBorder p-4 mt-2 -z-10 resize-none"
                  id="desc"
                  maxLength={2500}
                  rows="10"
                ></textarea>
                <div className="absolute right-8 bottom-6 z-50">
                  <span>{formData.desc.length}/2500</span>
                </div>
              </div>
            </div>

            {/* Package Select */}
            <div className="flex items-center justify-end mt-8 mb-2">
              <div className="mr-3 font-semibold">3 packages</div>
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="sr-only" />
                  <div className="w-8 h-3 bg-gray-300 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </div>

            {/* Package Create */}
            <div className="w-full flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-between border border-slate-400 rounded-md">
              {/* Part One */}
              <div className="w-full flex items-end">
                {/* Extra Gig */}
                <div className="w-full hidden md:block">
                  <div className="w-full h-[70px] border-y-slate-400 border-t flex items-center justify-center">
                    <select className="bg-transparent">
                      <option value="">Extra</option>
                      <option value="unlimited revision">Extra Text</option>
                      <option value="quality work">Extra Text</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Basic Package */}
              <div className="w-full md:border-x border-slate-400">
                {/* Heading */}
                <div className="text-center py-2 border-b border-slate-400">
                  <h1 className="text-lg font-semibold">Basic</h1>
                </div>

                {/* Gig Name */}
                <div
                  className={`w-full h-[100px] flex justify-center items-center`}
                >
                  {!basicName && (
                    <span
                      className="cursor-pointer"
                      onClick={() => setBasicName(!basicName)}
                    >
                      Name gig <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {basicName && (
                    <textarea
                      placeholder="Tap to enter your gig name"
                      maxLength={100}
                      className="w-full h-[100px] bg-transparent border-none outline-none p-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Gig Description */}
                <div
                  className={`w-full h-[150px] border-y-slate-300 border-t flex justify-center items-center`}
                >
                  {!basicDesc && (
                    <span
                      className="cursor-pointer text-center"
                      onClick={() => setBasicDesc(!basicDesc)}
                    >
                      Describe the gig offering{" "}
                      <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {basicDesc && (
                    <textarea
                      placeholder="Enter Your Description"
                      maxLength={250}
                      className="w-full h-[150px] bg-transparent  border-none outline-none px-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Delivery Time */}
                <div className="w-full h-[70px] border-y-slate-400 border-t flex justify-center items-center">
                  <select className="bg-transparent">
                    <option value="">Delivery Time</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                  </select>
                </div>

                {/* Others Offer Div */}
                <div className="w-full h-[70px] border-y-slate-400 border-t border-b md:border-b-0">
                  <textarea className="w-full h-[70px] resize-none bg-transparent outline-none border-none p-2"></textarea>
                </div>
              </div>

              {/* Standard Package */}
              <div className="w-full">
                {/* Heading */}
                <div className="text-center py-2 border-b border-slate-400">
                  <h1 className="text-lg font-semibold">Standard</h1>
                </div>

                {/* Gig Name */}
                <div
                  className={`w-full h-[100px] flex justify-center items-center`}
                >
                  {!standardName && (
                    <span
                      className="cursor-pointer"
                      onClick={() => setStandardName(!standardName)}
                    >
                      Name gig <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {standardName && (
                    <textarea
                      placeholder="Tap to enter your gig name"
                      maxLength={100}
                      className="w-full h-[100px] bg-transparent  border-none outline-none p-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Gig Description */}
                <div
                  className={`w-full h-[150px] border-y-slate-300 border-t flex justify-center items-center`}
                >
                  {!standardDesc && (
                    <span
                      className="cursor-pointer text-center"
                      onClick={() => setStandardDesc(!standardDesc)}
                    >
                      Describe the gig offering{" "}
                      <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {standardDesc && (
                    <textarea
                      placeholder="Enter Your Description"
                      maxLength={250}
                      className="w-full h-[150px] bg-transparent  border-none outline-none px-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Delivery Time */}
                <div className="w-full h-[70px] border-y-slate-400 border-t flex justify-center items-center">
                  <select className="bg-transparent">
                    <option value="">Delivery Time</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                  </select>
                </div>

                {/* Others Offer Div */}
                <div className="w-full h-[70px] border-y-slate-400 border-t border-b md:border-b-0">
                  <textarea className="w-full h-[70px] resize-none bg-transparent outline-none border-none p-2"></textarea>
                </div>
              </div>

              {/* Premium Package */}
              <div className="w-full border-l border-slate-400">
                {/* Heading */}
                <div className="text-center py-2 border-b border-slate-400">
                  <h1 className="text-lg font-semibold">Premium</h1>
                </div>

                {/* Gig Name */}
                <div
                  className={`w-full h-[100px] flex justify-center items-center`}
                >
                  {!premiumName && (
                    <span
                      className="cursor-pointer"
                      onClick={() => setPremiumName(!premiumName)}
                    >
                      Name gig <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {premiumName && (
                    <textarea
                      placeholder="Tap to enter your gig name"
                      maxLength={100}
                      className="w-full h-[100px] bg-transparent  border-none outline-none p-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Gig Description */}
                <div
                  className={`w-full h-[150px] border-y-slate-400 border-t flex justify-center items-center`}
                >
                  {!premiumDesc && (
                    <span
                      className="cursor-pointer text-center"
                      onClick={() => setPremiumDesc(!premiumDesc)}
                    >
                      Describe the gig offering{" "}
                      <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {premiumDesc && (
                    <textarea
                      placeholder="Enter Your Description"
                      maxLength={250}
                      className="w-full h-[150px] bg-transparent  border-none outline-none px-1 resize-none"
                    ></textarea>
                  )}
                </div>

                {/* Delivery Time */}
                <div className="w-full h-[70px] border-y-slate-400 border-t flex justify-center items-center">
                  <select className="bg-transparent">
                    <option value="">Delivery Time</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                  </select>
                </div>

                {/* Others Offer Div */}
                <div className="w-full h-[70px] border-y-slate-400 border-t">
                  <textarea className="w-full h-[70px] resize-none bg-transparent outline-none border-none p-2"></textarea>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 md:mt-12 text-end">
              <button
                className="border py-2 px-4 font-semibold rounded-md"
                style={{ backgroundColor: "#7CD175" }}
              >
                Post Gig
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GigForm;
