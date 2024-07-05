const BentoGrid = () => {
 return (
  <div className="grid grid-cols-3 grid-rows-3 h-[50vh] min-h-[455px] gap-4">
   <div className="row-span-2 border">first</div>
   <div className="col-span-2 border">second</div>
   <div className="border">third</div>
   <div className="border">fourth</div>
   <div className="col-span-2 border">fifth</div>
   <div className="border">sixth</div>
  </div>
 );
};
export default BentoGrid;
