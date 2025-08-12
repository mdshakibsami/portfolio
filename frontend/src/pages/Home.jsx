import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Technologies></Technologies>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
