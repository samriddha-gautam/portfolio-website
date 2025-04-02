"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number; // Delay for sequential animation
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Slower stagger for a typing feel
        delayChildren: delay, // Delay the start of this word’s animation
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0 }, // Subtle slide from left
    visible: {
      opacity: 1,
      transition: {
        duration: 0.40, // Quick but smooth
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedHeading;