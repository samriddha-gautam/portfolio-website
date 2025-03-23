// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import StarryBackground from "./components/StarryBackground";
import "./globals.css";
import { Comfortaa } from 'next/font/google';

// Initialize the font
const comfortaaFontClass = Comfortaa({
  weight: ['300','700'], 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${comfortaaFontClass.className}  text-dark-customBackground dark:text-customWhite transition-all duration-200 ease-in-out`}
      >
        <StarryBackground />
        {children}
      </body>
    </html>
  );
}