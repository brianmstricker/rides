import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggleButton from "../providers/ThemeToggleButton";
import { Button } from "../ui/button";
import NavSearch from "./NavSearch";
import LoginButton from "./LoginButton";

type NavOption = {
 name: string;
 href: string;
 submenu?: boolean;
};

const NavOptions: NavOption[] = [
 { name: "Popular models", href: "popular", submenu: true },
 { name: "New cars", href: "new", submenu: true },
 { name: "Sell your car", href: "sell" },
];

const Navbar = () => {
 // todo: add border on scroll border-b-4 border-b-mainPurple
 return (
  <div className="bg-primary-foreground text-foreground h-16 fixed top-0 w-full z-10">
   <div className="contain h-full">
    <div className="flex justify-between items-center h-full">
     <Link href="/" className="text-3xl font-bold tracking-wide italic relative group">
      <span className="px-0.5 group-hover:text-mainPurple transition-colors duration-300">rides</span>
      <div className="w-full bg-mainPurple h-1 absolute scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
     </Link>
     <div className="flex items-center gap-3 sm:gap-8 text-[15px]">
      {NavOptions.map((option) => (
       <div className="relative group" key={option.name}>
        <Link
         href={option.href}
         className={cn(
          "hidden sm:flex items-center gap-[2px] whitespace-nowrap transition-all duration-300 py-1 px-3 cursor-pointer select-none group-hover:bg-secondary",
          option.submenu ? "rounded-t-md" : "rounded-md"
         )}
        >
         <span>{option.name}</span>
         {option.submenu && (
          <ChevronDown
           size={18}
           className="mt-[2px] group-hover:translate-y-[2px] group-hover:scale-[115%] transition-transform duration-300"
          />
         )}
        </Link>
        {option.submenu && (
         <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute bg-primary-foreground p-4 left-1/2 -translate-x-1/2 min-w-max rounded-md pointer-events-none group-hover:pointer-events-auto">
          <div className="grid grid-cols-3">
           {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>Submenu {i}</div>
           ))}
          </div>
         </div>
        )}
       </div>
      ))}
      <NavSearch />
     </div>
     <div className="flex items-center gap-3">
      <LoginButton />
      {/* <Button asChild variant="main">
       <Link scroll={false} href="/sign-in" className="text-[15px]">
        Login
       </Link>
      </Button> */}
      <ThemeToggleButton />
     </div>
    </div>
   </div>
  </div>
 );
};
export default Navbar;
