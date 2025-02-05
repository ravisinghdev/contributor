// src/app/(landing)/components/Hero.tsx
"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Hero() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center text-center text-default-900 py-20 px-5 min-w-[100%]">
			{/* Content */}
			<div className="relative z-10 max-w-3xl flex items-center flex-col space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Contribute to a Better Future!
				</h1>
				<p className="text-lg md:text-xl mb-6">
					Join our community and help improve our colony with small yet
					impactful contributions.
				</p>
				<div className="flex space-x-4">
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
				</div>
			</div>
		</section>
	);
}
