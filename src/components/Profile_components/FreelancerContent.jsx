import Img from "../../images/freelancer6.jpg";
import GigCards from "../GigCards";
import GigImage1 from "../../images/location1.jpg";
import GigImage2 from "../../images/location2.jpg";
import GigImage3 from "../../images/location3.jpg";
import Img1 from "../../images/assets/podcast1.jpg";
import Img2 from "../../images/assets/podcast2.jpg";
import Img3 from "../../images/assets/podcast3.png";
import Img4 from "../../images/assets/podcast4.png";
import PodcastCard from "../PodcastCard";
import CourseData from "../../TopCourseData";
import TopCourseCard from "../../components/TopCourseCard";

const FreelancerContent = () => {
  // Gigs Data
  const gigsData = [
    {
      id: 1,
      image: GigImage1,
      title: "Gig No 01",
      avatar: GigImage1,
    },
    {
      id: 2,
      image: GigImage2,
      title: "Gig No 02",
      avatar: GigImage2,
    },
    {
      id: 3,
      image: GigImage3,
      title: "Gig No 03",
      avatar: GigImage3,
    },
  ];

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
                  Web Developer
                </h1>
              </div>
              {/* Rate */}
              <div className="flex flex-col items-end">
                <i className="fa-solid fa-pencil"></i>
                <span className="text-lg font-semibold text-profileHeaders">
                  $130/Hr
                </span>
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
                  Kassy Olisakwe
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
                  Earnings: $47k+
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  Total Jobs: 17
                </span>
              </div>

              {/* Total Hours */}
              <div className="mb-1">
                <span className="text-lg text-profileHeaders font-bold">
                  Total Hours: 344
                </span>
              </div>

              {/* Total Hours */}
              <div className="mb-1 flex gap-4 items-center">
                <span className="text-lg text-profileHeaders font-bold">
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

            {/* Education Div */}
            <div className="w-full border-t border-t-slate-400  px-8 py-2">
              <h1 className="text-2xl font-semibold">Education</h1>

              {/* University */}
              <div className="my-2">
                <h3 className="text-lg font-semibold text-profileHeaders">
                  University of Winsconsin - BSC
                </h3>
                <span className="text-profileHeaders font-medium">Law</span>
              </div>

              {/* University 2 */}
              <div>
                <h3 className="text-lg font-semibold text-profileHeaders">
                  Duke University - BSC
                </h3>
                <span className="text-profileHeaders font-medium">
                  Medical Neuroscience
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-9/12 h-full px-8 pb-8">
            {/* Edit */}
            <div className="w-full text-end">
              <span className="text-borderColor text-lg font-medium cursor-pointer">
                Edit
              </span>
            </div>

            {/* Description */}
            <div className="mt-4 pr-10">
              {/* Part One */}
              <p className="text-lg text-profileHeaders font-medium">
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
                dolor, ad accusantium?
              </p>
              <br />
              {/* Part two */}
              <p className="text-lg text-profileHeaders font-medium">
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
                dolor, ad accusantium?
              </p>
            </div>
          </div>
        </div>

        {/* Skills and Gig */}
        <div className="flex border-b border-b-slate-400">
          {/* Left  */}
          <div className="w-3/12 border-r-slate-400 border-r px-8 py-4">
            <h1 className="text-2xl font-semibold">Skills</h1>

            {/* Skills  */}
            <div className="mt-4">
              <p className="font-medium text-profileHeaders">
                Problem Solving Skills
              </p>
              <p className="font-medium text-profileHeaders">Wordpress</p>
              <p className="font-medium text-profileHeaders">Teamwork</p>
              <p className="font-medium text-profileHeaders">Creativity</p>
              <p className="font-medium text-profileHeaders">
                Organizations Skills
              </p>
              <p className="font-medium text-profileHeaders">Web Development</p>
            </div>
          </div>

          {/* Right */}
          <div className="px-8 py-4">
            {/* Heading */}
            <div>
              <h1 className="text-2xl font-semibold flex items-center gap-1">
                GIGS{" "}
                <span className="text-base font-normal text-profileHeaders">
                  (3 Max)
                </span>
              </h1>
            </div>

            {/* Gig Cards */}
            <div className="grid grid-cols-3 gap-12 pl-8 my-8">
              {gigsData.map((gig) => (
                <div>
                  <GigCards
                    key={gig.id}
                    image={gig.image}
                    avatarImg={gig.avatar}
                    title={gig.title}
                  />
                  <div className="text-center mt-4">
                    <span className="cursor-pointer font-semibold">
                      Edit | Archive | Delete
                    </span>
                  </div>
                </div>
              ))}
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
          <div className="w-9/12 flex">
            {/* Active Contracts */}
            <div className="px-8 py-4 flex flex-col gap-2 w-8/12 border-r border-r-slate-400">
              <h1 className="text-2xl font-semibold">Active Contracts</h1>

              <p className="text-profileHeaders font-medium cursor-pointer">
                1. Website Development - Mr Ahmed
              </p>
              <p className="text-profileHeaders font-medium cursor-pointer">
                2. Website Migration - GhostWritter
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
