"use client";

import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="w-48 md:w-64 lg:w-80 flex-shrink-0">
    <div className="w-100 h-80 rounded-full border-[6px]
                  border-gray-300 overflow-hidden flex items-center 
                  justify-center hover:border-customGreen transition-colors duration-400 ease-in">
      <Image 
        src="/images/photo-profile.jpg" 
        alt="profile-photo"
        width={500} 
        height={500} 
        className="rounded-full cursor-pointer"
      />
    </div>
  </div>
  );
}
