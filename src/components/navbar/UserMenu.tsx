"use client";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

type UserMenuProps = {
 image: string | null;
};

const UserMenu = ({ image }: UserMenuProps) => {
 const [loadingImg, setLoadingImg] = useState(true);
 const [showMenu, setShowMenu] = useState(false);
 const { theme } = useTheme();
 const darkMode = theme === "dark";
 const onMenuClick = () => {
  if (loadingImg) return;
  setShowMenu((prev) => !prev);
 };
 return (
  <>
   <button onClick={onMenuClick} className="rounded-full">
    {loadingImg && <div className="w-[1.6rem] h-[1.6rem] sm:w-8 sm:h-8 bg-gray-300 dark:bg-gray-700 rounded-full absolute" />}
    {image ? (
     <div className="relative w-[1.6rem] h-[1.6rem] sm:w-8 sm:h-8">
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
      letter
     </div>
    )}
   </button>
  </>
  // <UserButton
  //  appearance={{
  //   baseTheme: darkMode ? dark : undefined,
  //  }}
  // />
 );
};
export default UserMenu;
