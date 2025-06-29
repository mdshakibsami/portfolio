import { useState } from "react";
import logo from "../../assets/home/logo.png";
import menu from "../../assets/navbar/menu_black.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const links = (
    <>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={handleLinkClick}>Home</a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={handleLinkClick}>About </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={handleLinkClick}>Skills </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={handleLinkClick}>Education </a>
      </li>
      <li className="hover:text-blue-500 font-bold">
        <a onClick={handleLinkClick}>Projects </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm  sm:px-6 md:px-10">
        <div className="navbar-start">
          <div className="dropdown  dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden px-4"
              onMouseEnter={() => setIsMenuOpen(true)}
            >
              <img className="w-9" src={menu}></img>
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
            className="hidden md:block w-12 h-12 md:w-14 md:h-14"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navbar-end space-x-20">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{links}</ul>
          <a className="btn mr-4 md:mr-0 bg-black hover:text-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg text-sm sm:text-base ml-2">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
