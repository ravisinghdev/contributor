"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="fixed right-6 bottom-6 z-50">
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						<Button
							onClick={scrollToTop}
							isIconOnly
							radius="full"
							size="lg"
							className="bg-default-50 text-default-900 shadow-lg hover:bg-default-100"
							as={motion.button}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<ArrowUp size={24} />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ScrollToTop;
