"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="text-default-900 py-12">
			<div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* About Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="text-xl font-bold mb-4">About Us</h3>
					<p className="text-sm">
						We are a community-driven project focused on improving our colony
						through contributions and collective effort.
					</p>
				</motion.div>

				{/* Quick Links Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-xl font-bold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						{["Home", "About", "Dashboard", "Contact"].map((item, idx) => (
							<li key={idx}>
								<Link
									href={`/${item.toLowerCase()}`}
									className="hover:underline transition-all"
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Contact & Social Media */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<h3 className="text-xl font-bold mb-4">Connect With Us</h3>
					<p className="text-sm mb-4">
						Follow us on our social media platforms for updates and community
						engagement.
					</p>
					<div className="flex space-x-4 text-xl">
						<Link href="#" className="hover:scale-110 transition-transform">
							<FaFacebookF />
						</Link>
						<Link href="#" className="hover:scale-110 transition-transform">
							<FaTwitter />
						</Link>
						<Link href="#" className="hover:scale-110 transition-transform">
							<FaInstagram />
						</Link>
					</div>
				</motion.div>
			</div>

			{/* Bottom Footer */}
			<motion.div
				className="mt-8 border-t border-gray-300 pt-6 text-center text-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<p>
					© {new Date().getFullYear()} Contribution Project. All rights
					reserved.
				</p>
				<div className="mt-2 space-x-4">
					<Link href="#" className="hover:underline transition-all">
						Privacy Policy
					</Link>
					<Link href="#" className="hover:underline transition-all">
						Terms of Service
					</Link>
				</div>
			</motion.div>
		</footer>
	);
}
