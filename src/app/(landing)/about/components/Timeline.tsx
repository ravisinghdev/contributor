const milestones = [
	{ year: "2023", event: "Project Idea & Initial Planning" },
	{ year: "2024", event: "Launch & First Contributions" },
	{ year: "2025", event: "Expansion & More Community Projects" },
];

export default function Timeline() {
	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				Project Timeline
			</h2>
			<div className="max-w-4xl mx-auto">
				{milestones.map((milestone, index) => (
					<div
						key={index}
						className="relative pl-6 border-l-4 border-primary-500 mb-6"
					>
						<div className="bg-default-50 p-4 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-default-800">
								{milestone.year}
							</h3>
							<p className="text-default-800">{milestone.event}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
