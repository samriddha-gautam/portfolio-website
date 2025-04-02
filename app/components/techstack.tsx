import { useEffect, useRef } from "react";
import { FaReact, FaPython, FaHtml5, FaGit } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql, SiLaravel, SiPhp, SiDjango, SiPostman, SiLinux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ImWindows } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";
import { FaSlack, FaFigma } from "react-icons/fa6";
import gsap from "gsap";
import FadeInSection from "./FadeInSection";

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
  const skillsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Copy ref values to variables
    const skillsElement = skillsRef.current;
    const toolsElement = toolsRef.current;

    // Function to calculate columns and animate
    const animateGrid = (items: HTMLCollection, isSkills: boolean = true) => {
      if (!items) return;

      const totalItems = items.length;

      // Determine columns based on screen size
      let cols;
      if (window.innerWidth >= 1024) cols = 4;
      else if (window.innerWidth >= 768) cols = 3;
      else cols = 2;

      // Calculate items in the last row
      const itemsInLastRow = totalItems % cols || cols;

      // Reset previous col-span classes
      for (const item of Array.from(items) as HTMLElement[]) {
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
          const item = items[i] as HTMLElement;
          if (cols === 4) item.classList.add(`lg:col-span-${spanValue}`);
          else if (cols === 3) item.classList.add(`md:col-span-${spanValue}`);
          else item.classList.add("col-span-2");
        }
      }

      // Sort items for animation order
      const itemsArray = Array.from(items) as HTMLElement[];
      const itemsPerRow = cols;
      const sortedItems = itemsArray.map((item, index) => ({
        item,
        originalIndex: index,
        rowIndex: Math.floor(index / itemsPerRow),
        colIndex: index % itemsPerRow,
      }));

      // Sort for left-to-right (Skills) or right-to-left (Tools)
      sortedItems.sort((a, b) => {
        if (a.rowIndex !== b.rowIndex) return a.rowIndex - b.rowIndex;
        return isSkills
          ? a.colIndex - b.colIndex
          : b.colIndex - a.colIndex;
      });

      // Animate one by one with row dependency
      const itemDuration = 0.1;
      gsap.fromTo(
        sortedItems.map((entry) => entry.item),
        {
          opacity: 0,
          y: 10,
          scale: 0.9,
          visibility: "hidden",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          visibility: "visible",
          duration: itemDuration,
          stagger: (index: number) => {
            const { rowIndex, colIndex } = sortedItems[index];
            const itemsInPreviousRows = rowIndex * itemsPerRow;
            const positionInRow = isSkills ? colIndex : (itemsPerRow - 1 - colIndex);
            return (itemsInPreviousRows + positionInRow) * itemDuration;
          },
          ease: "sine.inOut",
          overwrite: "auto",
        }
      );
    };

    // Intersection Observer callback
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const grid = entry.target.querySelector(".tools-grid") as HTMLDivElement;
          const items = grid?.children;
          if (items) {
            const isSkills = entry.target === skillsElement;
            animateGrid(items, isSkills);
          }
          observer.unobserve(entry.target);
        }
      });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.2,
    });

    if (skillsElement) observer.observe(skillsElement);
    if (toolsElement) observer.observe(toolsElement);

    // Adjust layout on resize
    const handleResize = () => {
      const grids = document.querySelectorAll(".tools-grid") as NodeListOf<HTMLDivElement>;
      grids.forEach((grid) => {
        const items = grid?.children;
        if (!items) return;

        const totalItems = items.length;
        let cols: number;
        if (window.innerWidth >= 1024) cols = 4;
        else if (window.innerWidth >= 768) cols = 3;
        else cols = 2;

        const itemsInLastRow = totalItems % cols || cols;
        for (const item of Array.from(items) as HTMLElement[]) {
          item.classList.remove(
            "lg:col-span-2",
            "lg:col-span-3",
            "lg:col-span-4",
            "md:col-span-2",
            "md:col-span-3",
            "col-span-2"
          );
        }
        if (itemsInLastRow < cols) {
          const startOfLastRow = totalItems - itemsInLastRow;
          const spanValue = Math.floor(cols / itemsInLastRow);
          for (let i = startOfLastRow; i < totalItems; i++) {
            const item = items[i] as HTMLElement;
            if (cols === 4) item.classList.add(`lg:col-span-${spanValue}`);
            else if (cols === 3) item.classList.add(`md:col-span-${spanValue}`);
            else item.classList.add("col-span-2");
          }
        }
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (skillsElement) observer.unobserve(skillsElement);
      if (toolsElement) observer.unobserve(toolsElement);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <FadeInSection>
      <div ref={skillsRef} className="sm:pt-12 pt-32 pb-24 flex flex-col items-center">
        <h1 className="text-2xl pb-8 text-center underline font-bold">My Skills</h1>
        <div className="tools-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-4 md:m-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex border-2 rounded-lg bg-black/20 backdrop-blur-[2px] 
                         border-customGreen md:p-10 transition 
                         duration-300 ease-in-out items-center justify-center p-4 opacity-0 invisible"
              style={{ boxShadow: "0px 2px 6px rgba(23, 119, 14, 0.5)" }}
            >
              {card.icon}
            </div>
          ))}
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div ref={toolsRef} className="sm:pt-12 py-32 flex flex-col items-center">
        <h1 className="text-2xl pb-8 text-center underline font-bold">Tools I Use</h1>
        <div className="tools-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-4 md:m-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex border-2 rounded-lg bg-black/20 backdrop-blur-[2px] 
                         border-customGreen md:p-10 transition 
                         duration-300 ease-in-out items-center justify-center p-4 opacity-0 invisible"
              style={{ boxShadow: "0px 2px 6px rgba(23, 119, 14, 0.5)" }}
            >
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
      </FadeInSection>
    </div>
  );
}