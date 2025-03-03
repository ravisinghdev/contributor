"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function CTA() {
	return (
		<section className="py-20 px-5 text-default-900 text-center relative overflow-hidden">
			{/* Floating Background Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-yellow-500/10 blur-3xl opacity-60 z-[-1]" />

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-extrabold mb-4"
			>
				Be a Part of the Change!
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="text-lg mb-6 max-w-3xl mx-auto"
			>
				Join us in making a difference for our community.
			</motion.p>

			{/* Animated Button */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				<Button
					color="warning"
					size="lg"
					variant="flat"
					className="relative group px-8 py-3 rounded-lg font-bold text-lg"
				>
					<Link color="warning" href="/dashboard">
						Get Involved
					</Link>

					{/* Glowing Border Effect */}
					{/* <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-40 rounded-lg blur-lg group-hover:opacity-60 transition-opacity duration-300"></span> */}
				</Button>
			</motion.div>
		</section>
	);
}
