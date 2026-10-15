import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import threadHome from "../assets/ThreadUp/ThreadUp_Home.png";
import { motion } from "framer-motion";
import {
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

const ProjectDetailsOne = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-11/12 mx-auto py-16 px-4">
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
          src={threadHome}
          alt="Thread Up"
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
        <h2 className="text-3xl font-bold mb-4">Thread Up</h2>
        <p className="text-lg text-gray-700 mb-4">
          ThreadUp is a full-stack forum-style web application where users can
          share posts, interact with other members through comments,
          upvotes/downvotes, and follow discussions based on tags. It includes
          authentication, a membership system with role-based permissions,
          real-time announcements, and separate dashboards for users and admins.
        </p>
        <p className="text-lg text-gray-700 mb-2 font-semibold">
          Key features include:
        </p>
        <ul className="text-gray-700 space-y-2 pl-0">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            User authentication (email/password + social login) using
            react-hook-form.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Membership system with Bronze and Gold badges.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Post management with tags, sorting, pagination, and search (backend
            implemented).
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Comment system with reporting and feedback flow.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Admin panel for managing users, handling reported comments, and
            making announcements.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Dynamic post popularity calculation (Upvote – Downvote).
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Protected routes with JWT authentication.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
            Responsive design for mobile and desktop.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          ThreadUp is essentially a community engagement platform that combines
          social interaction, content curation, and moderation in a single,
          well-structured application.
        </p>
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
            Challenges Faced While Developing
          </h3>
          <ul className="text-gray-700 space-y-2 pl-0">
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaLayerGroup className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Complex State Management</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Handling votes, comment counts, and announcements across
                  multiple components while ensuring real-time updates was
                  tricky.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaDatabase className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Backend Search and Filtering</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Implementing server-side search for posts and users, along
                  with popularity sorting via MongoDB aggregation pipelines,
                  required careful query optimization.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserShield className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Role-Based Access Control</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Designing separate dashboards for users and admins while
                  keeping routes secure with JWT and protecting sensitive
                  operations.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaBug className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Comment Reporting Workflow</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Ensuring that the "Report" button activation logic (based on
                  selected feedback) worked correctly without bugs.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserLock className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Membership Limitation Logic</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Dynamically restricting normal users to 5 posts while allowing
                  Gold members unlimited posting.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaSortAmountDown className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Pagination + Sorting Integration</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Combining pagination with sorting and search in a way that
                  worked seamlessly without breaking query results.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaChartPie className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Admin Analytics</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Creating a pie chart dashboard with posts, comments, and user
                  statistics required aggregating data from multiple
                  collections.
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
                <FaSyncAlt className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Real-Time Updates (WebSockets)</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Use Socket.io or similar for live updates on votes, comments,
                  and announcements without page reload.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaSearch className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Advanced Search & Filtering</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Add multi-tag search, date filters, and advanced sorting
                  options for better content discovery.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaBell className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Notification System</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Push notifications for new comments, replies, or announcements
                  to increase engagement.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaUserEdit className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Profile Customization</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Allow users to customize profile pages with bios, cover
                  photos, and social links.
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
                  Develop a React Native version to make ThreadUp more
                  accessible on mobile devices.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaEdit className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Rich Text Editor for Posts</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Enable Markdown or WYSIWYG editor for better post formatting.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaTrophy className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Gamification Features</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Add points, ranks, and leaderboards to encourage active
                  participation.
                </h1>
              </div>
            </li>
            <li className="flex flex-col items-start gap-1">
              <div className="flex gap-2 items-center">
                <FaRobot className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <h1 className="font-bold">Content Moderation AI</h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-sm ml-7 text-justify block">
                  Implement AI-based content moderation to automatically flag
                  inappropriate posts or comments.
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
          href="https://threadup-305c8.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          <FaExternalLinkAlt className="w-5 h-5" />
          Live Demo
        </a>
        <a
          href="#"
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

export default ProjectDetailsOne;
