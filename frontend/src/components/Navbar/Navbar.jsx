import { useState } from "react";
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
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm  sm:px-6 md:px-10">
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
    </div>
  );
};

export default Navbar;
