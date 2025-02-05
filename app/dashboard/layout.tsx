"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen ">
			<Sidebar children={children} />
		</div>
	);
}
