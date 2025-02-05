const users = [
	{ name: "Ravi Kumar", role: "Admin" },
	{ name: "Anita Verma", role: "User" },
];

export default function UserManagement() {
	return (
		<section className=" p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4">User Management</h2>
			<table className="w-full border-collapse">
				<thead>
					<tr className="bg-default-200">
						<th className="p-3">Name</th>
						<th className="p-3">Role</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={index} className="border-t">
							<td className="p-3">{user.name}</td>
							<td className="p-3">{user.role}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
