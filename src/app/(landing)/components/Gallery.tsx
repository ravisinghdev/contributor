"use client";

import { Button } from "@heroui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
	Events: [
		"https://placehold.co/600x400/27272A/white?text=Event+1",
		"https://placehold.co/600x400/27272A/white?text=Event+2",
	],
	Projects: [
		"https://placehold.co/600x400/27272A/white?text=Project+1",
		"https://placehold.co/600x400/27272A/white?text=Project+2",
	],
	Contributions: [
		"https://placehold.co/600x400/27272A/white?text=Contribution+1",
		"https://placehold.co/600x400/27272A/white?text=Contribution+2",
	],
};

export default function Gallery() {
	const [selectedCategory, setSelectedCategory] =
		useState<keyof typeof categories>("Events");
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [imageIndex, setImageIndex] = useState<number>(0);

	const openLightbox = (index: number) => {
		setImageIndex(index);
		setSelectedImage(categories[selectedCategory][index]);
	};

	const nextImage = () => {
		if (imageIndex < categories[selectedCategory].length - 1) {
			setImageIndex(imageIndex + 1);
			setSelectedImage(categories[selectedCategory][imageIndex + 1]);
		}
	};

	const prevImage = () => {
		if (imageIndex > 0) {
			setImageIndex(imageIndex - 1);
			setSelectedImage(categories[selectedCategory][imageIndex - 1]);
		}
	};

	return (
		<section className="py-20 px-5 text-center min-w-full min-h-screen">
			<h2 className="text-4xl font-bold mb-10 text-default-900">Gallery</h2>

			{/* Category Tabs */}
			<div className="flex justify-center space-x-4 mb-8">
				{Object.keys(categories).map((category) => (
					<Button
						key={category}
						onPress={() =>
							setSelectedCategory(category as keyof typeof categories)
						}
						color={selectedCategory === category ? "primary" : "default"}
						className="transition-all duration-300 hover:scale-105"
					>
						{category}
					</Button>
				))}
			</div>

			{/* Gallery Grid */}
			<motion.div
				layout
				className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
			>
				<AnimatePresence>
					{categories[selectedCategory].map((image, index) => (
						<motion.div
							key={index}
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className="overflow-hidden rounded-lg shadow-md cursor-pointer"
							onClick={() => openLightbox(index)}
						>
							<motion.img
								src={image}
								alt={`Gallery ${index + 1}`}
								className="w-full h-56 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
					>
						<div className="relative max-w-4xl w-full flex flex-col items-center">
							<button
								className="absolute top-4 right-4 text-white text-2xl"
								onClick={() => setSelectedImage(null)}
							>
								✕
							</button>

							<button
								className="absolute left-4 text-white text-3xl"
								onClick={prevImage}
								disabled={imageIndex === 0}
							>
								◀
							</button>

							<motion.img
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ duration: 0.3 }}
								src={selectedImage}
								alt="Selected"
								className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
							/>

							<button
								className="absolute right-4 text-white text-3xl"
								onClick={nextImage}
								disabled={
									imageIndex === categories[selectedCategory].length - 1
								}
							>
								▶
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
