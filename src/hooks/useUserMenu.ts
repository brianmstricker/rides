import { useCallback, useEffect, useRef, useState } from "react";

export default function useUserMenu() {
 const [loadingImg, setLoadingImg] = useState(true);
 const [showMenu, setShowMenu] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);
 const onMenuClick = useCallback(() => {
  if (loadingImg) return;
  setShowMenu((prev) => !prev);
 }, [loadingImg]);
 useEffect(() => {
  if (!showMenu) return;
  const handleClick = (e: MouseEvent) => {
   if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
    setShowMenu(false);
   }
  };
  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
 }, [showMenu]);
 useEffect(() => {
  if (!showMenu || !menuRef.current) return;
  const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
   'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  const handleKeyDown = (e: KeyboardEvent) => {
   if (e.key === "Tab") {
    if (e.shiftKey) {
     if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
     }
    } else {
     if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
     }
    }
   }
  };
  focusableElements.forEach((element) => {
   element.addEventListener("keydown", handleKeyDown);
  });
  firstFocusableElement.focus();
  return () => {
   focusableElements.forEach((element) => {
    element.removeEventListener("keydown", handleKeyDown);
   });
  };
 }, [showMenu]);
 useEffect(() => {
  if (!showMenu) return;
  const handleEscape = (e: KeyboardEvent) => {
   if (e.key === "Escape") {
    setShowMenu(false);
   }
  };
  document.addEventListener("keydown", handleEscape);
  return () => document.removeEventListener("keydown", handleEscape);
 }, [showMenu]);
 return { loadingImg, setLoadingImg, showMenu, menuRef, onMenuClick, setShowMenu };
}
