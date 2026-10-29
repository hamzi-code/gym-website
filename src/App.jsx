import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutGirl from "./components/AboutGirl";
import ProductsGrid from "./components/ProductsGrid";
import AboutVideo from "./components/AboutVideo";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen w-full flex-col bg-white text-gray-700">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <AboutGirl />
          <ProductsGrid />
          <AboutVideo />
          <Pricing />
          <Testimonials />
          <DiscountBanner />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
