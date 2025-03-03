"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import GalleryHeader from "./GalleryHeader";

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
	{
		name: "Travel",
		folder: "travel",
		images: [
			"https://placehold.co/600x400/27272A/white?text=Travel+1",
			"https://placehold.co/600x400/27272A/white?text=Travel+2",
		],
	},
];

export default function Gallery() {
	const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredAlbums = albums.filter((album) =>
		album.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section className="relative  p-8 w-full">
			<motion.div
				className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full blur-3xl opacity-50"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1.2 }}
				transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror" }}
			/>

			{/* Gallery Header (Search) */}
			<GalleryHeader onSearch={setSearchQuery} />

			{/* Album Grid */}
			<motion.div
				className="grid h-screen overflow-y-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
			>
				{filteredAlbums.map((album) => (
					<motion.div
						key={album.folder}
						className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
						onClick={() => setSelectedAlbum(album.folder)}
						whileHover={{ scale: 1.05 }}
					>
						<img
							src={album.images[0]}
							alt={album.name}
							className="w-full h-56 object-cover rounded-lg"
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

			{/* Album Modal */}
			<Modal isOpen={!!selectedAlbum} onClose={() => setSelectedAlbum(null)}>
				<ModalContent>
					<ModalHeader>
						{albums.find((a) => a.folder === selectedAlbum)?.name}
					</ModalHeader>
					<ModalBody>
						<div className="grid grid-cols-2 gap-4">
							{albums
								.find((a) => a.folder === selectedAlbum)
								?.images.map((image, index) => (
									<motion.img
										key={index}
										src={image}
										alt={`Image ${index + 1}`}
										className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
										whileHover={{ scale: 1.05 }}
									/>
								))}
						</div>
					</ModalBody>
					<ModalFooter>
						<Button onClick={() => setSelectedAlbum(null)}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</section>
	);
}
