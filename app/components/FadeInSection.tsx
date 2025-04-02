"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string; // Optional className prop for custom styling
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 100 : -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className} // Apply the passed className
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;