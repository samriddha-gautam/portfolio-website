"use client"
import Link from "next/link";

export default function Blog() {
    return (
      <section id="blog" className="m-8">
        {/* <Navbar />       */}
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-customGreen font-bold text-5xl">Coming Soon....</h1>
        <Link href="/" className="w-[50%] text-center text-3xl bg-white text-black p-4 m-3 rounded-lg shadow-lg font-bold dark:hover:bg-gray-300">
          <button>GO BACK</button>
        </Link>
        </div>
      </section>
    );
  }
  