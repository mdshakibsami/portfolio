import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import roommateHome from "../assets/roommate/RF_Home.png";
import { motion } from "framer-motion";
import {
  FaFilter,
  FaCheckCircle,
  FaUserShield,
  FaSearch,
  FaUserEdit,
  FaMobileAlt,
  FaComments,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const ProjectDetailsThree = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-11/12 mx-auto py-10 px-2 sm:px-4">
      <div onClick={() => navigate("/")} className="my-2">
        <a className="btn mr-4 md:mr-0 bg-black hover:text-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg text-sm sm:text-base ml-2 cursor-pointer">
          Back to Home
        </a>
      </div>
      {/* Project Image with Animation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={roommateHome}
          alt="Thread Up"
          className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-auto rounded-2xl shadow-lg object-cover border-4 border-blue-400/60 hover:border-purple-500/80 transition-all duration-300"
          style={{ maxHeight: "none" }}
        />
      </motion.div>

      {/* Project Description with Animation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Roommate Finder</h2>
        <p className="text-lg text-gray-700 mb-4">
          Roommate Finder is a web application that facilitates the process of
          finding compatible roommates by providing a comprehensive listing and
          management system. Users can create, update, and manage their personal
          roommate listings through a dedicated dashboard, while also browsing
          and filtering listings from others. The platform integrates secure
          authentication and offers a clean, responsive interface with light and
          dark themes, ensuring an intuitive user experience across all devices
        </p>
        <p className="text-lg text-gray-700 mb-2 font-semibold">Key Features</p>
        <ul className="text-gray-700 space-y-2 pl-0">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Browse available roommate listings
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            View detailed roommate information
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Add, edit, and delete listings from a personal dashboard
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            See and manage all personal listings in one place
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Filter other users’ listings
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Search personal listings quickly
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            User authentication with Firebase
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Light/Dark theme toggle with smooth transition
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Responsive design for all devices
          </li>
        </ul>
      </motion.div>

      {/* Challenges and Potential Improvements as Two Cards with Animation */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 mb-8">
        <motion.div
          className="w-full bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col mb-6 md:mb-0 md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-3 text-blue-700">
            Challenges Faced
          </h3>
          <ul className="text-gray-700 space-y-2 pl-0">
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserEdit className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Building a dedicated dashboard with CRUD functionality
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaSearch className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Implementing search and filtering with efficient performance
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserShield className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Handling Firebase authentication and secure route protection
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaMobileAlt className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Ensuring consistent UI/UX across all devices
                </h1>
              </div>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="w-full bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-3 text-green-700 flex items-center gap-2">
            Potential Improvements & Future Plans
          </h3>
          <ul className="text-gray-700 space-y-2 pl-0">
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaFilter className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Add advanced filtering (e.g., budget, location, lifestyle
                  preferences)
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaComments className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Implement real-time chat between potential roommates
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaShieldAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Include listing verification for trust and safety
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">
                  Integrate map-based search functionality
                </h1>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Action Buttons at the Bottom with Animation */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 w-full mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a
          href="https://roommatefinder-c4b08.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          <FaExternalLinkAlt className="w-5 h-5" />
          Live Demo
        </a>
        <a
          href="https://github.com/mdshakibsami/Roommate-Finder"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          <FaGithub className="w-5 h-5" />
          GitHub Repo
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsThree;
