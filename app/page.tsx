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
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <BlobBackground>
    <div className="z-50 ">
      <Navbar />
        <main className="md:mx-24">
          <section className="relative min-h-screen">
            <Main />
          </section>
          <FadeInSection>
          <section id="about" className="py-6 scroll-mt-14">
            <AboutMe />
          </section>
          </FadeInSection>
          <FadeInSection>
          <section id="projects" className="py-6 scroll-mt-14">
            <Projects/>
          </section>
          </FadeInSection>
          <FadeInSection>
          <section id="contact" className="py-6 scroll-mt-14">
            <Contact/>
          </section>
          </FadeInSection> 
          <ScrollToTop />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    </BlobBackground>
  );
}
