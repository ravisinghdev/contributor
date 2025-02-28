export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold text-red-500">Access Denied</h1>
			<p className="text-lg text-gray-600">
				You do not have permission to view this page.
			</p>
			<a href="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
				Go Home
			</a>
		</div>
	);
}
