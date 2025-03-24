"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full h-[70vh]  mx-auto px-12 py-4 flex-1 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2]">
              Hello, I&apos;m{" "}
            </span>
            <br className="hidden sm:block" /> {/* Line break for larger screens */}
            <TypeAnimation
              sequence={[
                "Manish",
                1000,
                "Software Developer II",
                1000,
                "3+ Years Experience",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            First, solve the problem. Then, write the code.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] hover:bg-slate-200 text-white transition-transform duration-200 hover:scale-105"
            >
              <span className="text-black hover:bg-slate-150"> Hire Me</span>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="rounded-full bg-gradient-to-tl from-[#15803d] via-[#115e59] to-[#164e63] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]
           relative overflow-hidden flex items-center justify-center sm:-mt-20 md:-mt-40 lg:-mt-50"> */}
         <div
  className={`rounded-full bg-gradient-to-tl from-[#15803d] via-[#115e59] to-[#164e63]
    w-[200px] h-[200px] /* Default square size for extra small screens */
    lg:w-[400px] lg:h-[400px]
    relative overflow-hidden flex items-center justify-center
    sm:-mt-20 md:-mt-10 lg:-mt-50
    shadow-2xl shadow-gray-900/50
    hover:scale-105 transition-transform duration-300 ease-in-out
    sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]
  `}
>
  <Image
    src="/images/dev.jpg"
    alt="hero image"
    className="w-full h-full object-cover"
    width={400}
    height={400}
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
