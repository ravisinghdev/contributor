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
		console.log(session?.user);
		if (status === "unauthenticated") {
			router.push("/auth/login");
		} else if (status === "authenticated") {
			if (session?.user.role === "admin") {
				router.push("/dashboard/admin");
			} else {
				router.push("/dashboard/restricted");
			}
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
