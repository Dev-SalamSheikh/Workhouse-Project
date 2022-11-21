import FreelancerJobCard from "./FreelancerJobCard";
import Go from "../images/assets/goo.png";
import playmint from "../images/assets/playmint.jpg";

const FreelancerCards = () => {
  const data = [
    {
      id: 1,
      img: Go,
      title: "Social Media Manager",
      location: "London",
      author: "Ghostwriter",
      price: 3500,
    },
    {
      id: 2,
      img: playmint,
      title: "Blockchain Developer Needed",
      location: "Nigeria",
      author: "Jessy Haslem",
      price: 2500,
    },
    {
      id: 3,
      img: Go,
      title: "Social Media Field Worker",
      location: "London",
      author: "Ghostwriter",
      price: 3000,
    },
  ];
  return (
    <div className="bg-Banner pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap">
          {/* Left Side */}
          <div className="left w-full lg:w-2/12">
            {/* Heading */}
            <p className="text-xl lg:text-2xl font-semibold pl-4">
              Filter <i className="fa-solid fa-arrow-up-wide-short"></i>
            </p>

            {/* Filtered Item */}
            <div className="flex flex-col gap-2 mt-4 lg:mt-8 pl-4">
              <span className="text-base md:text-lg font-semibold cursor-pointer">
                Payment Scheme <i className="fa-solid fa-sort-down ml-1"></i>
              </span>
              <span className="text-base md:text-lg font-semibold cursor-pointer">
                Location <i className="fa-solid fa-sort-down ml-1"></i>
              </span>
              <span className="text-base md:text-lg font-semibold cursor-pointer">
                Skills needed <i className="fa-solid fa-sort-down ml-1"></i>
              </span>
              <span className="text-base md:text-lg font-semibold cursor-pointer">
                Experience <i className="fa-solid fa-sort-down ml-1"></i>
              </span>
            </div>

            {/* Sort By */}
            <div className="py-2 px-4 rounded-md mt-4 mx-4 lg:mt-8 bg-freelancerBg w-11/12">
              <select className="w-full bg-transparent outline-none border-none font-light cursor-pointer">
                <option>Sort By</option>
                <option value="price">Price</option>
                <option value="Experience">Experience</option>
                <option value="Location">Location</option>
                <option value="Nearest Venues">Nearest Venues</option>
              </select>
            </div>
          </div>

          {/* Right Side */}
          <div className={`right w-full lg:w-10/12 flex px-4 gap-8`}>
            {/* Card Container */}
            <div className="w-full">
              {data.map((item) => (
                <FreelancerJobCard
                  key={item.id}
                  author={item.author}
                  img={item.img}
                  location={item.location}
                  price={item.price}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCards;
