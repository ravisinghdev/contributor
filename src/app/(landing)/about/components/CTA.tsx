import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function CTA() {
	return (
		<section className="py-20 px-5 text-default-900 text-center">
			<h2 className="text-3xl font-bold mb-4">Be a Part of the Change!</h2>
			<p className="text-lg mb-6">
				Join us in making a difference for our community.
			</p>
			<Button color="warning" size="lg" variant="flat">
				<Link color="warning" href="/dashboard">
					Get Involved
				</Link>
			</Button>
		</section>
	);
}
