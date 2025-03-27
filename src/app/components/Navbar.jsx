"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-black/80 shadow-lg" : "bg-transparent"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-md shadow-lg">
            <img src="/portfolio.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className="text-white font-medium hover:text-gray-300 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 py-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300"
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
