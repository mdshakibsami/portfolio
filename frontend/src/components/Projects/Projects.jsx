import React, { useState } from "react";
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
      <div className="max-w-6xl mx-auto">
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
          {/* First Project Card - Civic Pulse */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
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
                    <a
                      href="https://civicpulse-977ae.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      Live Link
                    </a>
                    <a
                      href="https://github.com/mdshakibsami/CivicPulse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Project Card - Roommate Finder */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
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
                    <a
                      href="https://roommatefinder-c4b08.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      Live Link
                    </a>
                    <a
                      href="https://github.com/mdshakibsami/Roommate-Finder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Project Card - Bill Manager */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
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
                    <a
                      href="https://billhub-709ee.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      Live Link
                    </a>
                    <a
                      href="https://github.com/mdshakibsami/Bill-Management"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
