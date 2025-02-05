const payments = [
	{ name: "Ravi Kumar", amount: "₹5000", status: "Completed" },
	{ name: "Anita Verma", amount: "₹3000", status: "Pending" },
];

export default function Payments() {
	return (
		<section className="p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4 text-default-900">
				Payments & Subscriptions
			</h2>
			<table className="w-full text-default-700">
				<thead>
					<tr>
						<th className="p-3">User</th>
						<th className="p-3">Amount</th>
						<th className="p-3">Status</th>
					</tr>
				</thead>
				<tbody>
					{payments.map((payment, index) => (
						<tr
							key={index}
							className="border-t border-gray-300 dark:border-gray-600"
						>
							<td className="p-3">{payment.name}</td>
							<td className="p-3">{payment.amount}</td>
							<td className="p-3">{payment.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
