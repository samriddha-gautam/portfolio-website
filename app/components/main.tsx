import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import { LuGitFork,LuFileDown  } from "react-icons/lu";

export default function Main() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pl-32"
    >
      <div className="pb-8">
        <div className="flex items-center gap-6 text-4xl">
          <h2 className="text-left">Hey There  !!</h2>
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block origin-bottom-right"
          >
            👋🏻
          </motion.span>
        </div>

        <p className="pt-6 text-left text-4xl">
          I AM <span className="text-customGreen">SAMRIDDHA GAUTAM</span>
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex gap-6">
        <Link href="https://github.com/samriddha-gautam/portfolio-website">
          <button className="flex items-center justify-center gap-1 w-44 h-14 text-2xl bg-customGreen text-white rounded-lg hover:bg-green-800 shadow-xl hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
            <LuGitFork />
            Github
          </button>
        </Link>
        <Link href="/resume">
          <button className="flex items-center justify-center gap-1 w-44 h-14 bg-white hover:bg-gray-200 text-2xl rounded-lg text-customGreen hover:dark:bg-gray-300 shadow-xl hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
            <LuFileDown/>
            Resume
          </button>
        </Link>
      </div>

    </section>
  ); 
}
