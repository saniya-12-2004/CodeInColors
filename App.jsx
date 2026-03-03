import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ColorPage from "./pages/ColorPage";
import GiftPage from "./pages/GiftPage";
import FortunePage from "./pages/FortunePage";
import RoadmapPage from "./pages/RoadmapPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<ColorPage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/fortune" element={<FortunePage />} />
        <Route path="/roadmap/:careerType" element={<RoadmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;