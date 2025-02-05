"use client";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ✅ Register required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend
);

export default function Stats() {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // x-axis labels
		datasets: [
			{
				label: "Total Contributions (₹)",
				data: [20000, 25000, 30000, 40000, 50000, 60000],
				borderColor: "#3b82f6",
				borderWidth: 2,
				fill: false,
			},
		],
	};

	return (
		<section className="p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4 text-default-900">
				Analytics Overview
			</h2>
			<Line data={data} />
		</section>
	);
}
