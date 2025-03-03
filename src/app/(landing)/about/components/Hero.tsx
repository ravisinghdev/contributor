"use client";

import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center text-center text-default-900 py-20 px-5 overflow-hidden">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-500/20 blur-3xl opacity-50 z-[-1]" />

			{/* Animated Title */}
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-4xl md:text-6xl font-extrabold mb-4"
			>
				Shaping the Future, Together
			</motion.h1>

			{/* Animated Subtitle */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
				className="text-lg md:text-xl mb-6 max-w-3xl"
			>
				We are a{" "}
				<span className="font-semibold text-indigo-600">community-driven</span>{" "}
				initiative, transforming our colony through{" "}
				<span className="font-semibold text-yellow-500">collaboration</span> and{" "}
				<span className="font-semibold text-green-500">contribution</span>.
			</motion.p>

			{/* Subtle Floating Animation */}
			<motion.div
				animate={{ y: [0, -10, 0] }}
				transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
				className="w-24 h-24 md:w-32 md:h-32 bg-indigo-500 rounded-full absolute -top-10 left-10 opacity-30 blur-2xl"
			/>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{
					repeat: Infinity,
					duration: 3,
					ease: "easeInOut",
					delay: 0.5,
				}}
				className="w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-full absolute bottom-10 right-10 opacity-30 blur-2xl"
			/>
		</section>
	);
}
