"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { LuMail, LuSquareCode, LuUser, LuNotebookPen, LuHouse } from "react-icons/lu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      // Check which section is currently in view
      const sections = ["about", "projects", "contact","home"  ];
      let currentSection = "";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (
          element &&
          window.scrollY >= element.offsetTop - 140 &&
          window.scrollY < element.offsetTop + element.offsetHeight - 100
        ) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setActiveSection(id); // Set the active section when clicked
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Store the target section
      localStorage.setItem("scrollTarget", id);
      router.push("/"); // Navigate to homepage
    }
  };

  // Handle smooth scrolling when landing on the homepage
  useEffect(() => {
    const target = localStorage.getItem("scrollTarget");
    if (pathname === "/" && target) {
      localStorage.removeItem("scrollTarget");
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 10);
    }
  }, [pathname]);

  return (
    <nav
      className={`px-9 py-3.5 z-50 sticky top-0 left-0 right-0  transition-all duration-200 
        ${scrolled ? "backdrop-blur-lg bg-black/10 shadow-lg" : ""}`}
    >
      <div className="flex justify-between items-center mx-10">
        <ul className="flex">
          <li>
            <a href="#home" className="font-bold text-4xl text-customGreen">
              Sg.
            </a>
          </li>
        </ul>

        <ul className="flex space-x-12">
          {[
            {
              label: (
                <span className="flex items-center gap-2">
                  <LuHouse size={22} />
                  Home
                </span>
              ),
              id: "home",
            },
            {
              label: (
                <span className="flex items-center gap-2">
                  <LuUser size={22} />
                  About
                </span>
              ),
              id: "about",
            },
            {
              label: (
                <span className="flex items-center gap-2">
                  <LuSquareCode size={22} />
                  Projects
                </span>
              ),
              id: "projects",
            },
            {
              label: (
                <span className="flex items-center gap-2">
                  <LuMail size={22} />
                  Contact
                </span>
              ),
              id: "contact",
            },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`relative  group pb-1 text-lg ${
                  activeSection === item.id ? "text-customGreen font-semibold" : ""
                } transition-all ease-in`}
              >
                {item.label}
                <span
                  className={`absolute right-0 bottom-0 w-[0] h-[6px] bg-customGreen transition-all duration-200 group-hover:w-full rounded-l-lg ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                ></span>
              </button>
            </li>
          ))}
          <li>
            <span className="relative group">
                  <Link href="/blog" className={`pb-1 text-lg relative z-10 ${pathname==="/blog" ? "text-customGreen font-bold": ""}`}>
                <span className="flex items-center gap-2">
                  <LuNotebookPen size={22} />
                  Blogs
                </span>
              </Link>
              <span 
              className={`absolute right-0 bottom-[-10px] w-[0] h-[6px]
               bg-customGreen transition-all duration-200 group-hover:w-full 
               rounded-l-lg pointer-events-none
               ${pathname==="/blog"?"w-full" : ""}
               `}>
                </span>
            </span>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
