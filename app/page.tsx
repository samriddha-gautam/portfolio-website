"use client";
// import Image from 'next/image'
import Navbar from "./components/navbar";
import Main from "./components/main";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";
import BlobBackground from "./components/BlobBackground";
import Footer from "./components/footer";


export default function Home() {
  return (
    <BlobBackground>
    <div className="z-50">
      <Navbar />
        <main>
          <section className="relative min-h-screen">
            <Main />
          </section>
          <section id="about" className="py-10 scroll-mt-20">
            <AboutMe />
          </section>
          <section id="projects" className="py-10 scroll-mt-20">
            <Projects/>
          </section>
          <section id="contact" className="py-10 scroll-mt-20">
            <Contact/>
          </section>
          <ScrollToTop />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    </BlobBackground>
  );
}
