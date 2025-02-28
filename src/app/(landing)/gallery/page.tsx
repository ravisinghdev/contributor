"use client";

import { Input } from "@heroui/input";
import { useState } from "react";

// Icons
import { SearchIcon } from "@/src/components/icons";
import { Button } from "@heroui/button";

// Toast
import toast, { Toaster } from "react-hot-toast";

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
		try {
			setIsLoading(true);
			setTimeout(() => {
				toast.error("Uh! We can't find any album...");
			}, 3000); // Delay error message by 3 seconds
		} catch (error: any) {
			toast.error("Uh! Something went wrong...");
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 3000); // Ensure loading state remains for 3 seconds
		}
	};

	return (
		<section className="py-20 px-5">
			<h2 className="text-4xl font-bold mb-10 text-default-700 text-center">
				Gallery
			</h2>

			{/* Search Bar */}
			<div className="max-w-lg mx-auto mb-8">
				<Input
					type="text"
					placeholder="Search albums..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					endContent={<SearchIcon />}
				/>
			</div>

			{/* Album List */}
			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
				{filteredAlbums.map((album) => (
					<div
						key={album.name}
						className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
						onClick={() => setSelectedAlbum(album.folder)}
					>
						<img
							src={album.images[0]}
							alt={album.name}
							className="w-full h-56 object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
							<h3 className="text-white text-xl font-bold">{album.name}</h3>
						</div>
					</div>
				))}
			</div>

			{/* Album Images Modal */}
			{selectedAlbum && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
					<div className="relative max-w-5xl w-full bg-default-50/27272A/white p-6 rounded-lg">
						<button
							className="absolute top-4 right-4 text-gray-800 text-2xl"
							onClick={() => setSelectedAlbum(null)}
						>
							✕
						</button>
						<h3 className="text-2xl font-bold mb-4 text-center">
							{albums.find((a) => a.folder === selectedAlbum)?.name}
						</h3>

						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{albums
								.find((a) => a.folder === selectedAlbum)
								?.images.map((image, index) => (
									<img
										key={index}
										src={image}
										alt={image}
										className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
										onClick={() =>
											setSelectedImage(`/gallery/${selectedAlbum}/${image}`)
										}
									/>
								))}
						</div>
					</div>
				</div>
			)}

			{/* Lightbox Modal */}
			{selectedImage && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
					<div className="relative max-w-4xl w-full">
						<button
							className="absolute top-4 right-4 text-white text-2xl"
							onClick={() => setSelectedImage(null)}
						>
							✕
						</button>
						<img
							src={selectedImage}
							alt="Selected"
							className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
						/>
					</div>
				</div>
			)}
			<div className="w-full flex items-center justify-center mt-6">
				<Button
					size="lg"
					color="warning"
					variant="flat"
					isLoading={isLoading}
					onPress={loadAlbums}
				>
					Load More...
				</Button>
			</div>
			<Toaster />
		</section>
	);
}
