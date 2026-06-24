export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Om Patil",

  url: "https://ompatilportfolio.vercel.app",

  image: "https://ompatilportfolio.vercel.app/og-image.png",

  description:
    "Java Backend Developer specializing in Spring Boot, REST APIs, scalable backend systems, SQL, and full stack application development.",

  sameAs: [
    "https://github.com/ommpatill",
    "https://www.linkedin.com/in/ompatill/",
    "https://leetcode.com/u/ommpatill/",
  ],

  jobTitle: [
    "Java Backend Developer",
    "Software Developer",
    "Backend Engineer",
    "Spring Boot Developer",
    "Full Stack Developer",
  ],

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vishwakarma Institute of Information Technology",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "India",
  },

  knowsAbout: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Backend Development",
    "Backend Engineering",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Microservices",
    "System Design",
    "Hibernate",
    "JPA",
    "React.js",
    "Node.js",
    "Full Stack Development",
    "Machine Learning",
    "Spring AI",
  ],

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ompatilportfolio.vercel.app",
  },

  hasPart: [
    {
      "@type": "WebPage",
      name: "Projects",
      url: "https://ompatilportfolio.vercel.app/projects",
    },
    {
      "@type": "WebPage",
      name: "Certifications",
      url: "https://ompatilportfolio.vercel.app/certifications",
    },
    {
      "@type": "WebPage",
      name: "Resume",
      url: "https://ompatilportfolio.vercel.app/resume",
    },
  ],
};