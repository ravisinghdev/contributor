"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

const DashboardContent = () => {
	const [darkMode, setDarkMode] = useState(false);

	// Chart Data
	const chartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May"],
		datasets: [
			{
				label: "Revenue",
				data: [12000, 19000, 30000, 50000, 25000],
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 2,
			},
		],
	};

	return (
		<div className="p-6 min-h-screen">
			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="p-6 bg-default-50 rounded-lg shadow-md"
				>
					<h3 className="text-lg font-semibold text-default-900">
						Total Users
					</h3>
					<p className="text-3xl font-bold mt-2">5,430</p>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					className="p-6 bg-default-50 rounded-lg shadow-md"
				>
					<h3 className="text-lg font-semibold text-default-900">Revenue</h3>
					<p className="text-3xl font-bold mt-2">$125,000</p>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					className="p-6 bg-default-50 rounded-lg shadow-md"
				>
					<h3 className="text-lg font-semibold text-default-900">
						New Signups
					</h3>
					<p className="text-3xl font-bold mt-2">389</p>
				</motion.div>
			</div>

			{/* Charts Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
				<Card className="bg-default-50">
					<CardHeader className="text-default-900">Revenue Growth</CardHeader>
					<CardBody>
						<Line data={chartData} />
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="text-default-900">User Growth</CardHeader>
					<CardBody>
						<Bar data={chartData} />
					</CardBody>
				</Card>
			</div>

			{/* Activity Feed & Tasks */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
				<Card className="bg-default-50">
					<CardHeader className="text-default-900">Recent Activity</CardHeader>
					<CardBody>
						<ul className="text-default-900 space-y-2">
							<li>🔹 John updated profile</li>
							<li>🔹 New user signed up</li>
							<li>🔹 Payment received from Alice</li>
						</ul>
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="text-default-900">Upcoming Tasks</CardHeader>
					<CardBody>
						<ul className="text-default-900 space-y-2">
							<li>✅ Finish dashboard UI</li>
							<li>✅ Review API integration</li>
							<li>🔄 Deploy new update</li>
						</ul>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default DashboardContent;
