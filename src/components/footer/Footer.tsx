"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
 const path = usePathname();
 if (path !== "/") return null;
 return (
  <footer className="border-t h-20">
   <div className="contain">Footer</div>
  </footer>
 );
};
export default Footer;
