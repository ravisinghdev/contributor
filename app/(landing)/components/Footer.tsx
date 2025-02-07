import { Button } from "@heroui/button";

export default function Footer() {
	return (
		<footer className="text-default-900 py-12">
			<div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* About Section */}
				<div>
					<h3 className="text-xl font-bold mb-4">About Us</h3>
					<p className="text-sm">
						We are a community-driven project focused on improving our colony
						through contributions and collective effort.
					</p>
				</div>

				{/* Quick Links Section */}
				<div>
					<h3 className="text-xl font-bold mb-4">Quick Links</h3>
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

				{/* Contact & Social Media */}
				<div>
					<h3 className="text-xl font-bold mb-4">Connect With Us</h3>
					<p className="text-sm mb-4">
						Follow us on our social media platforms for updates and community
						engagement.
					</p>
					<div className="flex space-x-4">
						<a href="#" className="hover:text-blue-400">
							Facebook
						</a>
						<a href="#" className="hover:text-blue-400">
							Twitter
						</a>
						<a href="#" className="hover:text-blue-400">
							Instagram
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm">
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
