"use client";
import { useEffect, useState } from "react";

export function ScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
 const [mounted, setMounted] = useState(false);
 const [isRestoring, setIsRestoring] = useState(true);
 useEffect(() => setMounted(true), []);
 useEffect(() => {
  const saveScrollPosition = () => {
   sessionStorage.setItem("scrollPosition", window.scrollY.toString());
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
   if (scrollPosition) {
    window.scrollTo(0, parseFloat(scrollPosition));
   }
   setIsRestoring(false);
  }
 }, [mounted]);
 if (!mounted) return null;
 return <div style={{ visibility: isRestoring ? "hidden" : "visible" }}>{children}</div>;
}
