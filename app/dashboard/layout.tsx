"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import Navbar from "./components/Navbar";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/auth/login");
		} else if (session?.user.role !== "ADMIN") {
			router.push("/dashboard/restricted");
		}
	}, [status, session, router]);

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
