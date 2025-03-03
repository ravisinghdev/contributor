"use client";

import { motion } from "framer-motion";

const milestones = [
	{ year: "2023", event: "Project Idea & Initial Planning" },
	{ year: "2024", event: "Launch & First Contributions" },
	{ year: "2025", event: "Expansion & More Community Projects" },
];

export default function Timeline() {
	return (
		<section className="py-20 px-5 text-center relative overflow-hidden">
			{/* Floating Background Gradient for Depth */}
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-transparent to-purple-500/10 blur-3xl opacity-50 z-[-1]" />

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-extrabold mb-10 text-default-900"
			>
				Project Timeline
			</motion.h2>

			{/* Timeline Container */}
			<div className="relative max-w-4xl mx-auto">
				{/* Vertical Timeline Line */}
				<div className="absolute left-1/2 transform -translate-x-1 bg-gradient-to-b from-primary-500 to-primary-700 w-1 h-full rounded-full"></div>

				{milestones.map((milestone, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: index * 0.3 }}
						whileHover={{ scale: 1.05 }}
						className={`relative flex items-center justify-between ${
							index % 2 === 0 ? "flex-row-reverse" : ""
						} mb-12`}
					>
						{/* Connecting Dots */}
						<div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>

						{/* Timeline Card */}
						<div
							className={`w-[calc(50%-1rem)] p-6 bg-default-50 rounded-lg shadow-lg transition-all duration-300 ${
								index % 2 === 0 ? "text-right" : "text-left"
							}`}
						>
							<h3 className="text-2xl font-bold text-primary-700">
								{milestone.year}
							</h3>
							<p className="mt-2 text-lg text-default-800">{milestone.event}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
