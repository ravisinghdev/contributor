"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@heroui/table";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
	CreditCard,
	DollarSign,
	CheckCircle,
	XCircle,
	Filter,
} from "lucide-react";

const payments = [
	{
		id: "001",
		user: "John Doe",
		amount: "$120.00",
		status: "Completed",
		date: "2024-02-01",
	},
	{
		id: "002",
		user: "Jane Smith",
		amount: "$85.50",
		status: "Pending",
		date: "2024-02-02",
	},
	{
		id: "003",
		user: "Mike Johnson",
		amount: "$200.00",
		status: "Failed",
		date: "2024-02-03",
	},
];

const statusColorMap = {
	Completed: "success",
	Pending: "warning",
	Failed: "danger",
};

const PaymentPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="p-6 min-h-screen space-y-6">
			{/* Header Section with Filters */}
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-default-900">
					Payment Transactions
				</h2>
				<div className="flex gap-4">
					<Input
						className="w-full"
						placeholder="Search payments..."
						startContent={<DollarSign size={18} />}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<Dropdown>
						<DropdownTrigger>
							<Button variant="bordered" startContent={<Filter size={18} />}>
								Filters
							</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem key={1}>Last 7 Days</DropdownItem>
							<DropdownItem key={2}>Last 30 Days</DropdownItem>
							<DropdownItem key={3}>Failed Transactions</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>

			{/* Payment Summary */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>Total Revenue</h3>
						<DollarSign size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">$150,000</h2>
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>Successful Payments</h3>
						<CheckCircle size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">1,200</h2>
					</CardBody>
				</Card>

				<Card className="bg-default-50">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h3>Failed Transactions</h3>
						<XCircle size={24} />
					</CardHeader>
					<CardBody>
						<h2 className="text-3xl font-bold">35</h2>
					</CardBody>
				</Card>
			</div>

			{/* Payment Transactions Table */}
			<Card className="bg-default-50">
				<CardHeader className="text-default-900">
					Recent Transactions
				</CardHeader>
				<CardBody>
					<Table aria-label="Payment transactions table">
						<TableHeader>
							<TableColumn>Transaction ID</TableColumn>
							<TableColumn>User</TableColumn>
							<TableColumn>Amount</TableColumn>
							<TableColumn>Status</TableColumn>
							<TableColumn>Date</TableColumn>
						</TableHeader>
						<TableBody>
							{payments.map((payment) => (
								<TableRow key={payment.id}>
									<TableCell>{payment.id}</TableCell>
									<TableCell>{payment.user}</TableCell>
									<TableCell>{payment.amount}</TableCell>
									<TableCell>
										{/* <span className={`text-${statusColorMap[payment.status]}`}> */}
										{payment.status}
										{/* </span> */}
									</TableCell>
									<TableCell>{payment.date}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardBody>
			</Card>
		</div>
	);
};

export default PaymentPage;
