import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";

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
      <Footer></Footer>
    </div>
  );
};

export default Home;
