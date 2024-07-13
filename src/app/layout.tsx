import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const font = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
 title: "rides • Car marketplace",
 description: "Online car marketplace",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body className={cn("min-h-screen bg-background font-sans antialiased", font.variable)}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="pt-16">{children}</div>
     </div>
    </ThemeProvider>
   </body>
  </html>
 );
}
