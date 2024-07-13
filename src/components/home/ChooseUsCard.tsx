import { LucideProps } from "lucide-react";

const ChooseUsCard = ({
 title,
 icon: Icon,
 description,
 color,
}: {
 title: string;
 icon: React.ComponentType<LucideProps>;
 description: React.ReactNode;
 color: string;
}) => {
 return (
  <div className="border px-4 py-3 rounded-md shadow">
   <div className="bg-black/5 dark:bg-white/5 w-fit rounded-md p-2">{Icon && <Icon size={40} className={color} />}</div>
   <h2 className="text-2xl font-bold mt-3">{title}</h2>
   <div className="mt-2">{description}</div>
  </div>
 );
};
export default ChooseUsCard;
