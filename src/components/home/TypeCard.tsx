import { LucideProps } from "lucide-react";

const TypeCard = ({ label, icon: Icon }: { label: string; icon: React.ComponentType<LucideProps> }) => {
 return (
  <div className="border border-border/10 dark:border-border bg-white/15 dark:bg-black/80 rounded-md p-2 min-w-[75px]">
   <Icon className="w-7 h-7 m-auto" />
   <div className="text-center mt-1.5 -mb-1">{label}</div>
  </div>
 );
};
export default TypeCard;
