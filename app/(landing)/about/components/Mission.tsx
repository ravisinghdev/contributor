const points = [
	{
		title: "Our Mission",
		desc: "To create a transparent and effective contribution system for our community.",
	},
	{
		title: "Our Vision",
		desc: "A self-sustaining and well-maintained colony for future generations.",
	},
];

export default function Mission() {
	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				Our Mission & Vision
			</h2>
			<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
				{points.map((point, index) => (
					<div key={index} className="p-6 bg-default-50 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-default-800">
							{point.title}
						</h3>
						<p className="text-default-700 mt-2">{point.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
