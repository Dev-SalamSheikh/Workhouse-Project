import Img1 from "../../images/assets/podcast1.jpg";
import Img2 from "../../images/assets/podcast2.jpg";
import Img3 from "../../images/assets/podcast3.png";
import Img4 from "../../images/assets/podcast4.png";
import PodcastCard from "../PodcastCard";
import CourseData from "../../TopCourseData";
import TopCourseCard from "../TopCourseCard";

const FreelancerContent = () => {
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
        <div className="flex border-b border-b-slate-400 h-max items-end">
          {/* Left */}
          <div className="w-3/12 border-r-slate-400 border-r px-8 py-4 h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png"
              alt="avatar"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          {/* Right */}
          <div className="w-9/12 h-full px-8 py-4">
            {/* Right Content */}
            <div className="flex justify-between items-end w-full h-full">
              <div>
                <h1 className="text-4xl font-bold text-profileHeaders">
                  Google
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Header Part Finish */}

        {/* About */}
        <div className="flex border-b border-b-slate-400">
          {/* Left */}
          <div className="w-3/12 border-r-slate-400 border-r">
            {/* Profile Details */}
            <div className=" px-8 py-4">
              {/* Name */}
              <div>
                <h1 className="text-4xl font-bold text-profileHeaders">
                  Sergey Brinn
                </h1>
              </div>

              {/* Location */}
              <div className="mt-2 mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  <i className="fa-solid fa-location-dot"></i> Nevada, USA
                </span>
              </div>

              {/* Average Rating */}
              <div className="flex items-center gap-2">
                <span className="text-lg text-profileHeaders font-bold">
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
                <span className="text-lg text-profileHeaders font-bold">
                  Language: English
                </span>
              </div>

              {/* Earnings */}
              <div className="mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  Amount Spent: $47k+
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  Jobs Posted: 17
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-9/12 h-full">
            {/* Edit */}
            <div className="w-full text-end px-4">
              <span className="text-borderColor text-lg font-medium cursor-pointer">
                Edit
              </span>
            </div>

            {/* Description */}
            <div className="mt-4  px-8 pb-4 border-b border-b-slate-400">
              {/* Part One */}
              <p className="text-profileHeaders font-medium">
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
            <div className=" px-8 pb-4 pt-4">
              <h1 className="text-2xl font-semibold">Active Hires</h1>
              <div className="flex justify-between mt-8">
                {/* Left */}
                <div>
                  <h2 className="font-semibold text-profileHeaders text-xl">
                    Website Development
                  </h2>
                  <span className="text-profileHeaders">
                    Posted 2 hours ago
                  </span>
                  <p className="font-semibold cursor-pointer">
                    Archive | <span className="text-borderColor">Delete</span>{" "}
                  </p>
                </div>
                {/* Right */}
                <div>
                  <h2 className="font-semibold text-profileHeaders text-xl text-center">
                    Responses <br /> 43
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Balance, Active contracts, Time Left */}
        <div className="flex border-b border-b-slate-400">
          {/* Left */}
          <div className="w-3/12 border-r-slate-400 border-r pl-8 pr-2 py-4 flex flex-col justify-between">
            {/* Balance */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">Balance:</h1>
              <span className="text-xl text-profileHeaders">$15,000</span>
            </div>

            {/* WIthdraw */}
            <div className="text-end">
              <span className="text-xl font-semibold cursor-pointer text-borderColor">
                Top up
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="w-9/12 flex">
            {/* Active Contracts */}
            <div className="px-8 py-4 flex flex-col gap-2 w-8/12 border-r border-r-slate-400">
              <h1 className="text-2xl font-semibold">Active Hires</h1>

              <p className="text-profileHeaders font-medium cursor-pointer">
                1. Website Development - Freelancer 1
              </p>
              <p className="text-profileHeaders font-medium cursor-pointer">
                2. Website Migration - Working 1
              </p>
            </div>

            {/*Time Left */}
            <div className="px-8 py-4 flex flex-col gap-2 w-4/12">
              <h1 className="text-2xl font-semibold">Time Left</h1>

              <p className="text-profileHeaders font-medium cursor-pointer">
                2 Days 13 Hours
              </p>
              <p className="text-profileHeaders font-medium cursor-pointer">
                4 Days 2 Hours
              </p>
            </div>
          </div>
        </div>

        {/* Post a Job */}
        <div className="px-8 pt-4 pb-8 border-b border-b-slate-400">
          <h1 className="text-2xl font-semibold">Post A Job</h1>

          {/* Form Content */}
          <div className="mt-4 flex justify-between gap-16">
            {/* Left Side */}
            <div className="w-9/12 pl-8">
              {/* Title */}
              <div className="">
                <p className="text-profileHeaders text-lg">Title</p>
                <input
                  type="text"
                  className="border border-black py-2 px-4 bg-transparent w-full outline-none"
                />
              </div>

              {/* Decription */}
              <div className="mt-4">
                <p className="text-profileHeaders text-lg">Description</p>
                <textarea
                  rows="12"
                  className="w-full bg-transparent border border-black outline-none py-2 px-4 resize-none"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="w-4/12 mt-2">
                <p className="text-profileHeaders font-medium">
                  Please include the description. salary or fee, skills required
                  and any other information you would like the applicant to know
                  about
                </p>
              </div>

              {/* Additional Div */}
              <div className="mt-16">
                <label
                  className="cursor-pointer text-xl font-semibold text-borderColor"
                  htmlFor="file"
                >
                  Add additional files
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-3/12">
              {/* Conventional */}
              <div className="flex justify-between w-8/12 mx-auto mt-4">
                <label
                  htmlFor="convo"
                  className="text-xl font-semibold text-profileHeaders"
                >
                  Conventional
                </label>
                <input
                  type="checkbox"
                  id="convo"
                  className="scale-125"
                  checked
                />
              </div>

              {/* Freelance */}
              <div className="flex justify-between w-8/12 mx-auto my-2">
                <label
                  htmlFor="convo"
                  className="text-xl font-semibold text-profileHeaders"
                >
                  Freelancer
                </label>
                <input type="checkbox" id="convo" className="scale-125" />
              </div>

              {/* Choose */}
              <div className="w-8/12 pr-4 mx-auto">
                <span className="text-profileHeaders">
                  Choose who you want to reach with this job post
                </span>
              </div>
            </div>
          </div>

          {/* Job Post Button */}
          <div className="mt-8 text-end">
            <button className="text-lg font-semibold text-white bg-borderColor px-8 py-1 rounded-lg">
              Post Job
            </button>
          </div>
        </div>

        {/* Podcast Container */}
        <div className="px-8 pt-4 pb-16 border-b border-b-slate-400">
          <div>
            <h1 className="text-2xl font-semibold">Podcasts</h1>
            <p className="font-semibold">
              Created | <span className="text-borderColor">Saved</span>
            </p>
          </div>

          {/* Podcast Cards */}
          <div className="pl-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 w-11/12">
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

        {/* Courses Container */}
        <div className="px-8 pt-4 pb-16">
          <div>
            <h1 className="text-2xl font-semibold">Courses Owned</h1>
          </div>

          {/* Courses Cards */}
          <div className="pl-12 mt-8 w-11/12 card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8">
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
      </div>
    </div>
  );
};

export default FreelancerContent;
