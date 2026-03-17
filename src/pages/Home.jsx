import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import StatsBanner from "../components/StatsBanner";

const Home = () => {
  return (
    <div className="bg-white">

      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      <Testimonials />
      
      <StatsBanner />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;