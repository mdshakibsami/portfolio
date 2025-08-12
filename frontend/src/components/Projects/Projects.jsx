import React, { useState } from "react";
import { motion } from "framer-motion";
import civic1 from "../../assets/civic/1000.png";
import civic2 from "../../assets/civic/1002.png";
import civic3 from "../../assets/civic/1003.png";

import roommate1 from "../../assets/roommate/2000.png";
import roommate2 from "../../assets/roommate/2001.png";
import roommate3 from "../../assets/roommate/2002.png";

import bill1 from "../../assets/bill/3000.png";
import bill2 from "../../assets/bill/3001.png";
import bill3 from "../../assets/bill/3002.png";

const Projects = () => {
  // State for image sliders - separate state for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  // Project images
  const projectImages = [civic1, civic2, civic3];
  const projectImages2 = [roommate1, roommate2, roommate3];
  const projectImages3 = [bill1, bill2, bill3];

  // Navigation functions for first project
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  // Navigation functions for second project
  const nextImage2 = () => {
    setCurrentImageIndex2((prev) => (prev + 1) % projectImages2.length);
  };

  const prevImage2 = () => {
    setCurrentImageIndex2((prev) =>
      prev === 0 ? projectImages2.length - 1 : prev - 1
    );
  };

  // Navigation functions for third project
  const nextImage3 = () => {
    setCurrentImageIndex3((prev) => (prev + 1) % projectImages3.length);
  };

  const prevImage3 = () => {
    setCurrentImageIndex3((prev) =>
      prev === 0 ? projectImages3.length - 1 : prev - 1
    );
  };
  return (
    <div id="projects" className="bg-white py-20 px-6">
      <div className="max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            {/* Animated half underline */}
            <div className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse w-1/2"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </div>
        {/* Project Cards */}
        <div className="space-y-16">
          {/* First Project Card - Bill Manager */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative bg-white/70 backdrop-blur-lg border-2 border-blue-400/30 hover:border-blue-600/60 rounded-3xl p-10 shadow-2xl hover:shadow-blue-200 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
              {/* Image Slider Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={projectImages3[currentImageIndex3]}
                      alt={`Bill Manager screenshot ${currentImageIndex3 + 1}`}
                      className="w-full h-64 lg:h-80  transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage3}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage3}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {projectImages3.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex3(imgIndex)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex3 === imgIndex
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Project Details Section */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Project Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Bill Manager
                  </h3>
                  {/* Project Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A comprehensive bill management system that helps users
                    track, organize, and manage their financial obligations with
                    automated reminders and insightful analytics.
                  </p>
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Project Card - Civic Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative bg-white/70 backdrop-blur-lg border-2 border-purple-400/30 hover:border-purple-600/60 rounded-3xl p-10 shadow-2xl hover:shadow-purple-200 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-purple-100/30 via-blue-100/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
              {/* Project Details Section */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Project Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Civic Pulse
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A comprehensive civic engagement platform that demonstrates
                    modern development practices and user-centered design
                    principles with beautiful UI and seamless user experience.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Project Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Slider Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={projectImages[currentImageIndex]}
                      alt={`Civic Pulse screenshot ${currentImageIndex + 1}`}
                      className="w-full h-64 lg:h-80  transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {projectImages.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(imgIndex)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex === imgIndex
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Project Card - Roommate Finder */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="relative bg-white/70 backdrop-blur-lg border-2 border-pink-400/30 hover:border-pink-600/60 rounded-3xl p-10 shadow-2xl hover:shadow-pink-200 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-pink-100/30 via-blue-100/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
              {/* Image Slider Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={projectImages2[currentImageIndex2]}
                      alt={`Roommate Finder screenshot ${
                        currentImageIndex2 + 1
                      }`}
                      className="w-full h-64 lg:h-80  transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage2}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage2}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {projectImages2.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex2(imgIndex)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex2 === imgIndex
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Project Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Roommate Finder
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A comprehensive roommate matching platform that helps users
                    find compatible living partners with advanced filtering and
                    matching algorithms for the perfect living experience.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
