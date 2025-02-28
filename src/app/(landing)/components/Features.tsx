export default function Features() {
	const features = [
		{
			title: "Transparent Contributions",
			desc: "Track how your funds are used.",
		},
		{
			title: "Role-Based Access",
			desc: "Admins and users have different privileges.",
		},
		{ title: "Secure Payments", desc: "Integrated with a subscription model." },
	];

	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				Why Contribute?
			</h2>
			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<div key={index} className="bg-default-50 p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-default-800">
							{feature.title}
						</h3>
						<p className="text-default-600 mt-2">{feature.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
