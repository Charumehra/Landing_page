import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import CTA from "./components/CTA";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<CTA/>} />
        <Route path ="/portfolio" element={<Portfolio/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;