import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white px-9 py-3.5 sticky top-0 left-0 right-0 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-black/70" : "bg-transparent"
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
                  {["Contact", "About Me", "Projects", "Blog"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="relative group pb-1">
                        {item}
                        <span className="absolute right-0 bottom-0 w-[0] 
                          h-[5px] bg-customGreen transition-all 
                          duration-300 group-hover:w-full rounded-l-lg"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
    </nav>
  );
};

export default Navbar;
