"use client";

import { Button } from "@heroui/button";
import { useState } from "react";

const categories = {
	Events: ["/gallery/events/event-1.jpg", "/gallery/events/event-2.jpg"],
	Projects: [
		"/gallery/projects/project-1.jpg",
		"/gallery/projects/project-2.jpg",
	],
	Contributions: [
		"/gallery/contributions/contribution-1.jpg",
		"/gallery/contributions/contribution-2.jpg",
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
			<div className="flex justify-center space-x-4 mb-6 ">
				{Object.keys(categories).map((category) => (
					<Button
						key={category}
						onClick={() =>
							setSelectedCategory(category as keyof typeof categories)
						}
						color={selectedCategory === category ? "primary" : "default"}
					>
						{category}
					</Button>
				))}
			</div>

			{/* Gallery Grid */}
			<div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{categories[selectedCategory].map((image, index) => (
					<div
						key={index}
						className="bg-default-50 overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
					>
						<img
							src={image}
							alt={`Gallery ${index + 1}`}
							className="w-full h-56 object-cover"
							onClick={() => openLightbox(index)}
						/>
					</div>
				))}
			</div>

			{/* Lightbox Modal */}
			{selectedImage && (
				<div className="fixed inset-0 flex items-center justify-center bg-default-50 bg-opacity-80 z-50">
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

						<img
							src={selectedImage}
							alt="Selected"
							className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
						/>

						<button
							className="absolute right-4 text-white text-3xl"
							onClick={nextImage}
							disabled={imageIndex === categories[selectedCategory].length - 1}
						>
							▶
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
