import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import Trust from "../components/Trust";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white">

      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Trusted Clients */}
      {/* <Trust /> */}

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;