import React from "react";
import profile from "../../assets/banner/profile.png";
import resume from "../../assets/resume/ShakibResume.pdf";
import { motion } from "framer-motion";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "ShakibResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="relative py-16 px-6 overflow-hidden"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            {/* Animated half underline */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse w-1/2"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <svg
                className="w-6 h-6 text-black mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800">Bio</h3>
            </div>
            <p className="text-gray-600 text-lg text-justify leading-relaxed mb-8">
              Computer Science and Engineering Student with a passion for
              creating innovative solutions. Specializing in full-stack
              development, I combine technical expertise with creative
              problem-solving to build user-centric applications. Always eager
              to learn new technologies and contribute to meaningful projects.
            </p>

            {/* Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Education Card */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-md border border-blue-400/20 rounded-xl p-4 shadow-md transition-all duration-300 cursor-pointer group min-h-[150px] flex flex-col justify-between hover:scale-105 hover:shadow-2xl hover:border-blue-500/60 hover:bg-gradient-to-br hover:from-blue-100/80 hover:to-purple-100/80 hover:ring-2 hover:ring-blue-400/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)",
                  borderColor: "#3b82f6",
                }}
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-black mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Education
                  </h4>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">
                    BSc in Computer Science and Engineering
                  </h5>
                  <p className="text-sm text-gray-600 mb-1">
                    Jatiya Kabi Kazi Nazrul Islam University (JKKNIU)
                  </p>
                  <p className="text-sm text-gray-500 mb-2">2022 - Present</p>
                </div>
              </motion.div>
              {/* Ambassador Card */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-md border border-purple-400/20 rounded-xl p-4 shadow-md transition-all duration-300 cursor-pointer group min-h-[150px] flex flex-col justify-between hover:scale-105 hover:shadow-2xl hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-100/80 hover:to-blue-100/80 hover:ring-2 hover:ring-purple-400/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(139,92,246,0.15)",
                  borderColor: "#a78bfa",
                }}
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-black mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L15.09,8.26L22,9L17,14L18.18,21L12,17.77L5.82,21L7,14L2,9L8.91,8.26L12,2Z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Ambassador
                  </h4>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">
                    ICT Olympiad Bangladesh
                  </h5>
                  <p className="text-sm mt-6 text-gray-600 mb-1">
                    I was an ambassador at the ICT Olympiad Bangladesh in 2024
                  </p>
                  <p className="text-sm mt-2 text-gray-500 mb-2">2024 - 2025</p>
                </div>
              </motion.div>

              {/* Executive Member Card */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-md border border-purple-400/20 rounded-xl p-4 shadow-md transition-all duration-300 cursor-pointer group min-h-[150px] flex flex-col justify-between hover:scale-105 hover:shadow-2xl hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-blue-100/80 hover:to-purple-100/80 hover:ring-2 hover:ring-purple-400/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(139,92,246,0.15)",
                  borderColor: "#a78bfa",
                }}
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-black mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5,5H19A1,1 0 0,1 20,6V18A1,1 0 0,1 19,19H5A1,1 0 0,1 4,18V6A1,1 0 0,1 5,5M12,2L14,9H10L12,2M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M17.5,10A1.5,1.5 0 0,1 19,11.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 16,11.5A1.5,1.5 0 0,1 17.5,10Z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Executive Member
                  </h4>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">
                    JKKNIU Cyber Security Club
                  </h5>
                  <p className="text-sm mt-6 text-gray-600 mb-1">
                    Event Management Secretary of JKKNIU Cyber Security Club
                  </p>
                  <p className="text-sm mt-2 text-gray-500 mb-2">
                    2025 - Present
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="lg:col-span-1">
            <motion.div
              className="relative bg-white/90 backdrop-blur-md border-2 border-blue-400/30 rounded-2xl p-8 shadow-2xl text-center sticky top-8 transition-all duration-300 group hover:border-blue-500/70 hover:shadow-blue-200/40 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
                borderColor: "#3b82f6",
              }}
            >
              <div className="relative mb-6">
                <img
                  src={profile}
                  alt="Md Shakib"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-black"
                />
                <div className="absolute -top-2 -right-2 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                  3.59 CGPA
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Md Shakib
              </h3>
              <p className="text-gray-600 mb-4">
                Computer Science and Engineering Student
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Student
                </span>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Ambassador
                </span>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Executive
                </span>
              </div>

              <button
                onClick={handleDownloadResume}
                className="w-full bg-black hover:text-blue-500 text-white py-3 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20ZM12 11.5L9.5 14L11 15.5L12 16.5L13 15.5L14.5 14L12 11.5ZM12 13.5L10.5 15L12 16.5L13.5 15L12 13.5Z" />
                </svg>
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
