import { Search } from "lucide-react";

const HomeSearchbar = () => {
 return (
  <div className="mt-4 bg-white rounded-full h-14 flex">
   <input
    type="text"
    placeholder="By make"
    className="bg-transparent rounded-full text-black px-4 text-center min-w-0 focus:placeholder:opacity-0"
   />
   <input
    type="text"
    placeholder="By model"
    className="bg-transparent rounded-full text-black px-4 text-center min-w-0 focus:placeholder:opacity-0"
   />
   <input
    type="text"
    placeholder="By price"
    className="bg-transparent rounded-full text-black px-4 text-center min-w-0 focus:placeholder:opacity-0"
   />
   <button className="bg-mainPurple text-white rounded-full px-4 mr-2 my-1 flex items-center justify-center gap-2">
    <Search size={18} />
    <span>Search</span>
   </button>
  </div>
 );
};
export default HomeSearchbar;
