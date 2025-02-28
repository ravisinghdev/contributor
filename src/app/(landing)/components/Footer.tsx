import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

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
							<Link href="/" color="foreground">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" color="foreground">
								About
							</Link>
						</li>
						<li>
							<Link href="/dashboard" color="foreground">
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/contact" color="foreground">
								Contact
							</Link>
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
						<Link href="#" color="foreground">
							Facebook
						</Link>
						<Link href="#" color="foreground">
							Twitter
						</Link>
						<Link href="#" color="foreground">
							Instagram
						</Link>
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
					<Link href="#" color="foreground">
						Privacy Policy
					</Link>
					<Link href="#" color="foreground">
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
}
