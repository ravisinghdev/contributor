const benefits = [
	{
		title: "Transparency",
		desc: "All contributions are publicly recorded and used for verified projects.",
	},
	{
		title: "Community Impact",
		desc: "Your support directly improves our local environment and facilities.",
	},
	{
		title: "Recognition",
		desc: "Top contributors get featured in our community updates and events.",
	},
];

export default function Benefits() {
	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				Why Choose Us?
			</h2>
			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
				{benefits.map((benefit, index) => (
					<div key={index} className=" p-6 rounded-lg shadow-md bg-default-50">
						<h3 className="text-xl font-semibold text-default-800">
							{benefit.title}
						</h3>
						<p className="text-default-700 mt-2">{benefit.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
