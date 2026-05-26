"use client";

import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

// Skills are arranged to highlight backend engineering strengths first,
// followed by databases, tooling, AI workflow exposure, and frontend support.

const skillsData = {
  Backend: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate with JPA",
    "Kafka",
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "H2",
  ],

  "Tools & DevOps": [
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Maven",
    "Gradle",
    "Jenkins",
    "AWS",
    "IntelliJ IDEA",
    "VS Code",
    "JIRA",
  ],

  Engineering: [
    "API Design",
    "System Design Basics",
    "Authentication",
    "Query Optimization",
    "OOP",
    "DSA",
    "Agile",
    "CRUD",
  ],

  "AI Workflow": [
    "Spring AI",
    "LLM APIs",
    "RAG",
    "Prompt Engineering",
    "Vector Databases",
  ],

  "Frontend & Full Stack": [
    "ReactJS",
    "Node.js",
    "Express.js",
    "Redux",
    "Flask",
    "AJAX",
  ],

  Languages: [
    "Python",
    "JavaScript",
    "SQL",
    "C++",
    "C",
    "HTML5",
    "CSS3",
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <div
      id="skills"
      className="w-full px-4 sm:px-[12%] py-10 lg:py-20 scroll-mt-12 lg:scroll-mt-10 min-h-screen"
    >
      <SectionHeading subheading="My Core Competencies">
        Technical Arsenal
      </SectionHeading>

      <p className="text-center max-w-2xl mx-auto mb-8 font-Ovo leading-relaxed text-gray-700 dark:text-gray-300">
        Focused on Java backend development, Spring Boot, REST APIs,
        scalable systems, databases, and modern full-stack engineering.
      </p>

      {/* Tabs */}
      <div className="w-full overflow-x-auto pb-4 mb-8">
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 border-b border-gray-200 dark:border-white/10 min-w-max">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-300 relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-auto gap-4 max-w-6xl mx-auto">
        {skillsData[activeTab].map((skill) => (
          <div
            key={skill}
            className="group relative flex items-center justify-center p-4 h-24 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.05] hover:-translate-y-1"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br from-purple-400 to-pink-400"></div>

            <p className="font-semibold text-gray-800 dark:text-white z-10 text-center text-sm md:text-base">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;