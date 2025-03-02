"use client";
// import Image from 'next/image'
import Navbar from "./components/navbar";
import Main from "./components/main";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";


export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* This ensures that the About section starts below the fold */}
      <Main />
      <div className="min-h-screen "></div>  
        <main>
          <section id="about" className="py-10 scroll-mt-24">
            <AboutMe />
          </section>
          <section id="projects" className="py-10 scroll-mt-24">
            <Projects/>
          </section>
          <section id="contact" className="py-10 scroll-mt-24">
            <Contact/>
          </section>
        </main>
    </div>
  );
}
