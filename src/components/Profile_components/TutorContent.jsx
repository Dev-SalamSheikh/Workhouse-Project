import AddImage from "../../images/addimage.png";
import Img from "../../images/freelancer1.jpg";
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
              src={Img}
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
                  Video Editing
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
            <div className="px-8 py-4">
              {/* Name */}
              <div>
                <h1 className="text-4xl font-bold text-profileHeaders">
                  Sergey Brinn
                </h1>
              </div>

              {/* Average Rating */}
              <div className="flex items-center gap-2 mt-2">
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
                  Student: 234,990
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  Couresss: 4
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
            <div className="mt-4  px-8 pb-4">
              {/* Part One */}
              <p className="text-profileHeaders font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae expedita itaque{" "}
                <strong>laborum corporis aut blanditiis?</strong> Hic
                exercitationem, enim, modi ex autem assumenda iusto ullam earum
                delectus vero adipisci consequatur possimus, cum ipsa nulla
                commodi repellendus suscipit. Reprehenderit perferendis odio,
                non, distinctio aliquam nisi modi fugit ipsa sint ullam dolorem
                expedita inventore? Officiis, maiores? Dolorem officia quia
              </p>
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
                Withdraw
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="w-9/12 px-8 pt-4 pb-8">
            {/* Active Contracts */}
            <h1 className="text-2xl font-semibold">Dashboard</h1>

            {/* Hours and questions */}
            <div className="flex justify-between mt-12 w-full">
              {/* Left */}
              <div>
                <h2 className="font-semibold text-profileHeaders text-xl text-center">
                  Hours Watched <br /> 431
                </h2>
              </div>
              {/* Right */}
              <div>
                <h2 className="font-semibold text-profileHeaders text-xl text-center">
                  Questions <br /> 43
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Post a Job */}
        <div className="px-8 pt-4 pb-8 border-b border-b-slate-400">
          <h1 className="text-2xl font-semibold">Post A Course</h1>

          {/* Form Content */}
          <div className="mt-4 flex justify-between gap-16">
            {/* Left Side */}
            <div className="w-9/12 pl-8">
              {/* Title */}
              <div className="">
                <p className="text-profileHeaders text-lg font-semibold">
                  Title
                </p>
                <input
                  type="text"
                  className="border border-black py-2 px-4 bg-transparent w-full outline-none"
                />
              </div>

              {/* Decription */}
              <div className="mt-4">
                <p className="text-profileHeaders text-lg font-semibold">
                  Description
                </p>
                <textarea
                  rows="12"
                  className="w-full bg-transparent border border-black outline-none py-2 px-4 resize-none"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="w-4/12 mt-2">
                <p className="text-profileHeaders font-medium">
                  You should also add timestamps in the description to help the
                  students navaigate the course
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-3/12 flex justify-center h-max">
              <div className="bg-white w-6/12 text-center mt-6">
                <p className="font-semibold text-lg py-2">Add Thumbnail</p>
                <label htmlFor="file">
                  <img src={AddImage} alt="image_upload" className="w-full" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </div>

          {/* Job Post Button */}
          <div className="mt-8 text-end">
            <button className="text-lg font-semibold text-white bg-borderColor px-8 py-1 rounded-lg">
              Upload Video
            </button>
          </div>
        </div>

        {/* Courses Container */}
        <div className="px-8 pt-4 pb-16  border-b border-b-slate-400">
          <div>
            <h1 className="text-2xl font-semibold">Courses Created</h1>
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

        {/* Podcast Container */}
        <div className="px-8 pt-4 pb-16">
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
      </div>
    </div>
  );
};

export default FreelancerContent;
