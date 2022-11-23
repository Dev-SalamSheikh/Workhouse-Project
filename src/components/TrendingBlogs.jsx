import TrendingBlogCard from "./TrendingBlogCard";
import Image from "../images/freelancer1.jpg";
import Image2 from "../images/freelancer2.jpg";
import Image3 from "../images/freelancer3.jpg";

const TrendingBlogs = () => {
  return (
    <div className="bg-Banner">
      <div className="container w-10/12 mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-semibold">
          Trending on workhouse <i className="fa-solid fa-chart-line"></i>
        </h1>

        {/* Cards */}
        <div className="md:py-8 py-4 flex md:gap-8 gap-4 items-center flex-wrap">
          <TrendingBlogCard
            img={Image}
            read={6}
            title="Ukraine War, 23 August 2022"
            writter="Tom Copper"
          />
          <TrendingBlogCard
            img={Image2}
            read={10}
            title="Ancient Artifacts, 20 August 2022"
            writter="Jim Jones"
          />
          <TrendingBlogCard
            img={Image3}
            read={4}
            title="What is reality, 23 August 2022"
            writter="Amy Sanders"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
