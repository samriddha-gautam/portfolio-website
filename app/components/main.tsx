import React from 'react'
import Image from 'next/image'


function main() {
  return (
    <main className="pt-20">
        <div className="flex flex-row items-center justify-between max-w-4xl mx-32 p-3 space-x-6">
          <div className="flex-1">
            <h2 className="text-3xl mb-2">Hey There!👋🏻</h2>
            <p className="md:text-4xl whitespace-nowrap">
            I AM <span className="text-green-600">SAMRIDDHA GAUTAM</span></p>
          </div>
          <div className="w-48 md:w-64 lg:w-80 flex-shrink-0">
            <div className="w-100 h-80 rounded-full border-4 
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
        </div>
    </main>
  )
}

export default main;