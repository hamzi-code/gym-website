import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutGirl from "./components/AboutGirl";
import ProductsGrid from "./components/ProductsGrid";
import AboutVideo from "./components/AboutVideo";
import Testimonials from "./components/Testimonials";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 w-full flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-white flex flex-col gap-20 sm:gap-28 md:gap-36 py-12">
        <Features />
        <AboutGirl />
        <ProductsGrid />
        <AboutVideo />
        <Testimonials />
        <DiscountBanner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
