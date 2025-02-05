import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function Footer() {
	return (
		<footer className="text-default-900 py-12">
			<div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Section 1: About */}
				<div>
					<h3 className="text-xl font-bold  mb-4">About Us</h3>
					<p className="text-sm">
						We are a community-driven project focused on improving our colony
						through contributions and collective effort.
					</p>
				</div>

				{/* Section 2: Quick Links */}
				<div>
					<h3 className="text-xl font-bold  mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<a href="/" className="hover:text-blue-400">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-blue-400">
								About
							</a>
						</li>
						<li>
							<a href="/dashboard" className="hover:text-blue-400">
								Dashboard
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-blue-400">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Section 3: Newsletter Subscription */}
				<div>
					<h3 className="text-xl font-bold  mb-4">Stay Updated</h3>
					<p className="text-sm mb-4">
						Subscribe to our newsletter for the latest updates on community
						projects.
					</p>
					<form className="flex items-center">
						<Input
							type="email"
							placeholder="Enter your email"
							labelPlacement="inside"
							size="lg"
						/>
						<Button type="submit" color="primary" size="lg">
							Subscribe
						</Button>
					</form>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
				<p>
					© {new Date().getFullYear()} Contribution Project. All rights
					reserved.
				</p>
				<div className="mt-2 space-x-4">
					<a href="#" className="hover:text-blue-400">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-blue-400">
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
}
