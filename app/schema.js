export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Om Patil",

  url: "https://ompatilportfolio.vercel.app",

  image: "https://ompatilportfolio.vercel.app/og-image.png",

  sameAs: [
    "https://github.com/ommpatill",
    "https://www.linkedin.com/in/ompatill/",
    "https://leetcode.com/u/ommpatill/",
  ],

  jobTitle: [
    "Java Backend Developer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Engineer",
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
    "React.js",
    "Node.js",
    "SQL",
    "Kafka",
    "Microservices",
    "Backend Development",
    "Full Stack Development",
    "Machine Learning",
    "Spring AI",
  ],
};