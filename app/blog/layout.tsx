"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./blog.css"
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs",
};


export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname]);
  return <>{children}</>;
  }