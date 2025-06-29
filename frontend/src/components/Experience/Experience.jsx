import experiencePic from "../../assets/experience/experience.png";

const Experience = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Experience
            </h2>
            {/* Animated half underline */}
            <div className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse w-1/2"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 group">
            <div className="flex flex-col lg:flex-row items-stretch gap-8 h-full">
              {/* Company Logo Section */}
              <div className="lg:w-1/3 flex-shrink-0 flex flex-col justify-center">
                <div className="relative">
                  {/* Logo Container */}
                  <img
                    src={experiencePic}
                    className="w-full h-auto rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  ></img>
                  {/* Company Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-black text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    Current
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3 flex-1 flex flex-col justify-between">
                {/* Job Title & Company */}
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 ">
                    Frontend Web Developer
                  </h3>
                  <h4 className="text-xl text-gray-700 font-semibold mb-3">
                    NexoTech360
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                      <span>2025 - Present</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Developing modern web applications and creating
                    user-friendly interfaces with cutting-edge frontend
                    technologies.
                  </p>
                </div>

                {/* Skills/Technologies */}
                <div className="mb-6">
                  <h5 className="text-gray-800 font-semibold mb-3">
                    Key Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                      "TailwindCSS",
                      "Git",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full mt-auto">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/nexo-tech-360/posts/?feedView=all"
                    className="w-full hover:text-blue-500 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    View Company
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
