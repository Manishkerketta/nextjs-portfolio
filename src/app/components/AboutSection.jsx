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
        <li>Springb-Boot Framework</li>
        <li>Core-Java</li>
        <li>Cassandra</li>
        <li>MongoDb</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>Grpc</li>
        <li>Pub/sub</li>
        <li>GCP</li>
        <li>JavaScript(Basics)</li>
        <li>Next-Js Framework</li>
      
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Fullstack Deve</li> */}
        <li>Veer Surendra Sai University Of Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>AWS Cloud Practitioner</li> */}
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
         <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#6366f1] via-[#4f46e5] to-[#4338ca] rounded-xl w-[250px] h-[250px] lg:w-[350px] lg:h-[450px]
                   relative overflow-hidden flex items-center justify-center sm:-mt-20 md:-mt-40 lg:-mt-50 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image
                      src="/images/myimage3.png"
                      alt="hero image"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Backend-focused Spring Boot Developer (3+ years) proficient in building high-performance Java applications,
           RESTful APIs, and gRPC services. Expertise in PostgreSQL, MySQL, Redis, and Cassandra.
            Experienced with GCP (Kubernetes, Cloud Run, Pub/Sub).
             Actively learning React Native and Next.js for full-stack capabilities.
              Eager to contribute to innovative and scalable projects.
               Open to opportunities leveraging backend and emerging frontend skills.
               {/* bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
