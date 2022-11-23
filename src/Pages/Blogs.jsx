import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSearch from "../components/BlogSearch";
import TrendingBlogs from "../components/TrendingBlogs";
import BlogCards from "../components/BlogCards";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogSearch />
      <TrendingBlogs />
      <BlogCards />
      <Footer />
    </div>
  );
};

export default Blogs;
