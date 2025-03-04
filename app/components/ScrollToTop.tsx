"use client"; // Required for Next.js App Router

import { useEffect, useState } from "react";
// import { ArrowUpCircle } from "lucide-react";
import { LuCircleArrowUp } from "react-icons/lu";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100); // Show only when scrolled past 100px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-2 bg-transparent  text-customGreen rounded-full 
      hover:bg-customGreen hover:border-white hover:text-white transition-all duration-300 
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <LuCircleArrowUp size={42} />
    </button>
  );
};

export default ScrollToTop;
