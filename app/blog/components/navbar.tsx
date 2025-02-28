"use client";
import { useState, useEffect } from "react";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import Link from "next/link"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`px-9 py-3.5 z-50 sticky top-0 left-0 right-0 backdrop-blur-lg transition-all duration-200 ${
        scrolled ? "bg-customBlack/70" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-20">
        {/* Left-aligned SG */}
        <ul className="flex">
          <li>
            <a href="./app" className="font-bold text-5xl text-customGreen">SG.</a>
          </li>
        </ul>

        {/* Right-aligned navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/blog" className="relative group pb-1 text-xl">
              Blog
              <span className="absolute right-0 bottom-0 w-[0] 
                h-[5px] bg-customGreen transition-all 
                duration-200 group-hover:w-full rounded-l-lg"></span>
            </Link>
            <Link href="/page" className="relative group pb-1 text-xl">
              About
              <span className="absolute right-0 bottom-0 w-[0] 
                h-[5px] bg-customGreen transition-all 
                duration-200 group-hover:w-full rounded-l-lg"></span>
            </Link>
            <Link href="/blog" className="relative group pb-1 text-xl">
              Contact
              <span className="absolute right-0 bottom-0 w-[0] 
                h-[5px] bg-customGreen transition-all 
                duration-200 group-hover:w-full rounded-l-lg"></span>
            </Link>
            <Link href="/blog" className="relative group pb-1 text-xl">
              Blog
              <span className="absolute right-0 bottom-0 w-[0] 
                h-[5px] bg-customGreen transition-all 
                duration-200 group-hover:w-full rounded-l-lg"></span>
            </Link>
          </li>
          <DarkModeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
