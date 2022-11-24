import Homepage from "./Pages/Homepage";
import ForumPage from "./Pages/ForumPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalaryPage from "./Pages/SalaryPage";
import CareerPage from "./Pages/CareerPage";
import PostGig from "./Pages/PostGig";
import EventPage from "./Pages/EventPage";
import BuildCV from "./Pages/BuildCV";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import JobSearch from "./Pages/JobSearch";
import Freelancer from "./Pages/Freelancer";
import CourseShop from "./Pages/CourseShop";
import LocalServices from "./Pages/LocalServices";
import Podcasts from "./Pages/Podcasts";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Blogs from "./Pages/Blogs";
import Settings from "./Pages/Settings";
import FreelancerProfile from "./Pages/Profiles/FreelancerProfile";
import WorkerProfile from "./Pages/Profiles/WorkerProfile";
import LSPProfile from "./Pages/Profiles/LSPProfile";
import CompanyProfile from "./Pages/Profiles/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/postgig" element={<PostGig />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/buildcv" element={<BuildCV />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/allcourse" element={<CourseShop />} />
        <Route path="/localservices" element={<LocalServices />} />
        <Route path="/podcast" element={<Podcasts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/settings" element={<Settings />} />
        {/* Profile Routes */}
        <Route path="/profile">
          <Route path="freelancer" element={<FreelancerProfile />} />
          <Route path="worker" element={<WorkerProfile />} />
          <Route path="localserviceprovider" element={<LSPProfile />} />
          <Route path="company" element={<CompanyProfile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
