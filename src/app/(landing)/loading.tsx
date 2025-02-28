import { Spinner } from "@heroui/spinner";

export default function Loading() {
	return (
		<div className="min-h-screen min-w-full flex items-center justify-center">
			<Spinner color="default" label="Loading..." />
		</div>
	);
}
