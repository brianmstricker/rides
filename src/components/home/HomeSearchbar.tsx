import { Search } from "lucide-react";

const HomeSearchBar = () => {
 return (
  <div className="mt-4 bg-background dark:brightness-125 border rounded-full h-12 min-[500px]:h-14 flex w-[90vw] max-w-[inherit] mx-auto">
   <input
    type="text"
    placeholder="Search..."
    className="text-xs sm:text-base bg-transparent rounded-full text-foreground px-4 min-w-0 w-full block min-[500px]:hidden"
   />
   <input
    type="text"
    placeholder="By make"
    className="text-xs sm:text-base bg-transparent rounded-full text-foreground px-4 text-center min-w-0 focus:placeholder:opacity-0 hidden min-[500px]:block"
   />
   <input
    type="text"
    placeholder="By model"
    className="text-xs sm:text-base bg-transparent rounded-full text-foreground px-4 text-center min-w-0 focus:placeholder:opacity-0 hidden min-[500px]:block"
   />
   <input
    type="text"
    placeholder="By price"
    className="text-xs sm:text-base bg-transparent rounded-full text-foreground px-4 text-center min-w-0 focus:placeholder:opacity-0 hidden min-[500px]:block"
   />
   <button className="bg-mainPurple text-white rounded-full px-2 sm:px-4 flex items-center justify-center gap-2 text-xs sm:text-base">
    <Search size={18} />
    <span>Search</span>
   </button>
  </div>
 );
};
export default HomeSearchBar;
