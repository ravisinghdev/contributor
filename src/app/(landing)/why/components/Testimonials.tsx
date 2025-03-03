"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
	{
		name: "Rahul Sharma",
		feedback:
			"This initiative has transformed our colony. I’m proud to be a contributor.",
		image: "https://i.pravatar.cc/100?img=1",
	},
	{
		name: "Anita Verma",
		feedback: "Seeing my contributions being used for real change is amazing!",
		image: "https://i.pravatar.cc/100?img=2",
	},
	{
		name: "Vikram Singh",
		feedback:
			"A great way to give back to the community while ensuring transparency.",
		image: "https://i.pravatar.cc/100?img=3",
	},
];

export default function Testimonials() {
	return (
		<section className="py-20 px-5 text-center">
			{/* Animated Heading */}
			<motion.h2
				className="text-4xl font-bold text-default-900 text-center relative mb-12"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				What Our Contributors Say
				{/* Underline Animation */}
				<motion.div
					className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-16 bg-default-900 rounded-full"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
					viewport={{ once: true }}
				/>
			</motion.h2>

			{/* Testimonials Grid */}
			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={index}
						className="bg-default-50 p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
						viewport={{ once: true }}
					>
						{/* User Avatar with Hover Glow Effect */}
						<motion.img
							src={testimonial.image}
							alt={testimonial.name}
							className="w-16 h-16 rounded-full mb-4 border-2 border-gray-400"
							whileHover={{
								scale: 1.1,
								boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
							}}
							transition={{ type: "spring", stiffness: 200 }}
						/>

						{/* Quote Icon with Pop Animation */}
						<motion.div
							className="text-3xl text-gray-500 mb-2"
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{
								duration: 0.4,
								ease: "backOut",
								delay: index * 0.2,
							}}
							viewport={{ once: true }}
						>
							<FaQuoteLeft />
						</motion.div>

						{/* Feedback */}
						<p className="text-default-700 italic text-lg">
							"{testimonial.feedback}"
						</p>

						{/* Name */}
						<h3 className="text-lg font-semibold text-default-900 mt-4">
							- {testimonial.name}
						</h3>
					</motion.div>
				))}
			</div>
		</section>
	);
}
