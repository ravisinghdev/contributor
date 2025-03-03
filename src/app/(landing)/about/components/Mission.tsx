"use client";

import { motion } from "framer-motion";

const points = [
	{
		title: "Our Mission",
		desc: "To create a transparent and effective contribution system for our community.",
		color: "bg-gradient-to-r from-blue-500 to-indigo-500",
	},
	{
		title: "Our Vision",
		desc: "A self-sustaining and well-maintained colony for future generations.",
		color: "bg-gradient-to-r from-green-500 to-teal-500",
	},
];

export default function Mission() {
	return (
		<section className="py-20 px-5 text-center relative">
			{/* Background Gradient Effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-500/20 blur-3xl opacity-50 z-[-1]" />

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-extrabold mb-10 text-default-900"
			>
				Our Mission & Vision
			</motion.h2>

			<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
				{points.map((point, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.3 }}
						whileHover={{ scale: 1.05 }}
						className={`p-6 rounded-lg shadow-lg text-white transition-transform duration-300 ${point.color}`}
					>
						<h3 className="text-2xl font-bold">{point.title}</h3>
						<p className="mt-3 text-lg">{point.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
