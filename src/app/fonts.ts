import { Inter, Ultra } from "next/font/google";

export const mainFont = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const headerFont = Ultra({ subsets: ["latin"], variable: "--font-header", weight: "400" });
