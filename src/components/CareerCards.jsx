import CareerCard from "./CareerCard";
import GigImage1 from "../images/location1.jpg";
import GigImage2 from "../images/location2.jpg";
import GigImage3 from "../images/location3.jpg";
import GigImage4 from "../images/location4.jpg";
import GigImage5 from "../images/sector1.jpg";
import GigImage6 from "../images/sector2.png";
const CareerCards = () => {
  const CardData = [
    {
      id: 1,
      title: "CV Help",
      img: GigImage1,
    },
    {
      id: 2,
      title: "Qualifications",
      img: GigImage2,
    },
    {
      id: 3,
      title: "Job Interviews",
      img: GigImage3,
    },
    {
      id: 4,
      title: "Internships & Work Experience",
      img: GigImage4,
    },
    {
      id: 5,
      title: "Industry Information",
      img: GigImage5,
    },
    {
      id: 6,
      title: "Learing employmentablity Skills",
      img: GigImage6,
    },
  ];
  return (
    <div className="container mx-auto w-10/12 lg:w-6/12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 mt-8">
      {CardData.map((card) => (
        <CareerCard key={card.id} img={card.img} title={card.title} />
      ))}
    </div>
  );
};

export default CareerCards;
