import Img from "../../images/freelancer3.jpg";
import Img1 from "../../images/assets/podcast1.jpg";
import Img2 from "../../images/assets/podcast2.jpg";
import Img3 from "../../images/assets/podcast3.png";
import Img4 from "../../images/assets/podcast4.png";
import PodcastCard from "../PodcastCard";
import CourseData from "../../TopCourseData";
import TopCourseCard from "../TopCourseCard";
import { useState } from "react";

const FreelancerContent = () => {
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
              src={Img}
              alt="avatar"
              className="rounded-full w-32 h-32 object-cover ring-borderColor ring"
            />
          </div>
          {/* Right */}
          <div className="lg:w-9/12 h-full px-8 lg:py-4 pb-4">
            {/* Right Content */}
            <div className="flex justify-between items-end w-full h-full">
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-profileHeaders">
                  Baby Sitter
                </h1>
              </div>
              {/* Rate */}
              <div className="flex flex-col items-end">
                <i className="fa-solid text-xs lg:text-base fa-pencil"></i>
                <span className="text-sm lg:text-lg font-semibold text-profileHeaders">
                  $130/Hr
                </span>
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
                  Kassy Olisakwe
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
                  Earnings: $47k+
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Total Jobs: 17
                </span>
              </div>

              {/* Total Hours */}
              <div className="mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Total Hours: 344
                </span>
              </div>

              {/* Total Hours */}
              <div className="mb-1 flex gap-4 items-center">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Available:
                </span>
                {/* Toggle Button */}
                <label
                  htmlFor="toogleC"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input id="toogleC" type="checkbox" className="sr-only" />
                    <div className="w-8 h-3 bg-gray-300 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-9/12 h-full px-8 pb-8 border-t border-t-slate-400 lg:border-t-0">
            {/* Edit */}
            <div className="w-full text-end">
              <span className="text-borderColor lg:text-lg font-medium cursor-pointer">
                Edit
              </span>
            </div>

            {/* Description */}
            <div className="mt-4 lg:pr-10">
              {/* Part One */}
              <p className="text-profileHeaders font-medium lg:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae expedita itaque laborum corporis aut blanditiis? Hic
                exercitationem, enim, modi ex autem assumenda iusto ullam earum
                delectus vero adipisci consequatur possimus, cum ipsa nulla
                commodi repellendus suscipit. Reprehenderit perferendis odio,
                non, distinctio aliquam nisi modi fugit ipsa sint ullam dolorem
                expedita inventore? Officiis, maiores? Dolorem officia quia
                laborum omnis unde sint tenetur delectus error, esse voluptatum
                odio, nihil debitis excepturi ullam ut pariatur, beatae
                voluptatem. Velit placeat provident nobis neque, aspernatur
                veritatis obcaecati delectus maxime nisi ipsum, nesciunt ad
                dolore ex, cumque dolor cupiditate numquam officia eaque porro
                eligendi repellat? Placeat dignissimos sed, nemo error quasi
                iusto consectetur debitis. Tempore accusantium, ex unde dolores
                ullam possimus optio repudiandae error omnis sint fugiat, maxime
                nostrum dolorum quod, reprehenderit illo amet. Libero provident
                possimus odit, repellendus veniam mollitia adipisci vero! Totam
                velit at veritatis pariatur. Aliquam culpa sint qui libero
                quidem a quam obcaecati explicabo in officiis vero magni ducimus
                dolor?
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default FreelancerContent;
