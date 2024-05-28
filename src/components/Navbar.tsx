import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggleButton from "./ThemeToggleButton";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

const Navbar = () => {
 // todo: add border on scroll border-b-4 border-b-purple-600
 return (
  <div className="bg-primary-foreground h-20 fixed top-0 w-full">
   <div className="contain flex justify-between items-center h-full">
    <Link href="/" className="text-3xl font-bold tracking-wide italic relative group">
     r<span className="text-purple-600">i</span>des
     <div className="w-full bg-purple-600 h-1 absolute scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
    </Link>
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
