import React, { useEffect, useRef, useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoMdGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const Technologies = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  // Add custom CSS animation
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes expandLine {
        0% {
          width: 0%;
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          width: 50%;
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          } else {
            // Reset animation when section leaves viewport
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const techSections = [
    {
      title: "LANGUAGES",
      technologies: [
        { name: "JavaScript", emoji: <IoLogoJavascript />, color: "#F7DF1E" },
        { name: "Python", emoji: <FaPython />, color: "#3776AB" },
        { name: "Java", emoji: <RiJavaLine />, color: "#ED8B00" },
        { name: "C", emoji: "C", color: "#00599C" },
        { name: "C++", emoji: <TbBrandCpp />, color: "#00599C" },
      ],
    },
    {
      title: "FRONTEND",
      technologies: [
        { name: "HTML5", emoji: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", emoji: <FaCss3 />, color: "#1572B6" },
        { name: "TailwindCSS", emoji: <RiTailwindCssFill />, color: "#06B6D4" },
        { name: "React", emoji: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", emoji: <RiNextjsFill />, color: "#000000" },
      ],
    },
    {
      title: "BACKEND",
      technologies: [
        { name: "Node.js", emoji: <RiNodejsLine />, color: "#339933" },
        { name: "Express.js", emoji: <SiExpress />, color: "#000000" },
        { name: "Strapi", emoji: <SiStrapi />, color: "#2F2E8B" },
      ],
    },
    {
      title: "DATABASE",
      technologies: [
        { name: "MongoDB", emoji: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      title: "TOOLS",
      technologies: [
        { name: "Git", emoji: <IoMdGitMerge />, color: "#F05032" },
        { name: "GitHub", emoji: <FaGithub />, color: "#181717" },
        { name: "Firebase", emoji: <SiFirebase />, color: "#FFCA28" },
        { name: "JWT", emoji: <SiJsonwebtokens />, color: "#000000" },
        { name: "Postman", emoji: <SiPostman />, color: "#FF6C37" },
        { name: "VS Code", emoji: <VscVscodeInsiders />, color: "#007ACC" },
      ],
    },
  ];

  return (
    <div id="skills" className="bg-white py-20 px-6">
      <div className="max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Skills
            </h2>
            {/* Animated half underline */}
            <div className="absolute bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-[expandLine_2s_ease-out_forwards] shadow-lg"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Tech Sections */}
        <div className="space-y-20">
          {techSections.map((section) => (
            <div
              key={section.title}
              ref={(el) => (sectionRefs.current[section.title] = el)}
              data-section={section.title}
              className="flex flex-col lg:flex-row sm:items-start gap-12  items-center"
            >
              {/* Section Title */}
              <div className="lg:w-1/3 flex-shrink-0">
                <h3 className="text-5xl lg:text-6xl font-bold text-gray-200 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center ">
                {section.technologies.map((tech, techIndex) => {
                  return (
                    <div
                      key={tech.name}
                      className={`group relative transform transition-all duration-700 hover:scale-105 cursor-pointer   w-full max-w-sm ${
                        visibleSections[section.title]
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visibleSections[section.title]
                          ? `${techIndex * 100}ms`
                          : "0ms",
                      }}
                    >
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-white to-gray-50 border  border-gray-100 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-gray-200 group-hover:scale-[1.02] backdrop-blur-sm">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Icon and Text Container */}
                        <div className="relative flex items-center gap-4">
                          {/* Icon */}
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 flex-shrink-0 shadow-md"
                            style={{
                              background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                              border: `2px solid ${tech.color}40`,
                              boxShadow: `0 4px 15px ${tech.color}25`,
                            }}
                          >
                            <span
                              className="text-2xl drop-shadow-sm"
                              style={{ color: tech.color }}
                            >
                              {tech.emoji}
                            </span>
                          </div>

                          {/* Tech Name */}
                          <div className="flex-1">
                            <h4 className="text-gray-800 font-bold text-lg leading-tight group-hover:text-gray-900 transition-colors duration-300">
                              {tech.name}
                            </h4>
                            <div className="h-0.5 w-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:w-full group-hover:opacity-60 transition-all duration-500 mt-1"></div>
                          </div>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      </div>

                      {/* Enhanced Hover Effect Background */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500 -z-20 blur-xl"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)`,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
