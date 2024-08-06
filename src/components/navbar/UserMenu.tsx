"use client";
import useUserMenu from "@/hooks/useUserMenu";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Cog, Heart, LogOut, User2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

type UserMenuProps = {
 image: string | null;
 username: string | null;
 fName: string | null;
};

function MenuItem({ icon, text }: { icon?: JSX.Element; text?: string }) {
 return (
  <div
   className={cn("w-full py-2 px-4 flex items-center gap-2 transition-colors duration-300", icon && "hover:bg-muted cursor-pointer")}
   tabIndex={0}
  >
   {icon}
   <span>{text}</span>
  </div>
 );
}

const UserMenu = ({ image, username, fName }: UserMenuProps) => {
 const { loadingImg, setLoadingImg, menuRef, onMenuClick, showMenu } = useUserMenu();
 const { theme } = useTheme();
 const darkMode = theme === "dark";
 return (
  <>
   <div className="relative flex flex-col">
    <button onClick={onMenuClick} className="rounded-full">
     {loadingImg && (
      <div className="w-[1.7rem] h-[1.7rem] sm:w-[2.05rem] sm:h-[2.05rem] bg-gray-300 dark:bg-gray-700 rounded-full absolute" />
     )}
     {image ? (
      <div className="relative w-[1.7rem] h-[1.7rem] sm:w-[2.05rem] sm:h-[2.05rem]">
       <Image
        src={image}
        alt="profile"
        fill
        className={cn("rounded-full", loadingImg && "w-0 h-0 opacity-0 absolute")}
        sizes="32px"
        onLoad={() => setLoadingImg(false)}
       />
      </div>
     ) : (
      <div
       className="
    w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xl"
      >
       {username?.charAt(0).toUpperCase() || fName?.charAt(0).toUpperCase() || ""}
      </div>
     )}
    </button>
    {showMenu && (
     <div
      className="absolute bg-primary-foreground border py-2 top-9 rounded-md right-0 min-w-[160px] flex flex-col items-start overflow-x-hidden text-sm md:text-base"
      ref={menuRef}
     >
      {(username || fName) && (
       <>
        <MenuItem text={username || fName || "User"} />
        <div className="w-full bg-border h-[1px] my-2 scale-150" />
       </>
      )}
      <MenuItem icon={<Heart size={20} />} text="Favorites" />
      <MenuItem icon={<User2 size={20} />} text="Profile" />
      <MenuItem icon={<Cog size={20} />} text="Settings" />
      <div className="w-full bg-border h-[1px] my-2 scale-150" />
      <MenuItem icon={<LogOut size={20} />} text="Logout" />
     </div>
    )}
   </div>
  </>
 );
};

{
 /* <UserButton
          appearance={{
           baseTheme: darkMode ? dark : undefined,
          }}
         /> */
}

export default UserMenu;
