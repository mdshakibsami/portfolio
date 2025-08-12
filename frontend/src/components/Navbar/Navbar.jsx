import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/home/logo.png";
import menu from "../../assets/navbar/menu_black.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const links = (
    <>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={() => scrollToSection("home")} className="cursor-pointer">
          Home
        </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={() => scrollToSection("about")} className="cursor-pointer">
          About
        </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={() => scrollToSection("skills")} className="cursor-pointer">
          Skills
        </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a
          onClick={() => scrollToSection("experience")}
          className="cursor-pointer"
        >
          Experience
        </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer"
        >
          Projects
        </a>
      </li>
    </>
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
  <div className="navbar bg-base-100/90 backdrop-blur-md border-b border-blue-500/30 shadow-lg sm:px-6 md:px-10 relative overflow-hidden ">
        {/* Stylish background shapes for navbar only */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-20 -left-32 w-[300px] h-[300px] bg-gradient-to-br from-blue-500/40 via-purple-400/30 to-transparent rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 right-0 w-[180px] h-[180px] bg-gradient-to-tr from-purple-500/30 via-blue-400/20 to-transparent rounded-full blur-xl animate-blob" />
          <svg className="absolute bottom-0 left-0 w-full h-10 opacity-30" viewBox="0 0 1440 320"><path fill="#6366f1" fillOpacity="0.3" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className="navbar-start">
          <div className="dropdown  dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden px-4"
              onMouseEnter={() => setIsMenuOpen(true)}
            >
              <img className="w-9" src={menu} alt="Menu" />
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                {links}
              </ul>
            )}
          </div>
          <img
            onClick={() => scrollToSection("home")}
            className="hidden md:block w-12 h-12 md:w-14 md:h-14 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-full border-2 border-transparent hover:border-blue-500"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navbar-end space-x-20">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{links}</ul>
          <a
            onClick={() => scrollToSection("contact")}
            className="btn mr-4 md:mr-0 bg-black hover:text-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg text-sm sm:text-base ml-2 cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
