const activities = [
	{ user: "Ravi Kumar", action: "Donated ₹2000", time: "2 hours ago" },
	{
		user: "Anita Verma",
		action: "Joined Subscription Plan",
		time: "1 day ago",
	},
	{ user: "Vikram Singh", action: "Updated Profile", time: "3 days ago" },
];

export default function RecentActivities() {
	return (
		<section className=" p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4 text-default-800">
				Recent Activities
			</h2>
			<ul className="space-y-3">
				{activities.map((activity, index) => (
					<li
						key={index}
						className="flex justify-between text-gray-600 dark:text-gray-300"
					>
						<span>
							{activity.user} {activity.action}
						</span>
						<span className="text-sm text-gray-500">{activity.time}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
