import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";
import notFound from "../assets/notFound/notFound.svg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Banner-inspired background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/40 via-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/30 via-blue-400/20 to-transparent rounded-full blur-2xl animate-blob" />
        <svg
          className="absolute bottom-0 left-0 w-full h-40 opacity-30"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6366f1"
            fillOpacity="0.3"
            d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center max-w-2xl w-full p-8 bg-white/95 rounded-2xl shadow-2xl border border-blue-100 z-10">
        <img
          src={notFound}
          alt="Not Found Illustration"
          className="w-60 max-w-full h-auto object-contain mb-8 drop-shadow-xl animate-fade-in"
        />
        <h1 className="text-6xl sm:text-7xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 text-center text-base sm:text-lg leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 bg-black text-white px-7 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-800 transition-all duration-200 border-none w-full max-w-xs mx-auto"
        >
          <FaHome className="w-5 h-5" />
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
