import { useEffect, useRef } from "react";
import { FaGitAlt } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import projectList from "@/app/data/projectList.json";
import gsap from "gsap";
import FadeInSection from "./FadeInSection";

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to animate cards
    const animateCards = (items: HTMLCollection) => {
      if (!items) return;

      // const totalItems = items.length;

      // Determine columns based on screen size
      let cols: number;
      if (window.innerWidth >= 1024) cols = 3; // lg:grid-cols-3
      else if (window.innerWidth >= 768) cols = 2; // md:grid-cols-2
      else cols = 1; // grid-cols-1


      // Sort items based on the desired animation order
      const itemsArray = Array.from(items) as HTMLElement[];
      const sortedItems = itemsArray.map((item, index) => ({
        item,
        originalIndex: index,
        rowIndex: Math.floor(index / cols),
        colIndex: index % cols,
      }));

      // Zigzag pattern:
      // - Row 0 (first row): left to right
      // - Row 1 (second row): right to left
      // - Row 2 (third row): left to right
      // - Row 3 (fourth row): right to left
      // And so on...
      sortedItems.sort((a, b) => {
        // Sort by row first (top to bottom)
        if (a.rowIndex !== b.rowIndex) {
          return a.rowIndex - b.rowIndex;
        }

        // Even rows (0, 2, 4, ...): left to right
        // Odd rows (1, 3, 5, ...): right to left
        const isEvenRow = a.rowIndex % 2 === 0;
        if (isEvenRow) {
          return a.colIndex - b.colIndex; // Left to right
        } else {
          return b.colIndex - a.colIndex; // Right to left
        }
      });

      // Animate with GSAP
      gsap.fromTo(
        sortedItems.map((entry) => entry.item),
        {
          scale: 0.8, // Start smaller
          opacity: 0,
        },
        {
          scale: 1, // Grow to full size
          opacity: 1,
          duration: 0.1,
          stagger: 0.2, // 0.2s delay between each card
          ease: "elastic.out(1, 0.5)", // Smooth, bouncy effect
          overwrite: "auto",
        },
      );
    };

    // Intersection Observer callback
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const grid = entry.target.querySelector(".project-grid") as HTMLDivElement;
          const items = grid?.children;
          if (items) {
            animateCards(items);
          }
          observer.unobserve(entry.target);
        }
      });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.2, // Trigger when 20% of the section is visible
    });

    if (projectsRef.current) observer.observe(projectsRef.current);

    // Cleanup
    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen flex flex-col items-center pb-32"
    >
      <h1 className="text-4xl md:text-6xl py-8 text-center font-bold">
        My<strong className="text-customGreen">Works</strong>
      </h1>
      <p className="text-3sm">These are my most recent projects.</p>
      <FadeInSection>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-12">
        {projectList.map((card, index) => (
          <div
            key={index}
            className="border-2 rounded-lg bg-black/40 backdrop-blur-[2px] 
                       border-customGreen p-4 md:hover:scale-[103%] transition 
                       duration-300 ease-in-out cursor-default opacity-0"
            style={{ boxShadow: "0px 2px 6px rgba(23, 119, 14, 0.5)" }}
          >
            <h1 className="text-center text-xl md:text-3xl lg:text-4xl my-4 font-bold">
              {card.title}
            </h1>
            <img
              src={card.image}
              alt={card.title}
              className="w-full mt-4 h-40 object-cover rounded-md"
            />
            <p className="text-center">{card.description}</p>
            <div className="flex flex-col justify-center m-4 gap-4">
              <a
                href={card.siteLink}
                className="flex items-center justify-center gap-2 p-3
                         text-sm md:text-lg bg-customGreen text-white rounded-md  
                         shadow-md hover:shadow-[0_0_3px_1px_rgba(255,255,255,0.8)] 
                         transition ease-in-out"
              >
                <TbWorldCode size={24} />
                View Site
              </a>
              <a
                href={card.codeLink}
                className="flex items-center justify-center gap-2 p-3
                         bg-white dark:bg-white text-xs md:text-lg rounded-md 
                         text-customGreen shadow-md 
                         hover:shadow-[0_0_3px_1px_rgba(72,255,72,0.8)] 
                         transition ease-in-out"
              >
                <FaGitAlt size={24} />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
      </FadeInSection>
      <hr />
    </section>
  );
}