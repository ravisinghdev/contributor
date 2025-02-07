import { Suspense } from "react";
import Footer from "./components/Footer";
import { Navbar } from "./components/navbar";
import Loading from "./loading";
import ScrollToTop from "./components/ScrollToTop";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-full  scroll-smooth scrollbar-hide">
			<Navbar />
			<Suspense fallback={<Loading />}>
				<main>
					{children}
					<div className="flex space-x-2">
						<ScrollToTop />
					</div>
				</main>
			</Suspense>
			<Footer />
		</div>
	);
};

export default LandingPageLayout;
