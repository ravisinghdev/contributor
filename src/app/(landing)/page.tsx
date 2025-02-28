import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Updates from "./components/Updates";
import Gallery from "./components/Gallery";

const Page = () => {
	return (
		<div className="w-[100%] min-h-screen">
			<Hero />
			<Features />
			<Updates />
			<Gallery />
		</div>
	);
};

export default Page;
