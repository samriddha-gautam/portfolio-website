// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import StarryBackground from "./components/StarryBackground";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Samriddha Gautam",
//   description: "Portfolio Website",
// };

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
