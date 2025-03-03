import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

const Page = () => {
	return (
		<div>
			<Hero />
			<h2 className="text-4xl text-center font-semibold text-default-900">
				Gallery Showcase
			</h2>
			<Gallery />
		</div>
	);
};

export default Page;
