"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Spring Boot Framework</li>
        <li>Core Java</li>
        <li>Cassandra</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>gRPC</li>
        <li>Pub/Sub</li>
        <li>GCP</li>
        <li>JavaScript</li>
        <li>Reactjs</li>
        <li>Next.js Framework</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <h1>Bachelor Of Technology From Veer Surendra Sai University Of Technology Odisha</h1>
        </li>
      
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white px-6 py-12" id="about">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl mx-auto">
        
        {/* About Text Section */}
        <div className="md:w-1/2 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Backend-focused Spring Boot Developer (3+ years) with 1+ year of full-stack hands-on experience, 
          proficient in building high-performance Java applications, RESTful APIs, and gRPC services.
           Skilled in PostgreSQL, MySQL, Redis, and Cassandra. Experienced with GCP (Kubernetes, Cloud Run, Pub/Sub).
            Hands-on experience with React.js and Next.js, expanding into full-stack development. 
            Eager to contribute to innovative and scalable projects.
           Open to opportunities leveraging both backend expertise and emerging frontend capabilities.
          </p>
          {/* Tabs */}
          <div className="flex flex-row justify-start mt-6">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          {/* Tab Content */}
          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl w-[250px] h-[350px] md:w-[350px] md:h-[450px] 
            relative overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/images/edit.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
