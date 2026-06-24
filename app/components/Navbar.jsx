"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", hash: "#top" },
  { name: "About", hash: "#about" },
  { name: "Academics", hash: "#academic" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Contact me", hash: "#contact" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeOfLastClick = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

      if (Date.now() - timeOfLastClick.current < 1000) {
        return;
      }

      let currentSection = "Home";

      navLinks.forEach((link) => {
        const element = document.querySelector(link.hash);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= window.innerHeight / 2) {
            currentSection = link.name;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveSection(linkName);
    timeOfLastClick.current = Date.now();
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Target heights based on requirements
  const capsuleHeight = "h-[64px]"; // Main navigation capsule height
  const buttonHeight = "h-[52px]"; // Buttons are comparatively smaller

  // Group 2 Capsule: Optimized padding and text sizes dynamically for desktop viewports
  const capsuleClasses = `relative hidden lg:flex w-auto shrink-0 ${capsuleHeight} items-center p-1.5 rounded-full bg-transparent border transition-colors duration-300 ${
    isScroll ? "border-transparent" : "border-gray-500/70 dark:border-white/30"
  }`;

  // Group 3 Theme Toggle: Match capsule text font, size, color, and hover behavior
  const themeToggleClasses = `hidden lg:flex ${buttonHeight} items-center justify-center gap-2 lg:px-3.5 xl:px-6 font-Ovo text-[15px] xl:text-[17px] text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 rounded-full bg-transparent border border-gray-500/70 dark:border-white/30`;

  // Group 4 CTA Buttons: Match capsule text font, size, color, and hover behavior
  const ctaButtonClasses = `hidden lg:flex ${buttonHeight} items-center justify-center gap-2 lg:px-4 xl:px-7 border rounded-full font-Ovo text-[15px] xl:text-[17px] text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 border-gray-500/70 dark:border-white/30`;

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeMenu}
        ></div>
      )}

      {/* FIX: Removed bottom borders and targeted specific properties for ultra-smooth rendering */}
      <nav
        className={`w-full fixed top-0 px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3.5 flex items-center justify-between z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-in-out ${
          isScroll
            ? "bg-white/40 dark:bg-darkTheme/40 backdrop-blur-md shadow-sm"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        {/* ================= GROUP 1: LOGO (FAR LEFT) ================= */}
        <div className="flex shrink-0 items-center">
          <a href="#top" onClick={() => handleLinkClick("Home")}>
            <Image
              unoptimized
              priority={true}
              src={isDarkMode ? assets.logogifdark : assets.logogiflight}
              className="w-24 sm:w-28 cursor-pointer"
              alt="Logo"
            />
          </a>
        </div>

        {/* ================= GROUP 2: MAIN NAV CAPSULE ================= */}
        <ul className={`${capsuleClasses} mx-4 xl:ml-8`}>
          {navLinks.map((link) => {
            if (link.name === "Contact me") return null;

            return (
              <li
                key={link.hash}
                className="relative h-full flex items-center justify-center"
                onClick={() => handleLinkClick(link.name)}
              >
                <a
                  href={link.hash}
                  className={`relative z-10 block lg:px-2.5 xl:px-3.5 py-2 font-Ovo text-[15px] xl:text-[17px] transition-colors duration-200 ${
                    activeSection === link.name
                      ? "text-black dark:text-white"
                      : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

                {activeSection === link.name && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gray-200/70 dark:bg-white/10"
                    style={{ zIndex: 0 }}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* ================= GROUP 3: THEME TOGGLE BUTTON (TRUE MIDPOINT) ================= */}
        <div className="hidden lg:flex flex-1 justify-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={themeToggleClasses}
          >
            <span className="hidden xl:inline">{isDarkMode ? "Light" : "Dark"}</span>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-5"
            />
          </button>
        </div>

        {/* ================= GROUP 4: CTA BUTTONS & MOBILE CONTROLS (FAR RIGHT) ================= */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Desktop Links */}
          <Link href="/resume" className={ctaButtonClasses}>
            Resume
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="Arrow Icon"
            />
          </Link>

          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact me")}
            className={`${ctaButtonClasses} ${
              activeSection === "Contact me"
                ? "border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.55)] dark:border-purple-400"
                : ""
            }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="Arrow Icon"
            />
          </a>

          {/* Mobile Theme Toggle & Menu Triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-gray-500/40 dark:border-white/20 bg-transparent transition-colors duration-200"
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="Theme Toggle"
                className="w-5"
              />
            </button>

            <button
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-gray-500/40 dark:border-white/20 bg-transparent transition-colors duration-200"
              onClick={openMenu}
              aria-label="Open Menu"
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="Menu Icon"
                className="w-5"
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU SIDEBAR */}
        <ul
          ref={sideMenuRef}
          className="fixed -right-64 top-0 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50/70 px-10 py-20 backdrop-blur-lg transition duration-500 dark:bg-darkHover/90 dark:text-white lg:hidden"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </div>

          

          {navLinks.map((link) => (
            <li key={link.hash}>
              <a
                className="font-Ovo text-[17px] block py-1"
                onClick={() => {
                  closeMenu();
                  handleLinkClick(link.name);
                }}
                href={link.hash}
              >
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <Link href="/resume" className="font-Ovo text-[17px] block py-1" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;