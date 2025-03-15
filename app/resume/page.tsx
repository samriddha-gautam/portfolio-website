"use client"
import Navbar from "@/app/components/navbar";
import BlobBackground from "../components/BlobBackground";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { LuCloudDownload } from "react-icons/lu";
import Footer from "../components/footer";

  export default function Resume() {

    return (
      <BlobBackground >
        <Navbar />      
        <section id="resume" className="m-8 overflow-hidden">
        <a href="/pdf/resume.pdf" download="resume.pdf" className=" m-8 flex items-center justify-center">
            <button className="flex items-center justify-center gap-2 bg-customGreen p-2 rounded-lg w-[30%] text-lg md:text-2xl">
              Download Resume
              <LuCloudDownload 
                size={32} 
              />
              </button>
          </a> 

          <div className=" mt-8 p-12 shadow-lg rounded-lg bg-white text-black">
            <h1 className="text-center text-2xl md:text-7xl font-sans">
              Samriddha Gautam
            </h1>
            <h6 className="text-center text-lg font-semibold text-gray-600">
              Kathmandu,Nepal
            </h6>
            <div className="hidden md:flex justify-center items-center text-sm">
              <ul className="flex gap-4 ">
              <li className="hover:text-customGreen transition-all ease-in-out">
                  <a 
                  href="https://mail.google.com/mail/?view=cm&to=samriddhagautam2023@gmail.com&su=Hello%20There" 
                  target="_blank" 
                  rel="noopener noreferrer"  
                  className="flex items-center gap-1">
                    <MdEmail />
                    samriddhagautam2023@gmail.com
                  </a>
                </li>
                <li>|</li>
                <li className="hover:text-customGreen transition-all ease-in-out">
                  <a 
                  href="https://www.linkedin.com/in/samriddh-gautam-33624b2ba"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1">
                    <FaLinkedin/>
                    Samriddha Gautam
                  </a>
                </li>
                <li>|</li>
                <li className="hover:text-customGreen transition-all ease-in-out">
                  <a 
                  href="https://www.github.com/samriddha-gautam"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1">
                    <ImGithub />
                    samriddha-gautam
                  </a>
                </li>
                <li>|</li>
                <li className="hover:text-customGreen transition-all ease-in-out">
                  <a 
                  href="https://www.instagram.com/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1">
                    <RiInstagramFill />
                    _.samriddha_
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="pt-16">
              <h2 className="text-xl md:text-2xl font-sans font-bold">
                Work<span className="text-customGreen">Experience</span>
                <hr className="border-t-[1.5px] border-black"/>
              </h2>
              <ul className="flex flex-col gap-4 pt-4 ml-3">
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Google (2022-<span className="text-customGreen">Present</span>)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Software Engineer
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Microsoft (2020-<span className="text-customGreen">2022</span>)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Project Manager
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Nvidia (2018-<span className="text-customGreen">2020</span>)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Intern
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>

              </ul>
            </div> */}
            <div className="pt-16">
              <h2 className="text-xl md:text-2xl font-sans font-bold">
                My<span className="text-customGreen">Projects</span>
                <hr className="border-t-[1.5px] border-black"/>
              </h2>
              <ul className="flex flex-col gap-4 pt-4 ml-3">
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Hotel Reservation
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Django
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Email Management System
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Python
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Instagram Clone 
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    React
                  </h5>
                  <ul className="flex flex-col gap-2 pt-2 list-disc ml-5">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>

              </ul>
            </div>
            <div className="pt-16">
              <h2 className="text-xl md:text-2xl font-sans font-bold">
                Technical<span className="text-customGreen">Skills</span>
                <hr className="border-t-[1.5px] border-black"/>
              </h2>
              <ul className="flex flex-col gap-2 pt-3">
              <li>
                  <strong>Expertise: </strong>
                  Web Development 
                </li>
                <li>
                  <strong>Languages: </strong>
                  C/C++, Javascript, Python, PHP 
                </li>
                <li>
                  <strong>Libraries/Frameworks: </strong>
                  React, Node.js, NEXT.js, Django, Laravel
                </li>
                <li>
                  <strong>Database: </strong>
                  MySQL, SQlite, Firebase, MSAccess
                </li>
                <li>
                  <strong>Softwares/Platforms: </strong>
                  AWS, Git/Github, Docker, Vercel, VsCode
                </li>
              </ul>
            </div>
            <div className="pt-16">
              <h2 className="text-xl md:text-2xl font-sans font-bold">
                My<span className="text-customGreen">Education</span>
                <hr className="border-t-[1.5px] border-black"/>
              </h2>
              <ul className="flex flex-col gap-4 pt-4 ml-3">
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Kathmandu Bernhardt College(2022-present)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                   BSC.CSIT <strong><strong></strong></strong> 
                  </h5>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    Kathmandu Model College(2019-2021)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    Science - <strong><strong>3.39 GPA (A) </strong></strong> 
                  </h5>
                  
                </li>
                <li className="flex flex-col">
                  <h3 className="flex text-lg md:text-xl  font-sans font-semibold text-gray-700">
                    LRI School(2019)
                  </h3>
                  <h5 className="text-sm md:text-base text-green-900 font-normal">
                    SEE -  <strong><strong>3.60 GPA (A+) </strong></strong> 
                  </h5>
                </li>
              </ul>
            </div>
            <footer className="hidden mt-24 md:flex justify-between items-center w-full">
              <h2 className="text-stone-600">March,2025</h2>
              <h1 className="text-stone-600 mx-auto">Samriddha Gautam</h1> 
              <h2 className="text-end pr-4 text-stone-600">1</h2>
            </footer>

          </div>
          <a href="/pdf/resume.pdf" download="resume.pdf" className=" m-8 flex items-center justify-center">
            <button className="flex items-center justify-center gap-2 bg-customGreen p-2 rounded-lg w-[30%] text-lg md:text-2xl">
              Download Resume
              <LuCloudDownload 
                size={32} 
              />
              </button>
          </a> 
          <Footer/>
        </section>
      </BlobBackground>
    );
  }
  