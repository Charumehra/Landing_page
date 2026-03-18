import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import StatsBanner from "../components/StatsBanner";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <StatsBanner />
      <CTA />
    </>
  );
};

export default Home;