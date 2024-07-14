"use client";
import { useEffect, useState } from "react";

export function ScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
 const [mounted, setMounted] = useState(false);
 const [loading, setLoading] = useState(true);
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
   setLoading(false);
  }
 }, [mounted]);
 if (!mounted) return null;
 return (
  <div>
   {loading && <div className="fixed inset-0 z-[9999] bg-background" />}
   {children}
  </div>
 );
}
