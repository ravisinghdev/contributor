"use client";

import { motion } from "framer-motion";
import { CheckCircle, Lock, Users } from "lucide-react";

export default function Features() {
	const features = [
		{
			title: "Transparent Contributions",
			desc: "Track your funds in real-time with full transparency.",
			icon: <CheckCircle className="w-12 h-12 text-green-400 drop-shadow-md" />,
			color: "from-green-500 to-green-700",
			glow: "shadow-green-500/40",
		},
		{
			title: "Role-Based Access",
			desc: "Admins and users have different privileges for better security.",
			icon: <Users className="w-12 h-12 text-blue-400 drop-shadow-md" />,
			color: "from-blue-500 to-blue-700",
			glow: "shadow-blue-500/40",
		},
		{
			title: "Secure Payments",
			desc: "Integrated with a subscription model for seamless transactions.",
			icon: <Lock className="w-12 h-12 text-purple-400 drop-shadow-md" />,
			color: "from-purple-500 to-purple-700",
			glow: "shadow-purple-500/40",
		},
	];

	return (
		<section className="relative py-20 px-5 text-center text-default-900">
			{/* 🔥 Title Animation */}
			<motion.h2
				initial={{ opacity: 0, y: -20, scale: 0.9 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="text-4xl font-extrabold mb-10 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400"
			>
				Why Contribute?
			</motion.h2>

			{/* 🔥 Feature Cards */}
			<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20, rotateX: -15 }}
						animate={{ opacity: 1, y: 0, rotateX: 0 }}
						whileHover={{
							scale: 1.08,
							rotateX: 5,
							rotateY: 5,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						transition={{
							duration: 0.3,
							delay: index * 0.1,
							ease: "easeOut",
						}}
						className={`relative bg-gradient-to-br ${feature.color} p-6 rounded-2xl shadow-lg ${feature.glow} transition-all hover:shadow-xl`}
					>
						{/* Icon with Glowing Effect */}
						<motion.div
							className="absolute -top-6 right-6"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							{feature.icon}
						</motion.div>

						{/* Glowing Ring Effect */}
						<motion.div
							className="absolute inset-0 bg-white/5 blur-xl rounded-2xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.2 }}
							whileHover={{ opacity: 0.5 }}
							transition={{ duration: 0.3 }}
						/>

						<h3 className="text-2xl font-semibold mt-6">{feature.title}</h3>
						<p className="text-gray-200 mt-2">{feature.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
