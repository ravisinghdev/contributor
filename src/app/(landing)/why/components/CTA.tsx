import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function CTA() {
	return (
		<section className="py-20 px-5 text-default-900 text-center">
			<h2 className="text-3xl font-bold mb-4">
				Join Us in Making a Difference!
			</h2>
			<p className="text-lg mb-6">
				Be a part of something great. Start contributing today.
			</p>
			<Button size="lg" color="warning" variant="flat">
				<Link color="warning" href="/dashboard">
					Contribute Now
				</Link>
			</Button>
		</section>
	);
}
