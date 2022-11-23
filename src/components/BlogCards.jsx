import BlogSingleCard from "./BlogSingleCard";
import Blog1 from "../images/assets/blog1.jpeg";
import Blog2 from "../images/assets/blog2.jpeg";

const BlogCards = () => {
  // Blogs Data
  const data = [
    {
      id: 1,
      img: Blog1,
      title: "How to find the most relaxing jobs on workhouse",
      author: "Talia Mar",
    },
    {
      id: 2,
      img: Blog2,
      title: "Tips to working remotely",
      author: "Tao ming",
    },
    {
      id: 3,
      img: Blog1,
      title: "How to find the most relaxing jobs on workhouse",
      author: "Talia Mar",
    },
  ];

  return (
    <div className="bg-Banner pt-8 pb-16 px-8 lg:px-0">
      <div className="container mx-auto">
        {data.map((item) => (
          <BlogSingleCard
            key={item.id}
            author={item.author}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
