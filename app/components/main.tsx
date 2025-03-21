import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuGitFork, LuFileDown } from "react-icons/lu";

export default function Main() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-32 text-center lg:text-left"
    >
      <div className="pb-8">
        <div className={`md:flex justify-center lg:justify-start text-3xl sm:text-4xl`}>
          <h2>Hey There !!</h2>
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block origin-bottom-right"
          >
            👋🏻
          </motion.span>
        </div>

        <p className="pt-6 text-3xl sm:text-4xl">
          I AM <span className="text-customGreen">SAMRIDDHA GAUTAM</span>
        </p>
      
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link href="https://github.com/samriddha-gautam/">
          <button className="flex items-center justify-center gap-2 w-full sm:w-44 h-12 sm:h-14
                   text-lg sm:text-2xl bg-customGreen text-white rounded-lg hover:bg-green-800
                  shadow-xl hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
            <LuGitFork />
            Github
          </button>
        </Link>
        <Link href="/resume">
        <button className="flex items-center justify-center gap-2 w-full sm:w-44 h-12 sm:h-14 
            bg-white dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-300 
            text-lg sm:text-2xl rounded-lg text-customGreen shadow-xl 
            hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
            <LuFileDown />
            Resume
        </button>
        </Link>
      </div>
    </section>
  );
}
