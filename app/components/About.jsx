"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import {
  Code,
  Bot,
  X,
  Server,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const expertiseDetails = {
  "Backend Dev": {
    title: "Backend Development",
    icon: Server,
    points: [
      "Building scalable RESTful APIs and backend services using Java and Spring Boot.",
      "Designing efficient SQL and NoSQL database structures focused on performance and maintainability.",
      "Applying Object-Oriented Programming principles to create clean and scalable backend systems.",
      "Optimizing backend workflows and database queries for faster execution and improved efficiency.",
    ],
  },

  "Full-Stack": {
    title: "Full-Stack Solutions",
    icon: Code,
    points: [
      "Developing responsive React.js frontends connected with scalable backend services.",
      "Managing frontend-backend communication through REST APIs and real-time workflows.",
      "Building full stack applications using React.js, Node.js, Express.js, and databases.",
      "Deploying and maintaining modern web applications with responsive user experiences.",
    ],
  },

  ML: {
    title: "Machine Learning",
    icon: Bot,
    points: [
      "Building predictive machine learning solutions using Python, Pandas, and Scikit-Learn.",
      "Training and evaluating ML models with strong focus on accuracy and optimization.",
      "Improving model performance through tuning, validation, and preprocessing techniques.",
      "Integrating machine learning workflows into responsive full stack applications.",
    ],
  },
};

const About = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  return (
    <>
      <section
        id="about"
        className="w-full px-4 sm:px-[12%] py-10 scroll-mt-12 lg:scroll-mt-20"
      >
        <SectionHeading subheading="My Story">
          About Me
        </SectionHeading>

        <div className="flex flex-col gap-10">
          {/* Top Row: Story and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-4 text-base md:text-lg font-Ovo text-gray-700 dark:text-gray-300 text-center lg:text-left">
                <p>
                  Growing up in the town of Pen, Maharashtra, my journey into
                  technology began with a simple line of Java code:
                  <code> System.out.println("Hello, World!");</code>.
                  Watching those words appear on the screen sparked a deep
                  curiosity about how software systems work behind the scenes.
                  What started as curiosity slowly turned into a strong passion
                  for backend development, problem solving, and building
                  scalable applications.
                </p>

                <p>
                  That curiosity took me from diploma studies in Information
                  Technology to pursuing my B.Tech while continuously building
                  real-world projects across backend engineering, full stack
                  development, machine learning, and modern web technologies.
                  Today, my primary focus is on Java, Spring Boot, REST APIs,
                  databases, and scalable backend systems. I enjoy turning
                  complex ideas into clean, efficient, and user-focused software
                  solutions while continuously improving my engineering skills
                  through hands-on development and practical problem solving.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 row-start-1 lg:row-start-auto self-stretch">
              <div className="w-full h-full min-h-[350px] relative rounded-2xl overflow-hidden shadow-xl dark:shadow-purple-900/20">
                <Image
                  src={assets.user_image}
                  alt="Om Patil - Java Backend Developer"
                  fill
                  className="rounded-2xl object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: Expertise and Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold font-Ovo mb-4 text-center lg:text-left">
                Domain Expertise
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <ExpertiseCard
                  Icon={Server}
                  title="Backend Dev"
                  onClick={() => setSelectedExpertise("Backend Dev")}
                />

                <ExpertiseCard
                  Icon={Code}
                  title="Full-Stack"
                  onClick={() => setSelectedExpertise("Full-Stack")}
                />

                <ExpertiseCard
                  Icon={Bot}
                  title="ML"
                  onClick={() => setSelectedExpertise("ML")}
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold font-Ovo mb-4 text-center lg:text-left">
                My Info
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <CredentialCard
                  Icon={GraduationCap}
                  title="Status"
                  text="B.Tech IT Student"
                />

                <CredentialCard
                  Icon={Briefcase}
                  title="Experience"
                  text="Full Stack Intern"
                />

                <CredentialCard
                  Icon={MapPin}
                  title="Location"
                  text="Pune, India"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedExpertise && (
        <ExpertiseModal
          details={expertiseDetails[selectedExpertise]}
          onClose={() => setSelectedExpertise(null)}
        />
      )}
    </>
  );
};

const ExpertiseCard = ({ Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full h-24 text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 rounded-xl bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <Icon className="w-8 h-8 text-purple-500 mb-1" />

        <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
          {title}
        </h3>
      </div>
    </button>
  );
};

const CredentialCard = ({ Icon, title, text }) => {
  return (
    <div className="group relative bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-1 w-full h-24 text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-xl bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <Icon className="w-7 h-7 text-purple-500 mb-2" />

        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {title}
        </h3>

        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
          {text}
        </p>
      </div>
    </div>
  );
};

const ExpertiseModal = ({ details, onClose }) => {
  const { title, icon: Icon, points } = details;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-2xl shadow-xl w-full max-w-md p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <Icon className="w-10 h-10 text-purple-500" />
          <h2 className="text-2xl font-bold font-Ovo">{title}</h2>
        </div>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">&#10003;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;