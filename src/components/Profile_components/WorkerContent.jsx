import Img from "../../images/freelancer5.jpg";
import Img1 from "../../images/assets/podcast1.jpg";
import Img2 from "../../images/assets/podcast2.jpg";
import Img3 from "../../images/assets/podcast3.png";
import Img4 from "../../images/assets/podcast4.png";
import PodcastCard from "../PodcastCard";
import CourseData from "../../TopCourseData";
import TopCourseCard from "../TopCourseCard";

const WorkerContent = () => {
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
          <div className="w-full lg:w-9/12 h-full px-8 lg:py-4 pb-4">
            {/* Right Content */}
            <div className="flex justify-between items-end w-full h-full">
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-profileHeaders">
                  Front-end Developer
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
            <div className=" px-8 py-4">
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
                  D.O.B: 11|08|2000
                </span>
              </div>

              {/* Jobs */}
              <div className="mb-1">
                <span className="text-[15px] font-semibold lg:text-lg text-profileHeaders lg:font-bold">
                  Portfolio Website: 17
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

            {/* Education Div */}
            <div className="w-full lg:border-b-0 border-b-slate-400 border border-t border-t-slate-400 px-8 py-2">
              <h1 className="text-xl lg:text-2xl font-semibold">Education</h1>

              {/* University */}
              <div className="my-2">
                <h3 className="text-base lg:text-lg font-semibold text-profileHeaders">
                  University of Winsconsin - BSC
                </h3>
                <span className="text-profileHeaders font-medium">Law</span>
              </div>

              {/* University 2 */}
              <div className="mt-1">
                <h3 className="text-base lg:text-lg font-semibold text-profileHeaders">
                  Duke University - BSC
                </h3>
                <span className="text-profileHeaders font-medium">
                  Medical Neuroscience
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-9/12 h-full px-8 pb-8">
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
                dolor, ad accusantium?
              </p>
              <br />
              {/* Part two */}
              <p className=" text-profileHeaders font-medium lg:text-base text-sm">
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
        <div className="flex border-b border-b-slate-400 flex-wrap lg:flex-nowrap">
          {/* Left  */}
          <div className="w-full lg:w-3/12 border-b border-b-slate-400 lg:border-b-0 lg:border-r-slate-400 lg:border-r">
            {/* Skills */}
            <div className="border-b border-b-slate-400 px-8 py-4">
              <h1 className="text-xl lg:text-2xl font-semibold">Skills</h1>

              {/* Skills  */}
              <div className="mt-2 lg:mt-4">
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Problem Solving Skills
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Wordpress
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Teamwork
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Creativity
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Organizations Skills
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Web Development
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="px-8 py-4">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Qualifications
              </h1>

              {/* Skills  */}
              <div className="mt-2 lg:mt-4">
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  CCNA
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  CCNP
                </p>
                <p className="font-medium text-profileHeaders lg:text-base text-sm">
                  Compita S+
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-9/12 px-8 pt-2 pb-6 lg:py-4">
            {/* Heading */}
            <div>
              <h1 className="text-xl text:text-2xl font-semibold flex items-center gap-1">
                Employment History
              </h1>
            </div>

            {/* Yelp */}
            <div className="mt-3 lg:mt-5">
              <h2 className="text-lg lg:text-xl font-semibold">
                Yelp - Web Designer
              </h2>
              <h4 className="text-base lg:text-lg font-semibold">
                Feb 2020 - Present
              </h4>
              <p className="lg:text-base text-sm text-profileHeaders font-medium">
                1. Lead UI/UX website designer for a fast-pcaed design firm
              </p>
              <p className="lg:text-base text-sm text-profileHeaders font-medium">
                2. Created an average of four minor websites or one major
                website per month
              </p>
              <p className="lg:text-base text-sm text-profileHeaders font-medium">
                3. Created custom graphics sets for clients, with 99% client
                satisfaction scores
              </p>
            </div>

            {/* Yelp */}
            <div className="mt-4 lg:mt-9">
              <h2 className="text-lg lg:text-xl font-semibold">
                IBM - Web Designer
              </h2>
              <h4 className="text-base lg:text-lg font-semibold">
                Jan 2020 - Feb 2020
              </h4>
              <p className="text-profileHeaders font-medium lg:text-base text-sm">
                1. Lead UI/UX website designer for a fast-pcaed design firm
              </p>
              <p className="text-profileHeaders font-medium lg:text-base text-sm">
                2. Created an average of four minor websites or one major
                website per month
              </p>
              <p className="text-profileHeaders font-medium lg:text-base text-sm">
                3. Created custom graphics sets for clients, with 99% client
                satisfaction scores
              </p>
            </div>
          </div>
        </div>

        {/* Podcast Container */}
        <div className="px-8 pt-4 pb-16 border-b border-b-slate-400">
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold">Podcasts</h1>
            <p className="font-semibold lg:text-base text-sm">
              Created | <span className="text-borderColor">Saved</span>
            </p>
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
          <div className="mt-4 lg:pl-12 lg:mt-8 lg:w-11/12 card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8">
            {CourseData.slice(4, 8).map((item) => (
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

export default WorkerContent;
