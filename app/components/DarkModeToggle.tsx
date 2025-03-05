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
      className="transition-all duration-200 ease-in-out border-2 rounded-3xl p-[2.8px] hover:text-customGreen border-customBlack dark:border-white"
    >
      {theme === "light" ? <LuFlashlightOff size={24}/> : <LuFlashlight size={24}/>}
    </button>
  );
}
