import React from "react";
import profile from "../../assets/banner/profile.png";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
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
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
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
              </div>
              {/* Ambassador Card */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
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
              </div>

              {/* Executive Member Card */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
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
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center sticky top-8">
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

              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20ZM12 11.5L9.5 14L11 15.5L12 16.5L13 15.5L14.5 14L12 11.5ZM12 13.5L10.5 15L12 16.5L13.5 15L12 13.5Z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
