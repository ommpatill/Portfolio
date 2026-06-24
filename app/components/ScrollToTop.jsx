"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 sm:bottom-6 sm:right-6 z-50
        h-11 w-11
        rounded-2xl
        border border-gray-200 dark:border-white/10
        bg-white/90 dark:bg-darkHover/80
        backdrop-blur-md
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-xl
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ChevronUp
        size={20}
        className="text-gray-700 dark:text-white"
      />
    </button>
  );
}