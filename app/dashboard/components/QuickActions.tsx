export default function QuickActions() {
	return (
		<section className="p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
				Quick Actions
			</h2>
			<div className="flex space-x-4">
				<button className="flex-1 bg-blue-600 text-default-900 py-2 rounded-md hover:bg-blue-700">
					Add Contribution
				</button>
				<button className="flex-1 bg-green-600 text-default-900 py-2 rounded-md hover:bg-green-700">
					Manage Users
				</button>
			</div>
		</section>
	);
}
