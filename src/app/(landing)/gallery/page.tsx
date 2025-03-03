"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import toast, { Toaster } from "react-hot-toast";

// Framer Motion for animations
import { motion } from "framer-motion";
import { SearchIcon } from "@/src/components/icons";

// Dummy Album Data
const albums = [
	{
		name: "Events",
		folder: "events",
		images: [
			"https://placehold.co/600x400/27272A/white?text=Event+1",
			"https://placehold.co/600x400/27272A/white?text=Event+2",
		],
	},
	{
		name: "Projects",
		folder: "projects",
		images: [
			"https://placehold.co/600x400/27272A/white?text=Projects+1",
			"https://placehold.co/600x400/27272A/white?text=Projects+2",
		],
	},
	{
		name: "Contributions",
		folder: "contributions",
		images: [
			"https://placehold.co/600x400/27272A/white?text=Contribution+1",
			"https://placehold.co/600x400/27272A/white?text=Contribution+2",
		],
	},
];

export default function GalleryPage() {
	const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const filteredAlbums = albums.filter((album) =>
		album.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const loadAlbums = () => {
		setIsLoading(true);
		setTimeout(() => {
			toast.error("Uh! We can't find any album...");
			setIsLoading(false);
		}, 3000);
	};

	return (
		<section className="py-20 px-5">
			{/* Animated Title */}
			<motion.h2
				className="text-4xl font-bold mb-10 text-default-700 text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				🌟 Gallery 🌟
			</motion.h2>

			{/* Search Bar */}
			<motion.div
				className="max-w-lg mx-auto mb-8"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
			>
				<Input
					type="text"
					placeholder="🔍 Search albums..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					endContent={<SearchIcon />}
				/>
			</motion.div>

			{/* Album List with Hover Effects */}
			<motion.div
				className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
			>
				{filteredAlbums.map((album) => (
					<motion.div
						key={album.name}
						className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
						onClick={() => setSelectedAlbum(album.folder)}
						whileHover={{ scale: 1.05 }}
					>
						<img
							src={album.images[0]}
							alt={album.name}
							className="w-full h-56 object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
							<motion.h3
								className="text-white text-xl font-bold"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
							>
								{album.name}
							</motion.h3>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Album Images Modal (Glassmorphism) */}
			{selectedAlbum && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
					<motion.div
						className="relative max-w-5xl w-full bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-xl"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<button
							className="absolute top-4 right-4 text-white text-2xl"
							onClick={() => setSelectedAlbum(null)}
						>
							✕
						</button>
						<h3 className="text-2xl font-bold mb-4 text-center text-white">
							{albums.find((a) => a.folder === selectedAlbum)?.name}
						</h3>

						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{albums
								.find((a) => a.folder === selectedAlbum)
								?.images.map((image, index) => (
									<motion.img
										key={index}
										src={image}
										alt={image}
										className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
										onClick={() =>
											setSelectedImage(`/gallery/${selectedAlbum}/${image}`)
										}
										whileHover={{ scale: 1.05 }}
									/>
								))}
						</div>
					</motion.div>
				</div>
			)}

			{/* Lightbox for Full Image View */}
			{selectedImage && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
					<motion.div
						className="relative max-w-4xl w-full"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<button
							className="absolute top-4 right-4 text-white text-2xl"
							onClick={() => setSelectedImage(null)}
						>
							✕
						</button>
						<motion.img
							src={selectedImage}
							alt="Selected"
							className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						/>
					</motion.div>
				</div>
			)}

			{/* Load More Button with Animation */}
			<div className="w-full flex items-center justify-center mt-6">
				<motion.div whileHover={{ scale: 1.05 }}>
					<Button
						size="lg"
						color="warning"
						variant="flat"
						isLoading={isLoading}
						onPress={loadAlbums}
					>
						Load More...
					</Button>
				</motion.div>
			</div>

			<Toaster />
		</section>
	);
}
