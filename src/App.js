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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
