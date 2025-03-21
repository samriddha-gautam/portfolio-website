import { useEffect } from "react";
import { FaReact, FaPython, FaHtml5, FaGit  } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql, SiLaravel, SiPhp, SiDjango, SiPostman, SiLinux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ImWindows } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";
import { FaSlack,FaFigma } from "react-icons/fa6";

const cards = [
  { icon: <FaReact size={67} /> },
  { icon: <DiNodejs size={67} /> },
  { icon: <SiMongodb size={67} /> },
  { icon: <FaPython size={67} /> },
  { icon: <SiDjango size={67} /> },
  { icon: <FaHtml5 size={67} /> },
  { icon: <SiTailwindcss size={67} /> },
  { icon: <RiNextjsFill size={67} /> },
  { icon: <TbBrandCpp size={67} /> },
  { icon: <SiMysql size={67} /> },
  { icon: <SiPhp size={67} /> },
  { icon: <SiLaravel size={67} /> },
  { icon: <FaGit size={67} /> },
];

const tools = [
  { icon: <VscVscodeInsiders size={67} /> },
  { icon: <ImWindows size={67} /> },
  { icon: <IoLogoVercel size={67} /> },
  { icon: <AiFillOpenAI size={67} /> },
  { icon: <SiPostman size={67} /> },
  { icon: <SiLinux size={67} /> },
  { icon: <FaSlack size={67} /> },
  { icon: <FaFigma size={67} /> },
];

export default function TechStackCards() {
  useEffect(() => {
    const adjustLastRow = () => {
      const grids = document.querySelectorAll(".tools-grid"); // Select all grids
      grids.forEach((grid) => {
        const items = grid?.children;
        if (!items) return;

        const totalItems = items.length;

        // Determine columns based on screen size
        let cols;
        if (window.innerWidth >= 1024) {
          cols = 4; // lg:grid-cols-4
        } else if (window.innerWidth >= 768) {
          cols = 3; // md:grid-cols-3
        } else {
          cols = 2; // grid-cols-2
        }

        // Calculate items in the last row
        const itemsInLastRow = totalItems % cols || cols;

        // Reset previous col-span classes
        for (const item of items) {
          item.classList.remove(
            "lg:col-span-2",
            "lg:col-span-3",
            "lg:col-span-4",
            "md:col-span-2",
            "md:col-span-3",
            "col-span-2"
          );
        }

        // Apply col-span to last row items if needed
        if (itemsInLastRow < cols) {
          const startOfLastRow = totalItems - itemsInLastRow;
          const spanValue = Math.floor(cols / itemsInLastRow);

          for (let i = startOfLastRow; i < totalItems; i++) {
            if (cols === 4) {
              items[i].classList.add(`lg:col-span-${spanValue}`);
            } else if (cols === 3) {
              items[i].classList.add(`md:col-span-${spanValue}`);
            } else {
              items[i].classList.add("col-span-2");
            }
          }
        }
      });
    };

    // Run on mount and on resize
    adjustLastRow();
    window.addEventListener("resize", adjustLastRow);

    // Cleanup
    return () => window.removeEventListener("resize", adjustLastRow);
  }, []);

  return (
    <div>
      <div className="sm:pt-12 pt-32 pb-24 flex flex-col items-center">
        <h1 className="text-3xl pb-8 text-center underline font-bold">My Skills</h1>
        <div className="tools-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-4 md:m-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex border-2 rounded-lg bg-black/20 backdrop-blur-[2px] 
                         border-customGreen md:p-10 transition 
                         duration-300 ease-in-out items-center justify-center p-4"
            >
              {card.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="sm:pt-12 py-32 flex flex-col items-center">
        <h1 className="text-3xl pb-8 text-center underline font-bold">Tools I Use</h1>
        <div className="tools-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-4 md:m-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex border-2 rounded-lg bg-black/20 backdrop-blur-[2px] 
                         border-customGreen md:p-10 transition 
                         duration-300 ease-in-out items-center justify-center p-4"
            >
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}