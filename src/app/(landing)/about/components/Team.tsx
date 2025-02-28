const teamMembers = [
	{
		name: "Ravi Kumar",
		role: "Founder",
		image: "https://i.pravatar.cc/400?u=a042581f4e29026024d",
	},
	{
		name: "Anita Verma",
		role: "Community Manager",
		image: "https://i.pravatar.cc/400?u=a042581f4e29026704d",
	},
	{
		name: "Vikram Singh",
		role: "Finance Head",
		image: "https://i.pravatar.cc/400?u=a048581f4e29026701d",
	},
];

export default function Team() {
	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				Meet the Team
			</h2>
			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
				{teamMembers.map((member, index) => (
					<div key={index} className="bg-default-50 p-6 rounded-lg shadow-md">
						<img
							src={member.image}
							alt={member.name}
							className="w-32 h-32 mx-auto rounded-full mb-4"
						/>
						<h3 className="text-xl font-semibold text-default-800">
							{member.name}
						</h3>
						<p className="text-default-800">{member.role}</p>
					</div>
				))}
			</div>
		</section>
	);
}
