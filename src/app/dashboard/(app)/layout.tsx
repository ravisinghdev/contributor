"use client";

import React, { ReactNode } from "react";
// import Sidebar from "./components/Sidebar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSidebar } from "@/src/context/sidebar-context";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { isOpen } = useSidebar();

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Wrapper */}
			<div
				className={`flex flex-col flex-1 transition-all duration-300 ${
					isOpen ? "ml-64" : "ml-0"
				}`}
			>
				{/* Navbar */}
				<Navbar />

				{/* Page Content */}
				<main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
