import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg bg-[#181818] relative cursor-pointer transition-all duration-500 hover:bg-opacity-80">
      {/* Hover Effect on Full Container */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500"></div>

      {/* Landscape Image Container */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text Content (Also Responsive to Hover) */}
      <div className="p-4 text-center relative  transition-all duration-500 group-hover:text-gray-300">
        <h5 className="text-xl font-semibold text-white">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

    
    </div>
  );
};

export default ProjectCard;
