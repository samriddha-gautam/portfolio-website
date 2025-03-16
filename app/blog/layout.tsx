"use client";
import "./blog.css"
import { useEffect } from "react";
import { usePathname } from "next/navigation";


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