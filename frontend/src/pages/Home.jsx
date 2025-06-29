import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Technologies></Technologies>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
};

export default Home;
