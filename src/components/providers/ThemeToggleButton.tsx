"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function ThemeToggleButton() {
 const [mounted, setMounted] = useState(false);
 const { setTheme, theme } = useTheme();
 useEffect(() => setMounted(true), []);
 function toggleTheme() {
  setTheme(theme === "light" ? "dark" : "light");
 }
 if (!mounted) return <div className="w-[24px] h-[24px] sm:h-[36px] sm:w-[36px] bg-secondary rounded-md animate-pulse" />;
 return (
  <div>
   <Button onClick={toggleTheme} variant="outline" size="icon" className="h-8 w-8 sm:w-9 sm:h-9 sm:px-4 py-2">
    <Sun className="h-[1rem] w-[1rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-[1rem] w-[1rem]  sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
   </Button>
  </div>
 );
}

export default ThemeToggleButton;
