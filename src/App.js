import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Freelancers from "./components/Freelancers";
import Gigs from "./components/Gigs";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Search />
      <Courses />
      <Freelancers />
      <Gigs />
      <Footer />
    </div>
  );
}

export default App;
