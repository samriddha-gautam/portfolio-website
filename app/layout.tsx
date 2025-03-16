// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import StarryBackground from "./components/StarryBackground";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="bg-customBackground dark:bg-dark-customBackground text-dark-customBackground dark:text-customWhite transition-all duration-200 ease-in-out"
      >
        <StarryBackground />
        {children}
      </body>
    </html>
  );
}
