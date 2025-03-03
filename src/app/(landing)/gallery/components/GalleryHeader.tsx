"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/src/components/icons";
import { motion } from "framer-motion";

interface GalleryHeaderProps {
	onSearch: (query: string) => void;
}

export default function GalleryHeader({ onSearch }: GalleryHeaderProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<motion.div
			className="relative w-full max-w-2xl mx-auto my-6"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
		>
			{/* Search Bar */}
			<Input
				type="text"
				placeholder="🔍 Search albums..."
				value={searchQuery}
				onChange={handleSearch}
				variant="flat"
				size="lg"
				color="default"
				endContent={
					<SearchIcon className="text-gray-500 group-hover:text-primary transition-all duration-300" />
				}
			/>
		</motion.div>
	);
}
