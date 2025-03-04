"use client";
import { useEffect, useState } from "react";
import { LuFlashlight,LuFlashlightOff } from "react-icons/lu";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 px-2 py-2 transition-all duration-200 rounded-full"
    >
      {theme === "light" ? <LuFlashlightOff size={22}/> : <LuFlashlight size={22}/>}
    </button>
  );
}
