"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Hero() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center text-center text-default-900 py-20 px-5">
			{/* Animated Title */}
			<motion.h1
				className="text-4xl md:text-6xl font-bold mb-4"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Why Contribute to Our Community?
			</motion.h1>

			{/* Animated Description */}
			<motion.p
				className="text-lg md:text-xl mb-6 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
			>
				Every contribution makes a difference. Join us in making our colony a
				better place.
			</motion.p>

			{/* Call to Action Buttons */}
			<motion.div
				className="flex space-x-4"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
			>
				<Button size="lg" color="warning" variant="flat">
					<Link href="/dashboard" color="warning">
						Contribute Now
					</Link>
				</Button>
				<Button size="lg" variant="flat">
					<Link href="/gallery" color="foreground">
						Our Works
					</Link>
				</Button>
			</motion.div>
		</section>
	);
}
