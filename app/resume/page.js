import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiDownload,
  FiExternalLink,
  FiChevronDown,
} from "react-icons/fi";

import Footer from "../components/Footer";
import PagesHeader from "../components/PagesHeader";

export const metadata = {
  title: "Resume",

  description:
    "Hosted resume for Om Patil, a Java Backend Developer focused on Spring Boot, REST APIs, SQL, scalable backend systems, and full stack application development.",

  alternates: {
    canonical: "/resume",
  },

  openGraph: {
    title: "Resume | Om Patil",

    description:
      "Hosted resume for Om Patil, a Java Backend Developer focused on Spring Boot, REST APIs, SQL, scalable backend systems, and full stack application development.",

    url: "/resume",

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

    title: "Resume | Om Patil",

    description:
      "Hosted resume for Om Patil, a Java Backend Developer focused on Spring Boot, REST APIs, SQL, scalable backend systems, and full stack application development.",

    images: ["/og-image.png"],
  },
};

const resumeHighlights = [
  {
    title: "Role focus",
    description:
      "Java Backend Developer focused on Spring Boot, REST APIs, SQL, backend engineering, and scalable application design.",
  },

  {
    title: "Core stack",
    description:
      "Java, Spring Boot, Spring MVC, Hibernate, JPA, Kafka, SQL, PostgreSQL, MongoDB, React.js, Node.js, and Express.js.",
  },

  {
    title: "Key projects",
    description:
      "ForenSight, JPMorgan Chase & Co. SWE Job Simulation, and Sales Person Territory Planner.",
  },

  {
    title: "Current profile",
    description:
      "B.Tech graduate in Information Technology with internship experience, hands-on expertise in Java and Spring Boot, and a portfolio showcasing backend engineering, REST APIs, database design, and scalable software development.",
  },
];

const actionButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800";

const lightPdfSrc = "/OmPatil_Resume.pdf#view=FitH&zoom=page-width";
const darkPdfSrc = "/OmPatil_Resume_Dark.pdf#view=FitH&zoom=page-width";

const lightResumePreview = "/OmPatil_Resume.png";
const darkResumePreview = "/OmPatil_Resume_Dark.png";

export default function ResumePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        {/* <<<<<<<<<<<<<<<<<<<<<< page header >>>>>>>>>>>>>>>>>>>>>> */}
        <PagesHeader title="resume" />

        <section className="mt-6 w-full max-w-7xl px-3 sm:px-4 lg:px-6">
          {/* <<<<<<<<<<<<<<<<<<<<<< top actions row >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {/* <<<<<<<<<<<<<<<<<<<<<< small helper text for the user >>>>>>>>>>>>>>>>>>>>>> */}
              <p className="text-sm text-black/70 dark:text-white/70 sm:text-base">
                Resume preview is available directly on the page for quick
                review.
              </p>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<< open and download buttons >>>>>>>>>>>>>>>>>>>>>> */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/OmPatil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${actionButtonClasses} dark:hidden`}
                aria-label="Open light resume PDF"
              >
                <FiExternalLink className="shrink-0" />
                Open PDF
              </a>

              <a
                href="/OmPatil_Resume_Dark.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${actionButtonClasses} hidden dark:inline-flex`}
                aria-label="Open dark resume PDF"
              >
                <FiExternalLink className="shrink-0" />
                Open PDF
              </a>

              <a
                href="/OmPatil_Resume.pdf"
                download
                className={`${actionButtonClasses} dark:hidden`}
                aria-label="Download light resume PDF"
              >
                <FiDownload className="shrink-0" />
                Download Resume
              </a>

              <a
                href="/OmPatil_Resume_Dark.pdf"
                download
                className={`${actionButtonClasses} hidden dark:inline-flex`}
                aria-label="Download dark resume PDF"
              >
                <FiDownload className="shrink-0" />
                Download Resume
              </a>
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<< desktop resume preview area >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="hidden overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0px_4px_0px_#000] dark:border-white/10 dark:bg-black dark:shadow-[0px_4px_0px_#fff] md:block">
            <div className="h-[84vh] w-full bg-white dark:bg-black">
              {/* <<<<<<<<<<<<<<<<<<<<<< light theme pdf preview >>>>>>>>>>>>>>>>>>>>>> */}
              <iframe
                src={lightPdfSrc}
                title="Om Patil Resume Light"
                className="h-full w-full dark:hidden"
                loading="lazy"
              />

              {/* <<<<<<<<<<<<<<<<<<<<<< dark theme pdf preview >>>>>>>>>>>>>>>>>>>>>> */}
              <iframe
                src={darkPdfSrc}
                title="Om Patil Resume Dark"
                className="hidden h-full w-full dark:block"
                loading="lazy"
              />
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<< mobile resume image preview area >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0px_4px_0px_#000] dark:border-white/10 dark:bg-black dark:shadow-[0px_4px_0px_#fff] md:hidden">
            <div className="relative h-[82dvh] w-full bg-white dark:bg-black">
              {/* <<<<<<<<<<<<<<<<<<<<<< light theme png preview >>>>>>>>>>>>>>>>>>>>>> */}
              <Image
                src={lightResumePreview}
                alt="Om Patil Resume Preview"
                fill
                sizes="100vw"
                className="object-contain p-2 dark:hidden"
              />

              {/* <<<<<<<<<<<<<<<<<<<<<< dark theme png preview >>>>>>>>>>>>>>>>>>>>>> */}
              <Image
                src={darkResumePreview}
                alt="Om Patil Resume Preview"
                fill
                sizes="100vw"
                className="hidden object-contain p-2 dark:block"
              />
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<< resume summary dropdown >>>>>>>>>>>>>>>>>>>>>> */}
          <details className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0px_4px_0px_#000] dark:border-white/10 dark:bg-black dark:shadow-[0px_4px_0px_#fff]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-base font-semibold text-black transition-colors duration-200 hover:bg-black/5 dark:text-white dark:hover:bg-white/5">
              <span>Resume summary</span>

              <FiChevronDown className="text-lg" />
            </summary>

            {/* <<<<<<<<<<<<<<<<<<<<<< mapped resume highlights >>>>>>>>>>>>>>>>>>>>>> */}
            <div className="grid gap-5 border-t border-black/10 px-4 py-5 text-sm text-black/80 dark:border-white/10 dark:text-white/80 sm:text-base md:grid-cols-2">
              {resumeHighlights.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-black dark:text-white">
                    {item.title}
                  </p>

                  <p className="mt-1.5 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </details>

          {/* <<<<<<<<<<<<<<<<<<<<<< back navigation >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="my-16 text-center">
            <Link
              href="/"
              className="group mx-auto flex w-max items-center gap-3 rounded-full border border-black bg-white px-10 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      {/* <<<<<<<<<<<<<<<<<<<<<< shared site footer >>>>>>>>>>>>>>>>>>>>>> */}
      <Footer />
    </>
  );
}