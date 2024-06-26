import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggleButton from "./ThemeToggleButton";
import NavSearch from "./navbar/NavSearch";

const Navbar = () => {
 // todo: add border on scroll border-b-4 border-b-mainPurple
 return (
  <div className="bg-primary-foreground h-20 fixed top-0 w-full">
   <div className="contain flex justify-between items-center h-full">
    <Link href="/" className="text-3xl font-bold tracking-wide italic relative group">
     <span className="group-hover:text-mainPurple transition-colors duration-300">rides</span>
     <div className="w-full bg-mainPurple h-1 absolute scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
    </Link>
    <div className="flex items-center gap-3 sm:gap-8">
     {/* todo: make these links or dropdown menus */}
     <div className="hidden sm:block whitespace-nowrap">New cars</div>
     <div className="hidden sm:block whitespace-nowrap">Used cars</div>
     <div className="hidden sm:block whitespace-nowrap">Sell/Trade</div>
     <NavSearch />
    </div>
    <div className="flex items-center gap-3">
     <Button variant="main" className="text-[16px]">
      Login
     </Button>
     <ThemeToggleButton />
    </div>
   </div>
  </div>
 );
};
export default Navbar;
