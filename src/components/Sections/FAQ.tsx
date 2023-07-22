import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "Who does Fountain of Love serve?",
		answer:
			"Fountain of Love serves individuals and communities who are most vulnerable and in need of essential resources. Our primary focus is on the homeless, widows, and orphans. We are dedicated to not only providing for their physical needs such as nourishment and clothing but also promoting their emotional and social growth.",
	},
	{
		question: "In which countries does Fountain of Love operate?",
		answer:
			"Fountain of Love operates in two primary regions: the United States and Nigeria. We aim to serve the vulnerable populations in these countries by providing them with essential resources and services. However, our vision is global, and we are constantly exploring opportunities to expand our reach and impact",
	},
	{
		question: "How can I get involved with Fountain of Love?",
		answer:
			"There are many ways you can get involved with Fountain of Love. You can volunteer your time and skills in our various programs and initiatives. You can also make a financial contribution to support our operations. We are always in need of items such as food, clothing, and other essential goods. Spreading the word about our work to your networks and communities can also make a huge impact.",
	},
	{
		question: "How does Fountain of Love use the donations it receives?",
		answer:
			"Fountain of Love uses the donations it receives to provide essential services and resources to those in need. This includes purchasing and distributing food, clothing, and other essential goods. Donations also support programs that aim to improve the emotional and social well-being of the individuals we serve. We operate with transparency and ensure that every donation is used effectively to make a meaningful difference in the lives of the people we serve.",
	},
	{
		question: "Can I donate items such as food, clothing, or other goods?",
		answer:
			"Yes, we gratefully accept donations of food, clothing, and other essential goods. These donations go directly towards supporting the homeless, widows, and orphans we serve. Please visit our Donate page on our website for specific information on what items we currently need and how to make a donation.",
	},
	// More questions...
];

export default function FAQ() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="text-2xl font-sans font-bold leading-10 tracking-tight text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						{faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-sans font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
													) : (
														<PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-2 pr-12">
											<p className="text-base font-sans leading-7 text-gray-600">{faq.answer}</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
