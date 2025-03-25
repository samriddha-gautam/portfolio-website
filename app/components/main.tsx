import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuGitFork, LuFileDown } from "react-icons/lu";

// Move greetings array outside the component
const greetings = [
  "Hello", // English
  "Hola", // Spanish
  "Bonjour", // French
  "नमस्ते", // Hindi
  "你好", // Mandarin
  "こんにちは", // Japanese
  "Ciao", // Italian
];

export default function Main() {
  // State to track the current greeting index and displayed text
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Current greeting
  const currentGreeting = greetings[currentGreetingIndex];

  // Cursor animation variants
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Typing and erasing logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentGreeting.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentGreeting.slice(0, displayedText.length + 1));
        }, 150); // Speed of typing (150ms per letter)
      } else {
        // Pause after typing, then start erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Pause for 1s after typing
      }
    } else {
      // Erasing phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100); // Speed of erasing (100ms per letter)
      } else {
        // Move to the next greeting after erasing
        timeout = setTimeout(() => {
          setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
          setIsTyping(true);
        }, 500); // Pause for 0.5s before next greeting
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentGreeting, currentGreetingIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 text-center lg:text-left"
    >
      <div className="pb-8">
        <div className="md:flex justify-center lg:justify-start text-3xl sm:text-4xl">
          <h2 className="flex items-center">
            {/* Displayed text */}
            {displayedText}
            {/* Blinking cursor */}
            <motion.span
              variants={cursorVariants}
              animate="blink"
              className="inline-block w-1 h-8 sm:h-10 bg-customGreen ml-1"
            />
          </h2>
        </div>

        <p className="pt-6 text-3xl sm:text-4xl">
          I AM <span className="text-customGreen">SAMRIDDHA GAUTAM</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link href="https://github.com/samriddha-gautam/">
          <button
            className="flex items-center justify-center gap-2 w-full sm:w-44 h-12 sm:h-14
                   text-lg sm:text-2xl bg-customGreen text-white rounded-lg hover:bg-green-700
                  shadow-md dark:hover:shadow-[0_0_3px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.8)] 
                        duration-300 transition ease-in-out"
          >
            <LuGitFork />
            Github
          </button>
        </Link>
        <Link href="/resume">
          <button
            className="flex items-center justify-center gap-2 w-full sm:w-44 h-12 sm:h-14 
            bg-white dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-300 
            text-lg sm:text-2xl rounded-lg text-customGreen shadow-md 
                         hover:shadow-[0_0_3px_1px_rgba(72,255,72,0.8)] duration-300 
                         transition ease-in-out"
          >
            <LuFileDown />
            Resume
          </button>
        </Link>
      </div>
    </section>
  );
}