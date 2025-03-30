"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AEPS Microservices Backend",
    description:
      "At iServeU, a product-based company, I developed a robust and scalable microservices backend architecture using Spring Boot from inception to deployment. This system was designed to handle heavy traffic for various AEPS (Aadhaar Enabled Payment System) transactions ,mainly used by customers in rural areas who don’t have debit cards or smartphones., it includes balance enquiry, cash withdrawal, cash deposit, and mini-statements. I also added two-factor authentication (2FA) for extra security. The system can easily handle 2 million requests and even more because it's set up with Kubernetes, which automatically adjusts the system's capacity based on how many people are using it at any time. This makes sure it's always fast and reliable, even during peak hours.",
    image: "/aepsimg.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Aadhaar Pay Microservices Backend",
    description:
      "At iServeU,I also developed a robust and scalable microservices backend architecture using Spring Boot for **Aadhaar Pay**. This system was designed to handle heavy traffic for enabling merchants to accept payments directly from customers using their Aadhaar. **Aadhaar Pay** works via a merchant’s mobile app linked to a bank account, with authentication secured through Aadhaar number and fingerprint. The supported transaction within **Aadhaar Pay** is primarily payment to merchants, excluding cash withdrawal or deposit functionalities. My contributions spanned the entire development lifecycle, ensuring a high-performing and resilient solution for **Aadhaar Pay**.",
    image: "/ap1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "My Portfolio Website",
    description:
      "I have developed and deployed my personal portfolio website, https://manishkerketta.in, using Next.js for the frontend. The website showcases my skills, projects, and experience. For a streamlined development and deployment process, I utilized Docker for containerization. Furthermore, I implemented a robust CI/CD pipeline using GitHub Actions to automate builds and deployments. I also purchased a custom domain and connected it with my Virtual Private Server (VPS), where Nginx is configured to serve the website.",
    image: "/cv.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 11,
    title: "Gym Book",
    description:
      "Developed a web application, 'Gym Book,' designed for gym owners to efficiently manage their gym and clients. The platform allows gym owners to securely log in and track real-time member presence. Key features include the ability to record and view personalized daily calorie recommendations for clients, manage and view individual workout splits, and monitor subscription statuses to identify expiring memberships. This tracking website streamlines gym operations and enhances client management.",
    image: "/gymbook.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Spring Boot Framework",
    description: "Proficient in building robust Java applications with Spring Boot, leveraging key features like Spring Security for authentication (including JWT), Spring Data JPA for seamless database interaction, and Spring Cloud components for building distributed systems. Experienced in rapid development through auto-configuration and dependency management, creating RESTful APIs, and managing application configuration across different environments..",
    image: "/spring.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Grpc Technology",
    description: "Experienced in leveraging gRPC, a modern, high-performance Remote Procedure Call (RPC) framework, to build efficient and scalable microservices and distributed systems. My understanding includes defining service contracts using Protocol Buffers (protobuf), generating client and server stubs for java programming language, and implementing bidirectional streaming, unary, and server/client streaming RPC methods.Its a versatile choice for building polyglot architectures.",
    image: "/grpc2.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pub/Sub Technology",
    description: "Experienced in designing and implementing asynchronous communication patterns using Publish/Subscribe (Pub/Sub) messaging systems. My understanding encompasses the core concepts of topics, subscriptions, and messages, enabling the decoupling of services and enhancing the scalability and resilience of distributed architectures. I have utilized Pub/Sub for event-driven communication, real-time data streaming, and reliable message delivery between independent components. Familiar with the benefits of Pub/Sub, including increased fault tolerance, improved performance through asynchronous processing, and the ability to support many-to-many communication without direct dependencies between publishers and subscribers.",
    image: "/pubsub.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Databases",
    description: "Experienced in working with a variety of database technologies to meet diverse application needs. This includes *CASSANDRA:* Proficient in utilizing Cassandra, a highly scalable NoSQL distributed database, for handling large volumes of data with high availability and fault tolerance. Experienced with its schema-less nature and key-value/column-family data model.**POSTGRESSQL:** Skilled in using PostgreSQL, a powerful and open-source relational database, known for its ACID compliance, extensibility, and robust feature set. Experienced in schema design, complex queries, and data integrity management.**MONGODB:** Adept at leveraging MongoDB, a flexible NoSQL document database, for applications requiring dynamic schemas and horizontal scalability. Familiar with its JSON-like document structure and ease of development.**REDIS:** Experienced in utilizing Redis, an in-memory data structure store, for caching, session management, and real-time data applications, leveraging its speed and key-value model.",
    image: "/db.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Next-Js Framework ",
    description: "Gaining experience with the Next.js framework for building modern web applications with React. Notably, **this very portfolio website is built using Next.js**, showcasing my ability to apply its core concepts such as server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO. I am familiar with setting up Next.js projects, creating pages and components, and handling routing. I have explored data fetching strategies like `getServerSideProps`, `getStaticProps`, and client-side fetching. Additionally, I have begun working with API routes for building backend functionality directly within the Next.js application. While still developing my expertise, I am actively learning and applying Next.js to build interactive and performant web experiences.",
    image: "/nextjs.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Google Cloud Platform ",
    description: "Experienced in leveraging Google Cloud Platform (GCP) to build, deploy, and manage scalable and reliable cloud-based applications and infrastructure. My understanding encompasses various GCP services, including Compute Engine for virtual machines, Cloud Storage for object storage, App Engine for serverless application deployment, Kubernetes Engine (GKE) for container orchestration, Cloud Functions for event-driven serverless code, and Cloud SQL/Cloud Spanner for managed database services. I am familiar with core GCP concepts such as Projects, Zones, Regions, and IAM for access control and security. I have utilized GCP for tasks ranging from deploying web applications and APIs to managing data storage and implementing CI/CD pipelines. My experience includes understanding cost management, monitoring using Cloud Monitoring, and ensuring the scalability and high availability of applications deployed on GCP.",
    image: "/gcp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Git and CI/CD",
    description: "Proficient in using Git for version control, including branching strategies, merging, and resolving conflicts to facilitate collaborative software development. Experienced with platforms like GitHub, GitLab, and Bitbucket for repository management and team workflows. My understanding extends to implementing Continuous Integration/Continuous Deployment (CI/CD) pipelines using tools such as Jenkins, GitLab CI, GitHub Actions, or similar. I have designed and configured automated build, test, and deployment processes to ensure rapid and reliable software delivery, improving code quality and reducing manual effort.",
    image: "/git.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "JIRA",
    description: "Experienced in utilizing JIRA, a powerful issue tracking and project management tool, to streamline software development workflows. My proficiency includes creating and managing projects, configuring workflows, creating and assigning issues (including bugs, tasks, and stories), and effectively using JIRA's search and filtering capabilities to track progress. I am familiar with Agile methodologies within JIRA, such as setting up and managing Scrum and Kanban boards, planning sprints, and generating reports (e.g., burndown charts, velocity charts) to monitor team performance and project status. I have also used JIRA for collaboration, communication, and maintaining a clear overview of project requirements and deliverables.",
    image: "/jira.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 px-4 max-w-screen-lg mx-auto">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        Skills & Projects
      </h2>

      {/* Tag Filter Section */}
     

      {/* Projects Grid */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
