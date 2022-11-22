import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PodcastContainer from "../components/PodcastContainer";
import PodcastSearch from "../components/PodcastSearch";

const Podcasts = () => {
  return (
    <div>
      <Navbar />
      <PodcastSearch />
      <PodcastContainer />
      <Footer />
    </div>
  );
};

export default Podcasts;
