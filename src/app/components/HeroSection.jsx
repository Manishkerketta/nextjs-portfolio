"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {

  const handleDownloadClick = (event) => {
    event.preventDefault(); // Prevent default navigation

    const userConfirmed = window.confirm("Do you want to download the CV?");
    if (userConfirmed) {
      window.location.href = "https://drive.google.com/your-cv-link"; // Replace with your actual CV link
    }
  };
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-6 sm:px-12 lg:px-24"
      style={{
        backgroundImage: "url('/images/remote.jpg')", // Replace with your image path
      }}
    >
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative  text-center text-white w-full max-w-4xl mt-[-5vh] sm:mt-[-8vh] lg:mt-[-30vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] ">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Manish", 1000, "Software Developer II", 1000, "3+ Years Experience", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md:text-xl mt-8">
            First, solve the problem. Then, write the code.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] text-black font-bold transition-transform duration-200 hover:scale-105"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              onClick={handleDownloadClick}
              className="px-6 py-3 rounded-full bg-[#121212] text-white font-bold transition-transform duration-200 hover:scale-105"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;



