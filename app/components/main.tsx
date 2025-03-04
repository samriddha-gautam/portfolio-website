import React from 'react'
import Image from 'next/image'
import ProfileImage from './profileImage'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'lucide-react';


export default function main() {
  return (
    <section className="pt-20">
        <div className="flex flex-row items-center justify-between max-w-4xl mx-32 p-3">
          <div className="flex-1">
            <div className='flex'>
              <h2 className="text-3xl mb-2">Hey There!</h2>
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-3xl origin-bottom-right">
                    👋🏻
              </motion.span>
            </div>
            <p className="md:text-4xl whitespace-nowrap">
            I AM <span className="text-green-600">SAMRIDDHA GAUTAM</span></p>
          </div>
          <ProfileImage />
        </div>
        <button>
          <Link href='/resume'/>
        </button>
    </section>
  )
}

