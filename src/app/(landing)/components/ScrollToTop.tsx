"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="fixed right-6 bottom-6 z-50">
			{isVisible && (
				<Button
					onClick={scrollToTop}
					isIconOnly
					radius="full"
					size="lg"
					className="bg-default-50 text-default-900 shadow-lg hover:bg-default-100"
				>
					<ArrowUp size={24} />
				</Button>
			)}
		</div>
	);
};

export default ScrollToTop;
