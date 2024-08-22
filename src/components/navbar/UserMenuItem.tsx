"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

const UserMenuItem = ({
 icon,
 text,
 link,
 setShowMenu,
}: {
 icon?: JSX.Element;
 text?: string;
 link?: string;
 setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 return (
  <>
   {link ? (
    <Link
     href={link}
     className={cn("w-full py-2 px-4 flex items-center gap-2 transition-colors duration-300", icon && "hover:bg-muted cursor-pointer")}
     tabIndex={0}
     onClick={() => setShowMenu && setShowMenu(false)}
    >
     {icon}
     <span>{text}</span>
    </Link>
   ) : (
    <div
     className={cn("w-full py-2 px-4 flex items-center gap-2 transition-colors duration-300", icon && "hover:bg-muted cursor-pointer")}
     tabIndex={0}
     onClick={() => setShowMenu && setShowMenu(false)}
    >
     {icon}
     <span>{text}</span>
    </div>
   )}
  </>
 );
};
export default UserMenuItem;
