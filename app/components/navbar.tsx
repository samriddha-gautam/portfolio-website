"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } 
    else {
      // Store the target section
      localStorage.setItem("scrollTarget", id);

      // Navigate to homepage
      router.push("/");
    }
  };

  // Handle smooth scrolling when landing on the homepage
  useEffect(() => {
    const target = localStorage.getItem("scrollTarget");
    if (pathname === "/" && target) {
      localStorage.removeItem("scrollTarget");

      // Ensure page starts at the top
      window.scrollTo(0, 0);

      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 10); // Delay to simulate scrolling from the top
    }
  }, [pathname]);

  return (
    <nav
      className={`px-9 py-3.5 z-50 sticky top-0 left-0 right-0 backdrop-blur-lg transition-all duration-200 
        ${scrolled ? "bg-customBlack/70" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center mx-20">
        <ul className="flex">
          <li>
            <a href="#home" className="font-bold text-5xl text-customGreen">SG.</a>
          </li>
        </ul>

        <ul className="flex space-x-6">
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" }
          ].map((item) => (
            <li key={item.id}>
              <button onClick={() => handleNavigation(item.id)} className="relative group pb-1 text-lg">
                {item.label}
                <span className="absolute right-0 bottom-0 w-[0] h-[6px] bg-customGreen transition-all duration-200 group-hover:w-full rounded-l-lg"></span>
              </button>
            </li>
          ))}
          <li>
            <span className="relative group">
              <Link href="/blog" className="pb-1 text-lg relative z-10">Blog</Link>
              <span className="absolute right-0 bottom-[-10px] w-[0] h-[6px] bg-customGreen transition-all duration-200 group-hover:w-full rounded-l-lg pointer-events-none"></span>
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
