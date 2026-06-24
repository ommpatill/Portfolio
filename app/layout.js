import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Cursor from "./components/Cursor";
import { personSchema } from "./schema";
import ScrollToTop from "./components/ScrollToTop";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://ompatilportfolio.vercel.app"),

  title: {
    default:
      "Om Patil | Java Backend Developer | Spring Boot Developer",
    template: "%s | Om Patil Portfolio",
  },

  description:
    "Portfolio of Om Patil, a Java Backend Developer focused on Spring Boot, REST APIs, scalable backend systems, SQL, React, and Node.js. Explore software engineering projects, experience, certifications, and full stack development work.",

  keywords: [
    "Om Patil",
    "Om Patil Portfolio",
    "Om",
    "Java",
    "Java Backend Developer",
    "Spring Boot",
    "REST APIs",
    "SQL",
    "React",
    "Node.js",
    "Software Developer Portfolio",
    "Full Stack Developer",
    "Software Developer",
    "Backend Engineer",
    "Java Developer Portfolio",
    "Spring Boot Developer",
    "React Developer",
    "Application Developer",
    "Software Engineer",
    "Java Full Stack Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "Microservices",
    "Spring MVC",
    "Hibernate",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Machine Learning",
    "Java Portfolio",
    "Developer Portfolio",
    "Portfolio Website",
    "India",
    "Mumbai",
    "Pune",
    "Candidate",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Om Patil | Java Backend Developer | Spring Boot Developer",

    description:
      "Explore the portfolio of Om Patil featuring Java, Spring Boot, backend engineering, REST APIs, full stack applications, and software development projects.",

    url: "/",

    siteName: "Om Patil Portfolio",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Om Patil Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Om Patil | Java Backend Developer | Spring Boot Developer",

    description:
      "Portfolio showcasing Java backend development, Spring Boot projects, REST APIs, scalable systems, and full stack engineering work.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  authors: [{ name: "Om Patil" }],

  creator: "Om Patil",

  publisher: "Om Patil",

  applicationName: "Om Patil Portfolio",

  category: "Technology",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <ThemeProvider>
          <Cursor />
          <ScrollToTop/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}