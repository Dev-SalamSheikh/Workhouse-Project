import PodcastCarousel from "./PodcastCarousel";
import Img from "../images/assets/podcast1.jpg";
import Img2 from "../images/assets/podcast2.jpg";
import Img3 from "../images/assets/podcast3.png";
import Img4 from "../images/assets/podcast4.png";

const PodcastContainer = () => {
  const feedData = [
    {
      id: 1,
      img: Img,
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
      img: Img,
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
    <div className="bg-Banner md:pb-20 md:pt-6 pb-10">
      <div className="container mx-auto px-8 lg:px-0">
        <div>
          <PodcastCarousel title="Your Feed" data={feedData} />
        </div>

        <div className="md:my-[100px] my-10">
          <PodcastCarousel title="Trending" data={feedData} />
        </div>

        <div>
          <PodcastCarousel title="Business" data={feedData} />
        </div>
      </div>
    </div>
  );
};

export default PodcastContainer;
