import { Roboto as FontRoboto, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // Add desired font weights
	variable: "--font-sans",
});

export const fontRoboto = FontRoboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Add weights as per need
	variable: "--font-roboto", // Ensure a CSS variable for consistency
});
