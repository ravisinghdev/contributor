"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Tabs, Tab } from "@heroui/tabs";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@heroui/dropdown";
import {
	Users,
	TrendingUp,
	Activity,
	Filter,
	LayoutGrid,
	List,
} from "lucide-react";

const Dashboard = () => {
	const [viewMode, setViewMode] = useState("grid");

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

	return (
		<div className="p-6 space-y-6">
			{/* Header Section */}
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-default-900">
					Dashboard Overview
				</h2>
				<div className="flex gap-4">
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
					<button
						className="bg-default-50 px-4 py-2 rounded-md flex items-center gap-2"
						onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
					>
						{viewMode === "grid" ? (
							<List size={18} />
						) : (
							<LayoutGrid size={18} />
						)}{" "}
						View
					</button>
				</div>
			</div>

			{/* Metrics Cards */}
			<div
				className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"} gap-6`}
			>
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

			{/* Tabs & Charts */}
			<Tabs>
				<Tab title="User Growth">
					<Card className="bg-default-50">
						<CardBody>
							<Line data={userGrowthData} />
						</CardBody>
					</Card>
				</Tab>
				<Tab title="Revenue Trends">
					<Card className="bg-default-50">
						<CardBody>
							<Bar data={revenueData} />
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
};

export default Dashboard;
