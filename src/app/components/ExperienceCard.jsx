import React from "react";

const ExperienceCard = ({ title, company, duration, description, image }) => {
    return (
      <div className="relative group transition-transform duration-300 hover:scale-105">
        {/* Gradient border wrapper */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
  
        {/* Inner content */}
        <div className="relative z-10 rounded-xl overflow-hidden bg-[#181818]">
          {/* Image at the top */}
          <div className="h-52 md:h-60 rounded-t-xl overflow-hidden">
          <img
  src={image}
  alt={title}
  className="w-full h-full object-cover object-center"
/>

          </div>
  
          {/* Text content */}
          <div className="text-white rounded-b-xl py-6 px-4">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              {title}
            </h3>
            <p className="text-lg font-medium text-gray-300 mb-1">{company}</p>
            <p className="text-sm text-gray-500 mb-3">{duration}</p>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default ExperienceCard;
