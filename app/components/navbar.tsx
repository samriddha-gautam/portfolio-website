import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

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
      className={`px-9 py-3.5 sticky top-0 left-0 right-0 backdrop-blur-lg transition-all duration-200 ${
        scrolled ? "bg-customBlack/70" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-20">
        {/* Left-aligned SG */}
        <ul className="flex">
          <li>
            <a href="#home" className="font-bold text-5xl text-customGreen">SG.</a>
          </li>
        </ul>

        {/* Right-aligned navigation links */}
        <ul className="flex space-x-6">
          {[
            { label: "About Me", id: "about-me" },
            { label: "Projects", id: "projects" },
            { label: "Blog", id: "blog" },
            { label: "Contact", id: "contact" }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollToSection(item.id)}
                className="relative group pb-1 text-xl"
              >
                {item.label}
                <span className="absolute right-0 bottom-0 w-[0] 
                  h-[5px] bg-customGreen transition-all 
                  duration-200 group-hover:w-full rounded-l-lg"></span>
              </button>
            </li>
          ))}
          <DarkModeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
