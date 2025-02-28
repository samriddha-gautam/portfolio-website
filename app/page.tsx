"use client";
// import Image from 'next/image'
import Navbar from "./components/navbar";
import Main from "./components/main";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Blog from "./blog/page";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
        <Blog />
      </main>
    </div>
  );
}
