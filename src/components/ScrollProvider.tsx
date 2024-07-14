"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
 const [mounted, setMounted] = useState(false);
 const [isRestoring, setIsRestoring] = useState(true);
 const path = usePathname();
 useEffect(() => setMounted(true), []);
 useEffect(() => {
  const saveScrollPosition = () => {
   sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };
  const resetScrollPosition = () => {
   sessionStorage.removeItem("scrollPosition");
  };
  window.addEventListener("beforeunload", saveScrollPosition);
  window.addEventListener("popstate", saveScrollPosition);
  return () => {
   window.removeEventListener("beforeunload", saveScrollPosition);
   window.removeEventListener("popstate", saveScrollPosition);
  };
 }, []);
 useEffect(() => {
  if (mounted) {
   const scrollPosition = sessionStorage.getItem("scrollPosition");
   const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
   if (scrollPosition && navigationEntries[0]?.type === "reload") {
    window.scrollTo(0, parseFloat(scrollPosition));
   } else {
    console.log("here");
    window.scrollTo(0, 0);
   }
   setIsRestoring(false);
  }
 }, [mounted, path]);
 if (!mounted) return null;
 return <div style={{ visibility: isRestoring ? "hidden" : "visible" }}>{children}</div>;
}
