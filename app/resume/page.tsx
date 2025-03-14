"use client"
import Navbar from "@/app/components/navbar";
import BlobBackground from "../components/BlobBackground";

export default function Resume() {
    return (
      <BlobBackground >
        <Navbar />      
        <section id="resume" className="m-8 overflow-hidden">
          <div className="mt-8 p-6 border-2 rounded-lg bg-white text-black">
            <h2 className="text-center text-2xl md:text-7xl font-sans">
              Samriddha <span className="text-black font-bold">Gautam</span>
            </h2>
            <h6 className="text-center text-lg font-semibold text-gray-600">
              Kathmandu,Nepal
            </h6>
            <div className="hidden md:inline-flex ">
              <ul className="flex gap-4 justify-center">
                <li>samriddhagautam2023@gmail.com</li>
                <li>|</li>
                <li>Samriddha Gautam</li>
                <li>|</li>
                <li>_.samriddha_</li>
                <li>|</li>
                <li>Samriddha Gautam</li>
              </ul>
            </div>
          </div> 
        </section>
      </BlobBackground>
    );
  }
  