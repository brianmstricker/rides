"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const NavSearch = () => {
 const [isExpandSearch, setIsExpandSearch] = useState(false);
 const [searchText, setSearchText] = useState("");
 const searchRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const handleClickOutside = (e: any) => {
   if (searchRef.current && !searchRef.current.contains(e.target) && searchText.length === 0) {
    setIsExpandSearch(false);
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [searchText.length]);
 function handleSearchClick() {
  if (!isExpandSearch) {
   setIsExpandSearch(true);
  }
 }
 return (
  <div
   className={cn("flex items-center relative w-[36px] transition-all duration-300 -left-2", isExpandSearch && "w-[200px]")}
   ref={searchRef}
  >
   <Input
    placeholder="search"
    className={cn("transition-all duration-300 scale-0 opacity-0 w-0 absolute", isExpandSearch && "scale-100 opacity-100 w-full")}
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
   />
   <Button
    variant="ghost"
    className={cn("!px-2 transition-all duration-300 absolute right-0", isExpandSearch && "right-0")}
    onClick={handleSearchClick}
   >
    <Search size={20} />
   </Button>
  </div>
 );
};
export default NavSearch;
