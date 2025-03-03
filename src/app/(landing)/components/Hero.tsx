"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center text-center text-default-900 py-20 px-5 w-full overflow-hidden">
			{/* Floating Animated Background Effect */}
			<motion.div
				className="absolute inset-0 w-[300px] h-[300px] bg-gradient-to-r from-transparent via-warning/30 to-transparent rounded-full blur-3xl opacity-50"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1.2 }}
				transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
			/>

			{/* Content */}
			<motion.div
				className="relative z-10 max-w-3xl flex items-center flex-col space-y-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Contribute to a Better Future!
				</motion.h1>

				<motion.p
					className="text-lg md:text-xl mb-6 max-w-2xl"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
				>
					Join our community and help improve our colony with small yet
					impactful contributions.
				</motion.p>

				<motion.div
					className="flex space-x-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
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
			</motion.div>
		</section>
	);
}
