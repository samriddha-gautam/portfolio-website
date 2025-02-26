import React from 'react'
import Image from 'next/image'
import ProfileImage from './profileImage'
import { useState, useEffect } from "react";


export default function main() {
  
  const [hoverTime, setHoverTime] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (hovering) {
      interval = setInterval(() => {
        setHoverTime((prev) => (prev >= 360 ? 360 : prev + 5));
      }, 50); // Adjust speed if needed
    } else {
      setHoverTime(0); // Reset when not hovering
    }

    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <section className="pt-20">
        <div className="flex flex-row items-center justify-between max-w-4xl mx-32 p-3 space-x-6">
          <div className="flex-1">
            <h2 className="text-3xl mb-2">Hey There!👋🏻</h2>
            <p className="md:text-4xl whitespace-nowrap">
            I AM <span className="text-green-600">SAMRIDDHA GAUTAM</span></p>
          </div>
          <ProfileImage />
        </div>
    </section>
  )
}

