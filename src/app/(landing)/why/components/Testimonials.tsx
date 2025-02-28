const testimonials = [
	{
		name: "Rahul Sharma",
		feedback:
			"This initiative has transformed our colony. I’m proud to be a contributor.",
	},
	{
		name: "Anita Verma",
		feedback: "Seeing my contributions being used for real change is amazing!",
	},
	{
		name: "Vikram Singh",
		feedback:
			"A great way to give back to the community while ensuring transparency.",
	},
];

export default function Testimonials() {
	return (
		<section className="py-20 px-5 text-center">
			<h2 className="text-3xl font-bold mb-6 text-default-900">
				What Our Contributors Say
			</h2>
			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="bg-default-50 p-6 rounded-lg shadow-md">
						<p className="text-default-700 italic">"{testimonial.feedback}"</p>
						<h3 className="text-lg font-semibold text-default-900 mt-4">
							- {testimonial.name}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}
