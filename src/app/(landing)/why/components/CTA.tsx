"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function CTA() {
	return (
		<section className="py-20 px-5 text-default-900 text-center">
			{/* Animated Heading */}
			<motion.h2
				className="text-4xl font-bold mb-4"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Join Us in Making a Difference!
			</motion.h2>

			{/* Animated Subtext */}
			<motion.p
				className="text-lg mb-6"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
			>
				Be a part of something great. Start contributing today.
			</motion.p>

			{/* Animated Button */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
				viewport={{ once: true }}
			>
				<Button
					size="lg"
					color="warning"
					variant="flat"
					className="relative overflow-hidden px-6 py-3 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
					// whileHover={{ scale: 1.05 }}
					// whileTap={{ scale: 0.95 }}
				>
					<Link color="warning" href="/dashboard">
						Contribute Now
					</Link>

					{/* Glowing Effect */}
					<motion.span
						className="absolute inset-0 bg-yellow-400 opacity-20 blur-lg rounded-full"
						initial={{ scale: 0, opacity: 0 }}
						whileHover={{ scale: 1.5, opacity: 1 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					/>
				</Button>
			</motion.div>
		</section>
	);
}
