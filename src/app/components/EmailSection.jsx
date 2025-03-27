"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail.svg";


import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  
  const handleConfirm = (url) => {
    if (confirm("Are you sure you want to visit this profile?")) {
      window.open(url, "_blank");
    }
  };
  return (
    <section
      id="contact"
    >
     <footer className="bg-[#181818] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section: Contact Info */}
        <div>
          <h5 className="text-2xl font-bold">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mt-2">
          I&apos;m currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to respond!
          </p>
        </div>

        {/* Right Section: Contact Links */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <button 
            onClick={() => handleConfirm("https://mail.google.com/mail/u/0/#inbox?compose=new")} 
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <Image src={GmailIcon} alt="Gmail" width={30} height={30} />
            <span className="text-lg">manishkerketta22@example.com</span>
          </button>

          {/* LinkedIn */}
          <button 
            onClick={() => handleConfirm("https://www.linkedin.com/in/manish-kerketta-b91902222/")} 
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <Image src={LinkedinIcon} alt="LinkedIn" width={30} height={30} />
            <span className="text-lg">Connect with me on LinkedIn</span>
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Manish Kerketta. All Rights Reserved.
      </div>
    </footer>
     
    </section>
  );
};

export default EmailSection;
