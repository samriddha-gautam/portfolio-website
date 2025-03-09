"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { LuMail, LuSquareCode, LuUser, LuNotebookPen, LuHouse, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null); // Ref for navbar

  // Handle scroll: track active section & close mobile menu when scrolling past 300px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      if (window.scrollY > 160) {
        setMenuOpen(false);
      }

      const sections = ["about", "projects", "contact", "home"];
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      localStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

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
      ref={navRef}
      className={`md:pr-20 md:pl-9 py-3.5 z-50 sticky top-0 left-0 right-0 overflow-hidden transition-all duration-200 ${
        scrolled ? "backdrop-blur-lg bg-black/10 shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between items-center lg:mx-9 relative w-full">
       {/* Hamburger / Close Button */}
       <button
         className="md:hidden text-white transition-all duration-300 z-50"
         onClick={() => setMenuOpen((prev) => !prev)}
       >
         {menuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
       </button>

       {/* Logo */}
       <a href="#home" className="hidden md:flex font-bold text-4xl text-customGreen">
         Sg.
       </a>

        <ul className="hidden md:flex space-x-12">
          {[
            { label: <><LuHouse size={22} /> Home</>, id: "home" },
            { label: <><LuUser size={22} /> About</>, id: "about" },
            { label: <><LuSquareCode size={22} /> Projects</>, id: "projects" },
            { label: <><LuMail size={22} /> Contact</>, id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`flex gap-2 relative group pb-1 text-lg ${
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
              <Link href="/blog" className={`pb-1 text-lg relative z-10 ${pathname === "/blog" ? "text-customGreen font-bold" : ""}`}>
                <span className="flex items-center gap-2">
                  <LuNotebookPen size={22} />
                  Blogs
                </span>
              </Link>
              <span 
                className={`absolute right-0 bottom-[-10px] w-[0] h-[6px] bg-customGreen transition-all duration-200 group-hover:w-full 
                rounded-l-lg pointer-events-none ${pathname === "/blog" ? "w-full" : ""}`}
              ></span>
            </span>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-black/70 z-40 transition-all duration-300 ease-in-out transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24 "
        }`}
      >

        <ul className="flex flex-col items-center space-y-4 my-6 py-8">
          {[
            { label: <><LuHouse size={22} /> Home</>, id: "home" },
            { label: <><LuUser size={22} /> About</>, id: "about" },
            { label: <><LuSquareCode size={22} /> Projects</>, id: "projects" },
            { label: <><LuMail size={22} /> Contact</>, id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`flex gap-1 relative group pb-1 text-lg ${
                  activeSection === item.id ? "text-customGreen font-bold" : "text-white"
                } transition-all ease-in`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className={`pb-1 text-lg ${
                pathname === "/blog" ? "text-customGreen font-bold" : "text-white"
              }`}
            >
              <span className="flex items-center gap-1">
                <LuNotebookPen size={22} />
                Blogs
              </span>
            </Link>
          </li>
          <li className="pt-2">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
