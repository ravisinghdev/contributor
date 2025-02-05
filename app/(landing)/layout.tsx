import { Suspense } from "react";
import Footer from "./components/Footer";
import { Navbar } from "./components/navbar";
import Loading from "./loading";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-full">
			<Navbar />
			<Suspense fallback={<Loading />}>
				<main>{children}</main>
			</Suspense>
			<Footer />
		</div>
	);
};

export default LandingPageLayout;
