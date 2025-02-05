"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@heroui/dropdown";
import { DateRangePicker } from "@heroui/date-picker";
import { Users, TrendingUp, Activity, Filter } from "lucide-react";

const AnalyticsPage = () => {
	const [selectedRange, setSelectedRange] = useState(null);

	const userGrowthData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "New Users",
				data: [200, 300, 500, 700, 1000, 1500],
				backgroundColor: "rgba(54, 162, 235, 0.2)",
				borderColor: "rgba(54, 162, 235, 1)",
				borderWidth: 2,
			},
		],
	};

	const revenueData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Revenue",
				data: [5000, 10000, 15000, 20000, 25000, 30000],
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 2,
			},
		],
	};

	const trafficSourceData = {
		labels: ["Organic", "Direct", "Referral", "Social Media"],
		datasets: [
			{
				data: [40, 25, 20, 15],
				backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"],
			},
		],
	};

	return (
		<div className="p-6 min-h-screen space-y-6">
			{/* Top Section with Filters */}
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-default-900">
					Analytics Overview
				</h2>
				<div className="flex gap-4">
					<DateRangePicker />
					<Dropdown>
						<DropdownTrigger>
							<button className="bg-default-50 px-4 py-2 rounded-md flex items-center gap-2">
								<Filter size={18} /> Filters
							</button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem key={1}>Last 7 Days</DropdownItem>
							<DropdownItem key={2}>Last 30 Days</DropdownItem>
							<DropdownItem key={3}>Custom Range</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>New Users</h3>
						<Users size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">15,430</h2>
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>Revenue</h3>
						<TrendingUp size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">$120,000</h2>
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>Active Users</h3>
						<Activity size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">3,210</h2>
					</CardBody>
				</Card>
			</div>

			{/* Charts Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card className="bg-default-50">
					<CardHeader className="text-default-900">User Growth</CardHeader>
					<CardBody>
						<Line data={userGrowthData} />
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="text-default-900">Revenue Trends</CardHeader>
					<CardBody>
						<Bar data={revenueData} />
					</CardBody>
				</Card>
			</div>

			{/* Traffic Sources */}
			<Card className="bg-default-50">
				<CardHeader className="text-default-900">Traffic Sources</CardHeader>
				<CardBody>
					<Doughnut data={trafficSourceData} />
				</CardBody>
			</Card>
		</div>
	);
};

export default AnalyticsPage;
