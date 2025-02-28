"use client";

import { useState } from "react";

// Hero Ui Component
import { Accordion, AccordionItem } from "@heroui/accordion";

const faqs = [
	{
		question: "How do I contribute?",
		answer:
			"You can contribute by subscribing to our plans or making a one-time donation.",
	},
	{
		question: "Where is my money going?",
		answer:
			"All funds are used for community projects like infrastructure, safety, and events.",
	},
	{
		question: "Can I track my contributions?",
		answer:
			"Yes, you will get a detailed report on how your contributions are utilized.",
	},
];

export default function FAQ() {
	return (
		<section className="py-20 px-5">
			<h2 className="text-3xl font-bold mb-6 text-default-900 text-center">
				Frequently Asked Questions
			</h2>
			<div className="max-w-4xl mx-auto space-y-4">
				{faqs.map((faq, index) => (
					<Accordion key={index + 1} className="text-default-900">
						<AccordionItem
							key={index}
							title={faq.question}
							className="text-default-900"
						>
							<span className="ml-4">{faq.answer}</span>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</section>
	);
}
