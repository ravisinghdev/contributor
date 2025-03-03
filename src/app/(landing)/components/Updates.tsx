"use client";

import { motion } from "framer-motion";

export default function Updates() {
	const updates = [
		{
			title: "Park Renovation",
			desc: "Completed a new seating area for the park.",
			date: "Jan 15, 2024",
			category: "Infrastructure",
			image: "https://placehold.co/600x400/27272A/white",
			color: "from-green-400 to-green-600",
		},
		{
			title: "Street Lights Installed",
			desc: "Added solar-powered street lights to improve safety.",
			date: "Feb 02, 2024",
			category: "Public Safety",
			image: "https://placehold.co/600x400/27272A/white",
			color: "from-blue-400 to-blue-600",
		},
		{
			title: "Water Supply Improved",
			desc: "Fixed underground water leakage issues.",
			date: "Feb 10, 2024",
			category: "Utilities",
			image: "https://placehold.co/600x400/27272A/white",
			color: "from-purple-400 to-purple-600",
		},
	];

	return (
		<section className="relative py-20 px-5 text-center text-white">
			{/* 🔥 Animated Heading */}
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="text-4xl font-extrabold mb-10 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400"
			>
				Latest Updates
			</motion.h2>

			{/* 🔥 Updates Grid */}
			<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
				{updates.map((update, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20, rotateX: -10 }}
						animate={{ opacity: 1, y: 0, rotateX: 0 }}
						whileHover={{
							scale: 1.05,
							rotateX: 5,
							rotateY: 5,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						className="relative bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 overflow-hidden transition-all"
					>
						{/* 🔥 Image with Animated Border Glow */}
						<div className="relative">
							<img
								src={update.image}
								alt={update.title}
								className="w-full h-40 object-cover rounded-lg shadow-md"
							/>
							<motion.div
								className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-30"
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.3 }}
								whileHover={{ opacity: 0.5 }}
								transition={{ duration: 0.3 }}
							/>
						</div>

						{/* 🔥 Category Badge */}
						<span
							className={`absolute top-4 right-4 text-xs font-bold text-white py-1 px-3 rounded-full bg-gradient-to-r ${update.color}`}
						>
							{update.category}
						</span>

						{/* 🔥 Content */}
						<p className="text-gray-300 text-sm mt-4">{update.date}</p>
						<h3 className="text-xl font-semibold text-white mt-2">
							{update.title}
						</h3>
						<p className="text-gray-400 mt-2">{update.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
