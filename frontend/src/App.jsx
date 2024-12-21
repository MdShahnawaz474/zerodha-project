import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./landingPage/home/Homepage";
import Signup from "./landingPage/signup/Signup";
import AboutPage from "./landingPage/about/AboutPage";
import Products from "./landingPage/products/Products";
import Pricing from "./landingPage/home/Pricing";
import SupportPage from "./landingPage/support/SupportPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import "./App.css";
import NotFound from "./NotFound";
import ProductPage from "./landingPage/products/ProductPage";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound/>} />
        
        </Routes>
      <Footer />
    </>
  );
}

export default App;
