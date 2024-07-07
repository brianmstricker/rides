import TypeCard from "./TypeCard";

const BrowseByType = () => {
 return (
  <div className="mt-4">
   <h2 className="text-center text-2xl font-medium">Browse by type</h2>
   <div className="flex gap-4 mt-4 justify-center">
    <TypeCard />
    <TypeCard />
    <TypeCard />
    <TypeCard />
    <TypeCard />
    <TypeCard />
    <TypeCard />
    <TypeCard />
   </div>
  </div>
 );
};
export default BrowseByType;
