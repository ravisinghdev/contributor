import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
	const { data: session } = useSession();

	return (
		<nav className="p-4 bg-default-50 flex justify-between items-center">
			<h1 className="text-xl font-bold">Dashboard</h1>
			<div className="flex gap-4">
				{session?.user.role === "ADMIN" && (
					<a href="/dashboard/users">Manage Users</a>
				)}
				<button
					onClick={() => signOut()}
					className="bg-red-500 text-white p-2 rounded"
				>
					Logout
				</button>
			</div>
		</nav>
	);
}
