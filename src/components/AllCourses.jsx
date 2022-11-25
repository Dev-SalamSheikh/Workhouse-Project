import CourseData from "../TopCourseData";
import TopCourseCard from "../components/TopCourseCard";

const AllCourses = () => {
  return (
    <div className="bg-Banner pb-8 lg:pb-16 px-8 lg:px-0">
      <div className="container mx-auto lg:w-9/12 w-full">
        <div className="card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8">
          {CourseData.map((item) => (
            <TopCourseCard
              showPrice
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
  );
};

export default AllCourses;
