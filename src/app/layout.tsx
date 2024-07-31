import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import Navbar from "@/components/navbar/Navbar";
import { headerFont, mainFont } from "./fonts";
import Footer from "@/components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
 title: "rides • Car marketplace",
 description: "Online car marketplace",
};

export default function RootLayout({
 children,
 modal,
}: Readonly<{
 children: React.ReactNode;
 modal: React.ReactNode;
}>) {
 return (
  <ClerkProvider>
   <html lang="en" suppressHydrationWarning>
    <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased", mainFont.variable, headerFont.variable)}>
     <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <ScrollProvider>
       <div className="min-h-[100dvh] flex flex-col">
        <Navbar />
        <div className="pt-[6.75rem] min-[800px]:pt-16 overflow-hidden grow flex flex-col">
         {modal}
         {children}
        </div>
        <Footer />
       </div>
      </ScrollProvider>
     </ThemeProvider>
    </body>
   </html>
  </ClerkProvider>
 );
}
