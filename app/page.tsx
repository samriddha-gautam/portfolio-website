"use client";
// import Image from 'next/image'
import Navbar from "./components/navbar";
import Main from "./components/main";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Contact from "./components/contact";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <main>
        <AboutMe />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
