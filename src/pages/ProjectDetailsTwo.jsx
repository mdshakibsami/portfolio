import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import civicHome from "../assets/civic/Civic_home.png";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaShareAlt,
  FaDatabase,
  FaCheckCircle,
  FaUserShield,
  FaBug,
  FaUserLock,
  FaChartPie,
  FaSyncAlt,
  FaSearch,
  FaBell,
  FaUserEdit,
  FaMobileAlt,
  FaEdit,
  FaTrophy,
  FaRobot,
  FaLayerGroup,
  FaSortAmountDown,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const ProjectDetailsTwo = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-11/12 mx-auto py-16 px-4">
      <div onClick={() => navigate("/")} className="my-2">
        <a  className="btn mr-4 md:mr-0 bg-black hover:text-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg text-sm sm:text-base ml-2 cursor-pointer">
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
          src={civicHome}
          alt="Civic Pulse"
          className="w-full rounded-2xl shadow-lg object-cover border-4 border-blue-400/60 hover:border-purple-500/80 transition-all duration-300"
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
        <h2 className="text-3xl font-bold mb-4">Civic Pulse</h2>
        <p className="text-lg text-gray-700 mb-4">
          Civic Pulse is a modern, user-friendly platform designed to connect
          communities through social impact events. It allows users to create,
          manage, and participate in various community-driven activities such as
          cleanups, plantations, and donation drives. The platform supports user
          authentication, event categorization, and advanced search
          capabilities, fostering engagement and collaboration. With responsive
          design and real-time feedback, CivicPulse empowers individuals and
          organizations to organize impactful events seamlessly.
        </p>
        <p className="text-lg text-gray-700 mb-2 font-semibold">
          Key Features:
        </p>
        <ul className="text-gray-700 space-y-2 pl-0">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Secure email/password authentication
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            User profile management
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Protected routes for authenticated users
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Create and manage community events with detailed info (title,
            description, location, date)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Event categorization (Cleanup, Plantation, Donation, Food Drive,
            etc.)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Search and filter events by title, location, or type
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Join events with a single click and view event details
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Dark/Light mode toggle
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Fully responsive design for all devices
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaCheckCircle />
            </span>
            Real-time updates and smooth transitions
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
            Challenges Faced During Development
          </h3>
          <ul className="text-gray-700 space-y-2 pl-0">
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserShield className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Authentication Flow with Firebase</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Implementing secure sign-up/login with proper route protection
                  and ensuring smooth redirects for authenticated users.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaSearch className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Dynamic Event Filtering & Search</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Creating a search and filter system that works efficiently
                  with event categories and location-based queries.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaMobileAlt className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Responsive & Accessible UI</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Ensuring the platform works flawlessly on mobile, tablet, and
                  desktop with a consistent dark/light mode experience.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaSyncAlt className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Real-time Feedback</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Managing instant updates for event joins, image uploads, and
                  notifications without breaking UI flow.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaEdit className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Image Upload Handling</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Implementing event thumbnail uploads in a user-friendly way
                  while managing file size and format constraints.
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
                <FaUserLock className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">User Roles & Permissions</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Introduce admin and moderator roles for better event approval
                  and management.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Map Integration</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Display event locations on an interactive map for better
                  navigation.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaBell className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Event Reminders</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Email or push notifications for upcoming events users have
                  joined.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaChartPie className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Advanced Analytics</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Track participation numbers, event success rates, and
                  community impact metrics.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaMobileAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Mobile App Version</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Create a React Native version for easier access and real-time
                  updates on the go.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaShareAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Social Media Integration</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Allow sharing events directly to platforms like Facebook,
                  Twitter, or WhatsApp.
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
          href="https://civicpulse-977ae.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          <FaExternalLinkAlt className="w-5 h-5" />
          Live Demo
        </a>
        <a
          href="https://github.com/mdshakibsami/CivicPulse"
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

export default ProjectDetailsTwo;
