import GigImage1 from "../images/location1.jpg";
import GigImage2 from "../images/location2.jpg";
import GigImage3 from "../images/location3.jpg";
import GigImage4 from "../images/location4.jpg";
import GigImage5 from "../images/sector1.jpg";
import GigImage6 from "../images/sector2.png";
import GigImage7 from "../images/sector3.jpg";
import GigImage8 from "../images/sector4.jpg";
import Freelancer1 from "../images/freelancer1.jpg";
import Freelancer2 from "../images/freelancer2.jpg";
import Freelancer3 from "../images/freelancer3.jpg";
import Freelancer4 from "../images/freelancer4.jpg";
import Freelancer5 from "../images/freelancer5.jpg";
import Freelancer6 from "../images/freelancer6.jpg";
import Freelancer7 from "../images/freelancer1.jpg";
import Freelancer8 from "../images/freelancer2.jpg";
import GigCards from "./GigCards";

const Gigs = () => {
  const gigsData = [
    {
      id: 1,
      image: GigImage1,
      title: "Gig No 01",
      avatar: Freelancer1,
    },
    {
      id: 2,
      image: GigImage2,
      title: "Gig No 02",
      avatar: Freelancer2,
    },
    {
      id: 3,
      image: GigImage3,
      title: "Gig No 03",
      avatar: Freelancer3,
    },
    {
      id: 4,
      image: GigImage4,
      title: "Gig No 04",
      avatar: Freelancer4,
    },
    {
      id: 5,
      image: GigImage5,
      title: "Gig No 05",
      avatar: Freelancer5,
    },
    {
      id: 6,
      image: GigImage6,
      title: "Gig No 06",
      avatar: Freelancer6,
    },
    {
      id: 7,
      image: GigImage7,
      title: "Gig No 07",
      avatar: Freelancer7,
    },
    {
      id: 8,
      image: GigImage8,
      title: "Gig No 08",
      avatar: Freelancer8,
    },
  ];

  return (
    <div className="px-8 lg:px-20 bg-Banner pt-8 pb-8 lg:pb-16">
      {/* Heading */}
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">
          Do you prefer ready-made gigs?
        </h1>
        <h1 className="text-xl lg:text-2xl font-semibold">
          Have a look at these projects
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 mt-4">
        {gigsData.map((gig) => (
          <GigCards
            key={gig.id}
            image={gig.image}
            avatarImg={gig.avatar}
            title={gig.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Gigs;
