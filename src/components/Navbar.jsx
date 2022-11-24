// Import Images
import World from "../images/world.png";
import Logo from "../images/logo-Edited.png";
import Avatar from "../images/avatar.webp";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // States
  const [showJob, setShowJob] = useState(false);
  const [showFreelancing, setShowFreelancing] = useState(false);
  const [showGig, setShowGig] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Toggle JoB Function
  const toggleJob = () => {
    setShowFreelancing(false);
    setShowGig(false);
    setShowEducation(false);
    setShowLocal(false);
    setShowJob(!showJob);
  };

  // Toggle Freelancing Function
  const toggleFreelancing = () => {
    setShowGig(false);
    setShowEducation(false);
    setShowLocal(false);
    setShowJob(false);
    setShowFreelancing(!showFreelancing);
  };

  // Toggle Gig Function
  const toggleGig = () => {
    setShowEducation(false);
    setShowLocal(false);
    setShowJob(false);
    setShowFreelancing(false);
    setShowGig(!showGig);
  };

  // Toggle Education Function
  const toggleEdu = () => {
    setShowLocal(false);
    setShowJob(false);
    setShowFreelancing(false);
    setShowGig(false);
    setShowEducation(!showEducation);
  };

  // Toggle Local Function
  const toggleLocal = () => {
    setShowJob(false);
    setShowFreelancing(false);
    setShowGig(false);
    setShowEducation(false);
    setShowLocal(!showLocal);
  };

  // Dropdown Menu Data
  const jobDropdown = [
    {
      name: "Job Button 1",
    },
    {
      name: "Job Button 2",
    },
    {
      name: "Job Button 3",
    },
    {
      name: "Job Button 4",
    },
  ];

  // Dropdown Menu Data
  const FreelancingDropdown = [
    {
      name: "Freelancing 1",
    },
    {
      name: "Freelancing 2",
    },
    {
      name: "Freelancing 3",
    },
    {
      name: "Freelancing 4",
    },
  ];

  // Dropdown Menu Data
  const GigDropdown = [
    {
      name: "Gig Button 1",
    },
    {
      name: "Gig Button 2",
    },
    {
      name: "Gig Button 3",
    },
    {
      name: "Gig Button 4",
    },
  ];

  // Dropdown Menu Data
  const EduDropdown = [
    {
      name: "Education 1",
    },
    {
      name: "Education 2",
    },
    {
      name: "Education 3",
    },
    {
      name: "Education 4",
    },
  ];

  // Dropdown Menu Data
  const LoocalDropdown = [
    {
      name: "Local Button 1",
    },
    {
      name: "Local Button 2",
    },
    {
      name: "Local Button 3",
    },
    {
      name: "Local Button 4",
    },
  ];

  // Dropdown Profile
  const ProfilelDropdown = [
    {
      name: "Create Gig",
      link: "/postgig",
    },
    {
      name: "Career Advice",
      link: "/career",
    },
    {
      name: "Forum",
      link: "/forum",
    },
    {
      name: "Average Salary",
      link: "/salary",
    },
    {
      name: "Event",
      link: "/event",
    },
    {
      name: "Build CV",
      link: "/buildcv",
    },
    {
      name: "Create an account",
      link: "/register",
    },
    {
      name: "Job Search Page",
      link: "/jobs",
    },
    {
      name: "Become a freelancer",
      link: "/freelancer",
    },
    {
      name: "Courses",
      link: "/allcourse",
    },
    {
      name: "Local Services",
      link: "/localservices",
    },
    {
      name: "Podcast",
      link: "/podcast",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Settings",
      link: "/settings",
    },
    {
      name: "Freelancer Profile",
      link: "/profile/freelancer",
    },
    {
      name: "Worker Profile",
      link: "/profile/worker",
    },
    {
      name: "Local Service Profile",
      link: "/profile/localserviceprovider",
    },
    {
      name: "Company Profile",
      link: "/profile/company",
    },
  ];

  return (
    <div>
      <div className="px-8">
        {/* Content */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="logo w-6/12 md:w-3/12">
            <NavLink to="/">
              <img src={Logo} alt="Site_logo" className="w-60" />
            </NavLink>
          </div>

          {/* SearchBar & Dropdowns*/}
          <div className="w-6/12 hidden lg:block">
            <div className="searchBox flex items-center w-full">
              <div className="flex items-center justify-between w-full gap-14">
                {/* World Icon */}
                <div className="w-max">
                  <img src={World} alt="world_icon" className="w-24" />
                </div>

                {/* Input Field */}
                <div className="w-full flex items-center gap-4 border-2 p-2 rounded-md">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    className="w-full outline-none bg-transparent"
                    placeholder="Search..."
                  />
                </div>

                {/* DropDown Menus */}
                <div className="flex items-center gap-12 w-full">
                  {/* Dropdown Link Containers */}
                  <div className="relatives">
                    <span
                      className="text-xl font-bold cursor-pointer"
                      style={{ color: "#274E85" }}
                      onClick={toggleJob}
                    >
                      J
                    </span>
                    {/* Show Job State Toggle */}
                    {showJob && (
                      <div className="absolute bg-white w-28 rounded-md  overflow-hidden shadow-md">
                        <div className="bg-borderColor p-2 text-center">
                          <h1 className="text-lg text-white font-semibold">
                            Jobs
                          </h1>
                        </div>
                        <div className="bg-white text-center">
                          {jobDropdown.map((item, i) => (
                            <div className="border-t p-2 cursor-pointer">
                              <span key={i} className="">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <span
                      className="text-xl font-bold cursor-pointer"
                      style={{ color: "#A143B7" }}
                      onClick={toggleFreelancing}
                    >
                      F
                    </span>

                    {/* Show Freelancing State Toggle */}
                    {showFreelancing && (
                      <div className="absolute bg-white w-28 rounded-md  overflow-hidden shadow-md">
                        <div className="bg-borderColor p-2 text-center">
                          <h1 className="text-lg font-semibold text-white">
                            Freelancing
                          </h1>
                        </div>
                        <div className="bg-white text-center">
                          {FreelancingDropdown.map((item, i) => (
                            <div
                              className="border-t p-2 cursor-pointer"
                              key={i}
                            >
                              <span className="">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <span
                      className="text-xl font-bold cursor-pointer"
                      style={{ color: "#599A6C" }}
                      onClick={toggleGig}
                    >
                      G
                    </span>

                    {/* Show Gig State Toggle */}
                    {showGig && (
                      <div className="absolute bg-white w-28 rounded-md  overflow-hidden shadow-md">
                        <div className="bg-borderColor p-2 text-center">
                          <h1 className="text-lg font-semibold text-white">
                            Gig
                          </h1>
                        </div>
                        <div className="bg-white text-center">
                          {GigDropdown.map((item, i) => (
                            <div
                              className="border-t p-2 cursor-pointer"
                              key={i}
                            >
                              <span className="">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <span
                      className="text-xl font-bold cursor-pointer"
                      style={{ color: "#E55F5F" }}
                      onClick={toggleEdu}
                    >
                      E
                    </span>

                    {/* Show Gig State Toggle */}
                    {showEducation && (
                      <div className="absolute bg-white w-28 rounded-md  overflow-hidden">
                        <div className="bg-borderColor p-2 text-center">
                          <h1 className="text-lg font-semibold text-white">
                            Education
                          </h1>
                        </div>
                        <div className="bg-white text-center">
                          {EduDropdown.map((item, i) => (
                            <div
                              className="border-t p-2 cursor-pointer"
                              key={i}
                            >
                              <span className="">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <span
                      className="text-xl font-bold cursor-pointer"
                      style={{ color: "#F60319" }}
                      onClick={toggleLocal}
                    >
                      L
                    </span>

                    {/* Show Local State Toggle */}
                    {showLocal && (
                      <div className="absolute bg-white w-32 rounded-md  overflow-hidden">
                        <div className="bg-borderColor p-2 text-center">
                          <h1 className="text-lg font-semibold text-white">
                            Local Service
                          </h1>
                        </div>
                        <div className="bg-white text-center">
                          {LoocalDropdown.map((item, i) => (
                            <div
                              className="border-t p-2 cursor-pointer"
                              key={i}
                            >
                              <span className="">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Icons */}
          <div
            className="w-3/12 flex justify-end relative
          "
          >
            <img
              src={Avatar}
              alt="avatar_image"
              className="w-12 rounded-full cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            />

            {/* Show Freelancing State Toggle */}
            {showProfile && (
              <div className="absolute top-[110%] bg-white w-max shadow-md rounded-md overflow-hidden z-[10000]">
                <div className="bg-borderColor p-2 text-center">
                  <h1 className="text-lg font-semibold text-white">Profile</h1>
                </div>
                <div className="bg-white text-center">
                  {ProfilelDropdown.map((item, i) => (
                    <NavLink to={item.link} key={i}>
                      <div className="border-t p-2 cursor-pointer">
                        <span className="">{item.name}</span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
