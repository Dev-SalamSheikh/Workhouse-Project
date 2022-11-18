import Homepage from "./Pages/Homepage";
import ForumPage from "./Pages/ForumPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalaryPage from "./Pages/SalaryPage";
import CareerPage from "./Pages/CareerPage";
import PostGig from "./Pages/PostGig";
import EventPage from "./Pages/EventPage";
import BuildCV from "./Pages/BuildCV";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
