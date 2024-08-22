"use client";
import useUserMenu from "@/hooks/useUserMenu";
import { cn } from "@/lib/utils";
import { SignOutButton, useAuth, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Cog, DollarSign, Heart, LogOut, Pen, Shield, User2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { toast } from "sonner";
import UserMenuItem from "./UserMenuItem";

type UserMenuProps = {
 image: string | null;
 username: string | null;
 fName: string | null;
 isAdmin: boolean;
};

const UserMenu = ({ image, username, fName, isAdmin }: UserMenuProps) => {
 const { loadingImg, setLoadingImg, menuRef, onMenuClick, showMenu, setShowMenu } = useUserMenu();
 const { signOut } = useAuth();
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
      className="absolute bg-primary-foreground border py-2 top-9 rounded-md right-0 min-w-[160px] flex flex-col items-start overflow-x-hidden text-sm md:text-base px-0.5"
      ref={menuRef}
     >
      {(username || fName) && (
       <>
        <UserMenuItem setShowMenu={setShowMenu} text={username || fName || "User"} />
        <div className="w-full bg-border h-[1px] my-2 scale-150" />
       </>
      )}
      {isAdmin && (
       <>
        <UserMenuItem setShowMenu={setShowMenu} icon={<Shield size={20} />} text="Admin" link="admin" />
        <div className="w-full bg-border h-[1px] my-2 scale-150" />
       </>
      )}
      <UserMenuItem setShowMenu={setShowMenu} icon={<Heart size={20} />} text="Favorites" link="favorites" />
      <UserMenuItem setShowMenu={setShowMenu} icon={<User2 size={20} />} text="Profile" link="profile" />
      <UserMenuItem setShowMenu={setShowMenu} icon={<Cog size={20} />} text="Settings" link="settings" />
      <div className="w-full bg-border h-[1px] my-2 scale-150" />
      <UserMenuItem setShowMenu={setShowMenu} icon={<DollarSign size={20} />} text="Sell vehicle" link="sell" />
      <div className="w-full bg-border h-[1px] my-2 scale-150" />
      <button
       className="w-full"
       onClick={async () => {
        await signOut();
        toast("Logged out successfully.");
       }}
      >
       <UserMenuItem setShowMenu={setShowMenu} icon={<LogOut size={20} />} text="Logout" />
      </button>
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
