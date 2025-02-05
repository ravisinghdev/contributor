export default function Updates() {
	const updates = [
		{
			title: "Park Renovation",
			desc: "Completed a new seating area for the park.",
			date: "Jan 15, 2024",
			category: "Infrastructure",
			image: "/images/park.jpg",
		},
		{
			title: "Street Lights Installed",
			desc: "Added solar-powered street lights to improve safety.",
			date: "Feb 02, 2024",
			category: "Public Safety",
			image: "/images/street-lights.jpg",
		},
		{
			title: "Water Supply Improved",
			desc: "Fixed underground water leakage issues.",
			date: "Feb 10, 2024",
			category: "Utilities",
			image: "/images/water-supply.jpg",
		},
	];

	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-800">
				Latest Updates
			</h2>
			<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
				{updates.map((update, index) => (
					<div
						key={index}
						className="bg-default-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
					>
						<img
							src={update.image}
							alt={update.title}
							className="w-full h-40 object-cover rounded-md mb-4"
						/>
						<p className="text-default-700 text-sm">
							{update.date} • {update.category}
						</p>
						<h3 className="text-xl font-semibold text-default-800 mt-2">
							{update.title}
						</h3>
						<p className="text-default-600 mt-2">{update.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
