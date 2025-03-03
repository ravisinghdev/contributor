"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
	isOpen: boolean;
	toggleSidebar: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};
