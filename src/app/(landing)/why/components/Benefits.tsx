"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

const benefits = [
	{
		title: "Transparency",
		desc: "All contributions are publicly recorded and used for verified projects.",
		icon: <FaShieldAlt size={40} className="text-blue-600" />,
		color: "from-blue-400 to-blue-600",
	},
	{
		title: "Community Impact",
		desc: "Your support directly improves our local environment and facilities.",
		icon: <FaUsers size={40} className="text-green-600" />,
		color: "from-green-400 to-green-600",
	},
	{
		title: "Recognition",
		desc: "Top contributors get featured in our community updates and events.",
		icon: <FaAward size={40} className="text-yellow-600" />,
		color: "from-yellow-400 to-yellow-600",
	},
];

export default function Benefits() {
	return (
		<section className="py-20 px-5 text-center">
			{/* Animated Heading */}
			<motion.h2
				className="text-4xl font-extrabold mb-12 text-default-900 relative"
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Why Choose Us?
				{/* Underline Animation */}
				<motion.div
					className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-16 bg-default-900 rounded-full"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
				/>
			</motion.h2>

			{/* Benefit Cards with Animation */}
			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
				{benefits.map((benefit, index) => (
					<motion.div
						key={index}
						className={`p-8 rounded-xl shadow-lg text-center bg-gradient-to-r ${benefit.color} text-white relative overflow-hidden transition-all duration-300 hover:scale-105`}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
					>
						{/* Floating Glow Effect */}
						<motion.div
							className="absolute -top-5 -left-5 w-20 h-20 bg-white/30 rounded-full blur-xl"
							animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
							transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
						/>
						{/* Icon */}
						<div className="mb-4">{benefit.icon}</div>
						<h3 className="text-2xl font-semibold">{benefit.title}</h3>
						<p className="mt-3">{benefit.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
