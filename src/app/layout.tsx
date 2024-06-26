import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const font = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
 title: "rides • Online car marketplace",
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
     <Navbar />
     <div className="contain pt-24">{children}</div>
    </ThemeProvider>
   </body>
  </html>
 );
}
