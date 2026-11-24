import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Favorites from "./pages/Favorites";
import Inquiry from "./pages/Inquiry";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;