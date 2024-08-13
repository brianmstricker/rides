"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const page = () => {
 const { theme } = useTheme();
 const darkMode = theme === "dark";
 return (
  <div className="grow flex items-center justify-center">
   <SignIn
    appearance={{
     baseTheme: darkMode ? dark : undefined,
    }}
   />
  </div>
 );
};
export default page;
