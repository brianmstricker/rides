const PopularSection = () => {
 return (
  <section className="contain mt-20">
   <h2 className="text-center text-[7vw] sm:text-4xl font-bold">Popular vehicles</h2>
   <ul className="flex justify-center items-center gap-6 mt-4 border-b [&>*]:pb-2">
    <li className="border-b-blue-600 border-b-[3px]">Popular</li>
    <li className="border-b-[3px] border-transparent">Electric</li>
    <li className="border-b-[3px] border-transparent">SUV</li>
    <li className="border-b-[3px] border-transparent">Truck</li>
   </ul>
  </section>
 );
};
export default PopularSection;
