import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggleButton from "../providers/ThemeToggleButton";
import NavSearch from "./NavSearch";
import { currentUser } from "@clerk/nextjs/server";
import UserMenu from "./UserMenu";
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

const Navbar = async () => {
 // todo: add border on scroll border-b-4 border-b-mainPurple
 const user = await currentUser();
 return (
  <div className="bg-primary-foreground text-foreground h-16 top-0 w-full z-10 absolute min-[800px]:fixed">
   <div className="contain h-full">
    <div className="flex justify-between items-center h-full">
     <Link href="/" className="text-xl lg:text-3xl font-bold tracking-wide italic relative group">
      <span className="px-0.5 group-hover:text-mainPurple transition-colors duration-300">rides</span>
      <div className="w-full bg-mainPurple h-1 absolute scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
     </Link>
     <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 text-xs md:text-[15px] absolute left-1/2 -translate-x-1/2 translate-y-12 min-[800px]:translate-y-0 bg-primary-foreground py-3 min-[800px]:py-0 w-full min-[800px]:w-auto justify-center min-[800px]:justify-normal">
      {NavOptions.map((option) => (
       <div className="relative group" key={option.name}>
        <Link
         href={option.href}
         className={cn(
          "flex items-center gap-[2px] whitespace-nowrap transition-all duration-300 py-1 px-3 cursor-pointer select-none group-hover:bg-secondary",
          option.submenu ? "rounded-t-md rounded-b-md sm:rounded-b-none" : "rounded-md py-2"
         )}
        >
         <span className="block sm:hidden">{option.name.split(" ")[0]}</span>
         <span className="hidden sm:block">{option.name}</span>
         {option.submenu && (
          <ChevronDown
           size={18}
           className="hidden sm:block mt-[2px] group-hover:translate-y-[2px] group-hover:scale-[115%] transition-transform duration-300"
          />
         )}
        </Link>
        {option.submenu && (
         <div className="hidden sm:block transition-all duration-300 opacity-0 group-hover:opacity-100 absolute bg-primary-foreground p-4 left-1/2 -translate-x-1/2 min-w-max rounded-md pointer-events-none group-hover:pointer-events-auto">
          <div className="grid grid-cols-3">
           {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>Submenu {i}</div>
           ))}
          </div>
         </div>
        )}
       </div>
      ))}
      <div className="absolute -top-[1.3rem] right-[6.6rem] min-[800px]:static hidden min-[400px]:block">
       <NavSearch />
      </div>
     </div>
     <div className="flex items-center gap-3">
      {!!user ? <UserMenu /> : <LoginButton />}
      <ThemeToggleButton />
     </div>
    </div>
   </div>
  </div>
 );
};
export default Navbar;
