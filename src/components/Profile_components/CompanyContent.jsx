import Img1 from "../../images/assets/podcast1.jpg";
import Img2 from "../../images/assets/podcast2.jpg";
import Img3 from "../../images/assets/podcast3.png";
import Img4 from "../../images/assets/podcast4.png";
import PodcastCard from "../PodcastCard";
import CourseData from "../../TopCourseData";
import TopCourseCard from "../TopCourseCard";
import { useState } from "react";

const FreelancerContent = () => {
  // STates
  const [gigData, setGigData] = useState({
    title: "",
    desc: "",
    convention: true,
    freelancer: false,
  });
  const [podcastCreated, setPodcastCreated] = useState(false);
  const [podcastSaved, setPodcastSaved] = useState(true);

  // Change FUnctions
  const createdPodcast = () => {
    setPodcastCreated(true);
    setPodcastSaved(false);
  };
  const savedPodcast = () => {
    setPodcastSaved(true);
    setPodcastCreated(false);
  };

  //   Podcast Data
  const podcastData = [
    {
      id: 1,
      img: Img1,
      author: "Trevor Noah",
      min: 204,
      title: "The Daily Show",
    },
    {
      id: 2,
      img: Img2,
      author: "Jhon Beck",
      min: 334,
      title: "Mindset",
    },
    {
      id: 3,
      img: Img3,
      author: "Joe Rogan",
      min: 306,
      title: "The American",
    },
    {
      id: 4,
      img: Img4,
      author: "Trevor Noah",
      min: 204,
      title: "Planet Money",
    },
    {
      id: 5,
      img: Img1,
      author: "Trevor Noah",
      min: 204,
      title: "Planet Money",
    },
    {
      id: 6,
      img: Img2,
      author: "Trevor Noah",
      min: 204,
      title: "Planet Money",
    },
    {
      id: 7,
      img: Img3,
      author: "Trevor Noah",
      min: 204,
      title: "Planet Money",
    },
  ];

  return (
    <div className="bg-Banner">
      <div className="content h-full">
        {/* Header Part */}
        <div className="flex border-b border-b-slate-400 h-max lg:items-end flex-col lg:flex-row">
          {/* Left */}
          <div className="lg:w-3/12 border-r-slate-400 border-r px-8 py-4 h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png"
              alt="avatar"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          {/* Right */}
          <div className="lg:w-9/12 h-full px-8 lg:py-4 pb-4">
            {/* Right Content */}
            <div className="flex justify-between items-end w-full h-full">
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-profileHeaders">
                  Google
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Header Part Finish */}

        {/* About */}
        <div className="flex border-b border-b-slate-400 flex-wrap lg:flex-nowrap">
          {/* Left */}
          <div className="w-full lg:w-3/12 lg:border-r-slate-400 lg:border-r">
            {/* Profile Details */}
            <div className="px-8 lg:py-4 py-2">
              {/* Name */}
              <div>
                <h1 className="text-xl lg:text-4xl font-bold text-profileHeaders">
                  Sergey Brinn
                </h1>
              </div>

              {/* Location */}
              <div className="mt-2 mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  <i className="fa-solid fa-location-dot"></i> Nevada, USA
                </span>
              </div>

              {/* Average Rating */}
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Average Rating:{" "}
                </span>
                <div className="flex gap-1 items-center text-sm">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>

              {/* Language */}
              <div className="my-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Language: English
                </span>
              </div>

              {/* Earnings */}
              <div className="mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Amount Spent: $47k+
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Jobs Posted: 17
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-9/12 h-full border-t border-t-slate-400 lg:border-t-0">
            {/* Edit */}
            <div className="w-full text-end px-4">
              <span className="text-borderColor lg:text-lg font-medium cursor-pointer">
                Edit
              </span>
            </div>

            {/* Description */}
            <div className="mt-4 px-8 pb-4 border-b border-b-slate-400">
              {/* Part One */}
              <p className="text-profileHeaders font-medium lg:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae expedita itaque laborum corporis aut blanditiis? Hic
                exercitationem, enim, modi ex autem assumenda iusto ullam earum
                delectus vero adipisci consequatur possimus, cum ipsa nulla
                commodi repellendus suscipit. Reprehenderit perferendis odio,
                non, distinctio aliquam nisi modi fugit ipsa sint ullam dolorem
                expedita inventore? Officiis, maiores? Dolorem officia quia
                laborum omnis unde sint tenetur delectus error, esse voluptatu
                mmodi ex autem assumenda iusto ullam earum delectus vero
                adipisci consequatur possimus, cum ipsa nulla commodi
                repellendus suscipit. Reprehenderit perferendis odio,
              </p>
            </div>

            {/* Active Job Post */}
            <div className="px-8 lg:py-4 pt-2 pb-4">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Active Hires
              </h1>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-2 lg:mt-8">
                {/* Left */}
                <div>
                  <h2 className="font-semibold text-profileHeaders text-base lg:text-xl">
                    Website Development
                  </h2>
                  <span className="text-profileHeaders lg:text-base text-sm">
                    Posted 2 hours ago
                  </span>
                  <p className="font-semibold cursor-pointer lg:text-base text-sm">
                    Archive | <span className="text-borderColor">Delete</span>{" "}
                  </p>
                </div>
                {/* Right */}
                <div>
                  <h2 className="font-semibold text-profileHeaders lg:text-xl lg:text-center">
                    Responses <br /> 43
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Finish */}

        {/* Balance, Active contracts, Time Left */}
        <div className="flex lg:flex-nowrap flex-wrap border-b border-b-slate-400">
          {/* Left */}
          <div className="w-full lg:w-3/12 border-b border-b-slate-400 lg:border-b-0 lg:border-r-slate-400 lg:border-r pl-8 pr-2 py-4 flex flex-col justify-between">
            {/* Balance */}
            <div className="flex items-center gap-2">
              <h1 className="text-xl lg:text-2xl font-semibold">Balance:</h1>
              <span className="text-base lg:text-xl text-profileHeaders">
                $15,000
              </span>
            </div>

            {/* WIthdraw */}
            <div className="text-end pr-4 lg:pr-0">
              <span className="text-base lg:text-xl font-semibold cursor-pointer text-borderColor">
                Top up
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-9/12 flex">
            {/* Active Contracts */}
            <div className="lg:px-8 pl-8 py-4 flex flex-col gap-2 w-7/12 lg:w-8/12 border-r border-r-slate-400">
              <h1 className="text-base lg:text-2xl font-semibold">
                Active Hires
              </h1>

              <p className="lg:text-base text-sm text-profileHeaders font-medium cursor-pointer">
                1. Website Development - Freelancer 1
              </p>
              <p className="lg:text-base text-sm text-profileHeaders font-medium cursor-pointer">
                2. Website Migration - Working 1
              </p>
            </div>

            {/*Time Left */}
            <div className="lg:px-8 pl-4 py-4 flex flex-col gap-2 w-5/12 lg:w-4/12">
              <h1 className="text-base lg:text-2xl font-semibold">Time Left</h1>

              <p className="lg:text-base text-sm text-profileHeaders font-medium cursor-pointer">
                2 Days 13 Hours
              </p>
              <p className="lg:text-base text-sm text-profileHeaders font-medium cursor-pointer">
                4 Days 2 Hours
              </p>
            </div>
          </div>
        </div>
        {/* Balance Finish */}

        {/* Post a Job */}
        <div className="px-8 pt-4 pb-8 border-b border-b-slate-400">
          <h1 className="text-xl lg:text-2xl font-semibold">Post A Job</h1>

          {/* Form Content */}
          <div className="mt-4 flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-16">
            {/* Left Side */}
            <div className="w-full lg:w-9/12 lg:pl-8">
              {/* Title */}
              <div className="">
                <p className="text-profileHeaders lg:text-lg font-semibold">
                  Title
                </p>
                <input
                  value={gigData.title}
                  onChange={(e) =>
                    setGigData({
                      ...gigData,
                      title: e.target.value,
                    })
                  }
                  type="text"
                  className="border border-black py-1 lg:py-2 px-4 bg-transparent w-full outline-none rounded-md"
                />
              </div>

              {/* Decription */}
              <div className="mt-4">
                <p className="text-profileHeaders lg:text-lg font-semibold">
                  Description
                </p>
                <textarea
                  value={gigData.desc}
                  onChange={(e) =>
                    setGigData({
                      ...gigData,
                      desc: e.target.value,
                    })
                  }
                  rows="12"
                  className="w-full bg-transparent border border-black outline-none py-1 lg:py-2 px-4 resize-none rounded-md"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="w-full lg:w-4/12 mt-2">
                <p className="text-profileHeaders font-medium text-sm lg:text-base">
                  Please include the description. salary or fee, skills required
                  and any other information you would like the applicant to know
                  about
                </p>
              </div>

              {/* Additional Div */}
              <div className="lg:mt-16 mt-4">
                <label
                  className="cursor-pointer text-lg lg:text-xl font-semibold text-borderColor"
                  htmlFor="file"
                >
                  Add additional files
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-3/12">
              {/* Conventional */}
              <div className="flex justify-between w-full lg:w-8/12 mx-auto lg:mt-4">
                <label
                  htmlFor="convo"
                  className="text-lg lg:text-xl font-semibold text-profileHeaders"
                >
                  Conventional
                </label>
                <input
                  type="checkbox"
                  id="convo"
                  className="scale-100 lg:scale-125"
                  checked={gigData.convention}
                  value={gigData.convention}
                  onChange={(e) =>
                    setGigData({
                      ...gigData,
                      convention: e.target.checked,
                    })
                  }
                />
              </div>

              {/* Freelance */}
              <div className="flex justify-between w-full lg:w-8/12 mx-auto my-2">
                <label
                  htmlFor="freelance"
                  className="text-lg lg:text-xl font-semibold text-profileHeaders"
                >
                  Freelancer
                </label>
                <input
                  type="checkbox"
                  id="freelance"
                  className="scale-100 lg:scale-125"
                  checked={gigData.freelancer}
                  value={gigData.freelancer}
                  onChange={(e) =>
                    setGigData({
                      ...gigData,
                      freelancer: e.target.checked,
                    })
                  }
                />
              </div>

              {/* Choose */}
              <div className="lg:w-8/12 w-full pr-4 mx-auto">
                <span className="text-profileHeaders">
                  Choose who you want to reach with this job post
                </span>
              </div>
            </div>
          </div>

          {/* Job Post Button */}
          <div className="mt-8 text-end">
            <button className="lg:text-lg font-semibold text-white bg-borderColor px-8 py-1 rounded-lg">
              Post Job
            </button>
          </div>
        </div>
        {/* Post a job finished */}

        {/* Podcast Container */}
        <div className="px-8 pt-4 pb-16 border-b border-b-slate-400">
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold">Podcasts</h1>
            <div>
              <span
                className={`${
                  podcastCreated && "text-borderColor"
                } font-semibold lg:text-base text-sm cursor-pointer`}
                onClick={createdPodcast}
              >
                Created
              </span>
              <span> | </span>
              <span
                className={`${
                  podcastSaved && "text-borderColor"
                } font-semibold lg:text-base text-sm cursor-pointer`}
                onClick={savedPodcast}
              >
                Saved
              </span>
            </div>
          </div>

          {/* Podcast Cards */}
          <div className="lg:pl-12 mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 lg:w-11/12 w-full">
            {podcastData.map((item) => (
              <PodcastCard
                key={item.id}
                Img={item.img}
                author={item.author}
                min={item.min}
                title={item.title}
              />
            ))}
          </div>
        </div>
        {/* Podcast Container Ended */}

        {/* Courses Container */}
        <div className="px-8 pt-4 pb-16">
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold">Courses Owned</h1>
          </div>

          {/* Courses Cards */}
          <div className="lg:pl-12 mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 lg:w-11/12 w-full">
            {CourseData.slice(0, 4).map((item) => (
              <TopCourseCard
                key={item.id}
                img={item.image}
                title={item.title}
                authorFristName={item.authorFristName}
                authorLastName={item.authorLastName}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* Courses Containeer Finished */}
      </div>
    </div>
  );
};

export default FreelancerContent;
