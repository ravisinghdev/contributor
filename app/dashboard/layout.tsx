"use client";
import Sidebar from "./components/Sidebar";

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
